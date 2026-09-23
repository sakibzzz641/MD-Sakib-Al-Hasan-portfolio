import { WorkflowStep } from '../types';

export const workflowStepsData: WorkflowStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Clarify the core problem, establish business objectives, and define measurable evaluation criteria before touching data.",
    actions: [
      "Define business KPIs and project objectives",
      "Translate business questions into analytical formulation",
      "Audit data provenance, ethical boundaries, and privacy constraints"
    ],
    tools: ["Problem Framing", "Requirements Gathering", "Domain Research"]
  },
  {
    step: "02",
    title: "Clean",
    description: "Systematically sanitize raw inputs, reconcile missing values, deduplicate records, and correct structural data issues.",
    actions: [
      "Handle missing values via statistical or domain imputation",
      "Detect and treat invalid data types or corrupted encodings",
      "Remove artificial duplicates and verify index integrity"
    ],
    tools: ["Pandas", "NumPy", "Data Wrangling", "Regular Expressions"]
  },
  {
    step: "03",
    title: "Explore",
    description: "Perform exploratory data analysis (EDA) to uncover distributions, skewness, outliers, and underlying correlations.",
    actions: [
      "Compute univariate summary statistics (skew, kurtosis, IQR)",
      "Analyze bivariate correlations to identify predictive signals",
      "Examine class balances and target distribution spreads"
    ],
    tools: ["Matplotlib", "Seaborn", "Statistical Summaries", "Heatmaps"]
  },
  {
    step: "04",
    title: "Engineer",
    description: "Transform raw variables into high-signal numerical representations optimized for machine learning algorithms.",
    actions: [
      "Apply log transformations to heavily skewed attributes",
      "Standardize features with StandardScaler or MinMaxScaler",
      "Perform PCA to reduce collinearity while retaining 90-95%+ variance"
    ],
    tools: ["Scikit-learn Preprocessing", "PCA", "Log Transforms", "Encoding"]
  },
  {
    step: "05",
    title: "Model",
    description: "Select, configure, and train candidate algorithms suited to the problem structure and dataset characteristics.",
    actions: [
      "Benchmark multiple models (e.g. K-Means, Hierarchical, DBSCAN)",
      "Optimize hyperparameters (k-clusters, eps, distance metrics)",
      "Implement robust cross-validation partitions"
    ],
    tools: ["Scikit-learn", "K-Means", "DBSCAN", "KNN", "Trees"]
  },
  {
    step: "06",
    title: "Evaluate",
    description: "Rigorously validate model quality using statistical metrics rather than assumptions.",
    actions: [
      "Evaluate Silhouette coefficients and Elbow inertia curves",
      "Audit confusion matrices, precision, recall, and ROC-AUC",
      "Assess cluster stability, separation, and cohesion"
    ],
    tools: ["Silhouette Analysis", "Confusion Matrices", "Cross-Validation"]
  },
  {
    step: "07",
    title: "Visualize",
    description: "Render complex high-dimensional modeling outputs into intuitive, clear graphical representations.",
    actions: [
      "Project high-dimensional clusters onto 2D/3D PCA components",
      "Plot feature importance rankings and cluster profile radars",
      "Construct actionable dashboards and decision charts"
    ],
    tools: ["Matplotlib", "Seaborn", "Plotly", "PCA Projections"]
  },
  {
    step: "08",
    title: "Communicate",
    description: "Translate algorithmic results into clear, actionable business strategies and executive takeaways.",
    actions: [
      "Synthesize technical findings into plain-English recommendations",
      "Map distinct customer segments to operational marketing tiers",
      "Document methodology, limitations, and future roadmaps"
    ],
    tools: ["Executive Summaries", "Case Studies", "GitHub Repositories"]
  }
];
