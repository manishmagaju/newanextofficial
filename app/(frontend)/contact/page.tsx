
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact NewaNext | Technology Company in Nepal",

  description:
    "Contact NewaNext, a technology company in Nepal, for software development, web development, technology solutions and IT services.",

  alternates: {
    canonical: "https://newanext.com.np/contact",
  },

  openGraph: {
    title: "Contact NewaNext | Technology Company in Nepal",
    description:
      "Get in touch with NewaNext for software development, web development and IT services in Nepal.",
    url: "https://newanext.com.np/contact",
    siteName: "NewaNext",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact NewaNext",
    description:
      "Contact NewaNext for software development and IT services in Nepal.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
