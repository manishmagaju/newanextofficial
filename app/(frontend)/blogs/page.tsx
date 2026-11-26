
import type { Metadata } from "next";
import BlogPageClient from "../components/blogs/BlogPageClient";

export const metadata: Metadata = {
  title: "IT Blog & Technology Guides in Nepal | NewaNext",

  description:
    "Explore programming tutorials, web development guides, artificial intelligence, software engineering, IT career advice and technology insights from NewaNext Nepal.",

  keywords: [
    "IT blog Nepal",
    "technology blog Nepal",
    "programming tutorials",
    "web development tutorials",
    "software engineering",
    "artificial intelligence Nepal",
    "learn programming Nepal",
    "IT career Nepal",
    "coding tutorials",
    "NewaNext blog",
  ],

  alternates: {
    canonical: "https://newanext.com.np/blog",
  },

  openGraph: {
    title: "Technology, Programming & Innovation | NewaNext Blog",
    description:
      "Discover programming tutorials, technology insights and practical software engineering guides.",
    url: "https://newanext.com.np/blog",
    siteName: "NewaNext",
    type: "website",
    images: [
      {
        url: "https://newanext.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "NewaNext Technology Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NewaNext Blog | Technology & Programming",
    description:
      "Explore programming tutorials and technology insights from NewaNext.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "NewaNext Blog",
    description:
      "Programming tutorials, technology insights, AI and software engineering guides.",
    url: "https://newanext.com.np/blog",
    publisher: {
      "@type": "Organization",
      name: "NewaNext",
      url: "https://newanext.com.np",
      logo: {
        "@type": "ImageObject",
        url: "https://newanext.com.np/logo.png",
      },
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

      <BlogPageClient />
    </>
  );
}
