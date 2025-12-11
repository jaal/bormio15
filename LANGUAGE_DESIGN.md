# Multilingual Design for Bormio15.com

## Overview

This document describes the multilingual architecture implemented for bormio15.com, supporting Polish (default) and English languages.

## Architecture

### 1. Language Configuration

**File:** `_config.yml`

```yaml
languages: ["pl", "en"]
default_lang: "pl"
exclude_from_localization: ["assets", "css", "js", "images"]
```

### 2. Translation Data

**File:** `_data/translations.yml`

Contains translations for UI elements and navigation labels for both languages:
- Site titles
- Language names and codes
- Navigation menu items

### 3. Page Language Metadata

Each page includes language metadata in the front matter:

```yaml
---
layout: page
title: Page Title
permalink: /page-url/
lang: pl              # Language code
slug: page-slug       # Unique slug for matching translations
description: "..."
---
```

- `lang`: Language code (pl or en)
- `slug`: Common identifier across language versions (e.g., "dolni-morava")

### 4. Language Switcher Component

**File:** `_includes/language-switcher.html`

#### Features:
- Dropdown menu with language options
- Globe icon with current language code (PL/EN)
- Automatic linking to translated versions of the same page
- Fallback to home page if translation doesn't exist
- Accessible design (ARIA labels, keyboard navigation)
- Mobile-responsive
- Click outside to close
- Escape key to close

#### Design Elements:
- **Toggle Button**: Shows globe icon + language code + chevron
- **Dropdown Menu**: Lists all available languages
- **Active State**: Checkmark for current language
- **Hover Effects**: Visual feedback on hover
- **Transitions**: Smooth animations

### 5. Navigation Integration

**File:** `_includes/navigation.html`

- Filters navigation items based on current page language
- Shows pages matching current language or with no language set
- Language switcher positioned at bottom of sidebar navigation
- Visual separator line above language switcher

## File Structure

```
bormio15.com/
├── _config.yml                    # Language configuration
├── _data/
│   └── translations.yml           # UI translations
├── _includes/
│   ├── language-switcher.html     # Language switcher component
│   └── navigation.html            # Updated navigation
├── dolni-morava.md               # Polish version
├── dolni-morava-en.md            # English version
└── LANGUAGE_DESIGN.md            # This document
```

## Creating Multilingual Pages

### Step 1: Create Polish Version (Default)

```yaml
---
layout: page
title: Dolní Morava
permalink: /dolni-morava/
lang: pl
slug: dolni-morava
description: "Polish description..."
---

Polish content here...
```

### Step 2: Create English Version

```yaml
---
layout: page
title: Dolní Morava
permalink: /en/dolni-morava/
lang: en
slug: dolni-morava
description: "English description..."
---

English content here...
```

**Important:**
- Use the same `slug` value in both versions
- English permalinks should start with `/en/`
- Polish (default) permalinks don't need language prefix

### Step 3: Add to Navigation (if needed)

Update `_data/theme.yml` if the page should appear in navigation:

```yaml
navigation_pages:
  - dolni-morava.md        # Polish version only
  - dolni-morava-en.md     # Or both versions
```

## Translation Workflow

1. **Create/Update Polish Page**
   - Add content in Polish
   - Include `lang: pl` and `slug: unique-name`

2. **Create English Translation**
   - Copy Polish version
   - Translate content to English
   - Update `lang: en`
   - Update `permalink: /en/...`
   - Keep same `slug` value

3. **Update Translations Data**
   - Add any new UI strings to `_data/translations.yml`

## Language Switcher Behavior

### On a Translated Page:
- Displays all available languages
- Links directly to the translated version
- Shows checkmark on current language

### On a Page Without Translation:
- Displays all available languages
- Links to home page in selected language
- User can navigate from there

### User Interactions:
- Click toggle button to open dropdown
- Click language option to switch
- Click outside to close
- Press Escape to close
- Keyboard navigation supported

## Visual Design

### Color Scheme:
- **Background**: Light gray (#f5f5f5)
- **Border**: Light gray (#ddd)
- **Hover**: Darker gray (#e8e8e8)
- **Active State**: Light blue (#e6f2ff)
- **Active Text**: Blue (#0066cc)

### Typography:
- **Font Size**: 14px (body), 13px (lang code)
- **Font Weight**: 500 (default), 600 (codes & active)

### Spacing:
- **Button Padding**: 8px 12px
- **Dropdown Item Padding**: 12px 16px
- **Dropdown Gap**: 12px between elements

### Icons:
- Globe icon (language indicator)
- Chevron down (dropdown indicator, rotates when open)
- Checkmark (active language indicator)

## Responsive Design

### Mobile (<768px):
- Dropdown aligned to left instead of right
- All other functionality remains the same

## Accessibility Features

1. **ARIA Labels**:
   - `aria-label="Select language"` on toggle button
   - `aria-haspopup="true"` indicates dropdown
   - `aria-expanded` tracks dropdown state
   - `aria-current="page"` on active language
   - `role="menu"` and `role="menuitem"` for dropdown

2. **Keyboard Support**:
   - Escape key closes dropdown
   - Focus returns to toggle button after closing

3. **Visual Indicators**:
   - Focus outline on interactive elements
   - Clear active state
   - Hover feedback

## SEO Considerations

1. **Language in HTML Tag**:
   ```html
   <html lang="{{ page.lang | default: site.lang }}">
   ```

2. **Separate URLs**:
   - Polish: `/dolni-morava/`
   - English: `/en/dolni-morava/`

3. **Page Descriptions**:
   - Unique meta descriptions per language

## Future Enhancements

### Potential Additions:
1. **More Languages**: Add German, Czech, etc.
2. **Automatic Detection**: Browser language detection
3. **Language Preference**: Cookie/localStorage to remember choice
4. **hreflang Tags**: For better SEO
5. **Sitemap**: Language-aware sitemap generation
6. **Content Sync**: Tools to track translation status

### Implementation Notes:
- Keep `slug` consistent across all language versions
- Add new languages to `_config.yml` and `_data/translations.yml`
- Follow the `/[lang]/[slug]/` URL pattern for non-default languages

## Testing Checklist

- [ ] Language switcher appears in navigation
- [ ] Dropdown opens/closes correctly
- [ ] Current language is highlighted
- [ ] Switching languages navigates to correct page
- [ ] Pages without translations fall back to home page
- [ ] Mobile view works correctly
- [ ] Keyboard navigation works
- [ ] Accessibility features work (screen readers)
- [ ] Visual styling matches design
- [ ] Both language versions of Dolní Morava page display correctly

## Maintenance

### Adding a New Language:

1. Update `_config.yml`:
   ```yaml
   languages: ["pl", "en", "de"]
   ```

2. Add translations to `_data/translations.yml`:
   ```yaml
   de:
     site_title: "Apartment Bormio 15 - Czarna Góra"
     language_name: "Deutsch"
     language_code: "de"
     nav: { ... }
   ```

3. Create translated pages with appropriate front matter

### Updating Existing Translations:

1. Edit content in the language-specific file
2. Keep `slug` values synchronized
3. Update `_data/translations.yml` if UI strings changed

## Support

For issues or questions about the multilingual system:
- Check this document first
- Review Jekyll liquid template documentation
- Test locally before deploying

---

**Last Updated**: December 2024
**Status**: Implemented and Ready for Testing
