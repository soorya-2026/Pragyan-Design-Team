export interface SiteConfig {
  name: string;
  shortName: string;
  college: string;
  collegeShort: string;
  location: string;
  coordinates: {
    lat: string;
    lng: string;
  };
  fest: string;
  instagramHandle: string;
  instagramUrl: string;
  pragyanUrl: string;
  nitTrichyUrl: string;
  certifications: string[];
  description: string;
  officialLogo: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Pragyan Design Team",
  shortName: "PDT",
  college: "National Institute of Technology, Tiruchirappalli",
  collegeShort: "NIT Trichy",
  location: "Tiruchirappalli, Tamil Nadu, India",
  coordinates: {
    lat: "10.7589° N",
    lng: "78.8132° E",
  },
  fest: "Pragyan '26",
  instagramHandle: "@pdtttttttt._",
  instagramUrl: "https://www.instagram.com/pdtttttttt._/",
  pragyanUrl: "https://pragyan.org/",
  nitTrichyUrl: "https://www.nitt.edu/",
  certifications: ["ISO 9001:2015 Certified", "ISO 20121:2012 Certified"],
  description:
    "The Design Team shapes Pragyan's visual identity by creating themes, logos, social media content, and branding materials. The team turns ideas into compelling visuals that bring Pragyan's vision to life.",
  officialLogo: "/src/assets/images/pdt-logo.png",
};
