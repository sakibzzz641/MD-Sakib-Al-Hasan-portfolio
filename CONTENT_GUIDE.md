# Content Management & Maintenance Guide

This document explains how to update the data, add new machine learning projects, upload certificates, and modify contact details in this portfolio.

---

## 1. Centralized Data Architecture

All content is maintained in `src/data/`:

| File | Purpose |
| :--- | :--- |
| `src/data/profile.ts` | Name, title, headline, location, email, phone, CV download path |
| `src/data/projects.ts` | All project cards, metrics, case studies, images, and file resources |
| `src/data/skills.ts` | Technical skills organized by category |
| `src/data/certifications.ts` | Verified certificates, scores, and credential links |
| `src/data/experience.ts` | Professional roles, responsibilities, and transferable skills |
| `src/data/education.ts` | Academic degrees, GPAs, institutions, and dates |
| `src/data/socialLinks.ts` | LinkedIn, GitHub, Facebook, and future profile URLs |
| `src/data/coursework.ts` | Coursework syllabus modules and topic lists |
| `src/data/workflow.ts` | The 8-stage "From Raw Data to Insight" pipeline steps |

---

## 2. How to Add a New Project

1. Open `src/data/projects.ts`.
2. Append a new object to the `projectsData` array.

```typescript
{
  id: "stock-price-forecasting",
  slug: "stock-price-forecasting-lstm",
  title: "Time Series Forecasting with LSTM",
  category: "Machine Learning", // 'Unsupervised Machine Learning' | 'Classification' | 'Data Analysis' | 'EDA' | 'Machine Learning'
  featured: false,               // set to true to display in top banner showcase
  date: "2026",
  status: "Completed",           // 'Completed' | 'In Progress' | 'Planned'
  shortDescription: "Modeled daily stock volatility using recurrent LSTM neural networks in PyTorch.",
  description: "Detailed breakdown of preprocessing, windowing, and backtesting...",
  technologies: ["Python", "PyTorch", "Pandas", "Matplotlib"],
  
  // External resource links (leave empty if not available; buttons hide automatically)
  githubUrl: "https://github.com/sakibzzz641/stock-lstm",
  liveUrl: "",          // e.g., Streamlit or Hugging Face Space URL
  notebookUrl: "",      // e.g., Kaggle or Colab link
  datasetUrl: "",       // e.g., Kaggle dataset URL
  documentationUrl: "",
  videoUrl: "",         // e.g., YouTube demo link
  presentationUrl: "",

  // Key metrics shown on card
  metrics: [
    { label: "RMSE", value: "0.042", description: "Test set root mean squared error" },
    { label: "Horizon", value: "30 Days", description: "Forecast window" }
  ],

  // Image Gallery (optional - leaves empty for automatic category-based SVG placeholder)
  images: [
    {
      src: "/images/projects/stock-forecast/loss-curve.png",
      alt: "LSTM Training Loss vs Epochs",
      caption: "Training vs Validation Loss across 100 epochs",
      type: "chart"
    }
  ],

  // Attached files (optional)
  files: [
    {
      name: "Stock_Forecasting_Notebook.ipynb",
      type: "IPYNB",
      description: "Jupyter notebook with EDA and PyTorch training loop",
      url: "https://github.com/sakibzzz641/stock-lstm",
      isExternal: true
    }
  ],

  tags: ["Time Series", "LSTM", "Deep Learning", "PyTorch"]
}
```

---

## 3. How to Add Project Images & Screenshots

1. Save your screenshot, chart, or architecture diagram into:
   ```text
   public/images/projects/<project-name>/your-image.png
   ```
2. Reference the image in the project's `images` array in `src/data/projects.ts`:
   ```typescript
   images: [
     {
       src: "/images/projects/my-project/evaluation-plot.png",
       alt: "Confusion Matrix and ROC Curve",
       caption: "Evaluation on held-out test dataset",
       type: "chart" // 'screenshot' | 'chart' | 'diagram' | 'eda' | 'architecture'
     }
   ]
   ```
3. The image will automatically appear in the project card thumbnail and the interactive **Lightbox gallery** with zoom and keyboard navigation.

---

## 4. How to Add a Certificate

1. Open `src/data/certifications.ts`.
2. Add an entry to `certificationsData`:
   ```typescript
   {
     id: "deep-learning-specialization",
     title: "Deep Learning Specialization",
     issuer: "Coursera / DeepLearning.AI",
     issuerBadge: "Verified",
     date: "November 2026",
     credentialId: "ABC123XYZ",
     credentialUrl: "https://coursera.org/verify/ABC123XYZ", // link to public verification page
     certificateImage: "", // optional path in public/images/certificates/
     certificatePdf: "",   // optional path in public/documents/certificates/
     grade: "100%",
     description: "Mastered neural network foundations, CNNs, sequence models and optimization.",
     skillsCovered: ["Neural Networks", "PyTorch", "Deep Learning", "Backprop"]
   }
   ```
3. If `credentialUrl` is left empty, the UI displays a clean *"Physical Credential on File"* badge without rendering a broken button.

---

## 5. How to Update Your CV / Resume

The portfolio is configured with a unified CV download path:

```text
public/documents/Sakib_Al_Hasan_Data_Science_CV.pdf
```

To update your CV:
1. Export your new resume as a PDF.
2. Rename the file to `Sakib_Al_Hasan_Data_Science_CV.pdf`.
3. Overwrite the file in `public/documents/Sakib_Al_Hasan_Data_Science_CV.pdf`.
4. All "Download CV" buttons across the Navbar, Hero, Recruiter Snapshot, and About section will immediately serve the updated PDF.

---

## 6. How to Update Contact & Social Links

Open `src/data/socialLinks.ts`:
```typescript
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sakibzzz641/",
  github: "https://github.com/sakibzzz641",
  facebook: "https://www.facebook.com/sakibzzz641",
  email: "mailto:sakibzzz641@gmail.com",
  phone: "tel:+8801909915855",
  rawEmail: "sakibzzz641@gmail.com",
  rawPhone: "+880 1909-915855",

  // Add future links here when ready:
  kaggle: "https://kaggle.com/...",
  huggingFace: "https://huggingface.co/...",
  youtube: ""
};
```

---

## 7. Media & Asset Directory Organization

```text
public/
├── documents/
│   ├── Sakib_Al_Hasan_Data_Science_CV.pdf
│   └── certificates/          # optional place for certificate PDFs
├── images/
│   ├── projects/
│   │   ├── customer-segmentation/
│   │   └── <new-project>/
│   └── certificates/          # optional place for certificate screenshots
└── files/                     # optional datasets (.csv, .xlsx) or archives (.zip)
```
