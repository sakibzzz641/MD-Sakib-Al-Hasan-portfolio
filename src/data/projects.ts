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
    id: "telco-customer-churn",
    slug: "telco-customer-churn-prediction",
    title: "Telco Customer Churn Prediction: EDA, SMOTE Pipelines & 6-Model Benchmark",
    category: "Classification",
    featured: false,
    date: "2026",
    status: "Completed",
    shortDescription:
      "End-to-end telecom customer churn prediction on 7,043 accounts: leak-free SMOTE pipeline, 6-model benchmark, and tuned Logistic Regression achieving 0.844 ROC-AUC and 76.5% churn recall.",
    description:
      "A production-grade machine learning classification case study analyzing 7,043 telecommunications customer accounts to predict subscriber churn and drive strategic retention. Built an honest, leak-free imblearn pipeline embedding StandardScaler, OneHotEncoder, and SMOTE oversampling exclusively within cross-validation folds. Benchmarked six distinct algorithms—Logistic Regression, Random Forest, XGBoost, Gradient Boosting, Decision Tree, and KNN. Tuned Logistic Regression outperformed tree ensembles on key detection metrics (0.8439 test ROC-AUC, 76.51% churn recall, 0.6152 F1), isolating 215 of 281 actual churners on held-out test data while providing interpretable log-odds coefficients to guide proactive retention campaigns.",
    problem:
      "Customer churn costs telecom providers millions in lost revenue, with high customer acquisition costs making retention vastly more economical than replacement. Without proactive predictive modeling, retention teams only react after cancellation requests are lodged, when salvage rates are minimal. Traditional modeling efforts often suffer from class imbalance neglect and data leakage from pre-split oversampling.",
    objective:
      "Develop an end-to-end machine learning pipeline on 7,043 customer accounts to identify at-risk subscribers prior to churn, benchmarking 6 algorithms, preventing data leakage via pipeline-embedded SMOTE, and deriving actionable retention business rules from model coefficients.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Imbalanced-learn (SMOTE)",
      "XGBoost",
      "Gradient Boosting",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook"
    ],
    githubUrl: "https://github.com/sakibzzz641/Telco-Customer-Churn-Prediction",
    liveUrl: "",
    kaggleUrl: "",
    demoUrl: "",
    notebookUrl: "https://github.com/sakibzzz641/Telco-Customer-Churn-Prediction/blob/main/notebooks/telco-churn-analysis.ipynb",
    datasetUrl: "https://raw.githubusercontent.com/sakibzzz641/Telco-Customer-Churn-Prediction/main/data/WA_Fn-UseC_-Telco-Customer-Churn.csv",
    documentationUrl: "",
    caseStudyUrl: "#case-study-telco-churn",
    presentationUrl: "",
    videoUrl: "",
    metrics: [
      {
        label: "Accounts Analyzed",
        value: "7,043",
        description: "IBM Telco subscriber profiles"
      },
      {
        label: "Test ROC-AUC",
        value: "0.844",
        description: "Tuned Logistic Regression"
      },
      {
        label: "Churn Recall",
        value: "76.5%",
        description: "215 of 281 test churners caught"
      },
      {
        label: "Models Benchmarked",
        value: "6 Models",
        description: "LR, RF, XGB, GB, DT, KNN"
      }
    ],
    methodology: [
      "Data Hygiene & Audit: Identified 11 blank strings in TotalCharges from zero-tenure accounts, converted them to float with median imputation, and verified zero duplicate records across 7,043 rows.",
      "Leak-Free Pipeline Architecture: Engineered ColumnTransformer for StandardScaler (numerics) and OneHotEncoder(handle_unknown='ignore') with SMOTE inside imblearn.Pipeline.",
      "Stratified 70/15/15 Split: Split data into 4,930 train, 1,056 validation, and 1,057 test samples, strictly locking the held-out test set until final model selection.",
      "Honest Imbalance Correction: Applied SMOTE strictly inside training folds, expanding minority churn class from 3,622 : 1,308 (73.5:26.5) to a balanced 3,622 : 3,622 (50:50).",
      "5-Fold Cross-Validation: Benchmarked 6 algorithms (Logistic Regression, Random Forest, XGBoost, Gradient Boosting, Decision Tree, KNN) across CV ROC-AUC, F1, and Recall.",
      "Hyperparameter Tuning: Executed RandomizedSearchCV (3-fold, ROC-AUC) optimizing regularization C and liblinear solver on Logistic Regression, and depth/subsample on Gradient Boosting.",
      "Final Held-Out Scoring: Scored finalists on 1,057 unseen test records, generating confusion matrices and precision-recall trade-off curves.",
      "Log-Odds Explainability: Extracted standardized model coefficients to formulate specific retention playbooks for month-to-month and fiber optic customer segments."
    ],
    results: [
      "Tuned Logistic Regression achieved 0.8439 ROC-AUC and 76.51% churn recall, catching 215 out of 281 actual churners on held-out test data.",
      "Demonstrated that linear model with honest SMOTE rebalancing outperformed complex tree ensembles (Gradient Boosting: 0.8405 AUC, 67.62% recall) on early-warning retention utility.",
      "Uncovered that 88.6% of all churners are concentrated on month-to-month contracts, while electronic check payers churn at 45.3% (vs 16.0% for auto-pay)."
    ],
    insights: [
      "Applying SMOTE outside a cross-validation pipeline causes severe data leakage; embedding it inside imblearn.Pipeline ensures realistic generalizability.",
      "High accuracy can be misleading in churn prediction: Gradient Boosting had higher accuracy (78.3%) but missed 9 more churners per 100 than Logistic Regression (76.5% recall).",
      "Model interpretability matters in business operations: Logistic Regression coefficients directly revealed the high-risk customer profile (month-to-month, fiber optic, no security add-ons, electronic check)."
    ],
    tags: [
      "Machine Learning",
      "Classification",
      "Customer Churn",
      "Python",
      "Scikit-learn",
      "SMOTE",
      "XGBoost",
      "Gradient Boosting",
      "EDA",
      "Model Evaluation"
    ],
    images: [
      {
        src: "/images/projects/telco-churn/roc-auc-benchmark.svg",
        alt: "ROC-AUC Multi-Model Benchmark Curve",
        caption: "ROC-AUC 0.844 across 6 benchmarked models on 1,057 held-out test customers",
        type: "chart"
      },
      {
        src: "/images/projects/telco-churn/confusion-matrix-smote.svg",
        alt: "Confusion Matrix & Retention Sieve",
        caption: "Test Confusion Matrix: 215 of 281 actual churners caught (76.51% recall) with acceptable false alarm buffer",
        type: "diagram"
      },
      {
        src: "/images/projects/telco-churn/churn-feature-importance.svg",
        alt: "Logistic Regression Standardized Coefficients",
        caption: "Standardized Log-Odds Multipliers: Churn risk drivers vs Protective retention factors",
        type: "chart"
      }
    ],
    files: [
      {
        name: "telco-churn-analysis.ipynb",
        type: "IPYNB",
        description: "Full end-to-end executed Jupyter Notebook (45 code cells with all outputs saved)",
        size: "922 KB",
        url: "https://github.com/sakibzzz641/Telco-Customer-Churn-Prediction/blob/main/notebooks/telco-churn-analysis.ipynb",
        isExternal: true
      },
      {
        name: "WA_Fn-UseC_-Telco-Customer-Churn.csv",
        type: "CSV",
        description: "Raw IBM Telco Customer Churn dataset (7,043 subscriber rows, 21 columns)",
        size: "977 KB",
        url: "https://raw.githubusercontent.com/sakibzzz641/Telco-Customer-Churn-Prediction/main/data/WA_Fn-UseC_-Telco-Customer-Churn.csv",
        isExternal: true
      },
      {
        name: "model_pipeline.pkl",
        type: "ZIP",
        description: "Serialized fitted imblearn pipeline (preprocessor + SMOTE + tuned Logistic Regression)",
        size: "12 KB",
        url: "https://github.com/sakibzzz641/Telco-Customer-Churn-Prediction/blob/main/models/model_pipeline.pkl",
        isExternal: true
      }
    ],
    caseStudy: {
      problem:
        "Telecommunications operators suffer massive revenue leakages when high-value subscribers cancel services. Because customer acquisition costs significantly exceed retention expenditures, identifying at-risk accounts before contract expiration is critical. Existing approaches frequently suffer from severe data leakage caused by naive oversampling before cross-validation splits, resulting in overly optimistic validation scores that collapse in production.",
      dataset:
        "IBM Telco Customer Churn dataset comprising 7,043 subscriber records and 21 multi-modal attributes covering customer demographics (senior citizen, partner, dependents), subscribed services (phone, multiple lines, DSL/fiber optic, streaming, security, tech support), account metadata (contract duration, billing method, payment type), and continuous financial variables (tenure, MonthlyCharges, TotalCharges). Target variable is binary Churn ('Yes' / 'No').",
      dataCleaning: [
        "Identified and rectified 11 blank string entries in 'TotalCharges' belonging to new accounts with tenure = 0 months.",
        "Converted 'TotalCharges' from object type to float64, using median imputation for missing values to maintain statistical robustness without biasing the variance.",
        "Verified dataset has zero duplicate customer IDs across all 7,043 records.",
        "Encoded binary categorical variables into binary flags and structured multi-class service features into consistent categorical types."
      ],
      featureEngineering: [
        "Categorical Pipeline: Applied OneHotEncoder(handle_unknown='ignore') to all nominal categorical features (Contract, InternetService, PaymentMethod, etc.).",
        "Numeric Scaling: Scaled continuous variables ('tenure', 'MonthlyCharges', 'TotalCharges') via StandardScaler inside the ColumnTransformer to prevent scale distortion.",
        "SMOTE Oversampling: Embedded Synthetic Minority Over-sampling Technique (SMOTE) strictly within imblearn.Pipeline so that synthetic points are only generated within training folds, completely preventing data leakage into validation or test folds.",
        "Class Balance: Balanced the training set from 73.5% : 26.5% (3,622 stayers : 1,308 churners) to a 50:50 ratio (3,622 : 3,622)."
      ],
      dimensionalityReduction: [
        "Evaluated Variance Inflation Factors (VIF) across collinear financial features ('tenure', 'MonthlyCharges', 'TotalCharges' had VIF ≈ 9.5).",
        "Retained full categorical indicators as primary business interpretable drivers rather than compressing into uninterpretable PCA latent dimensions.",
        "Enforced stratified train/validation/test partitions (70% train = 4,930, 15% validation = 1,056, 15% test = 1,057) to ensure consistent class distributions across every phase."
      ],
      clusteringApproach: [
        "Benchmarked six diverse algorithms: Logistic Regression, Random Forest, XGBoost, Gradient Boosting, Decision Tree, and KNN under identical 5-fold cross-validation SMOTE pipelines.",
        "Scored models on CV ROC-AUC, CV F1, and held-out validation recall to identify candidates that maximize churn interception rather than raw majority-class accuracy.",
        "Executed hyperparameter tuning via RandomizedSearchCV (3-fold, ROC-AUC) on the top two finalists (Logistic Regression and Gradient Boosting)."
      ],
      modelComparison: [
        {
          algorithm: "Tuned Logistic Regression (Winner)",
          kOrEps: "C=1.0, liblinear solver",
          silhouetteScore: "0.8439 ROC-AUC / 0.6152 F1",
          strengths: "Highest churn recall (76.51% - caught 215 of 281 churners) + direct log-odds coefficient interpretability",
          notes: "Selected as primary production model: catches 9 more churners per 100 than Gradient Boosting"
        },
        {
          algorithm: "Tuned Gradient Boosting",
          kOrEps: "n_est=250, depth=3, lr=0.03",
          silhouetteScore: "0.8405 ROC-AUC / 0.6240 F1",
          strengths: "Highest overall accuracy (78.33%) and higher precision (57.93%)",
          notes: "Lower churn recall (67.62%); missed 91 actual churners on held-out test data"
        },
        {
          algorithm: "Random Forest",
          kOrEps: "n_estimators=100, default depth",
          silhouetteScore: "0.8419 CV AUC / 0.6229 F1",
          strengths: "Robust ensemble capturing non-linear feature interactions",
          notes: "Overfits training folds slightly; less transparent than linear coefficients"
        },
        {
          algorithm: "XGBoost",
          kOrEps: "learning_rate=0.1, max_depth=3",
          silhouetteScore: "0.8396 CV AUC / 0.6053 F1",
          strengths: "Fast gradient boosting on tabular categorical dummies",
          notes: "Comparable to Gradient Boosting but did not beat Logistic Regression on recall"
        },
        {
          algorithm: "Decision Tree",
          kOrEps: "max_depth=5",
          silhouetteScore: "0.8195 CV AUC / 0.6148 F1",
          strengths: "Simple interpretable decision rules",
          notes: "Lower discriminatory power across subtle multi-feature interactions"
        },
        {
          algorithm: "K-Nearest Neighbors (KNN)",
          kOrEps: "k=7, distance weights",
          silhouetteScore: "0.7828 CV AUC / 0.5686 F1",
          strengths: "Non-parametric distance classification",
          notes: "Suffers from high dimensional one-hot encoding space (30+ features)"
        }
      ],
      evaluation:
        "On the held-out test set of 1,057 never-seen customers, Tuned Logistic Regression delivered 0.8439 ROC-AUC, 74.55% accuracy, 51.44% precision, and 76.51% churn recall. In concrete business terms, the model successfully intercepted 215 out of 281 actual churners, allowing the retention team to triage and salvage high-risk accounts. A precision of ~51% provides an actionable operating filter where 1 in every 2 flagged subscribers is a confirmed churner.",
      results: [
        "Caught 76.51% (215 of 281) of all actual leaving customers on completely unseen test data.",
        "Identified that 88.6% of all churners are on month-to-month contracts, making contract length the single strongest categorical indicator.",
        "Demonstrated that electronic check payers churn at 45.3%, compared to only 16.0% for credit card / bank auto-pay subscribers.",
        "Determined that customers with zero or one add-on service have a 46% churn rate, dropping to just 5% when accounts maintain 6 bundled add-on services."
      ],
      businessImplications: [
        "Contract Migration Campaign: Target month-to-month subscribers with tenure < 12 months with exclusive 1-year loyalty discounts before contract renewal cycles.",
        "Auto-Pay Adoption Incentive: Provide a one-time $10 account credit for switching from electronic check to automated bank/card payments to cut churn risk from 45% to 16%.",
        "Fiber Security Bundling: Bundle free online security and tech support trials into fiber optic subscriptions to mitigate the high baseline fiber churn (+0.547 coefficient).",
        "Operational Threshold Sweeps: Enable retention managers to dial the decision threshold from 0.50 up to 0.65 when offer budgets are constrained, prioritizing higher precision."
      ],
      limitations: [
        "Static Account Snapshot: Lacks longitudinal usage decline signals, weekly bandwidth trends, or call center complaint logs.",
        "Multicollinearity: tenure, MonthlyCharges, and TotalCharges exhibit correlation (VIF ≈ 9.5), causing individual continuous feature weights to interact."
      ],
      nextSteps: [
        "Incorporate customer support sentiment scores and NPS survey feedback into the feature store.",
        "Implement a dynamic threshold optimization matrix calculating expected dollar savings per retention campaign."
      ],
      workflowPipeline: [
        "Raw Data Ingestion (7,043 IBM records)",
        "Missing Data & Null Cleaning (TotalCharges)",
        "Stratified 70/15/15 Partitioning",
        "ColumnTransformer (OneHotEncoder + StandardScaler)",
        "Pipeline-Embedded SMOTE Resampling (3,622 : 3,622)",
        "6-Model Cross-Validation Benchmark",
        "RandomizedSearchCV Hyperparameter Tuning",
        "Held-Out Test Set Evaluation (1,057 records)",
        "Log-Odds Feature Coefficient Extraction",
        "Strategic Retention Playbook Formulation"
      ]
    }
  },
  {
    id: "insurance-charges-regression",
    slug: "insurance-charges-regression-prediction",
    title: "Predicting Medical Insurance Charges: Leakage-Safe Pipeline, XGBoost Tuning & SHAP Explanations",
    category: "Regression",
    featured: false,
    date: "2026",
    status: "Completed",
    shortDescription:
      "Predicting yearly medical insurance charges across 1,337 policyholder records: leakage-safe scikit-learn pipeline, 8-model CV benchmark, tuned XGBoost achieving test R² 0.921, and SHAP explainability.",
    description:
      "A production-standard machine learning regression case study analyzing 1,337 individual policyholder records to predict yearly healthcare charges and isolate the true cost drivers for risk-adjusted insurance pricing. Engineered an interaction-aware, leakage-safe scikit-learn Pipeline incorporating OneHotEncoder, StandardScaler, and zero-leakage interaction features. Benchmarked 8 distinct models (Linear Regression, Ridge, Lasso, Random Forest, Gradient Boosting, XGBoost, Log-target Linear, and Dummy baseline). Tuned XGBoost through 40 randomized search iterations, reducing CV RMSE by 12.8% to $4,696 and achieving a test R² of 0.921 (RMSE $3,373, MAE $2,074) on held-out evaluation, alongside an honest 20-split stability benchmark (R² 0.854 ± 0.04). Leveraged SHAP TreeExplainer to prove that the smoking-obesity interaction (smoker_obese: +$4,472 impact) and smoking status (+$3,537 impact) dominate actuarial risk.",
    problem:
      "Health insurers and underwriters price policies upfront without knowing individual health utilization. Mispriced risk leads to adverse selection: either running unsustainable medical-loss ratios on high-cost members or overpricing healthy subscribers and losing market share. Furthermore, standard regression approaches frequently suffer from data leakage during preprocessing or overlook nonlinear interaction effects between lifestyle factors (e.g. smoking) and biological markers (e.g. BMI).",
    objective:
      "Build a leakage-safe end-to-end regression pipeline on 1,337 policyholder records to predict annual healthcare charges, evaluate 8 models under strict 5-fold cross-validation, conduct hyperparameter optimization for tree ensembles, and provide SHAP-grounded explainability for risk underwriting.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Gradient Boosting",
      "Random Forest",
      "SHAP",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook"
    ],
    githubUrl: "https://github.com/sakibzzz641/Insurance-charges-regression",
    liveUrl: "",
    kaggleUrl: "https://www.kaggle.com/datasets/mirichoi0218/insurance",
    demoUrl: "",
    notebookUrl: "https://github.com/sakibzzz641/Insurance-charges-regression/blob/main/notebooks/analysis.ipynb",
    datasetUrl: "https://raw.githubusercontent.com/sakibzzz641/Insurance-charges-regression/main/data/insurance.csv",
    documentationUrl: "",
    caseStudyUrl: "#case-study-insurance-regression",
    presentationUrl: "",
    videoUrl: "",
    metrics: [
      {
        label: "Records Analyzed",
        value: "1,337",
        description: "Policyholders after deduplication"
      },
      {
        label: "Best Test R²",
        value: "0.921",
        description: "Tuned XGBoost (0.854 20-split avg)"
      },
      {
        label: "Test RMSE",
        value: "$3,373",
        description: "Held-out test set error (MAE $2,074)"
      },
      {
        label: "Smoker Impact",
        value: "3.8× / 4.9×",
        description: "Smoker avg $32k vs non-smoker $8.4k"
      }
    ],
    methodology: [
      "Data Cleaning & Deduplication: Identified and dropped 1 exact duplicate row (1,338 → 1,337 records). Validated zero missing values across all 7 attributes.",
      "Target Distribution Analysis: Discovered charge skewness of 1.52. Empirically tested a log-transformed target pipeline; rejected it as CV R² dropped from 0.842 to 0.469 in dollar terms.",
      "Interaction Discovery & Outlier Audit: Retained 139 IQR outliers (98% smokers, 96% BMI ≥ 30). Formulated interaction flags 'bmi_obese' (BMI ≥ 30) and 'smoker_obese' (smoker and BMI ≥ 30), which reduced linear CV RMSE by 25.1%.",
      "Leakage-Safe Pipeline Architecture: Stratified 80/20 train/test split on smoker status (1,069 train / 268 test). Encapsulated encoding, scaling, and feature generation in a single scikit-learn Pipeline fitted strictly on train folds.",
      "Hyperparameter Optimization & Stability: Conducted randomized search on XGBoost (40 iterations), Random Forest (25 iterations), and grid search on Gradient Boosting. Validated model variance across 20 random train/test splits.",
      "SHAP Explainability & Error Audit: Applied TreeExplainer to compute exact feature attribution ($). Diagnosed error concentration where 14 test records (> $5k error) account for 75.7% of total squared error."
    ],
    results: [
      "Tuned XGBoost achieved CV RMSE of $4,696 (a 12.8% improvement over default) and test R² of 0.921 (RMSE $3,373, MAE $2,074).",
      "Stability evaluation over 20 random splits confirmed reliable generalization with mean R² of 0.854 and RMSE of $4,565 ± $535.",
      "SHAP importance established that smoker_obese (+$4,472) and smoker status (+$3,537) dominate total predictions, with age (+$3,223) acting as the primary linear escalator.",
      "Accurate smoker predictions: Model achieved a 5.8% relative MAE ($1,882) on smokers, compared to 26.8% relative MAE ($2,124) on non-smokers."
    ],
    insights: [
      "Obesity without smoking adds minimal cost: Non-smokers with BMI ≥ 30 average $8,856 vs $7,977 for BMI < 30 (only 1.11×). Blanket BMI surcharges on non-smokers are unjustified.",
      "Smoking compounded by obesity is catastrophic: Smokers with BMI ≥ 30 average $41,558 (nearly 5× non-smoker average), accounting for 98% of high-cost outliers.",
      "Feature engineering outweighs algorithm complexity: Linear regression with the two interaction terms scored within $25 of tuned XGBoost on 20-split CV."
    ],
    tags: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Regression",
      "SHAP",
      "Feature Engineering",
      "Gradient Boosting",
      "Random Forest",
      "Pipeline",
      "Cross-Validation"
    ],
    images: [
      {
        src: "/images/projects/insurance-regression/07_predicted_vs_actual.png",
        alt: "Predicted vs Actual Charges Scatterplot",
        caption: "Predicted vs Actual Yearly Medical Charges ($) on 268 held-out test policyholders (R² = 0.921)",
        type: "chart"
      },
      {
        src: "/images/projects/insurance-regression/08_shap_importance.png",
        alt: "SHAP Global Feature Importance",
        caption: "SHAP Mean |Attribution| ($) highlighting smoker_obese (+$4,472), smoker_yes (+$3,537), and age (+$3,223)",
        type: "chart"
      },
      {
        src: "/images/projects/insurance-regression/09_shap_beeswarm.png",
        alt: "SHAP Beeswarm Summary Plot",
        caption: "SHAP Beeswarm Distribution demonstrating the binary divergence in medical expense trajectory",
        type: "chart"
      },
      {
        src: "/images/projects/insurance-regression/06_model_comparison_cv.png",
        alt: "8-Model Cross-Validation Comparison",
        caption: "5-Fold Cross-Validation RMSE distribution across 8 regression models",
        type: "chart"
      },
      {
        src: "/images/projects/insurance-regression/03_age_bmi_vs_charges.png",
        alt: "Charges vs Age and BMI Interaction",
        caption: "Bivariate interaction showing BMI escalation conditional on smoker status",
        type: "chart"
      },
      {
        src: "/images/projects/insurance-regression/05_correlation_heatmap.png",
        alt: "Feature Correlation Heatmap",
        caption: "Pearson correlation matrix across demographic predictors and target charges",
        type: "chart"
      }
    ],
    files: [
      {
        name: "analysis.ipynb",
        type: "IPYNB",
        description: "Complete Jupyter Notebook: EDA, Pipeline Preprocessing, 8-Model CV Benchmark, Tuning & SHAP",
        size: "1.2 MB",
        url: "https://github.com/sakibzzz641/Insurance-charges-regression/blob/main/notebooks/analysis.ipynb",
        isExternal: true
      },
      {
        name: "insurance.csv",
        type: "CSV",
        description: "Medical Cost Personal Dataset (1,338 records)",
        size: "55 KB",
        url: "https://raw.githubusercontent.com/sakibzzz641/Insurance-charges-regression/main/data/insurance.csv",
        isExternal: true
      },
      {
        name: "model_pipeline.pkl",
        type: "ZIP",
        description: "Serialized production XGBoost pipeline",
        size: "120 KB",
        url: "https://github.com/sakibzzz641/Insurance-charges-regression/tree/main/models",
        isExternal: true
      }
    ],
    caseStudy: {
      problem:
        "Health insurers price policies upfront based on limited demographic and lifestyle attributes. If predictive models miss critical non-linear interactions or suffer from data leakage during preprocessing, insurers either suffer severe underwriting losses on catastrophic claims or overprice healthy policyholders. Standard regression benchmarks often lack transparency and fail to isolate why specific demographics experience exponential healthcare cost spikes.",
      dataset:
        "Medical Cost Personal Datasets (Kaggle). 1,337 unique records after dropping one exact duplicate. Attributes: age (18-64), sex (female/male), bmi (15.96-53.13), children (0-5), smoker (yes/no), region (southwest, southeast, northwest, northeast), and annual charges ($1,121 - $63,770).",
      dataCleaning: [
        "Dropped 1 exact duplicate record (identical 19yo male, same charges down to cent): reduced dataset from 1,338 to 1,337 records.",
        "Verified zero null or NaN values across all 7 columns.",
        "Computed skewness of charges (1.52). Experimentally trained log-target models and found CV R² plummeted from 0.842 to 0.469 in dollar terms; retained original dollar scale.",
        "Audited 139 charge outliers outside IQR fence: 98% were smokers and 96% had BMI ≥ 30; retained all outliers to preserve high-risk signal."
      ],
      featureEngineering: [
        "bmi_obese: Binary flag indicating BMI ≥ 30.0 (clinical obesity threshold).",
        "smoker_obese: Interaction flag (smoker == 'yes' & BMI ≥ 30.0). Alone reduced linear model CV RMSE by 25.1% ($6,297 → $4,715) and lifted R² from 0.722 to 0.842.",
        "One-hot encoding for nominal variables (sex, region, smoker) with drop_first=True to avoid collinearity.",
        "StandardScaler normalization for continuous numeric predictors (age, bmi, children) embedded strictly inside scikit-learn Pipeline."
      ],
      dimensionalityReduction: [
        "Checked Multicollinearity: All Variance Inflation Factors (VIF) measured below 1.7, confirming zero detrimental multicollinearity.",
        "Leakage-Safe Stratified Splitting: 80/20 train/test split (1,069 train / 268 test) stratified by smoker status to preserve 20.5% smoker representation across folds.",
        "Single Unified Pipeline: Enclosed all transformation steps inside Pipeline so that feature transformations were fitted exclusively on training folds."
      ],
      clusteringApproach: [
        "8-Model Comparative Benchmark under 5-Fold Cross-Validation: Evaluated Dummy Mean, Linear Regression, Ridge, Lasso, Random Forest, Gradient Boosting, XGBoost, and Log-Target Linear.",
        "Hyperparameter Optimization: Ran 40-iteration RandomizedSearchCV on XGBoost, 25-iteration search on Random Forest, and 54-combination GridSearchCV on Gradient Boosting.",
        "Final Model Selection: Selected tuned XGBoost (CV RMSE $4,696, -12.8% improvement over default) with best parameters: learning_rate=0.03, max_depth=3, n_estimators=200, min_child_weight=10, subsample=0.85, reg_lambda=10.",
        "SHAP TreeExplainer Attribution: Computed exact dollar marginal contributions across all predictors."
      ],
      modelComparison: [
        {
          algorithm: "XGBoost (Tuned, Selected)",
          kOrEps: "lr=0.03, depth=3, n=200, min_child=10",
          silhouetteScore: "R²: 0.921 | RMSE: $3,373",
          strengths: "Best CV RMSE ($4,696) and lowest test MAE ($2,074). 12.8% improvement over default XGBoost.",
          notes: "20-split stability test: R² 0.854 ± 0.04, RMSE $4,565 ± $535."
        },
        {
          algorithm: "Random Forest (Tuned)",
          kOrEps: "n=300, max_depth=6, min_samples_split=5",
          silhouetteScore: "R²: 0.922 | RMSE: $3,357",
          strengths: "Strong test performance ($3,357 RMSE), highly robust to outlier variance.",
          notes: "Tuned CV RMSE: $4,714 (-7.0% improvement over default)."
        },
        {
          algorithm: "Gradient Boosting (Tuned)",
          kOrEps: "lr=0.05, max_depth=3, n=100",
          silhouetteScore: "R²: 0.921 | RMSE: $3,384",
          strengths: "Fast convergence, strong generalization across test samples.",
          notes: "Tuned CV RMSE: $4,700 (-2.5% improvement over default)."
        },
        {
          algorithm: "Linear Regression (with Interactions)",
          kOrEps: "smoker_obese & bmi_obese features",
          silhouetteScore: "R²: 0.918 | RMSE: $3,440",
          strengths: "Exceptional parsimony; within $25 RMSE of tuned XGBoost on 20-split average.",
          notes: "CV RMSE: $4,715, proving interaction terms capture core nonlinearity."
        },
        {
          algorithm: "Lasso / Ridge Regression",
          kOrEps: "alpha=1.0 / alpha=10.0",
          silhouetteScore: "R²: 0.842 | RMSE: $4,715",
          strengths: "L2/L1 shrinkage confirms stability of demographic coefficients.",
          notes: "Coefficients match OLS due to absence of multicollinearity (VIF < 1.7)."
        },
        {
          algorithm: "Dummy Baseline (Mean)",
          kOrEps: "strategy='mean'",
          silhouetteScore: "R²: -0.001 | RMSE: $12,013",
          strengths: "Empirical performance floor for calculating value added.",
          notes: "MAE: $9,081. Confirms 72% reduction in prediction error by ML models."
        }
      ],
      evaluation:
        "Evaluated across 5-fold cross-validation, held-out test set (268 policyholders), and 20 repeated random splits. Primary metric was RMSE ($) to penalize large underwriting errors, complemented by R² and MAE ($).",
      results: [
        "Tuned XGBoost demonstrated R² of 0.921 with test RMSE of $3,373 and MAE of $2,074 on the primary held-out partition.",
        "20-split Monte Carlo validation confirmed steady generalization: average R² 0.854 and RMSE $4,565 ± $535.",
        "SHAP TreeExplainer decomposed cost drivers: smoker_obese (+$4,472), smoker status (+$3,537), and age (+$3,223) drive over 90% of model variance.",
        "Accuracy asymmetry: Model achieves 5.8% relative MAE on smokers ($1,882 on $32,050 mean) vs 26.8% on non-smokers.",
        "Residual error concentration: 14 non-smoker records with high bills ($12k-$30k) account for 75.7% of total squared test error."
      ],
      businessImplications: [
        "Smoking status must be rigorously verified: Smoking is the dominant pricing factor; self-reported status needs clinic or cotinine validation.",
        "Target smoking cessation & obesity interventions together: Smokers with BMI ≥ 30 average $41,558 (nearly 5× non-smoker average). Dual-lifestyle wellness programmes yield the greatest ROI.",
        "Avoid blanket BMI surcharges for non-smokers: Non-smokers with BMI ≥ 30 cost only 1.11× more than non-obese non-smokers ($8,856 vs $7,977); penalizing non-smokers for BMI lacks statistical support.",
        "Regulatory Awareness: US ACA individual market regulations prohibit BMI rating surcharges; model insights should guide wellness risk management rather than unauthorized pricing."
      ],
      limitations: [
        "Absence of medical diagnoses: Lacks ICD-10 diagnostic codes, prescription history, and prior claims data, explaining the 14 high-bill non-smoker outliers.",
        "Demographic dataset: 1,337 records without longitudinal time dimension or regional health system cost indices."
      ],
      nextSteps: [
        "Integrate synthetic ICD-10 diagnostic categories to eliminate unexplained high-charge non-smoker variance.",
        "Construct an interactive Streamlit or web underwriting simulator allowing actuaries to visualize real-time SHAP waterfall breakdowns per applicant."
      ],
      workflowPipeline: [
        "Raw Data Ingestion (1,338 records)",
        "Exact Duplicate Removal (1,337 records)",
        "Skewness & Target Distribution Evaluation",
        "Interaction Feature Engineering (smoker_obese)",
        "Leak-Free Scikit-Learn Pipeline Build",
        "Stratified 80/20 Train/Test Partitioning",
        "8-Model 5-Fold Cross-Validation Benchmark",
        "Hyperparameter Optimization (XGBoost, RF, GBM)",
        "Held-Out Test Set & 20-Split Stability Audit",
        "SHAP TreeExplainer Attribution & Underwriting Playbook"
      ]
    }
  }
];

export const projectCategories = [
  "All",
  "Machine Learning",
  "Regression",
  "Classification",
  "Clustering"
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
