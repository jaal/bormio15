# Apartament Bormio 15 - Setup Guide

## Project Status ✅

- ✅ Jekyll site configured for Apartament Bormio 15
- ✅ All content pages created in Polish (6 pages)
- ✅ Navigation menu configured
- ✅ Contact information and booking details added
- ✅ Theme files ready (\_layouts, \_includes, \_sass, assets)

## Pages Created

1. **index.md** - Home page with apartment introduction
2. **apartament.md** - Detailed apartment specifications and amenities
3. **czarna-gora.md** - Location information and activities
4. **workation.md** - Remote work features and benefits
5. **faq.md** - Comprehensive FAQ (30+ questions)
6. **kontakt.md** - Contact form and booking information

## Quick Start

### Option 1: Using Docker (Recommended - No Ruby Setup Required)

```bash
docker run --rm -it -v "$PWD:/srv/jekyll" -p 4000:4000 jekyll/jekyll:latest bundle install && bundle exec jekyll serve
```

Then visit: http://localhost:4000

### Option 2: Local Ruby/Bundler Setup

**Prerequisites:**
- Ruby 3.1+ installed
- Xcode Command Line Tools (for macOS):
  ```bash
  xcode-select --install
  ```

**Steps:**

1. Install dependencies:
   ```bash
   bundle install
   ```

   If you encounter errors with `eventmachine`, try:
   ```bash
   # On macOS with Apple Silicon (M1/M2/M3)
   bundle config build.eventmachine --with-cppflags=-I$(brew --prefix openssl)/include
   bundle install
   ```

2. Start the development server:
   ```bash
   bundle exec jekyll serve
   ```

3. The site will be available at http://localhost:4000

**Troubleshooting:**
If `bundle install` fails with eventmachine errors, use Docker (Option 1) instead.

## Next Steps - To Complete the Site

### 1. Add Images
Create the following image folders and add photos:

```
assets/images/
├── apartament/      # Interior photos (living room, bedroom, kitchen, bathroom, balcony)
├── czarna-gora/     # Mountain views, ski slopes, summer scenery
├── lokalizacja/     # Local area, restaurants, facilities
└── logo.png         # Site logo (optional)
```

Update image references in the markdown files where you see comments like:
`*[Tutaj można dodać zdjęcia...]*`

### 2. Update Links
- Add real Google Maps link in [kontakt.md](kontakt.md)
- Add social media links if available
- Add booking platform links (Booking.com, Airbnb, etc.) if applicable

### 3. Test the Site
Use Docker to test without compilation issues:
```bash
docker run --rm -it -v "$PWD:/srv/jekyll" -p 4000:4000 jekyll/jekyll:latest bundle install && bundle exec jekyll serve
```

### 4. Deploy
Build and deploy the `_site/` folder to your hosting service:
```bash
bundle exec jekyll build
# Upload _site/ folder to your web host
```

## Customization

Key configuration files (already customized):

1. **\_config.yml** - ✅ Configured with Bormio 15 details
2. **\_data/theme.yml** - ✅ Navigation menu set up
3. **Content Pages** - ✅ All 6 pages created in Polish
4. **Assets** - ⚠️ Need to add images
5. **Layouts** - Using theme defaults (can be customized)
6. **Includes** - Using theme defaults (can be customized)

## File Structure

```
├── _config.yml          # Site configuration
├── _data/              # Data files (navigation, theme settings)
├── _includes/          # Reusable HTML components
├── _layouts/           # Page templates
├── _sass/              # SCSS stylesheets
├── assets/             # Images, CSS, JavaScript
├── docs/               # Documentation examples
├── example/            # Example content structure
└── index.md           # Home page
```

## Theme Features

- Responsive design
- Built-in search (Lunr.js or Algolia)
- SEO optimization
- Sitemap generation
- RSS feed
- Pagination support
- Social media integration

## Documentation

For more information, visit:

- Theme Documentation: https://github.com/mmistakes/jekyll-theme-basically-basic
- Jekyll Documentation: https://jekyllrb.com/

## Build & Deploy

To build the static site:

```bash
bundle exec jekyll build
```

The compiled site will be in the `_site/` directory, ready to deploy to any static hosting service.

---

**Setup completed:** December 2, 2025
