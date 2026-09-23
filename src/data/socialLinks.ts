export interface SocialLink {
  name: string;
  url: string;
  type: 'professional' | 'social' | 'contact' | 'credential';
  username?: string;
  icon: string;
  description?: string;
}

export const socialLinks = {
  // Primary Professional Links
  linkedin: "https://www.linkedin.com/in/sakibzzz641/",
  github: "https://github.com/sakibzzz641",
  
  // Secondary / Social Link
  facebook: "https://www.facebook.com/sakibzzz641",
  
  // Direct Contact
  email: "mailto:sakibzzz641@gmail.com",
  phone: "tel:+8801909915855",
  rawEmail: "sakibzzz641@gmail.com",
  rawPhone: "+880 1909-915855",

  // Verified Credential Link
  ostadCertificate: "https://ostad.app/share/certificate/c47905-md.-sakib-al-hasan",

  // Configurable future profile links (empty until provided)
  kaggle: "",
  huggingFace: "",
  googleDrive: "",
  youtube: ""
};

export const socialProfilesList: SocialLink[] = [
  {
    name: "LinkedIn",
    url: socialLinks.linkedin,
    type: "professional",
    username: "sakibzzz641",
    icon: "linkedin",
    description: "Professional network, updates & career discussions"
  },
  {
    name: "GitHub",
    url: socialLinks.github,
    type: "professional",
    username: "sakibzzz641",
    icon: "github",
    description: "Code repositories, notebooks & data science workflows"
  },
  {
    name: "Facebook",
    url: socialLinks.facebook,
    type: "social",
    username: "sakibzzz641",
    icon: "facebook",
    description: "Personal social network"
  }
];
