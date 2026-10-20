# Golden WoodStone — Editable Website

## Current status

This is a website **preview** with real Golden WoodStone photos and an editable portfolio.
The preview is deliberately **noindex** to avoid indexing a temporary second site.
The estimate form creates an email draft, NOT an automatic online submission; replace with a tested form service before the final launch.

## Setup for easy editing

1. Create a free GitHub account and a **private** repository (e.g. `goldenwoodstone-website`).
2. Upload the **files inside this folder** to the repository root (not an enclosing folder). Keep the `.pages.yml` file.
3. In Cloudflare choose **Create application → Pages → Connect to Git**. Select the repo. This makes a **new** Pages project because your existing `goldenwoodstone` preview was a direct ZIP upload project. Do not delete or move the old one yet.
4. Set **Build command:** `npm run build`. **Output folder:** `dist`. Root directory blank/default. Deploy on the free plan.
5. After deployed, visit https://app.pagescms.org, sign in with the same GitHub account, authorize the repo, and open **Project Photos & Portfolio** to upload photos / add projects. Saving commits to GitHub and triggers Cloudflare's site update.
6. When the new site and quote form are tested, connect the GoDaddy domain to the new Pages project. Only after the domain points correctly, turn on `allow_indexing` in **Business Info & Homepage Text**. Check DNS and MX/email records first.

## What you can edit on your phone

- Upload a new photo to an existing project, change its title, move its order, unpublish it.
- Add a new project by creating an entry in **Project Photos & Portfolio**.
- Edit business phone/email and homepage introduction.

## What still needs work before official launch

- Replace the current email-draft quote form with a tested automatic email submission form (and spam protection), if desired.
- Check website on both iPhone and desktop.
- Connect `goldenwoodstone.ca` with safe DNS migration; retain original GoDaddy domain registration.
- Turn Google indexing ON only once the primary domain is set, then register sitemap in Google Search Console.
- Confirm legal/marketing details: warranty, licensing, insurance, reviews, service area — none claimed without verification.

## Local build

Requires Node.js 18 or later. Run `npm run build`. The published static site is in the `dist` folder.

This design uses only photos supplied by Golden WoodStone, not stock photos. No website hosting subscription is required under normal Cloudflare Pages free-tier limits.
