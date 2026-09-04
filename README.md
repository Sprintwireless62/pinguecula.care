# Pinguecula: patient information website

A five-page, static patient-information website about pinguecula, a benign
sun-related growth on the white of the eye. Written in plain language for
patients in Victoria, Australia, and supported by clinical guidelines and
peer-reviewed research. No framework and no server: it deploys as static files.

Published by Tasha Tahir | Deakin University Optometry student © 2026.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home: aim and purpose, urgent-advice access, quick links, prevalence |
| `about.html` | The condition: what it is, causes, symptoms, course, and pterygium comparison |
| `managing.html` | Managing it: self-care, treatment, prevention, everyday life, care pathway |
| `care-team.html` | Your care team: roles, scope of practice, cultural safety, FAQs |
| `contact.html` | Contact and help: enquiry form, support services, Vancouver references |

## Other files

| File | Purpose |
|------|---------|
| `style.css` | Shared styles (design tokens, components) |
| `script.js` | Mobile menu, active-nav highlighting, client-side form validation |
| `logo.png` | Logo and favicon, kept at the repository root |
| `vercel.json` | Static config and security headers |

## Deploying to Vercel

The site is already connected to Vercel. To publish updates, replace the files
in the connected GitHub repository and Vercel redeploys automatically.

**Option A: GitHub web upload (no command line)**

1. Open the repository on GitHub.
2. Choose Add file, then Upload files.
3. Drag in every file here (`index.html`, `about.html`, `managing.html`,
   `care-team.html`, `contact.html`, `style.css`, `script.js`, `logo.png`,
   `vercel.json`, `README.md`), keeping `logo.png` at the repository root.
4. Commit to the `main` branch. Vercel builds and deploys automatically.

**Option B: Git command line**

```bash
git add .
git commit -m "Update site: clinical redesign, full citations"
git push origin main
```

Vercel deploys on push to `main`. No build step or environment variables are
needed, because it is a static site. Any old `assets/` folder in the repository
can be deleted, since the logo now lives at the root as `logo.png`.

## A note on content

This is general information, not a substitute for a personal eye examination.
Reference details such as page numbers should be checked against the original
sources before the work is submitted for assessment.
