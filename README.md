# Golden WoodStone — Editable Website

## Revised site — October 20, 2026

This revision replaces the overlapping homepage photo collage with one genuine Himalayan salt cave image, restores the supplied Golden WoodStone logo, shortens repeated sections, improves the mobile layout and avoids mixing photos from distinct bathroom projects.

## Current status

This is a website **preview** with real Golden WoodStone photos and an editable portfolio.
The preview is deliberately **noindex** to avoid indexing a temporary second site.
The contact form now submits through FormSubmit (external form processing). Before launch, submit a real test message from the published /contact/ page; the owner MUST confirm the activation email received at goldenwoodstone@gmail.com. Then send another test and verify it arrives in the inbox. A successful static build cannot verify email delivery.

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

- Activate FormSubmit: on the live /contact/ page, submit one test request, open goldenwoodstone@gmail.com, and click the FormSubmit activation link (check Spam). Submit a SECOND test and confirm it reaches the inbox. The default reCAPTCHA / honeypot deter spam. Do not accept leads as working until this end-to-end test succeeds.
- Check website on both iPhone and desktop.
- Connect `goldenwoodstone.ca` with safe DNS migration; retain original GoDaddy domain registration.
- Turn Google indexing ON only once the primary domain is set, then register sitemap in Google Search Console.
- Confirm legal/marketing details: warranty, licensing, insurance, reviews, service area — none claimed without verification.

## Local build

Requires Node.js 18 or later. Run `npm run build`. The published static site is in the `dist` folder.

This design uses only photos supplied by Golden WoodStone, not stock photos. No website hosting subscription is required under normal Cloudflare Pages free-tier limits.

## How to replace your existing GitHub version

1. Download and unzip this archive on your Mac.
2. Open the extracted folder. Press Command + Shift + . to display the hidden `.pages.yml` editing configuration.
3. Open the existing **Golden-WoodStone-Website** repository on GitHub, select **Add file → Upload files**.
4. Drag **everything inside** the extracted folder into the GitHub box, including the `content` and `public` folders, and commit changes. Do not upload the ZIP itself and do not drag the outer folder.
5. Cloudflare Pages should start a new build automatically after the commit. Review the new Pages URL on phone and laptop.

Do not connect goldenwoodstone.ca or enable Google indexing until contact inquiries have been tested and domain settings have been reviewed.

## Contact form implementation

- Uses the documented free `formsubmit.co` HTML POST endpoint with name, phone, email, project type and details, not `mailto:`.
- Default FormSubmit reCAPTCHA is left on; a honeypot is included. There is a first-use email activation step.
- After the form is activated, successful submissions redirect to `/thank-you/` on the current host. If JavaScript is disabled, the service shows its default confirmation screen instead.
- The third-party service processes and retains submission data; inform customers of the service in the form. See https://formsubmit.co/documentation and https://formsubmit.co/help.
- A form POST cannot be fully tested from a local static preview: test on the Cloudflare `pages.dev` address after deploying and then again after custom-domain connection.
- In case submissions fail or land in Spam, visitors can call 226-504-0206 or use the email link.
