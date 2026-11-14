# Portfolio content migration

Content source: `portfolio/sami.github.io`. Destination: this Academic Pages checkout.
No biography, project claims, qualifications, publications, or article bodies were invented.
The original portfolio checkout was left unchanged.

| Existing source | Destination |
| --- | --- |
| `src/data/person.js`, About and Hero sections | `_config.yml`, `_pages/about.md` |
| `src/data/projects.js` | Seven `_portfolio/*.md` detail pages and `/portfolio/` |
| `src/data/skills.js` | `_data/skills.yml`, `/skills/` |
| `src/data/achievements.js` | `_data/achievements.yml`, `/achievements/` |
| `src/data/publications.js` | `/publications/`; the source array is empty |
| `src/data/blog.js`, Blog section | `_data/blog.yml`, `/blog/`; all three remain “Coming Soon” |
| `cv.md` | `_pages/cv.md`, with source education/coursework and leadership entry added; unmodified download at `files/cv.md` |
| Contact section and form | `/contact/`, retaining the existing Formspree action |
| All files under `public/` | The same public paths under this site's root, copied byte for byte |

The source's Blog component was not mounted in `App.jsx`, but its existing data was retained on a separate Blog page. No dated posts or article bodies were created.

The source references `/resume.pdf`, `/certificates/my-certificate.pdf`, and three blog images that do not exist in its public directory. These missing files were not linked. The CV uses the available Markdown download. The existing Grand Auto Prix certificate image is linked.

Example URLs (`https://blog.example.com` and `https://credential-provider.example/verify/..`) were not published. Commented-out example publications, workshops, and certifications were not treated as personal records.

The structured source and CV differ in some spelling, project descriptions, and technology lists. Each was preserved in its respective destination. The LinkedIn address from `person.js` and `cv.md` is used consistently; the old footer's alternate LinkedIn address was not used. The existing `www.fiboxsami.me` CV link was given an HTTPS scheme so it does not resolve as a local path. The new site URL is `https://phosgene67.github.io`; no custom domain was configured.

Template sample collections, demo pages, draft, author records, paper PDFs, slide PDFs, and BibTeX file were removed. Development generators and talk-map sample files are excluded from the published site. Template layouts, theme code, and license attribution are retained.

## Validation

Content and link verification is recorded in `local/verify-migration.mjs` (checkout-local, ignored by Git). It compares migrated data with the original source, checks all copied asset bytes, validates YAML/front matter, and checks local destinations.

Result: passed for 17 content pages (including seven project pages), five skill categories, three achievements, three coming-soon articles, all 17 source public files, the original CV download, and 38 local destinations. All migrated descriptions, statuses, technology lists, skill text, achievement text, biography paragraphs, education data, and original CV lines were checked against the source. No active publications were found or created.

A full Jekyll build was unavailable on this Windows machine: Ruby/Bundler/Jekyll were not on PATH, and the default Ubuntu and Ubuntu-22.04 WSL registrations pointed to missing virtual disks. The existing GitHub Pages build workflow remains available for Jekyll validation after a push. No commit, push, or deployment was performed during migration.
