<<<<<<< HEAD
# Lab Website Starter (Jekyll + YAML-driven)

This starter repo builds a clean, Stanford-academic-style lab website using **Jekyll** and **YAML data files**.
It is designed for easy editing by lab members (add people/pubs/projects/news via `_data/*.yml`).

## Quick start (local)

Prereqs: Ruby + Bundler installed.

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open: http://127.0.0.1:4000

## Deploy on GitHub Pages (recommended)

This repo includes a GitHub Actions workflow that:
- builds on push to `main`
- deploys to GitHub Pages

Steps:
1. Create a repo (public for free GitHub Pages).
2. Push this code.
3. GitHub → **Settings → Pages** → Source: **GitHub Actions**
4. After the Action finishes, visit your Pages URL.

## Edit content (no code)

- People: `_data/people.yml`
- Publications: `_data/publications.yml`
- Projects: `_data/projects.yml`
- News: `_data/news.yml`

Images:
- People headshots: `assets/img/people/`
- Project thumbnails: `assets/img/projects/`
- Favicon: `assets/img/lab/favicon.png` (replace placeholder)

## Pages

- Home: `index.md`
- People: `people/index.md`
- Publications: `publications/index.md`
- Projects: `projects/index.md`
- News: `news/index.md`
- Contact: `contact/index.md`
=======
# lab-website-test
testing new gps lab website
>>>>>>> e75658713857082f12c7729c7ab8dc8d8c2a4c6a
