# MD. Sakib Al Hasan — Personal Data Science Portfolio

> **Junior Data Scientist | Data Analyst**  
> Python · SQL · Data Analysis · Machine Learning · Data Visualization · Mathematics

A production-ready, data-driven personal portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS (v4)**, and **Vite**. Designed with an authentic Data Intelligence aesthetic, a centralized content layer, and zero lock-in for independent deployment on Lovable, GitHub Pages, Vercel, Netlify, or standard static hosts.

---

## 🚀 Key Features

* **30–60s Recruiter Snapshot:** Instant modal summarizing core stack, academic trajectory, verified credentials, and 1-click contact actions.
* **Authentic Data Science Visualization:** Interactive PCA and residual scatter visualizers featuring mathematical notation ($\sigma, \mu, R^2, \mathbb{E}[X]$) rather than generic AI graphics.
* **Deep-Dive Project Case Studies:** Interactive 10-stage methodology modal breaking down Problem Statement, Dataset, Missing Value Cleaning, Log Transforms, StandardScaler, PCA, K-Means/Hierarchical/DBSCAN clustering comparison, and actionable business takeaways.
* **Centralized Data Layer:** Complete separation of data and UI (`src/data/`). Add new projects, images, certificates, or files without modifying component code.
* **Prioritized Resource Buttons:** Automatically renders only valid external resources in order: GitHub → Live Demo → Case Study → Notebook → Dataset → Documentation → Presentation → Video.
* **Multi-Format Project Resources:** Native support for Jupyter Notebooks (`.ipynb`), CSV/Excel datasets, PDFs, and repository links.
* **Interactive Lightbox Image Gallery:** Keyboard accessible (`←`, `→`, `Esc`), captions, and thumbnail zooms for EDA and model evaluation charts.
* **Dark & Light Mode:** Default dark mode with deep navy & cyan accents, plus smooth toggle for high-contrast light mode.
* **SEO & Social Cards:** Comprehensive meta tags, OpenGraph profile metadata, and Schema.org `Person` JSON-LD structured data.

---

## 🛠️ Tech Stack

* **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vite.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Typography:** Inter (Primary), JetBrains Mono (Technical)

---

## 📂 Repository Structure

```text
portfolio/
├── public/
│   ├── documents/
│   │   └── Sakib_Al_Hasan_Data_Science_CV.pdf
│   ├── images/
│   │   └── projects/
│   │       ├── customer-segmentation/
│   │       │   ├── pca-variance.svg
│   │       │   ├── silhouette-analysis.svg
│   │       │   └── cluster-scatter.svg
│   │       └── placeholders/
│   │           ├── classification-placeholder.svg
│   │           ├── data-analysis-placeholder.svg
│   │           └── default-ml-placeholder.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroMetrics.tsx
│   │   ├── About.tsx
│   │   ├── MathematicsDataScience.tsx
│   │   ├── Workflow.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── CaseStudyModal.tsx
│   │   ├── ImageGalleryLightbox.tsx
│   │   ├── ProjectFiles.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── RecruiterSnapshotModal.tsx
│   ├── data/
│   │   ├── profile.ts            # Personal info, metrics & CV paths
│   │   ├── projects.ts           # Centralized projects, case studies & resources
│   │   ├── skills.ts             # Technical skills by category
│   │   ├── certifications.ts     # Verified certificates & assessments
│   │   ├── experience.ts         # Work & teaching experience
│   │   ├── education.ts          # Academic degrees & coursework
│   │   ├── socialLinks.ts        # Social & profile URLs
│   │   ├── coursework.ts         # Completed coursework modules
│   │   └── workflow.ts           # 8-step data science lifecycle
│   ├── hooks/
│   │   └── useTheme.ts           # Dark/Light mode state
│   ├── types/
│   │   └── index.ts              # TypeScript schemas & interfaces
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── CONTENT_GUIDE.md              # Detailed guide for updating content
├── LICENSE
├── package.json
└── README.md
```

---

## 💻 Local Development

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates production assets in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment Guide

This project is 100% client-side compatible and does not require a proprietary backend.

### Deploy to Vercel
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://netlify.com/).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy site.

### Deploy to GitHub Pages
1. In `vite.config.ts`, if deploying to a repository subpath (e.g., `username.github.io/portfolio/`), set `base: '/portfolio/'`.
2. Run `npm run build`.
3. Deploy the contents of the `dist/` folder via GitHub Actions or the `gh-pages` npm package.

### Deploy via Lovable
1. Sync repository to your GitHub account directly from the Lovable interface.
2. Changes made in Lovable commit directly to your GitHub repository and trigger auto-deployments.

---

## 📝 How to Update Content

All content is managed through files in `src/data/`. Refer to [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for full instructions.

### Adding a New Project
Open `src/data/projects.ts` and append an object to `projectsData`:
```typescript
{
  id: "fraud-detection-model",
  slug: "credit-card-fraud-detection",
  title: "Credit Card Fraud Detection using XGBoost",
  category: "Classification",
  featured: false,
  date: "2026",
  status: "Completed",
  shortDescription: "Handled severe class imbalance with SMOTE and trained an XGBoost model.",
  description: "Detailed description of methodology and evaluation...",
  technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
  githubUrl: "https://github.com/sakibzzz641/fraud-detection",
  liveUrl: "", // leave empty if not available; button will hide automatically
  images: [],  // add screenshots or leave empty for automatic technical placeholder
  files: [],
  metrics: [
    { label: "Recall", value: "98.2%" }
  ],
  tags: ["XGBoost", "Classification", "SMOTE"]
}
```

### Updating Your CV
Place your new CV PDF in:
```text
public/documents/Sakib_Al_Hasan_Data_Science_CV.pdf
```
The "Download CV" buttons across the navbar, hero, recruiter snapshot, and contact sections will update automatically.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
