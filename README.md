# Golden WoodStone — Editable Website

## October 2026 website update

This version contains the refined Golden WoodStone homepage, supplied project photos and logo, editable portfolio, and the Formspree-connected project inquiry form.

### Form endpoint

Formspree form endpoint: `https://formspree.io/f/myekqpyy` (the form ID shown in the business owner's Formspree Integration screenshot).

The contact form on `/contact/` captures name, phone number, email, project type and project description and sends a `POST` request to Formspree. The browser only shows our branded thank-you page if Formspree's endpoint returns a successful HTTP status. Errors retain the visitor's entries and display phone/email contact alternatives.

**Before officially connecting goldenwoodstone.ca:** Submit one test through the Pages preview, then confirm its actual details appear in the Formspree **Submissions** dashboard and in `goldenwoodstone@gmail.com`. Check email notification settings and spam folder. A successful local build does NOT guarantee message delivery. The notification recipient must be configured/verified in Formspree.

Do not reconnect to FormSubmit: it has been removed from this version.

### Upload this update to GitHub

1. Unzip the archive on the Mac.
2. Open the extracted folder, then select everything **inside** it (not the outer folder). On a Mac, Command+Shift+. displays hidden files, including `.pages.yml`.
3. In the existing `goldenwoodstone/Golden-WoodStone-Website` repository, choose **Add file → Upload files**.
4. Drag the internal items, including `content/`, `public/`, `build.mjs`, `package.json`, `.pages.yml`, and `README.md` into the upload area. Commit directly to `main` when paths look correct.
5. Cloudflare Pages should automatically rebuild. Visit `https://golden-woodstone-website.pages.dev/contact/` to test once.
6. Existing files that are not in this package are not automatically deleted by GitHub's web uploader; review any outdated files separately if needed.

### Cloudflare Pages settings

- Framework preset: None
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave empty/default

This is a preview site with `allow_indexing: false` in `content/site.json`, deliberately telling search engines not to index the Pages preview.

### Portfolio updates

The `content/projects/` folder holds one JSON file per project. `public/assets/images/` holds website photos. `.pages.yml` is the Pages CMS configuration for editing the portfolio through GitHub. See `https://pagescms.org/` for setup.

After verifying the contact form, connect `goldenwoodstone.ca` through Cloudflare Pages with care not to disturb existing email DNS/MX records; then change `allow_indexing` to `true` and submit the sitemap in Google Search Console.

No guarantees about insurance, licensing, warranty, review count, or other unverified facts should be added.
