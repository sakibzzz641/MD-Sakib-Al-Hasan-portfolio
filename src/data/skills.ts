import { SkillCategory } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Programming & Data",
    description: "Core programming languages, computational libraries, and database query frameworks.",
    iconName: "Code2",
    skills: [
      { name: "Python", highlight: true, note: "Primary language for data manipulation, scripting & ML modeling" },
      { name: "Pandas", highlight: true, note: "DataFrame manipulation, aggregation, pivoting & time series" },
      { name: "NumPy", highlight: true, note: "Vectorized numerical computing & multi-dimensional array math" },
      { name: "SQL", highlight: true, note: "Relational queries, complex joins, aggregations & normalization" },
      { name: "Scikit-learn", highlight: true, note: "Preprocessing, pipelines, model tuning & evaluation" },
      { name: "XGBoost", highlight: false, note: "Gradient boosted decision trees for tabular prediction" }
    ]
  },
  {
    title: "Data Analysis & Statistics",
    description: "Systematic auditing, distribution profiling, and quantitative hypothesis testing.",
    iconName: "BarChart3",
    skills: [
      { name: "Data Cleaning", highlight: true, note: "Handling nulls, duplicates, anomalies & type coercion" },
      { name: "Exploratory Data Analysis (EDA)", highlight: true, note: "Univariate, bivariate & multivariate discovery" },
      { name: "Statistical Analysis", highlight: true, note: "Descriptive statistics, hypothesis testing & distributions" }
    ]
  },
  {
    title: "Machine Learning",
    description: "End-to-end algorithmic modeling, validation, and dimensionality reduction.",
    iconName: "Cpu",
    skills: [
      { name: "Regression", highlight: false, note: "Linear, Ridge, Lasso, and polynomial modeling" },
      { name: "Classification", highlight: true, note: "KNN, Logistic Regression, Decision Trees & Ensembles" },
      { name: "Clustering", highlight: true, note: "K-Means, Hierarchical (Agglomerative), and DBSCAN" },
      { name: "Feature Engineering", highlight: true, note: "Log-transforms, encoding, scaling, and feature interactions" },
      { name: "PCA", highlight: true, note: "Principal Component Analysis & dimensionality reduction" },
      { name: "Cross-Validation", highlight: true, note: "K-Fold, Stratified K-Fold & bias-variance checks" },
      { name: "Hyperparameter Tuning", highlight: false, note: "GridSearchCV and RandomizedSearchCV" },
      { name: "Model Evaluation", highlight: true, note: "Silhouette score, confusion matrix, ROC-AUC, precision/recall" }
    ]
  },
  {
    title: "Data Visualization",
    description: "Communicating quantitative insights through clean, publication-ready visual charts.",
    iconName: "PieChart",
    skills: [
      { name: "Matplotlib", highlight: true, note: "Publication-grade scientific charts, subplots & custom axes" },
      { name: "Seaborn", highlight: true, note: "Statistical distributions, correlation heatmaps & pairplots" },
      { name: "Plotly", highlight: false, note: "Interactive web visual charts & scatter exploration" },
      { name: "Dashboard Design", highlight: false, note: "Structured information hierarchy & KPI layout" },
      { name: "Visual Analytics", highlight: true, note: "Translating multi-dimensional data into business narratives" }
    ]
  },
  {
    title: "Tools & Ecosystem",
    description: "Modern developer workflow tools, version control, and data science environments.",
    iconName: "Terminal",
    skills: [
      { name: "Jupyter Notebook", highlight: true, note: "Interactive experimentation & reproducible research" },
      { name: "Git", highlight: true, note: "Version control, branching, committing & history tracking" },
      { name: "GitHub", highlight: true, note: "Remote repository hosting, issues & project collaboration" },
      { name: "AI-assisted Dev Tools", highlight: false, note: "Accelerating code review, documentation & debugging" }
    ]
  },
  {
    title: "Productivity & Office",
    description: "Structured spreadsheet calculations, documentation, and executive presentations.",
    iconName: "FileSpreadsheet",
    skills: [
      { name: "MS Excel", highlight: true, note: "VLOOKUP, Pivot Tables, Formulas & Tabular Organization" },
      { name: "MS Word", highlight: false, note: "Technical documentation, reporting & project briefs" },
      { name: "MS PowerPoint", highlight: false, note: "Data storytelling & executive presentation decks" },
      { name: "MS Access", highlight: false, note: "Relational database basics & form/query architecture" }
    ]
  }
];
