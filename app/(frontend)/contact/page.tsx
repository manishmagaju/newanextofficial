
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact NewaNext | Technology Company in Nepal",
  description:
    "Get in touch with NewaNext, a technology company in Nepal, for web development, software development, digital solutions and IT services.",

  alternates: {
    canonical: "https://newanext.com.np/contact",
  },

  openGraph: {
    title: "Contact NewaNext | Let's Build Something Great",
    description:
      "Have a project or idea? Contact NewaNext for software development, web applications and technology solutions in Nepal.",
    url: "https://newanext.com.np/contact",
    siteName: "NewaNext",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact NewaNext",
    description:
      "Let's discuss your next technology project. Get in touch with NewaNext, Nepal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
