
import type { Metadata } from "next";
import Courses from "../components/Courses";

export const metadata: Metadata = {
  title: "IT Courses in Nepal | NewaNext Academy",

  description:
    "Learn software engineering, web development, MERN Stack, Python, Flutter, AI and programming with NewaNext Academy. Build practical skills through affordable IT courses in Nepal.",

  keywords: [
    "IT courses in Nepal",
    "IT training Nepal",
    "NewaNext Academy",
    "programming courses Nepal",
    "web development course Nepal",
    "MERN Stack course Nepal",
    "software engineering course",
    "AI course Nepal",
    "React course Nepal",
    "Next.js course Nepal",
    "Python course Nepal",
    "Flutter course Nepal",
    "learn coding in Nepal",
    "online IT classes Nepal",
    "affordable IT courses Nepal",
  ],

  alternates: {
    canonical: "https://newanext.com.np/academy",
  },

  openGraph: {
    title: "NewaNext Academy | Learn Technology & Build Your Future",
    description:
      "Explore affordable IT courses, programming training and practical software development education in Nepal.",
    url: "https://newanext.com.np/academy",
    siteName: "NewaNext",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://newanext.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "NewaNext Academy - IT Education in Nepal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NewaNext Academy | IT Courses in Nepal",
    description:
      "Learn programming, software engineering and modern technology with NewaNext Academy.",
    images: ["https://newanext.com.np/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function AcademyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "NewaNext Academy",
    url: "https://newanext.com.np/academy",
    description:
      "NewaNext Academy provides programming education, software engineering training and practical IT courses in Nepal.",
    parentOrganization: {
      "@type": "Organization",
      name: "NewaNext",
      url: "https://newanext.com.np",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhaktapur",
      addressCountry: "NP",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Courses />
    </>
  );
}
