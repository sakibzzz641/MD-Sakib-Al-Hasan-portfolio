import { Certification } from '../types';

export const certificationsData: Certification[] = [
  {
    id: "ostad-ds-ml-python",
    title: "Data Science & Machine Learning with Python",
    issuer: "Ostad",
    issuerBadge: "Batch 56",
    date: "September 2026",
    credentialId: "C47906",
    credentialUrl: "https://ostad.app/share/certificate/c47905-md.-sakib-al-hasan",
    certificateImage: "", // Configurable image path for future upload: e.g. /images/certificates/ostad-ds-ml.png
    certificatePdf: "",   // Configurable PDF path for future upload: e.g. /documents/certificates/ostad-ds-ml.pdf
    grade: "Distinction",
    assessments: [
      { name: "Assignment", score: "100%" },
      { name: "Quiz", score: "97.3%" },
      { name: "Live Test", score: "94.7%" }
    ],
    description:
      "Comprehensive professional training program covering Python programming, Pandas, NumPy, statistical modeling, exploratory data analysis, feature engineering, supervised and unsupervised machine learning algorithms, Scikit-learn workflows, and model evaluation metrics.",
    skillsCovered: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Data Analysis",
      "Pandas & NumPy",
      "Model Evaluation",
      "Statistics",
      "Feature Engineering"
    ]
  },
  {
    id: "govt-ict-applications",
    title: "Computer Basic and ICT Applications",
    issuer: "Department of Youth Development",
    issuerBadge: "Govt. of Bangladesh",
    date: "July – December 2024",
    credentialId: "141231",
    credentialUrl: "", // EMPTY FOR NOW as requested; architecture allows adding later gracefully
    certificateImage: "",
    certificatePdf: "",
    grade: "A+",
    description:
      "Government-certified practical ICT and computing program by the Ministry of Youth and Sports, Government of Bangladesh. Covers core computer operations, office productivity software, database essentials, and structured digital workflows.",
    skillsCovered: [
      "Computer Fundamentals",
      "MS Excel",
      "MS Access",
      "MS Word",
      "MS PowerPoint",
      "ICT Operations"
    ]
  }
];
