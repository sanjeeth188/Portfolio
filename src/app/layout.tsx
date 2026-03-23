import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjeeth188.github.io/Portfolio/"),
  title: {
    default: "Sanjeethan Jeganathan | Data Analyst & Business Analyst Portfolio",
    template: "%s | Sanjeethan Jeganathan",
  },
  description:
    "Sanjeethan Jeganathan — Data Science student and aspiring Data Analyst & Business Analyst based in Colombo, Sri Lanka. Skilled in SQL, Python, Power BI, Tableau, and business analysis. Available for internships and graduate analyst roles.",
  keywords: [
    "Sanjeethan Jeganathan",
    "Data Science Student Sri Lanka",
    "Data Analyst Portfolio",
    "Business Analyst Portfolio",
    "Junior Data Analyst Sri Lanka",
    "Data Science Portfolio",
    "Power BI",
    "SQL Python",
    "Cardiff Metropolitan University",
  ],
  authors: [{ name: "Sanjeethan Jeganathan" }],
  creator: "Sanjeethan Jeganathan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanjeeth188.github.io/Portfolio/",
    title: "Sanjeethan Jeganathan | Data Analyst & Business Analyst Portfolio",
    description:
      "Analytical and detail-oriented Data Science student with hands-on experience in application support, e-commerce analytics, and digital performance tracking.",
    siteName: "Sanjeethan Jeganathan Portfolio",
    images: [
      {
        url: "/Portfolio/profile.jpg",
        width: 800,
        height: 800,
        alt: "Sanjeethan Jeganathan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjeethan Jeganathan | Data Analyst & Business Analyst Portfolio",
    description:
      "Data Science student | Aspiring Data Analyst & Business Analyst based in Colombo, Sri Lanka.",
    images: ["/Portfolio/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sanjeethan Jeganathan",
  jobTitle: "Data Science Student | Aspiring Data Analyst & Business Analyst",
  description:
    "Data Science student with practical experience in application support, e-commerce analytics, dashboard reporting, and stakeholder coordination.",
  url: "https://sanjeeth188.github.io/Portfolio/",
  email: "sanjeethdilani18@gmail.com",
  telephone: "+94757014955",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Cardiff Metropolitan University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Informatics Institute of Technology (IIT)",
    },
  ],
  knowsAbout: [
    "Data Analysis",
    "Business Analysis",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Machine Learning",
  ],
  sameAs: [
    "https://linkedin.com/in/sanjeethan-jeganathan",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
