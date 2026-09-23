export interface CourseworkTopic {
  title: string;
  focus: string[];
  category: 'Foundation' | 'Analysis & Stats' | 'Machine Learning' | 'Advanced & Tools';
}

export const courseworkData: CourseworkTopic[] = [
  {
    title: "Python Programming Fundamentals & OOP",
    focus: ["Syntax & Data Structures", "Functions & Lambdas", "Object-Oriented Programming (Classes & Inheritance)", "Exception Handling & File I/O"],
    category: "Foundation"
  },
  {
    title: "SQL & Relational Databases",
    focus: ["Complex Joins (INNER, LEFT, RIGHT, FULL)", "Aggregation & Grouping", "Database Normalization (1NF to 3NF)", "Subqueries & Window Functions"],
    category: "Foundation"
  },
  {
    title: "NumPy & Pandas for Data Manipulation",
    focus: ["Vectorized Operations", "DataFrame Wrangling & Cleaning", "Missing Value Handling", "MultiIndex & Reshaping"],
    category: "Analysis & Stats"
  },
  {
    title: "Statistics for Data Science",
    focus: ["Descriptive & Inferential Statistics", "Probability Distributions", "Hypothesis Testing & p-values", "Correlation & Covariance"],
    category: "Analysis & Stats"
  },
  {
    title: "Data Visualization & Storytelling",
    focus: ["Matplotlib & Custom Plots", "Seaborn Statistical Graphics", "Distribution & Heatmap Profiling", "Visual Analytics Best Practices"],
    category: "Analysis & Stats"
  },
  {
    title: "Machine Learning (Supervised & Unsupervised)",
    focus: ["Regression (Linear, Ridge, Lasso)", "Classification (KNN, Trees, Logistic)", "Clustering (K-Means, Hierarchical, DBSCAN)", "Model Evaluation & Cross-Validation"],
    category: "Machine Learning"
  },
  {
    title: "Feature Engineering & Dimensionality Reduction",
    focus: ["Scaling & Normalization (StandardScaler)", "Logarithmic & Power Transformations", "One-Hot & Target Encoding", "Principal Component Analysis (PCA)"],
    category: "Machine Learning"
  },
  {
    title: "Introduction to Neural Networks & NLP",
    focus: ["Perceptron & Multilayer Perceptron Concepts", "Activation Functions & Backprop", "Text Preprocessing & Tokenization", "Vectorization (TF-IDF, Bag of Words)"],
    category: "Advanced & Tools"
  },
  {
    title: "Data Science with AI",
    focus: ["AI-assisted Development & Prompting", "Automating Data Pipelines", "Code Optimization & Refactoring", "Reproducible Research"],
    category: "Advanced & Tools"
  },
  {
    title: "Git & GitHub for Data Professionals",
    focus: ["Version Control Architecture", "Branching, Merging & Pull Requests", "Repository Structure for Data Science", "Collaborative Workflows"],
    category: "Advanced & Tools"
  }
];
