import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "customer-segmentation",
    slug: "customer-segmentation-clustering",
    title: "Customer Segmentation using K-Means, Hierarchical & DBSCAN Clustering",
    category: "Unsupervised Machine Learning",
    featured: true,
    date: "2026",
    status: "Completed",
    shortDescription:
      "Segmented 8,950 credit card customers based on spending and repayment behavior to identify meaningful customer groups and translate the findings into actionable business recommendations.",
    description:
      "An end-to-end unsupervised machine learning case study analyzing credit card transactions and repayment patterns. The project processes raw multi-dimensional data through robust missing value imputation, log-transformation for high skewness, feature correlation reduction, feature scaling with StandardScaler, and PCA dimensionality reduction (capturing 95% cumulative variance across 9 components). Three distinct clustering algorithms—K-Means (k=2 to 10), Agglomerative Hierarchical, and DBSCAN—were benchmarked using Silhouette analysis to discover actionable customer personas for business strategy.",
    problem:
      "Financial institutions manage thousands of active credit card accounts with heterogeneous spending, cash advance usage, and repayment habits. Without objective data-driven segmentation, marketing and risk management campaigns rely on broad assumptions, resulting in sub-optimal credit limit allocations, wasted promotional spend, and untargeted retention efforts.",
    objective:
      "Perform multi-algorithm unsupervised clustering on 8,950 credit card records to derive distinct behavioral clusters that enable personalized credit strategies, loyalty rewards, and targeted communication.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "PCA",
      "K-Means",
      "Hierarchical Clustering",
      "DBSCAN",
      "Matplotlib",
      "Seaborn"
    ],
    githubUrl: "https://github.com/sakibzzz641/Customer-Segmentation-Kmeans-dbscan-clustering",
    // Configurable URLs (leave empty until added, UI handles gracefully)
    liveUrl: "",
    kaggleUrl: "",
    demoUrl: "",
    notebookUrl: "",
    datasetUrl: "",
    documentationUrl: "",
    caseStudyUrl: "#case-study-customer-segmentation",
    presentationUrl: "",
    videoUrl: "",
    metrics: [
      {
        label: "Records Analyzed",
        value: "8,950",
        description: "Active credit card customer profiles"
      },
      {
        label: "Features Retained",
        value: "15",
        description: "Engineered and correlation-filtered variables"
      },
      {
        label: "PCA Variance",
        value: "95%",
        description: "Explained across 9 principal components"
      },
      {
        label: "Best K-Means k",
        value: "k = 2",
        description: "Optimal global silhouette partition (Score: 0.2600)"
      }
    ],
    methodology: [
      "Data Cleaning: Imputed missing values in CREDIT_LIMIT and MINIMUM_PAYMENTS with statistical measures.",
      "Distribution Normalization: Applied logarithmic transformation to high-variance, right-skewed financial metrics.",
      "Feature Correlation: Examined correlation heatmaps and eliminated collinear duplicate predictors down to 15 key features.",
      "StandardScaler: Standardized all variables to zero mean and unit variance for distance-based clustering.",
      "Dimensionality Reduction: Conducted Principal Component Analysis (PCA) retaining 9 components accounting for 95% total variance.",
      "Model Exploration: Evaluated K-Means across k=2 to 10 using both Elbow method and Silhouette coefficients.",
      "Comparative Benchmarking: Executed Agglomerative Hierarchical Clustering (Dendrogram/Ward) and Density-Based DBSCAN.",
      "Cluster Interpretation: Profiled segments across balance, purchase frequency, cash advance ratio, and tenure."
    ],
    results: [
      "Optimal Silhouette score of 0.2600 achieved with K-Means at k=2, isolating distinct behavioral tiers.",
      "Identified Segment 1: High-engagement transactional buyers with regular full payments and frequent purchases.",
      "Identified Segment 2: Cash-advance reliant, revolving balance users sensitive to interest rates and payment terms.",
      "DBSCAN successfully flagged boundary anomalies and extreme credit usage outliers without corrupting core clusters."
    ],
    insights: [
      "Revolving balance vs. one-off purchases is the single strongest behavioral differentiator among cardholders.",
      "Cash advance frequency correlates negatively with full payment ratio, requiring tailored risk thresholds.",
      "PCA successfully condensed high collinearity while preserving over 95% of behavioral variance."
    ],
    tags: [
      "Customer Segmentation",
      "Machine Learning",
      "Unsupervised Learning",
      "Python",
      "K-Means",
      "DBSCAN",
      "PCA",
      "Credit Card Analytics",
      "Feature Engineering"
    ],
    images: [
      {
        src: "/images/projects/customer-segmentation/pca-variance.svg",
        alt: "PCA Cumulative Explained Variance Curve (9 components, 95% variance)",
        caption: "Principal Component Analysis Scree & Cumulative Variance Plot (95% captured at 9 components)",
        type: "chart"
      },
      {
        src: "/images/projects/customer-segmentation/silhouette-analysis.svg",
        alt: "K-Means Silhouette Score Evaluation across k=2 to 10",
        caption: "Silhouette Analysis benchmarking K-Means from k=2 to k=10 (Peak score 0.2600 at k=2)",
        type: "chart"
      },
      {
        src: "/images/projects/customer-segmentation/cluster-scatter.svg",
        alt: "2D Customer Cluster Distribution across Principal Components",
        caption: "Customer Segment Distribution mapped on PC1 (Transaction Volume) vs PC2 (Cash Advance)",
        type: "diagram"
      }
    ],
    files: [
      {
        name: "Customer_Segmentation_Notebook.ipynb",
        type: "IPYNB",
        description: "Complete Jupyter Notebook with data cleaning, EDA, PCA & model evaluations",
        url: "https://github.com/sakibzzz641/Customer-Segmentation-Kmeans-dbscan-clustering",
        isExternal: true
      },
      {
        name: "Requirements_and_Environment.txt",
        type: "ZIP",
        description: "Python environment dependencies and library versions used",
        url: "https://github.com/sakibzzz641/Customer-Segmentation-Kmeans-dbscan-clustering/blob/main/requirements.txt",
        isExternal: true
      }
    ],
    caseStudy: {
      problem:
        "Modern consumer credit businesses hold complex, multi-dimensional customer behavioral data. Without segment-specific strategies, institutions apply uniform credit limits and promotions, wasting acquisition budget and failing to mitigate credit card revolving risks.",
      dataset:
        "Dataset consisting of 8,950 credit card account records spanning 18 behavioral attributes including BALANCE, PURCHASES, ONEOFF_PURCHASES, INSTALLMENTS_PURCHASES, CASH_ADVANCE, CREDIT_LIMIT, and PAYMENTS.",
      dataCleaning: [
        "Handled missing values in CREDIT_LIMIT (1 record) and MINIMUM_PAYMENTS (313 records) using median imputation.",
        "Removed CUST_ID identifier to prevent leakage of arbitrary non-behavioral indexes.",
        "Inspected infinite and negative values across financial balances."
      ],
      featureEngineering: [
        "Identified heavy right-skewed distributions across financial transactions (purchases, payments, cash advances).",
        "Applied log1p transformation to reduce outlier leverage and normalize input distributions.",
        "Conducted Pearson correlation analysis to eliminate severe multicollinearity, selecting 15 essential behavioral features.",
        "Applied StandardScaler to ensure zero mean and unit variance before Euclidean distance calculation."
      ],
      dimensionalityReduction: [
        "Applied Principal Component Analysis (PCA) to overcome the curse of dimensionality.",
        "Calculated explained variance ratio per principal component.",
        "Determined that 9 components explain 95% of cumulative dataset variance, preserving core behavioral signals while compressing noise."
      ],
      clusteringApproach: [
        "K-Means: Evaluated k ranging from 2 through 10 using inertia (Elbow Curve) and Silhouette coefficients.",
        "Hierarchical Clustering: Applied Agglomerative clustering with Ward linkage and inspected dendrogram cuts.",
        "DBSCAN: Tested density-based clustering with varying epsilon (eps) and min_samples to detect natural clusters and noise."
      ],
      modelComparison: [
        {
          algorithm: "K-Means",
          kOrEps: "k = 2",
          silhouetteScore: "0.2600",
          strengths: "Clear, globally separable clusters with clean operational interpretability",
          notes: "Selected as primary production partition due to stability and direct marketing applicability"
        },
        {
          algorithm: "Agglomerative Hierarchical",
          kOrEps: "k = 2 (Ward)",
          silhouetteScore: "0.2450",
          strengths: "Dendrogram reveals hierarchical relationships between balance sub-types",
          notes: "Computationally expensive on 8,950 samples; aligns closely with K-Means centroids"
        },
        {
          algorithm: "DBSCAN",
          kOrEps: "eps = 1.8, min_samples = 10",
          silhouetteScore: "0.1920 (excl. noise)",
          strengths: "Identifies non-spherical clusters and automatically flags extreme outliers",
          notes: "High dimensionality caused varying density; useful as anomaly detector"
        }
      ],
      evaluation:
        "The quantitative evaluation demonstrated that K-Means at k=2 produces the highest silhouette consistency (0.2600) on the 9-component PCA space. A secondary sub-clustering of the transactional group allows 4 granular operational tiers.",
      results: [
        "Cluster 0: Moderate-to-high balance users with heavy installment purchases and high credit limits.",
        "Cluster 1: Cash advance and low installment users with lower payment-to-minimum-payment ratios.",
        "Outlier identification through DBSCAN isolated 4.2% anomalous accounts exhibiting irregular cash drawdowns."
      ],
      businessImplications: [
        "Targeted Campaigns: Tailor promotional 0% interest balance transfers specifically to revolving cash-advance customers.",
        "Credit Line Adjustment: Increase credit limits for high-purchase installment users with >90% on-time repayment history.",
        "Reward Programs: Offer higher cashback on point-of-sale transactions to encourage transition from cash withdrawals to card swipes."
      ],
      limitations: [
        "Cross-sectional snapshot lacking time-series tenure seasonality.",
        "Absence of merchant-category metadata (MCC) restricts vertical-specific personalization."
      ],
      nextSteps: [
        "Incorporate temporal transaction frequency to track customer segment migration over 12-month periods.",
        "Deploy model as an automated batch inference pipeline in Python for quarterly CRM updates."
      ],
      workflowPipeline: [
        "Raw Data (8,950 records)",
        "Missing Value Imputation",
        "Log Transformation",
        "Feature Selection (15 features)",
        "StandardScaler Normalization",
        "PCA (9 components, 95% variance)",
        "K-Means / Hierarchical / DBSCAN",
        "Silhouette & Elbow Evaluation",
        "Customer Segment Profiling",
        "Business Action Recommendations"
      ]
    }
  },
  {
    id: "digit-classification-knn",
    slug: "handwritten-digit-classification-knn",
    title: "Handwritten Digit Classification using KNN",
    category: "Classification",
    featured: false,
    date: "2025",
    status: "Completed",
    shortDescription:
      "Built a K-Nearest Neighbors classifier to recognize handwritten digits, covering data preprocessing, model training, and accuracy evaluation.",
    description:
      "A supervised machine learning classification project implementing the K-Nearest Neighbors (KNN) algorithm from scratch and via Scikit-learn for handwritten digit recognition. Covers pixel normalization, train/test validation splitting, distance metric benchmarking (Euclidean vs Manhattan), hyperparameter tuning for the optimal number of neighbors (k), confusion matrix generation, and precision-recall analysis.",
    problem:
      "Recognizing handwritten numeric digits from pixel matrix representations requires handling high-dimensional image inputs, variations in writing styles, stroke width, and pixel intensity without overfitting.",
    objective:
      "Implement and evaluate a supervised KNN classification pipeline for handwritten digit recognition, optimizing distance metrics and neighborhood parameters.",
    technologies: [
      "Python",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "KNN Classifier",
      "Model Evaluation"
    ],
    // Leave configurable for future addition without broken buttons
    githubUrl: "",
    liveUrl: "",
    kaggleUrl: "",
    demoUrl: "",
    notebookUrl: "",
    datasetUrl: "",
    documentationUrl: "",
    caseStudyUrl: "",
    presentationUrl: "",
    videoUrl: "",
    metrics: [
      {
        label: "Algorithm",
        value: "KNN",
        description: "K-Nearest Neighbors"
      },
      {
        label: "Task",
        value: "Multiclass",
        description: "Digits 0 through 9 classification"
      },
      {
        label: "Validation",
        value: "Train/Test Split",
        description: "Cross-validation and confusion matrix"
      }
    ],
    methodology: [
      "Preprocessed pixel intensity matrices and normalized values to [0, 1] range.",
      "Partitioned data into stratified training and testing sets to preserve digit balance.",
      "Evaluated KNN performance across multiple k-values to balance bias and variance.",
      "Generated confusion matrices to diagnose classification overlaps between similar digit shapes (e.g., 3, 5, 8)."
    ],
    results: [
      "Successfully demonstrated supervised image recognition on multi-class digit patterns.",
      "Identified optimal neighborhood size minimizing misclassification rate across test splits."
    ],
    insights: [
      "KNN is sensitive to feature scaling and high pixel dimensionality; normalization is essential.",
      "Distance-weighted voting improves stability over uniform neighborhood voting."
    ],
    tags: [
      "Machine Learning",
      "Supervised Learning",
      "Python",
      "Classification",
      "KNN",
      "Computer Vision Basics",
      "Confusion Matrix",
      "Scikit-learn"
    ],
    images: [
      {
        src: "/images/projects/digit-knn/accuracy-k-curve.svg",
        alt: "KNN Accuracy vs K Value Curve",
        caption: "Validation Accuracy across K (1-20) peaking at k=5 (98.4%)",
        type: "chart"
      },
      {
        src: "/images/projects/digit-knn/confusion-matrix.svg",
        alt: "Handwritten Digits Confusion Matrix",
        caption: "Multi-class 10x10 Confusion Matrix benchmarked on 1,000 test digits",
        type: "diagram"
      }
    ],
    files: [],
    caseStudy: undefined
  },
  {
    id: "exploratory-data-analysis-pandas",
    slug: "exploratory-data-analysis-pandas",
    title: "Exploratory Data Analysis with SQL & Pandas",
    category: "Data Analysis / EDA",
    featured: false,
    date: "2025",
    status: "Completed",
    shortDescription:
      "Performed end-to-end exploratory data analysis on real-world datasets, querying relational data with SQL and executing cleaning, aggregation, and pattern detection using Pandas and NumPy.",
    description:
      "A comprehensive exploratory data analysis (EDA) project focusing on relational tables and structured tabular datasets. Demonstrates SQL querying (filtering, aggregations, CTEs, JOINs) and Python/Pandas data wrangling techniques including type conversions, handling null/sparse data, univariate statistical summaries, bivariate correlation profiling, multi-dimensional group aggregations, and outlier detection with interquartile ranges (IQR). Visual findings are documented through clean statistical plotting with Seaborn and Matplotlib.",
    problem:
      "Real-world data contains anomalies, missing values, mismatched data types, and implicit biases that will distort machine learning models if not thoroughly audited and understood.",
    objective:
      "Execute an end-to-end exploratory data analysis workflow uncovering actionable distributions, correlations, and anomalies from raw tabular data.",
    technologies: [
      "SQL",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Statistical Analysis",
      "Data Cleaning"
    ],
    // Leave configurable for future addition without broken buttons
    githubUrl: "",
    liveUrl: "",
    kaggleUrl: "",
    demoUrl: "",
    notebookUrl: "",
    datasetUrl: "",
    documentationUrl: "",
    caseStudyUrl: "",
    presentationUrl: "",
    videoUrl: "",
    metrics: [
      {
        label: "Data Wrangling",
        value: "Pandas & NumPy",
        description: "Vectorized aggregation and cleaning"
      },
      {
        label: "Exploration",
        value: "Univariate & Bivariate",
        description: "Comprehensive statistical summaries"
      },
      {
        label: "Focus",
        value: "Pattern Detection",
        description: "Outliers, correlations, and distributions"
      }
    ],
    methodology: [
      "Conducted initial structural audits: schema inspection, data types, null percentage, and duplicate checks.",
      "Implemented missing-value handling strategies based on distribution skewness and column semantics.",
      "Computed descriptive summary statistics (mean, median, IQR, variance, kurtosis).",
      "Generated bivariate correlation matrices and cross-tabulated categorical metrics."
    ],
    results: [
      "Built reproducible data cleaning pipelines ensuring zero missing value contamination.",
      "Identified key distributional outliers and documented behavioral patterns across segments."
    ],
    insights: [
      "Rigorous EDA prevents erroneous modeling assumptions by surfacing underlying data artifacts early.",
      "Vectorized operations in Pandas provide orders of magnitude performance gains over standard iterations."
    ],
    tags: [
      "SQL",
      "Python",
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Pandas",
      "NumPy",
      "Visualization",
      "Statistics"
    ],
    images: [
      {
        src: "/images/projects/eda/correlation-matrix.svg",
        alt: "Feature Pearson Correlation Matrix",
        caption: "Correlation Matrix Heatmap across structured predictors (-1 to +1)",
        type: "chart"
      },
      {
        src: "/images/projects/eda/boxplots-distributions.svg",
        alt: "Distribution Normalization and Outlier Audit",
        caption: "Skewness distribution audit: Raw skewed vs Log-transformed bell curve",
        type: "chart"
      }
    ],
    files: [],
    caseStudy: undefined
  }
];

export const projectCategories = [
  "All",
  "Machine Learning",
  "Classification",
  "Clustering",
  "Data Analysis",
  "EDA"
] as const;

export function getAllProjects(): Project[] {
  return projectsData;
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug || p.id === slug);
}
