# Sami Chowdhury's portfolio

Academic Pages portfolio populated from the existing `portfolio/sami.github.io` site. See [MIGRATION.md](MIGRATION.md) for source mappings and unavailable source files.

## Editing content

- Profile, sidebar, and canonical URL: `_config.yml`
- Biography and education: `_pages/about.md`
- Projects: `_portfolio/*.md`
- Skills: `_data/skills.yml`
- Achievements: `_data/achievements.yml`
- Coming-soon articles: `_data/blog.yml`
- CV page: `_pages/cv.md`; downloadable original: `files/cv.md`
- Contact form: `_pages/contact.html`
- Navigation: `_data/navigation.yml`
- Photos, project media, and certificates: `images/`, `assets/icons/`, `certificates/`

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
npm install
npm run build:js
bundle exec jekyll serve --url http://localhost:4000
```

Open `http://localhost:4000`. For a production build, run `bundle exec jekyll build`.

The existing `.github/workflows/jekyll.yml` workflow builds and deploys the site on pushes to `master`. GitHub Pages must be configured to use GitHub Actions in repository settings.

Based on [Academic Pages](https://github.com/academicpages/academicpages.github.io). The template's license is retained in `LICENSE`.
