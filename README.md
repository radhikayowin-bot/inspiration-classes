# Inspiritation Classes, Bareilly UP

Full Jekyll website for Inspiritation Classes, Bareilly UP, founded by Er. Farman Malik. The site is designed for Cloudflare Pages deployment via GitHub.

The frontend uses Tailwind CSS CDN, Font Awesome CDN, Google Fonts, Liquid data loops, and static HTML forms ready for later integration.

## Run Locally

```bash
bundle install
bundle exec jekyll serve
```

Open the local URL shown by Jekyll, usually `http://127.0.0.1:4000`.

## Push to GitHub

```bash
git init
git add .
git commit -m "Create Jekyll coaching institute website"
git branch -M main
git remote add origin https://github.com/your-username/your-repository.git
git push -u origin main
```

If this project already has a Git repository, skip `git init` and only add, commit, and push your changes.

## Deploy on Cloudflare Pages

1. Sign in to Cloudflare and open Pages.
2. Select **Create a project** and connect your GitHub repository.
3. Choose the repository for this website.
4. Set **Framework preset** to `Jekyll`.
5. Set **Build command** to:

```bash
bundle exec jekyll build
```

6. Set **Output directory** to:

```bash
_site
```

7. Save and deploy.

## Project Structure

```text
_config.yml
index.html
about.md
courses.md
neet.md
jee-main-advanced.md
cet.md
boards.md
announcements.md
blog.md
gallery.md
founder.md
registration.md
enrollment.md
contact.md
_layouts/default.html
_includes/header.html
_includes/footer.html
_includes/course-card.html
_includes/announcement-card.html
_includes/home-tailwind.html
_sass/_base.scss
assets/css/style.scss
assets/js/main.js
_data/courses.yml
_data/announcements.yml
_data/blogs.yml
_data/gallery.yml
```
