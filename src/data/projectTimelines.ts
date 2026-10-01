import { ProjectTimeline } from '../types';

export const projectTimelinesData: ProjectTimeline[] = [
  {
    projectId: "customer-segmentation",
    projectSlug: "customer-segmentation-clustering",
    projectTitle: "Customer Segmentation using K-Means, Hierarchical & DBSCAN",
    category: "Unsupervised Machine Learning",
    duration: "6 Weeks (End-to-End Pipeline)",
    totalPhases: 5,
    totalMilestones: 6,
    summary:
      "A rigorous 6-week research and engineering workflow transforming 8,950 credit card account records into actionable business personas through robust skewness treatment, 95% PCA variance capture, multi-algorithm clustering, and silhouette validation.",
    caseStudyId: "customer-segmentation",
    githubUrl: "https://github.com/sakibzzz641/Customer-Segmentation-Kmeans-dbscan-clustering",
    phases: [
      {
        id: "phase-1",
        phaseNumber: 1,
        name: "Problem Scoping & Data Ingestion",
        timeframe: "Week 1",
        status: "Completed",
        description:
          "Formulated the business question on credit card revolving risk, loaded the 8,950-record dataset, and audited schema integrity across 18 behavioral attributes.",
        milestonesCount: 1,
        coreFocus: "Data Ingestion & Integrity Audit"
      },
      {
        id: "phase-2",
        phaseNumber: 2,
        name: "Data Hygiene & Skewness Treatment",
        timeframe: "Weeks 2–3",
        status: "Completed",
        description:
          "Executed missing value imputation, log-transformed extreme right-skewed financial metrics, and eliminated severe multicollinearity down to 15 key features.",
        milestonesCount: 2,
        coreFocus: "Statistical Transformation & Feature Selection"
      },
      {
        id: "phase-3",
        phaseNumber: 3,
        name: "Dimensionality Reduction (PCA)",
        timeframe: "Week 4",
        status: "Completed",
        description:
          "Standardized features with StandardScaler and computed Principal Component Analysis (PCA) to overcome the curse of dimensionality while retaining 95% cumulative variance.",
        milestonesCount: 1,
        coreFocus: "Linear Algebra & Eigenvalue Scree Plot"
      },
      {
        id: "phase-4",
        phaseNumber: 4,
        name: "Multi-Model Clustering & Benchmarking",
        timeframe: "Week 5",
        status: "Completed",
        description:
          "Trained and evaluated K-Means across k=2..10, Agglomerative Hierarchical clustering with Ward linkage, and density-based DBSCAN with epsilon parameter tuning.",
        milestonesCount: 1,
        coreFocus: "Algorithm Evaluation & Silhouette Diagnostics"
      },
      {
        id: "phase-5",
        phaseNumber: 5,
        name: "Persona Profiling & Business Playbook",
        timeframe: "Week 6",
        status: "Completed",
        description:
          "Synthesized behavioral personas (Transactors vs Revolvers), isolated 4.2% anomalous accounts, and constructed targeted marketing and credit limit adjustment recommendations.",
        milestonesCount: 1,
        coreFocus: "Business Value & Production Notebook"
      }
    ],
    milestones: [
      {
        id: "m-cs-1",
        milestoneNumber: 1,
        phaseId: "phase-1",
        phaseName: "Problem Scoping & Data Ingestion",
        title: "Schema Audit & Imputation Strategy",
        period: "Week 1",
        status: "Completed",
        summary:
          "Audited 8,950 account rows and 18 attributes. Imputed 313 missing values in MINIMUM_PAYMENTS and 1 in CREDIT_LIMIT using robust median estimation, removing non-behavioral identifiers.",
        deliverables: [
          "Data dictionary mapping 18 transactional and balance variables",
          "Null-value percentage diagnostics report",
          "Clean base dataset isolated from index leaks (CUST_ID removed)"
        ],
        keyMetric: {
          label: "Data Retention",
          value: "100%",
          context: "8,950 records preserved without row deletion"
        },
        technicalChallenge:
          "Row deletion for missing MINIMUM_PAYMENTS would discard 3.5% of accounts, which biased heavily towards newly onboarded customers with zero payments.",
        engineeringSolution:
          "Applied grouped median imputation conditional on balance tiers, preventing synthetic distortion of tenure signals.",
        toolsUsed: ["Python", "Pandas", "NumPy", "Missingno"],
        artifactType: "dataset",
        artifactName: "cleaned_credit_card_base.parquet",
        codeSnippet: {
          language: "python",
          code: `# Median imputation for skewed financial attributes\ndf['MINIMUM_PAYMENTS'].fillna(df['MINIMUM_PAYMENTS'].median(), inplace=True)\ndf['CREDIT_LIMIT'].fillna(df['CREDIT_LIMIT'].median(), inplace=True)\ndf.drop(columns=['CUST_ID'], inplace=True)`
        }
      },
      {
        id: "m-cs-2",
        milestoneNumber: 2,
        phaseId: "phase-2",
        phaseName: "Data Hygiene & Skewness Treatment",
        title: "Log1p Transformation & Correlation Pruning",
        period: "Week 2",
        status: "Completed",
        summary:
          "Identified severe positive skewness in PURCHASES, PAYMENTS, and CASH_ADVANCE. Applied natural logarithm log1p transform and eliminated collinear redundant predictors down to 15 features.",
        deliverables: [
          "Pre- and post-transformation distribution density plots",
          "Pearson correlation heatmap matrix across raw variables",
          "Collinearity reduction reducing feature redundancy"
        ],
        keyMetric: {
          label: "Feature Space",
          value: "15 Variables",
          context: "Pruned from 18 to remove multicollinear duplicates"
        },
        technicalChallenge:
          "Extreme power-law distribution where top 1% spenders pulled Euclidean distance calculations by orders of magnitude.",
        engineeringSolution:
          "Applied log1p (log(1 + x)) transformation to compress long tails while preserving zero-transaction boundaries gracefully.",
        toolsUsed: ["Pandas", "SciPy Stats", "Matplotlib", "Seaborn"],
        artifactType: "visualization",
        artifactName: "log1p_distribution_comparison.svg",
        codeSnippet: {
          language: "python",
          code: `# Log-transform high-skew financial metrics\nskewed_cols = ['BALANCE', 'PURCHASES', 'ONEOFF_PURCHASES', 'CASH_ADVANCE', 'PAYMENTS']\nfor col in skewed_cols:\n    df[col] = np.log1p(df[col])`
        }
      },
      {
        id: "m-cs-3",
        milestoneNumber: 3,
        phaseId: "phase-3",
        phaseName: "Dimensionality Reduction (PCA)",
        title: "StandardScaler & 95% PCA Variance Compression",
        period: "Week 4",
        status: "Completed",
        summary:
          "Standardized features to zero mean and unit variance. Executed Principal Component Analysis, mapping variance across eigenvectors to compress the 15-variable space into 9 orthogonal components explaining 95% variance.",
        deliverables: [
          "StandardScaler normalized feature matrix",
          "PCA Scree plot and cumulative explained variance curve",
          "Eigenvector loading matrix mapping original features to components"
        ],
        keyMetric: {
          label: "PCA Variance",
          value: "95.0%",
          context: "Captured across 9 principal components"
        },
        technicalChallenge:
          "Distance-based clustering suffers exponentially in 15 dimensions ('curse of dimensionality'), leading to equidistant point clusters.",
        engineeringSolution:
          "Retained exactly the top 9 principal components exceeding Kaiser criterion and reaching the 95% cumulative variance elbow.",
        toolsUsed: ["Scikit-learn PCA", "StandardScaler", "NumPy", "Matplotlib"],
        artifactType: "visualization",
        artifactName: "pca_cumulative_variance_curve.svg",
        codeSnippet: {
          language: "python",
          code: `scaler = StandardScaler()\nX_scaled = scaler.fit_transform(df)\n\npca = PCA(n_components=0.95, random_state=42)\nX_pca = pca.fit_transform(X_scaled)\nprint(f"Components retained: {pca.n_components_}") # Output: 9`
        }
      },
      {
        id: "m-cs-4",
        milestoneNumber: 4,
        phaseId: "phase-4",
        phaseName: "Multi-Model Clustering & Benchmarking",
        title: "Tri-Algorithm Clustering & Silhouette Optimization",
        period: "Week 5",
        status: "Completed",
        summary:
          "Benchmarked K-Means (k=2 through 10), Agglomerative Hierarchical (Ward linkage), and DBSCAN (eps=1.8, min_samples=10). K-Means at k=2 achieved highest global silhouette consistency (0.2600).",
        deliverables: [
          "K-Means Inertia (Elbow) and Silhouette Score comparison curves",
          "Agglomerative Hierarchical Dendrogram cut analysis",
          "DBSCAN density anomaly detection matrix"
        ],
        keyMetric: {
          label: "Best Silhouette",
          value: "s = 0.2600",
          context: "Achieved with K-Means at k = 2"
        },
        technicalChallenge:
          "Selecting optimal cluster count (k) without ground-truth labels while ensuring business interpretability.",
        engineeringSolution:
          "Combined Elbow curve inflection with Silhouette Coefficient sweeps and business domain validation of centroid characteristics.",
        toolsUsed: ["Scikit-learn KMeans", "DBSCAN", "AgglomerativeClustering", "SciPy Dendrogram"],
        artifactType: "model",
        artifactName: "clustering_benchmark_evaluation.parquet",
        codeSnippet: {
          language: "python",
          code: `silhouette_scores = {}\nfor k in range(2, 11):\n    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)\n    labels = kmeans.fit_predict(X_pca)\n    silhouette_scores[k] = silhouette_score(X_pca, labels)\n# k=2: 0.2600, k=3: 0.2140`
        }
      },
      {
        id: "m-cs-5",
        milestoneNumber: 5,
        phaseId: "phase-4",
        phaseName: "Multi-Model Clustering & Benchmarking",
        title: "Density Anomaly Isolation via DBSCAN",
        period: "Week 5",
        status: "Completed",
        summary:
          "Tuned DBSCAN with epsilon=1.8 and min_samples=10 to isolate non-spherical clusters and screen anomalous credit accounts with high-frequency cash advance spikes.",
        deliverables: [
          "DBSCAN noise point distribution map",
          "Anomaly profile detailing 376 irregular accounts (4.2%)",
          "Cluster stability comparison against K-Means core partitions"
        ],
        keyMetric: {
          label: "Anomalies Flagged",
          value: "4.2%",
          context: "376 irregular accounts isolated without corrupting core clusters"
        },
        technicalChallenge:
          "K-Means forced extreme spending outliers into normal behavioral clusters, shifting centroid coordinates.",
        engineeringSolution:
          "Used DBSCAN as an anomaly pre-filter and dual-validation layer to verify that K-Means clusters remained stable with or without extreme outliers.",
        toolsUsed: ["Scikit-learn DBSCAN", "NumPy", "Seaborn"],
        artifactType: "visualization",
        artifactName: "dbscan_outlier_scatter.svg",
        codeSnippet: {
          language: "python",
          code: `dbscan = DBSCAN(eps=1.8, min_samples=10)\ndb_labels = dbscan.fit_predict(X_pca)\noutlier_ratio = np.mean(db_labels == -1)\nprint(f"Anomalous records: {outlier_ratio:.2%}") # Output: 4.20%`
        }
      },
      {
        id: "m-cs-6",
        milestoneNumber: 6,
        phaseId: "phase-5",
        phaseName: "Persona Profiling & Business Playbook",
        title: "Persona Profiling & Actionable CRM Strategy Playbook",
        period: "Week 6",
        status: "Completed",
        summary:
          "De-standardized cluster centroids back into dollar amounts and transaction rates. Identified Cluster 0 (Active Installment Transactors) and Cluster 1 (Revolving Cash-Advance Borrowers), formulating 3 concrete marketing and risk playbooks.",
        deliverables: [
          "De-standardized cluster centroid summary table in USD and rates",
          "Actionable marketing strategy playbook for CRM campaign triggers",
          "Modular Jupyter notebook with reproducible data pipeline"
        ],
        keyMetric: {
          label: "Operational Personas",
          value: "2 Primary Groups",
          context: "Transactors vs Revolvers with sub-tier granularity"
        },
        technicalChallenge:
          "PCA components are mathematical combinations that business stakeholders cannot intuitively interpret.",
        engineeringSolution:
          "Calculated inverse transforms and generated radar charts against original business attributes (Balance, Purchase Frequency, Cash Advance Ratio).",
        toolsUsed: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
        artifactType: "report",
        artifactName: "customer_segmentation_case_study.ipynb",
        codeSnippet: {
          language: "python",
          code: `# De-standardize centroids for business interpretation\ncentroids_original = df.groupby('Cluster').mean()\nprint(centroids_original[['BALANCE', 'PURCHASES', 'CASH_ADVANCE', 'CREDIT_LIMIT']])`
        }
      }
    ]
  },
  {
    projectId: "digit-classification-knn",
    projectSlug: "handwritten-digit-classification-knn",
    projectTitle: "Handwritten Digit Recognition with KNN & Error Diagnostics",
    category: "Classification",
    duration: "4 Weeks (Model Research & Benchmarking)",
    totalPhases: 4,
    totalMilestones: 5,
    summary:
      "A 4-week supervised machine learning project implementing a K-Nearest Neighbors classifier on handwritten digit matrices, conducting distance metric benchmarking, neighborhood optimization, and confusion matrix diagnostics.",
    caseStudyId: undefined,
    githubUrl: "",
    phases: [
      {
        id: "phase-knn-1",
        phaseNumber: 1,
        name: "Matrix Ingestion & Pixel Normalization",
        timeframe: "Week 1",
        status: "Completed",
        description:
          "Ingested greyscale handwritten digit matrices (0–9), flattened 2D pixel tensors into 1D vectors, and scaled intensity ranges to [0, 1].",
        milestonesCount: 1,
        coreFocus: "Image Vectorization & Min-Max Scaling"
      },
      {
        id: "phase-knn-2",
        phaseNumber: 2,
        name: "Stratified Validation Architecture",
        timeframe: "Week 2",
        status: "Completed",
        description:
          "Built a stratified train/test split ensuring uniform representation across all 10 digit classes and verified absence of data leakage.",
        milestonesCount: 1,
        coreFocus: "Class Distribution & Stratification"
      },
      {
        id: "phase-knn-3",
        phaseNumber: 3,
        name: "Distance Metric & Hyperparameter Tuning",
        timeframe: "Week 3",
        status: "Completed",
        description:
          "Benchmarked Euclidean vs Manhattan distance metrics across neighborhood sizes k=1 to 20, plotting validation accuracy curves.",
        milestonesCount: 2,
        coreFocus: "Euclidean vs Manhattan Metric Benchmarking"
      },
      {
        id: "phase-knn-4",
        phaseNumber: 4,
        name: "Confusion Matrix Diagnostics & Evaluation",
        timeframe: "Week 4",
        status: "Completed",
        description:
          "Constructed 10x10 confusion matrix, pinpointed ambiguous digit pairs (3 vs 5 and 7 vs 9), and evaluated distance-weighted voting.",
        milestonesCount: 1,
        coreFocus: "Precision-Recall & Error Auditing"
      }
    ],
    milestones: [
      {
        id: "m-knn-1",
        milestoneNumber: 1,
        phaseId: "phase-knn-1",
        phaseName: "Matrix Ingestion & Pixel Normalization",
        title: "Pixel Tensor Vectorization & Normalization",
        period: "Week 1",
        status: "Completed",
        summary:
          "Loaded handwritten numeric matrices and normalized 0–255 integer pixel intensities into floating point [0.0, 1.0] range to prevent distance distortion.",
        deliverables: [
          "Digit sample raster visualization grid",
          "Normalized feature tensor (64 features per digit vector)",
          "Vectorized NumPy dataset pipeline"
        ],
        keyMetric: {
          label: "Feature Vector",
          value: "64 Pixels",
          context: "8x8 flattened grayscale matrices"
        },
        technicalChallenge:
          "Raw 0-255 pixel integers caused high-intensity background noise to disproportionately weight Euclidean distances.",
        engineeringSolution:
          "Scaled pixel intensities to [0.0, 1.0] range and applied zero-threshold clipping to eliminate subtle scanner artifacts.",
        toolsUsed: ["Python", "NumPy", "Matplotlib", "Scikit-learn"],
        artifactType: "visualization",
        artifactName: "digit_sample_raster.png",
        codeSnippet: {
          language: "python",
          code: `# Normalize pixel intensities to [0, 1]\nX_norm = X_raw.astype(np.float32) / 16.0  # For 8x8 sklearn digits (max 16)`
        }
      },
      {
        id: "m-knn-2",
        milestoneNumber: 2,
        phaseId: "phase-knn-2",
        phaseName: "Stratified Validation Architecture",
        title: "Stratified Split & Class Uniformity",
        period: "Week 2",
        status: "Completed",
        summary:
          "Implemented stratified train-test splitting (80/20) preserving exact 10% class representation for each digit class (0 through 9).",
        deliverables: [
          "Stratified partition code module",
          "Class balance audit chart verifying uniform class frequencies",
          "Validation baseline accuracy threshold established"
        ],
        keyMetric: {
          label: "Class Balance",
          value: "10% per Digit",
          context: "Uniform distribution across digits 0 through 9"
        },
        technicalChallenge:
          "Standard random splitting could under-sample subtle digits (such as 8 or 9) in the test partition.",
        engineeringSolution:
          "Used StratifiedShuffleSplit with fixed seed ensuring identical class proportions across train and validation splits.",
        toolsUsed: ["Scikit-learn model_selection", "Pandas"],
        artifactType: "dataset",
        artifactName: "stratified_partitions.npz",
        codeSnippet: {
          language: "python",
          code: `X_train, X_test, y_train, y_test = train_test_split(\n    X_norm, y, test_size=0.2, random_state=42, stratify=y\n)`
        }
      },
      {
        id: "m-knn-3",
        milestoneNumber: 3,
        phaseId: "phase-knn-3",
        phaseName: "Distance Metric & Hyperparameter Tuning",
        title: "Metric Benchmarking: Euclidean vs Manhattan",
        period: "Week 3",
        status: "Completed",
        summary:
          "Tested L2 (Euclidean) vs L1 (Manhattan) distance formulations across multiple neighborhood sizes to evaluate computational speed and boundary shape.",
        deliverables: [
          "Distance metric comparison benchmark table",
          "Execution time latency vs accuracy trade-off chart",
          "L1 vs L2 decision boundary comparative analysis"
        ],
        keyMetric: {
          label: "Preferred Metric",
          value: "Euclidean (L2)",
          context: "+0.8% accuracy gain over Manhattan distance"
        },
        technicalChallenge:
          "High pixel dimensions often degrade L2 distance contrast (Hubness problem).",
        engineeringSolution:
          "Evaluated empirical nearest-neighbor radius variance, discovering L2 provided smoother rotational invariance for numeric strokes.",
        toolsUsed: ["Scikit-learn KNeighborsClassifier", "SciPy Spatial"],
        artifactType: "report",
        artifactName: "metric_benchmark_results.csv",
        codeSnippet: {
          language: "python",
          code: `knn_l2 = KNeighborsClassifier(n_neighbors=5, metric='euclidean')\nknn_l1 = KNeighborsClassifier(n_neighbors=5, metric='manhattan')`
        }
      },
      {
        id: "m-knn-4",
        milestoneNumber: 4,
        phaseId: "phase-knn-3",
        phaseName: "Distance Metric & Hyperparameter Tuning",
        title: "Neighborhood Size (K) Optimization",
        period: "Week 3",
        status: "Completed",
        summary:
          "Swept k values from 1 to 20 using 5-fold cross-validation. Isolated k=5 as the optimal bias-variance equilibrium, reaching 98.4% validation accuracy.",
        deliverables: [
          "Validation accuracy vs K hyperparameter curve",
          "Cross-validation standard error band plot",
          "Tuned KNeighborsClassifier model object"
        ],
        keyMetric: {
          label: "Test Accuracy",
          value: "98.4%",
          context: "Peak validation accuracy achieved at k = 5"
        },
        technicalChallenge:
          "k=1 produced high variance overfitting to noisy pixel strokes, whereas k>11 smoothed decision boundaries excessively.",
        engineeringSolution:
          "k=5 with inverse distance weighting achieved peak stability and minimal test variance.",
        toolsUsed: ["Scikit-learn GridSearchCV", "Matplotlib"],
        artifactType: "visualization",
        artifactName: "accuracy_k_curve.svg",
        codeSnippet: {
          language: "python",
          code: `param_grid = {'n_neighbors': range(1, 21), 'weights': ['uniform', 'distance']}\ngrid = GridSearchCV(KNeighborsClassifier(), param_grid, cv=5)\ngrid.fit(X_train, y_train)\nprint(f"Optimal parameters: {grid.best_params_}") # k=5, weights='distance'`
        }
      },
      {
        id: "m-knn-5",
        milestoneNumber: 5,
        phaseId: "phase-knn-4",
        phaseName: "Confusion Matrix Diagnostics & Evaluation",
        title: "10x10 Confusion Matrix Diagnostics",
        period: "Week 4",
        status: "Completed",
        summary:
          "Generated normalized confusion matrix across all 10 digit classes. Diagnosed remaining 1.6% errors concentrated between digit pairs (3 vs 5 and 7 vs 9), documenting stroke curvature causes.",
        deliverables: [
          "10x10 multi-class annotated confusion matrix heatmap",
          "Per-class precision, recall, and F1-score evaluation report",
          "Visual misclassification gallery with pixel comparison"
        ],
        keyMetric: {
          label: "Macro F1-Score",
          value: "0.984",
          context: "Balanced performance across all digit classes"
        },
        technicalChallenge:
          "Certain cursive handwriting styles created identical pixel overlaps between digit 3 and 5.",
        engineeringSolution:
          "Isolated misclassified sample vectors and verified that distance-weighted voting resolved over 60% of borderline cases.",
        toolsUsed: ["Scikit-learn metrics", "Seaborn", "Matplotlib"],
        artifactType: "visualization",
        artifactName: "confusion_matrix.svg",
        codeSnippet: {
          language: "python",
          code: `cm = confusion_matrix(y_test, y_pred)\nreport = classification_report(y_test, y_pred, digits=4)\nprint(report)`
        }
      }
    ]
  },
  {
    projectId: "exploratory-data-analysis-pandas",
    projectSlug: "exploratory-data-analysis-pandas",
    projectTitle: "Exploratory Data Analysis with SQL Engine & Pandas",
    category: "Data Analysis / EDA",
    duration: "4 Weeks (Analytical Pipeline)",
    totalPhases: 4,
    totalMilestones: 5,
    summary:
      "An end-to-end data audit querying relational schemas with SQL CTEs, engineering univariate and bivariate statistical profiling, and detecting distributional anomalies using IQR and Seaborn heatmaps.",
    caseStudyId: undefined,
    githubUrl: "",
    phases: [
      {
        id: "phase-eda-1",
        phaseNumber: 1,
        name: "Relational Querying & Schema Extraction",
        timeframe: "Week 1",
        status: "Completed",
        description:
          "Authored multi-table SQL queries with Common Table Expressions (CTEs), window functions, and aggregations to construct unified analytical extracts.",
        milestonesCount: 1,
        coreFocus: "SQL CTEs & Relational Extraction"
      },
      {
        id: "phase-eda-2",
        phaseNumber: 2,
        name: "Data Hygiene & Structural Auditing",
        timeframe: "Week 2",
        status: "Completed",
        description:
          "Profiled schema types, null density percentages, and cardinality metrics to catch silent data corruption early.",
        milestonesCount: 1,
        coreFocus: "Null Auditing & Type Validation"
      },
      {
        id: "phase-eda-3",
        phaseNumber: 3,
        name: "Univariate & Bivariate Distribution Profiling",
        timeframe: "Week 3",
        status: "Completed",
        description:
          "Calculated summary statistics (IQR, skewness, variance, kurtosis) and detected extreme outliers across continuous predictors.",
        milestonesCount: 2,
        coreFocus: "IQR Outlier Screening & Statistical Distributions"
      },
      {
        id: "phase-eda-4",
        phaseNumber: 4,
        name: "Correlation Discovery & Visual Reporting",
        timeframe: "Week 4",
        status: "Completed",
        description:
          "Constructed Pearson correlation matrices, categorized interactions with cross-tabulations, and compiled executive analytical findings.",
        milestonesCount: 1,
        coreFocus: "Correlation Heatmaps & Insight Synthesis"
      }
    ],
    milestones: [
      {
        id: "m-eda-1",
        milestoneNumber: 1,
        phaseId: "phase-eda-1",
        phaseName: "Relational Querying & Schema Extraction",
        title: "Relational Extraction via SQL CTEs",
        period: "Week 1",
        status: "Completed",
        summary:
          "Designed multi-table SQL extraction pipeline utilizing CTEs and window partition functions to aggregate transactional records into denormalized entity tables.",
        deliverables: [
          "Modular SQL extraction scripts with CTEs and window joins",
          "Relational schema dependency diagram",
          "Automated CSV/Parquet export pipeline"
        ],
        keyMetric: {
          label: "Extraction Query",
          value: "4 Relational Tables",
          context: "Unified into clean entity-level grain"
        },
        technicalChallenge:
          "Transactional records had 1-to-many relationship with master records, risking duplicate row cartesian products during JOINs.",
        engineeringSolution:
          "Aggregated transactional metrics inside CTE sub-queries before joining to master records at strict 1-to-1 customer grain.",
        toolsUsed: ["PostgreSQL / SQL", "Pandas read_sql", "SQLAlchemy"],
        artifactType: "report",
        artifactName: "customer_transactions_extract.sql",
        codeSnippet: {
          language: "sql",
          code: `WITH TransactionMetrics AS (\n  SELECT \n    customer_id,\n    COUNT(id) AS total_orders,\n    SUM(amount) AS total_spend,\n    AVG(amount) AS avg_order_val\n  FROM orders\n  GROUP BY customer_id\n)\nSELECT c.*, tm.total_orders, tm.total_spend\nFROM customers c\nLEFT JOIN TransactionMetrics tm ON c.id = tm.customer_id;`
        }
      },
      {
        id: "m-eda-2",
        milestoneNumber: 2,
        phaseId: "phase-eda-2",
        phaseName: "Data Hygiene & Structural Auditing",
        title: "Missing-Value Profiling & Data Typing",
        period: "Week 2",
        status: "Completed",
        summary:
          "Conducted schema integrity audit measuring missingness ratios, casting numeric string objects into native float/int types, and stripping trailing whitespace.",
        deliverables: [
          "Null percentage diagnostics bar chart",
          "Type conversion script ensuring zero 'object' type leakage for numeric fields",
          "Duplicate primary key audit report"
        ],
        keyMetric: {
          label: "Data Hygiene",
          value: "0 Missing Residuals",
          context: "Cleaned and verified across all features"
        },
        technicalChallenge:
          "Certain financial columns contained hidden special characters ('$', commas) stored as object strings.",
        engineeringSolution:
          "Built vectorized regex regex-cleaning functions converting currency strings directly to float64 without iterative loops.",
        toolsUsed: ["Pandas", "NumPy", "Regex"],
        artifactType: "dataset",
        artifactName: "audited_dataset_clean.parquet",
        codeSnippet: {
          language: "python",
          code: `# Clean currency strings to float64\ndf['amount'] = df['amount'].astype(str).str.replace(r'[$,]', '', regex=True).astype(float)`
        }
      },
      {
        id: "m-eda-3",
        milestoneNumber: 3,
        phaseId: "phase-eda-3",
        phaseName: "Univariate & Bivariate Distribution Profiling",
        title: "IQR Outlier Screening & Skewness Audits",
        period: "Week 3",
        status: "Completed",
        summary:
          "Calculated Interquartile Ranges (IQR) to identify statistical outliers beyond Q1 - 1.5*IQR and Q3 + 1.5*IQR. Cataloged heavy right-skewed variables.",
        deliverables: [
          "Boxplot visualizations highlighting outlier densities",
          "Summary statistics table (mean, median, std, IQR, kurtosis)",
          "Outlier treatment policy documentation"
        ],
        keyMetric: {
          label: "Outlier Boundary",
          value: "1.5 × IQR Rule",
          context: "Used to distinguish authentic high-spenders from corrupt anomalies"
        },
        technicalChallenge:
          "Blindly truncating outliers would remove the most lucrative enterprise customers from the analysis.",
        engineeringSolution:
          "Distinguished between systemic data corruption (negative values) and legitimate heavy-tail spenders by cross-referencing account tenure.",
        toolsUsed: ["Pandas", "SciPy Stats", "Matplotlib", "Seaborn"],
        artifactType: "visualization",
        artifactName: "boxplots_distributions.svg",
        codeSnippet: {
          language: "python",
          code: `Q1 = df['spend'].quantile(0.25)\nQ3 = df['spend'].quantile(0.75)\nIQR = Q3 - Q1\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR\noutliers = df[(df['spend'] < lower_bound) | (df['spend'] > upper_bound)]`
        }
      },
      {
        id: "m-eda-4",
        milestoneNumber: 4,
        phaseId: "phase-eda-4",
        phaseName: "Correlation Discovery & Visual Reporting",
        title: "Pearson Correlation Matrix & Heatmap Discovery",
        period: "Week 4",
        status: "Completed",
        summary:
          "Computed pairwise Pearson correlation coefficients across all numeric variables. Visualized relationships using Seaborn masked heatmaps to detect collinear clusters.",
        deliverables: [
          "Masked upper-triangle correlation matrix heatmap (-1.0 to +1.0)",
          "Bivariate scatter plot matrix for high-correlation pairs (r > 0.70)",
          "Correlation breakdown identifying redundant predictors"
        ],
        keyMetric: {
          label: "Correlation Scope",
          value: "All Predictors",
          context: "Evaluated across 15+ numeric dimensions"
        },
        technicalChallenge:
          "Raw heatmaps with duplicated lower and upper triangles produced visual clutter.",
        engineeringSolution:
          "Generated a boolean mask for the upper triangle with custom diverging colormap (coolwarm) centered at zero.",
        toolsUsed: ["Seaborn", "Matplotlib", "Pandas"],
        artifactType: "visualization",
        artifactName: "correlation_matrix.svg",
        codeSnippet: {
          language: "python",
          code: `corr = df.corr(method='pearson')\nmask = np.triu(np.ones_like(corr, dtype=bool))\nplt.figure(figsize=(10, 8))\nsns.heatmap(corr, mask=mask, cmap='coolwarm', vmin=-1, vmax=1, annot=True, fmt='.2f')`
        }
      },
      {
        id: "m-eda-5",
        milestoneNumber: 5,
        phaseId: "phase-eda-4",
        phaseName: "Correlation Discovery & Visual Reporting",
        title: "Executive Synthesis & Analytical Finding Deck",
        period: "Week 4",
        status: "Completed",
        summary:
          "Synthesized statistical findings into an executive report detailing 4 primary distribution insights and concrete data preparation guidelines for downstream modeling teams.",
        deliverables: [
          "Executive analytical findings deck with charts",
          "Reproducible Jupyter notebook pipeline with clean markdown documentation",
          "Cleaned analytical dataset ready for predictive modeling"
        ],
        keyMetric: {
          label: "Insights Catalog",
          value: "4 Core Findings",
          context: "Documented with statistical confidence"
        },
        technicalChallenge:
          "Communicating statistical nuances (skewness, IQR, correlation) to non-technical stakeholders without losing analytical fidelity.",
        engineeringSolution:
          "Paired each statistical insight with a clear real-world business implication and actionable recommendation.",
        toolsUsed: ["Jupyter Notebook", "Pandas", "Matplotlib"],
        artifactType: "report",
        artifactName: "exploratory_data_analysis_report.ipynb",
        codeSnippet: {
          language: "python",
          code: `# Document key summary insights\nsummary_insights = {\n    "skewness_impact": "Log1p transformation required prior to linear models",\n    "high_correlation": "Purchases and Payments exhibit r=0.86 multicollinearity",\n    "retention_signal": "Customer tenure strongly moderates purchase frequency"\n}`
        }
      }
    ]
  },
  {
    projectId: "telco-customer-churn",
    projectSlug: "telco-customer-churn-prediction",
    projectTitle: "Telco Customer Churn Prediction: EDA, SMOTE & 6-Model Benchmark",
    category: "Classification",
    duration: "5 Weeks (Production ML Pipeline)",
    totalPhases: 5,
    totalMilestones: 6,
    summary:
      "A rigorous 5-week machine learning project benchmarking 6 classification algorithms on 7,043 subscriber records, preventing data leakage via pipeline-embedded SMOTE, and tuning Logistic Regression to achieve 0.844 ROC-AUC and 76.5% churn recall.",
    caseStudyId: "telco-customer-churn",
    githubUrl: "https://github.com/sakibzzz641/Telco-Customer-Churn-Prediction",
    phases: [
      {
        id: "phase-1",
        phaseNumber: 1,
        name: "Data Audit & Exploratory Analysis",
        timeframe: "Week 1",
        status: "Completed",
        description:
          "Formulated the business churn problem, ingested the 7,043-account dataset, identified 11 blank TotalCharges strings in zero-tenure accounts, and audited class distributions.",
        milestonesCount: 1,
        coreFocus: "Data Cleaning, Null Auditing & Univariate Distribution"
      },
      {
        id: "phase-2",
        phaseNumber: 2,
        name: "Leak-Free Preprocessing & Pipeline Architecture",
        timeframe: "Week 2",
        status: "Completed",
        description:
          "Built a robust scikit-learn ColumnTransformer and embedded SMOTE oversampling strictly inside imblearn.Pipeline to eliminate data leakage during cross-validation.",
        milestonesCount: 1,
        coreFocus: "ColumnTransformer & Pipeline-Embedded SMOTE"
      },
      {
        id: "phase-3",
        phaseNumber: 3,
        name: "Stratified Partitioning & 6-Model Benchmark",
        timeframe: "Week 3",
        status: "Completed",
        description:
          "Executed a 70/15/15 stratified partition and benchmarked 6 algorithms (Logistic Regression, Random Forest, XGBoost, Gradient Boosting, Decision Tree, KNN) across 5-fold CV.",
        milestonesCount: 1,
        coreFocus: "Stratified 5-Fold CV & Multi-Model Evaluation"
      },
      {
        id: "phase-4",
        phaseNumber: 4,
        name: "Hyperparameter Optimization & Test Scoring",
        timeframe: "Week 4",
        status: "Completed",
        description:
          "Fine-tuned the top two finalists via RandomizedSearchCV and evaluated performance on 1,057 held-out test customers, generating confusion matrices and trade-off curves.",
        milestonesCount: 2,
        coreFocus: "RandomizedSearchCV & Held-Out Test Evaluation"
      },
      {
        id: "phase-5",
        phaseNumber: 5,
        name: "Model Explainability & Strategic Retention Playbook",
        timeframe: "Week 5",
        status: "Completed",
        description:
          "Extracted standardized log-odds coefficients to isolate high-risk customer profiles (month-to-month, fiber optic, electronic check) and built an operational retention playbook.",
        milestonesCount: 1,
        coreFocus: "Log-Odds Interpretability & Business Strategy"
      }
    ],
    milestones: [
      {
        id: "churn-m1",
        milestoneNumber: 1,
        phaseId: "phase-1",
        phaseName: "Data Audit & Exploratory Analysis",
        title: "Ingestion, Null Value Imputation & Class Ratio Audit",
        period: "Week 1",
        status: "Completed",
        summary:
          "Loaded IBM Telco dataset (7,043 subscriber records, 21 columns). Identified and cleaned 11 whitespace null strings in TotalCharges, and audited class imbalance (73.5% stayers vs 26.5% churners).",
        deliverables: [
          "Cleaned dataset with verified float datatypes and zero duplicate IDs",
          "EDA charts highlighting correlation between contract length and churn rates",
          "Documented baseline churn rate of 26.5% across 7,043 customers"
        ],
        keyMetric: {
          label: "Class Imbalance Ratio",
          value: "73.5% : 26.5%",
          context: "5,174 Stayers vs 1,869 Churners"
        },
        technicalChallenge:
          "TotalCharges contained 11 blank spaces ' ' which prevented Pandas from parsing the column as float64, causing silent numerical errors.",
        engineeringSolution:
          "Traced the 11 blank entries to newly onboarded customers with tenure = 0 months; imputed them using column median and cast to float64.",
        toolsUsed: ["Python", "Pandas", "NumPy", "Seaborn"],
        artifactType: "notebook",
        artifactName: "01_eda_and_data_audit.ipynb",
        codeSnippet: {
          language: "python",
          code: `# Identify and fix blank strings in TotalCharges\ndf['TotalCharges'] = pd.to_numeric(df['TotalCharges'].str.strip(), errors='coerce')\ndf['TotalCharges'] = df['TotalCharges'].fillna(df['TotalCharges'].median())\nprint(f"Total rows: {len(df)}, Nulls remaining: {df['TotalCharges'].isna().sum()}")`
        }
      },
      {
        id: "churn-m2",
        milestoneNumber: 2,
        phaseId: "phase-2",
        phaseName: "Leak-Free Preprocessing & Pipeline Architecture",
        title: "ColumnTransformer & Leak-Free SMOTE Pipeline Construction",
        period: "Week 2",
        status: "Completed",
        summary:
          "Engineered ColumnTransformer for StandardScaler (continuous variables) and OneHotEncoder (nominal categoricals). Embedded SMOTE oversampling strictly inside imblearn.Pipeline to eliminate cross-validation leakage.",
        deliverables: [
          "Self-contained ColumnTransformer preprocessing pipeline",
          "Guaranteed leakage-free cross-validation setup where test/val folds are never oversampled",
          "Standardized scaler artifact preventing high-variance distortion"
        ],
        keyMetric: {
          label: "Resampled Training Ratio",
          value: "50% : 50%",
          context: "3,622 Stayers : 3,622 Churners"
        },
        technicalChallenge:
          "Naive SMOTE oversampling before data splitting leaks test distribution patterns into the training folds, inflating validation scores artificially.",
        engineeringSolution:
          "Encapsulated preprocessing, SMOTE, and the estimator inside an imblearn.Pipeline so oversampling only executes dynamically on training splits.",
        toolsUsed: ["Scikit-learn", "Imbalanced-learn", "Pipeline", "ColumnTransformer"],
        artifactType: "dataset",
        artifactName: "pipeline_architecture.py",
        codeSnippet: {
          language: "python",
          code: `from imblearn.pipeline import Pipeline as ImbPipeline\nfrom imblearn.over_sampling import SMOTE\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\n\npreprocessor = ColumnTransformer([\n    ('num', StandardScaler(), ['tenure', 'MonthlyCharges', 'TotalCharges']),\n    ('cat', OneHotEncoder(handle_unknown='ignore'), cat_cols)\n])\n\npipeline = ImbPipeline([\n    ('preprocessor', preprocessor),\n    ('smote', SMOTE(random_state=42)),\n    ('classifier', LogisticRegression(max_iter=1000, solver='liblinear'))\n])`
        }
      },
      {
        id: "churn-m3",
        milestoneNumber: 3,
        phaseId: "phase-3",
        phaseName: "Stratified Partitioning & 6-Model Benchmark",
        title: "Stratified 70/15/15 Split & 6-Model Benchmark Shootout",
        period: "Week 3",
        status: "Completed",
        summary:
          "Partitioned 7,043 rows into 70% Train (4,930), 15% Validation (1,056), and 15% Test (1,057) sets. Benchmarked 6 algorithms under identical 5-fold cross-validation SMOTE pipelines.",
        deliverables: [
          "Comparative benchmark leaderboard across 6 supervised classifiers",
          "Identification of Logistic Regression (0.8454 CV AUC) as top performer",
          "Precision-recall trade-off diagnostic across model families"
        ],
        keyMetric: {
          label: "Best 5-Fold CV AUC",
          value: "0.8454",
          context: "Logistic Regression (F1: 0.6354)"
        },
        technicalChallenge:
          "Expected complex non-linear ensemble models (XGBoost, Random Forest) to win, but tree models struggled with precision-recall trade-offs under class rebalancing.",
        engineeringSolution:
          "Discovered that SMOTE rebalancing provided the linear boundary that Logistic Regression needed to excel on recall and discrimination while preserving interpretability.",
        toolsUsed: ["Scikit-learn", "XGBoost", "Cross-Validation", "Model Selection"],
        artifactType: "report",
        artifactName: "cv_benchmark_results.csv",
        codeSnippet: {
          language: "python",
          code: `# 5-Fold CV Benchmark Results (SMOTE Pipeline)\n# Logistic Regression: CV AUC 0.8454 | CV F1 0.6354 (Leader)\n# Random Forest:       CV AUC 0.8419 | CV F1 0.6229\n# XGBoost:             CV AUC 0.8396 | CV F1 0.6053\n# Gradient Boosting:   CV AUC 0.8392 | CV F1 0.5978\n# Decision Tree:       CV AUC 0.8195 | CV F1 0.6148\n# KNN:                 CV AUC 0.7828 | CV F1 0.5686`
        }
      },
      {
        id: "churn-m4",
        milestoneNumber: 4,
        phaseId: "phase-4",
        phaseName: "Hyperparameter Optimization & Test Scoring",
        title: "RandomizedSearchCV Hyperparameter Tuning on Finalists",
        period: "Week 4",
        status: "Completed",
        summary:
          "Executed RandomizedSearchCV across 3 folds optimized for ROC-AUC on the top two candidate models (Logistic Regression and Gradient Boosting).",
        deliverables: [
          "Optimized parameter configurations for the two candidate pipelines",
          "Validation convergence curves confirming zero overfitting",
          "Regularization parameter optimization (C=1.0, solver='liblinear')"
        ],
        keyMetric: {
          label: "Tuned CV ROC-AUC",
          value: "0.8475",
          context: "Tuned Gradient Boosting (LR: 0.8436)"
        },
        technicalChallenge:
          "Large search spaces for ensemble parameters can result in severe computational overhead and combinatorial overfitting.",
        engineeringSolution:
          "Applied RandomizedSearchCV with stratified subsampling and 3-fold cross-validation to isolate optimal parameters efficiently.",
        toolsUsed: ["RandomizedSearchCV", "Scikit-learn", "Hyperparameter Tuning"],
        artifactType: "report",
        artifactName: "hyperparameter_tuning.py",
        codeSnippet: {
          language: "python",
          code: `from sklearn.model_selection import RandomizedSearchCV\n\nparam_dist = {\n    'classifier__C': [0.01, 0.1, 1.0, 10.0],\n    'classifier__penalty': ['l1', 'l2'],\n    'classifier__solver': ['liblinear']\n}\n\nsearch = RandomizedSearchCV(pipeline, param_dist, n_iter=8, cv=3, scoring='roc_auc', random_state=42)\nsearch.fit(X_train, y_train)\nprint(f"Optimal parameters: {search.best_params_}")`
        }
      },
      {
        id: "churn-m5",
        milestoneNumber: 5,
        phaseId: "phase-4",
        phaseName: "Hyperparameter Optimization & Test Scoring",
        title: "Held-Out Test Set Scoring & Confusion Matrix Evaluation",
        period: "Week 4",
        status: "Completed",
        summary:
          "Scored tuned models on 1,057 unseen test records (281 actual churners, 776 stayers). Tuned Logistic Regression delivered 0.8439 ROC-AUC and 76.51% churn recall, catching 215 of 281 churners.",
        deliverables: [
          "Final held-out test evaluation report",
          "Confusion matrix verifying 215 of 281 actual churners intercepted (76.51% recall)",
          "Decision threshold sweep curve (trade-off between recall and precision)"
        ],
        keyMetric: {
          label: "Test Churn Recall",
          value: "76.51%",
          context: "215 of 281 actual churners caught (ROC-AUC: 0.8439)"
        },
        technicalChallenge:
          "Gradient Boosting achieved higher accuracy (78.3% vs 74.6%), tempting a naive selection based on accuracy alone.",
        engineeringSolution:
          "Selected Logistic Regression because it caught 9 more churners per 100 customers (recall 0.77 vs 0.68). In an early warning retention system, catching churners is the core business imperative.",
        toolsUsed: ["Confusion Matrix", "ROC Curves", "Scikit-learn", "Matplotlib"],
        artifactType: "visualization",
        artifactName: "test_confusion_matrix.png",
        codeSnippet: {
          language: "python",
          code: `# Test Set Confusion Matrix (Tuned Logistic Regression)\n# [[573, 203],  (776 Stayers: 573 TN, 203 FP)\n#  [ 66, 215]]  (281 Churners: 66 FN, 215 TP - 76.51% Recall!)\n\nfrom sklearn.metrics import classification_report, roc_auc_score\nprint(classification_report(y_test, y_pred))\nprint(f"Test ROC-AUC: {roc_auc_score(y_test, y_proba):.4f}")`
        }
      },
      {
        id: "churn-m6",
        milestoneNumber: 6,
        phaseId: "phase-5",
        phaseName: "Model Explainability & Strategic Retention Playbook",
        title: "Log-Odds Coefficient Explainability & Strategic Retention Playbook",
        period: "Week 5",
        status: "Completed",
        summary:
          "Extracted standardized model coefficients. Formulated an operational retention playbook targeting month-to-month contracts (88.6% of churners) and incentivizing auto-pay adoption (dropping churn from 45.3% to 16.0%).",
        deliverables: [
          "Explainability bar chart mapping positive vs negative feature weights",
          "Strategic retention matrix mapping subscriber segments to cost-effective interventions",
          "Serialized production model pipeline (model_pipeline.pkl)"
        ],
        keyMetric: {
          label: "Month-to-Month Churn Rate",
          value: "88.6%",
          context: "Concentration of all churners in the dataset"
        },
        technicalChallenge:
          "High collinearity between tenure, MonthlyCharges, and TotalCharges (VIF ≈ 9.5) required anchoring business recommendations on categorical drivers.",
        engineeringSolution:
          "Framed retention campaigns around actionable contract and payment interventions: incentivizing 1-year contract migration and switching electronic check users (45.3% churn) to auto-pay (16.0% churn).",
        toolsUsed: ["Model Explainability", "Logistic Regression Coefficients", "Business Strategy", "Pickle"],
        artifactType: "model",
        artifactName: "model_pipeline.pkl",
        codeSnippet: {
          language: "python",
          code: `# Extract feature coefficients\nfeature_names = preprocessor.get_feature_names_out()\ncoefs = model.named_steps['classifier'].coef_[0]\ncoef_df = pd.DataFrame({'feature': feature_names, 'coefficient': coefs})\nprint(coef_df.sort_values(by='coefficient', ascending=False).head(5))\n# TotalCharges: +1.005, Contract_Month-to-month: +0.684, Fiber_optic: +0.547`
        }
      }
    ]
  },
  {
    projectId: "insurance-charges-regression",
    projectSlug: "insurance-charges-regression-prediction",
    projectTitle: "Predicting Medical Insurance Charges: Leakage-Safe Pipeline & XGBoost Tuning",
    category: "Regression",
    duration: "4 Weeks (Production ML Lifecycle)",
    totalPhases: 5,
    totalMilestones: 6,
    summary:
      "A 4-week machine learning regression project benchmarking 8 algorithms on 1,337 policyholder records, engineering zero-leakage interaction features cutting linear RMSE by 25%, and tuning XGBoost to achieve 0.921 test R² with SHAP explainability.",
    caseStudyId: "insurance-charges-regression",
    githubUrl: "https://github.com/sakibzzz641/Insurance-charges-regression",
    phases: [
      {
        id: "ins-phase-1",
        phaseNumber: 1,
        name: "Data Hygiene & Target Distribution Audit",
        timeframe: "Week 1",
        status: "Completed",
        description:
          "Ingested Kaggle medical cost dataset, detected and removed 1 exact duplicate record (1,338 → 1,337 records), verified zero missing values, and analyzed the 1.52 skewness of target charges.",
        milestonesCount: 1,
        coreFocus: "Deduplication, Skewness Analysis & Log-Scale Feasibility"
      },
      {
        id: "ins-phase-2",
        phaseNumber: 2,
        name: "Interaction Engineering & Leakage-Free Pipeline",
        timeframe: "Week 2",
        status: "Completed",
        description:
          "Discovered that BMI barely impacts non-smokers (1.11×) but nearly doubles charges for smokers (1.95×). Engineered bmi_obese and smoker_obese interaction flags embedded inside a single scikit-learn Pipeline.",
        milestonesCount: 1,
        coreFocus: "Bivariate Interaction Discovery & Zero-Leakage Pipeline"
      },
      {
        id: "ins-phase-3",
        phaseNumber: 3,
        name: "8-Model Cross-Validation Shootout",
        timeframe: "Week 3",
        status: "Completed",
        description:
          "Partitioned 80/20 train/test stratified by smoker status. Benchmarked 8 models under strict 5-fold cross-validation, confirming that linear regression with interaction features cut RMSE by 25.1%.",
        milestonesCount: 1,
        coreFocus: "Stratified Partitioning & 5-Fold Cross-Validation Benchmark"
      },
      {
        id: "ins-phase-4",
        phaseNumber: 4,
        name: "Hyperparameter Optimization & 20-Split Stability Audit",
        timeframe: "Week 3 - 4",
        status: "Completed",
        description:
          "Conducted 40-iteration RandomizedSearchCV on XGBoost (improving CV RMSE by 12.8% to $4,696). Evaluated model generalization over 20 random train/test splits (mean R² 0.854 ± 0.04).",
        milestonesCount: 2,
        coreFocus: "RandomizedSearchCV, Regularization & 20-Split Monte Carlo"
      },
      {
        id: "ins-phase-5",
        phaseNumber: 5,
        name: "SHAP Explainability & Underwriting Risk Playbook",
        timeframe: "Week 4",
        status: "Completed",
        description:
          "Extracted exact dollar attributions using SHAP TreeExplainer. Diagnosed error concentration (14 test records explain 75.7% of squared error) and formulated actionable insurance underwriting recommendations.",
        milestonesCount: 1,
        coreFocus: "TreeExplainer Attribution, Error Diagnostics & Risk Policy"
      }
    ],
    milestones: [
      {
        id: "ins-m1",
        milestoneNumber: 1,
        phaseId: "ins-phase-1",
        phaseName: "Data Hygiene & Target Distribution Audit",
        title: "Exact Duplicate Removal & Target Log-Transformation Experiment",
        period: "Week 1",
        status: "Completed",
        summary:
          "Audited dataset of 1,338 records. Removed 1 duplicate row. Evaluated target skewness (1.52). Experimentally trained log-target linear model; rejected because CV R² fell from 0.842 to 0.469 in dollar terms.",
        deliverables: [
          "Data cleaning log documenting duplicate row removal",
          "Distribution skewness analysis and histogram plots",
          "Dollar-scale vs log-scale cross-validation performance comparison"
        ],
        keyMetric: {
          label: "Clean Dataset Size",
          value: "1,337 Records",
          context: "7 features, zero missing values"
        },
        technicalChallenge:
          "Target charges exhibited heavy positive skewness (1.52), tempting an automatic log transform which actually distorted dollar-scale loss minimization.",
        engineeringSolution:
          "Trained empirical baseline models on both raw charges and log1p(charges); proved mathematically that fitting on raw dollar scale minimized true insurance financial loss.",
        toolsUsed: ["Pandas", "NumPy", "Scipy Stats", "Seaborn"],
        artifactType: "notebook",
        artifactName: "01_data_cleaning_and_eda.ipynb",
        codeSnippet: {
          language: "python",
          code: `# Clean duplicates and inspect skewness\ndf = df.drop_duplicates()\nprint(f"Clean records: {len(df)}")\nprint(f"Charge skewness: {df['charges'].skew():.2f}")\n# Skewness: 1.52; Log target dropped CV R² to 0.469 in dollar terms`
        }
      },
      {
        id: "ins-m2",
        milestoneNumber: 2,
        phaseId: "ins-phase-2",
        phaseName: "Interaction Engineering & Leakage-Free Pipeline",
        title: "Bivariate Interaction Discovery & Zero-Leakage Pipeline Architecture",
        period: "Week 2",
        status: "Completed",
        summary:
          "Discovered that BMI alone has negligible cost impact on non-smokers (+11%) but doubles costs for smokers (+95%). Created smoker_obese interaction term cutting linear CV RMSE by 25.1%.",
        deliverables: [
          "Bivariate interaction scatterplot (charges vs age & BMI separated by smoker)",
          "scikit-learn ColumnTransformer with StandardScaler and OneHotEncoder",
          "Leak-free Pipeline structure fitted strictly on training folds"
        ],
        keyMetric: {
          label: "Linear CV RMSE Cut",
          value: "-25.1%",
          context: "$6,297 → $4,715 through interaction term alone"
        },
        technicalChallenge:
          "Standard linear models failed to capture the non-linear interaction between smoking status and high BMI (≥ 30).",
        engineeringSolution:
          "Formulated explicit interaction flags ('bmi_obese' and 'smoker_obese') without using learned parameters, guaranteeing zero leakage across folds.",
        toolsUsed: ["Scikit-learn Pipeline", "Feature Engineering", "Matplotlib"],
        artifactType: "notebook",
        artifactName: "src/preprocessing.py",
        codeSnippet: {
          language: "python",
          code: `# Domain-specific feature engineering\ndef add_interaction_features(df):\n    df = df.copy()\n    df['bmi_obese'] = (df['bmi'] >= 30.0).astype(int)\n    df['smoker_obese'] = ((df['smoker'] == 'yes') & (df['bmi'] >= 30.0)).astype(int)\n    return df`
        }
      },
      {
        id: "ins-m3",
        milestoneNumber: 3,
        phaseId: "ins-phase-3",
        phaseName: "8-Model Cross-Validation Shootout",
        title: "Stratified Splitting & 8-Model 5-Fold Cross-Validation Shootout",
        period: "Week 3",
        status: "Completed",
        summary:
          "Partitioned 80/20 train/test stratified by smoker status (1,069 train / 268 test). Benchmarked 8 distinct models using 5-fold cross-validation scored on RMSE, MAE, and R².",
        deliverables: [
          "Stratified train/test split preserves 20.5% smoker proportion",
          "8-model CV performance matrix and boxplot distributions",
          "Comparative ranking isolating linear baseline vs tree ensembles"
        ],
        keyMetric: {
          label: "Top Default Model",
          value: "Gradient Boosting",
          context: "CV RMSE: $4,818 (R² 0.835) before tuning"
        },
        technicalChallenge:
          "Ensuring cross-validation was strictly leak-free while evaluating both linear parametric models and non-parametric tree ensembles.",
        engineeringSolution:
          "Encapsulated preprocessors and estimators within scikit-learn Pipelines, executing cross_validate across identical 5 folds for all 8 candidates.",
        toolsUsed: ["Scikit-learn", "KFold", "XGBoost", "Random Forest"],
        artifactType: "report",
        artifactName: "reports/cv_model_comparison.csv",
        codeSnippet: {
          language: "python",
          code: `# 5-fold cross validation benchmark\nmodels = {\n    'Linear': LinearRegression(),\n    'Ridge': Ridge(alpha=10.0),\n    'RandomForest': RandomForestRegressor(random_state=42),\n    'XGBoost': XGBRegressor(random_state=42)\n}\ncv_scores = {name: cross_validate(pipe, X_train, y_train, cv=5, scoring='neg_root_mean_squared_error') for name, pipe in models.items()}`
        }
      },
      {
        id: "ins-m4",
        milestoneNumber: 4,
        phaseId: "ins-phase-4",
        phaseName: "Hyperparameter Optimization & 20-Split Stability Audit",
        title: "RandomizedSearchCV Hyperparameter Tuning on Tree Ensembles",
        period: "Week 3",
        status: "Completed",
        summary:
          "Executed RandomizedSearchCV (40 iterations) on XGBoost, 25 iterations on Random Forest, and full grid search on Gradient Boosting. XGBoost achieved a 12.8% reduction in CV RMSE ($4,696).",
        deliverables: [
          "Hyperparameter tuning response surface across learning rate and tree depth",
          "Optimized parameter configuration file (best_params.json)",
          "Final selected XGBoost pipeline"
        ],
        keyMetric: {
          label: "XGBoost CV RMSE Gain",
          value: "-12.8%",
          context: "$5,387 default → $4,696 tuned (best overall)"
        },
        technicalChallenge:
          "Default XGBoost severely overfit on training folds (CV RMSE $5,387), underperforming even simple linear regression ($4,715).",
        engineeringSolution:
          "Introduced conservative tree constraints: shallower depth (max_depth=3), min_child_weight=10, reg_lambda=10, and lower learning_rate (0.03).",
        toolsUsed: ["RandomizedSearchCV", "GridSearchCV", "XGBoost"],
        artifactType: "report",
        artifactName: "reports/best_params.json",
        codeSnippet: {
          language: "python",
          code: `# Tuned XGBoost best parameters\nbest_params = {\n    'learning_rate': 0.03,\n    'max_depth': 3,\n    'n_estimators': 200,\n    'min_child_weight': 10,\n    'subsample': 0.85,\n    'reg_lambda': 10\n}`
        }
      },
      {
        id: "ins-m5",
        milestoneNumber: 5,
        phaseId: "ins-phase-4",
        phaseName: "Hyperparameter Optimization & 20-Split Stability Audit",
        title: "Held-Out Test Set Evaluation & 20-Split Monte Carlo Stability Audit",
        period: "Week 4",
        status: "Completed",
        summary:
          "Evaluated selected pipeline on held-out test set (268 policyholders), attaining R² of 0.921, RMSE of $3,373, and MAE of $2,074. Conducted 20 repeated random splits to guarantee honest variance reporting (R² 0.854 ± 0.04).",
        deliverables: [
          "Predicted vs actual scatter plot on 268 test cases",
          "20-split stability verification table (split_stability.csv)",
          "Serialized model pipeline (model_pipeline.pkl)"
        ],
        keyMetric: {
          label: "Test Set Performance",
          value: "R² 0.921 | $3,373 RMSE",
          context: "20-split average: R² 0.854, RMSE $4,565"
        },
        technicalChallenge:
          "Avoiding single-split test set optimism where a favorable random split artificially inflates reported R².",
        engineeringSolution:
          "Reported both the single split and the 20-split Monte Carlo mean ± standard deviation ($4,565 ± $535), providing honest expectations for deployment.",
        toolsUsed: ["Monte Carlo Validation", "Scikit-learn", "Pickle"],
        artifactType: "model",
        artifactName: "models/model_pipeline.pkl",
        codeSnippet: {
          language: "python",
          code: "# Test evaluation and 20-split stability test\ny_pred = final_pipeline.predict(X_test)\ntest_r2 = r2_score(y_test, y_pred)\ntest_rmse = root_mean_squared_error(y_test, y_pred)\nprint(f\"Test R²: {test_r2:.3f}, RMSE: ${test_rmse:,.0f}\")\n# 20-split validation: R² 0.854 ± 0.04, RMSE $4,565 ± 535"
        }
      },
      {
        id: "ins-m6",
        milestoneNumber: 6,
        phaseId: "ins-phase-5",
        phaseName: "SHAP Explainability & Underwriting Risk Playbook",
        title: "SHAP TreeExplainer Attribution, Error Concentration & Actuarial Playbook",
        period: "Week 4",
        status: "Completed",
        summary:
          "Applied SHAP TreeExplainer to compute exact dollar feature impact: smoker_obese (+$4,472) and smoker_yes (+$3,537) dominate risk. Uncovered that 14 test cases explain 75.7% of squared error.",
        deliverables: [
          "SHAP summary bar chart and beeswarm plot",
          "Error concentration breakdown table",
          "Actuarial risk underwriting and premium policy recommendations"
        ],
        keyMetric: {
          label: "Smoker Prediction Accuracy",
          value: "5.8% Relative MAE",
          context: "$1,882 MAE on $32,050 mean smoker charges"
        },
        technicalChallenge:
          "Black-box machine learning models cannot be adopted in insurance underwriting without feature transparency and legal auditability.",
        engineeringSolution:
          "Calculated local and global SHAP values, proving that smoking and the smoking-obesity interaction explain over 90% of model predictions while sex and region have negligible impact (< $270).",
        toolsUsed: ["SHAP", "TreeExplainer", "Actuarial Underwriting Analysis"],
        artifactType: "report",
        artifactName: "reports/figures/08_shap_importance.png",
        codeSnippet: {
          language: "python",
          code: `# SHAP TreeExplainer attribution\nexplainer = shap.TreeExplainer(model)\nshap_values = explainer.shap_values(X_test_transformed)\n# Mean |SHAP|: smoker_obese (+$4,472), smoker_yes (+$3,537), age (+$3,223)`
        }
      }
    ]
  }
];

export function getProjectTimeline(projectId: string): ProjectTimeline | undefined {
  return projectTimelinesData.find((t) => t.projectId === projectId);
}
