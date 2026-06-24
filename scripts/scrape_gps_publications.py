import re
from pathlib import Path
from urllib.parse import urljoin

import requests
import yaml
from bs4 import BeautifulSoup

URL = "https://gps.stanford.edu/all-gps-lab-published-documents"


def category_from_venue(text):
    t = (text or "").lower()

    if "dissertation" in t or "thesis" in t:
        return "theses"
    if "inside gnss" in t or "gps world" in t or "magazine" in t:
        return "magazine"
    if "book" in t or "chapter" in t or "springer" in t or "wiley" in t:
        return "books"
    if (
        "journal" in t
        or "navigation" in t
        or "ieee transactions" in t
        or "gps solutions" in t
    ):
        return "journal"

    return "conference"


def clean_text(text):
    return re.sub(r"\s+", " ", text or "").strip()


def main():
    response = requests.get(URL, timeout=20)
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")
    main_content = soup.find("main") or soup

    pubs = []
    current_year = None

    for el in main_content.find_all(["h2", "h3", "a"]):
        text = clean_text(el.get_text(" ", strip=True))

        # Track year headings
        if el.name in ["h2", "h3"]:
            match = re.match(r"^(20\d{2}|19\d{2}|1990 and Earlier)", text)
            if match:
                year_text = match.group(1)
                current_year = (
                    1990 if year_text == "1990 and Earlier" else int(year_text)
                )
            continue

        # Publication links
        if el.name != "a" or current_year is None:
            continue

        title = text
        href = el.get("href", "")

        if not title or title.lower() in ["back to top", "top"]:
            continue

        url = urljoin(URL, href) if href else ""

        parent = el.find_parent()
        parent_text = clean_text(parent.get_text(" ", strip=True)) if parent else ""

        next_sibling = parent.find_next_sibling() if parent else None
        next_text = (
            clean_text(next_sibling.get_text(" ", strip=True)) if next_sibling else ""
        )

        prev_sibling = parent.find_previous_sibling() if parent else None
        prev_text = (
            clean_text(prev_sibling.get_text(" ", strip=True)) if prev_sibling else ""
        )

        authors = prev_text if prev_text and len(prev_text) < 300 else ""
        venue = next_text or parent_text

        record = {
            "year": current_year,
            "category": category_from_venue(venue),
            "title": title,
            "authors": authors,
            "venue": venue,
            "url": url,
        }

        if current_year <= 1990:
            record["year_group"] = "1990 and Earlier"

        pubs.append(record)

    out = Path("_data/publications.yml")
    out.parent.mkdir(exist_ok=True)

    out.write_text(
        yaml.safe_dump(pubs, sort_keys=False, allow_unicode=True),
        encoding="utf-8",
    )

    print(f"Wrote {len(pubs)} publications to {out}")


if __name__ == "__main__":
    main()
