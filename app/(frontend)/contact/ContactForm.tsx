
"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `New Project Inquiry - ${service}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:newanext1@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    form.reset();
  };

  const contactDetails = [
    {
      icon: "✉",
      title: "Email Us",
      value: "newanext1@gmail.com",
      link: "mailto:newanext1@gmail.com",
      description: "Send us your project requirements.",
    },
    {
      icon: "📍",
      title: "Our Location",
      value: "Bhaktapur, Nepal",
      link: "https://www.google.com/maps/search/?api=1&query=Bhaktapur%2C+Nepal",
      description: "Proudly building technology from Nepal.",
    },
    {
      icon: "🌐",
      title: "Website",
      value: "newanext.com.np",
      link: "https://newanext.com.np",
      description: "Explore our company and services.",
    },
  ];

  const services = [
    "Web Development",
    "Software Development",
    "Mobile App Development",
    "School Management System",
    "IT Training & Education",
    "Other / General Inquiry",
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] text-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Let's Connect
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Have an Idea?
            <span className="block bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Let's Build It Together.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Whether you have a project, a business challenge, or a
            new idea, NewaNext is ready to help turn your vision
            into reality through technology.
          </p>

          <a
            href="#contact-form"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
          >
            Start a Conversation
            <span>→</span>
          </a>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact-form"
        className="px-6 py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-400">
              Contact Information
            </span>

            <h2 className="mt-5 text-3xl font-bold md:text-5xl">
              Let's Talk About
              <span className="block text-blue-400">
                Your Next Project.
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-slate-400">
              We believe every great solution starts with a
              conversation. Tell us what you are planning, and
              let's explore how technology can make it happen.
            </p>

            <div className="mt-10 space-y-5">
              {contactDetails.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target={
                    item.link.startsWith("https")
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/50 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-blue-400">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-400">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* BRAND MESSAGE */}
            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                NewaNext
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Code the Vision. Build the Future.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                A technology company from Nepal focused on
                software development, digital innovation and
                IT education.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-3xl border border-white/10 bg-[#172238] p-6 shadow-2xl sm:p-10">

            <div className="mb-8">
              <h2 className="text-2xl font-bold md:text-3xl">
                Send Us a Message
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Fill out the form below and tell us how we can
                help you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                  />
                </div>

              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+977 98XXXXXXXX"
                  className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Interested In *
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-[#0F172A] px-4 py-4 text-white outline-none transition focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project or idea..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0F172A] px-4 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500"
              >
                Send Message
                <span>→</span>
              </button>

              {submitted && (
                <p className="text-center text-sm text-amber-400">
                  Your email application should open with your
                  message prepared. Please send it to complete
                  your inquiry.
                </p>
              )}

              <p className="text-center text-xs leading-6 text-slate-500">
                Your information will only be used to respond
                to your inquiry.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-700/20 to-indigo-500/10 px-6 py-16 text-center md:px-16">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-amber-400">
              Ready to Get Started?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold md:text-5xl">
              Your Next Big Idea Starts With a Conversation.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-400">
              Let's work together to create meaningful
              technology solutions.
            </p>

            <a
              href="mailto:hello@newanext.com"
              className="mt-8 inline-flex rounded-xl bg-amber-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-amber-300"
            >
              Contact NewaNext →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
