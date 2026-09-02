# Pinguecula — patient information website

A five-page, static patient-information site about **pinguecula** (a benign, sun-related
growth on the white of the eye), written for patients in Victoria, Australia.

Built with plain HTML, Tailwind CSS (via CDN) and a small vanilla-JS file. No build step,
no framework, no server — it deploys as static files.

## Pages
| File | Section |
|------|---------|
| `index.html` | Home — aim/purpose, urgent-advice access, quick links, prevalence |
| `about.html` | The condition — what it is, causes, symptoms, course, vs pterygium |
| `managing.html` | Managing it — self-care, treatment, prevention, everyday life, care pathway |
| `care-team.html` | Your care team — roles, scope of practice, cultural safety, FAQs |
| `contact.html` | Contact & help — enquiry form, support services, Vancouver references |
| `style.css` / `script.js` | Shared styles and behaviour |
| `assets/` | Logo and favicon |

## Deploy on Vercel

The GitHub repo is already connected to Vercel (project **pinguecula.care**,
preset **Other**, root directory **`./`**). Deployment is simply: get these files
into the repo's `main` branch, and Vercel builds automatically.

**Option A — GitHub web upload (no command line):**
1. Open the `Sprintwireless62/pinguecula.care` repo on GitHub.
2. Click **Add file → Upload files**.
3. Drag in every file here — `index.html`, `about.html`, `managing.html`,
   `care-team.html`, `contact.html`, `style.css`, `script.js`, `vercel.json`,
   `README.md`, and the whole `assets/` folder (keep the folder name `assets`).
4. Commit to `main`. Vercel will detect the push and deploy within a minute.

**Option B — Git command line:**
```bash
# from a local clone of the repo, with these files copied in at the root
git add .
git commit -m "Add pinguecula patient information site"
git push origin main
```

Then, on the Vercel import screen shown in your browser (preset **Other**,
root **`./`**), click **Deploy**. No build/output settings or environment
variables are needed — it's a static site.

## Notes
- Settings are intentionally minimal: `cleanUrls` is **off** so the internal
  `.html` links resolve without redirects.
- Nothing here requires a database, API keys or a backend. The contact form
  validates in the browser and shows a confirmation; wire it to a real endpoint
  (e.g. a form service) if you want messages delivered.
