
"use client";

import Link from "next/link";

const blogCategories = [
  "All",
  "Programming",
  "Web Development",
  "Artificial Intelligence",
  "Software Engineering",
  "IT Career",
];

export default function BlogPageClient() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Hero Section */}
      <section className="bg-[#0F172A] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            NewaNext Knowledge Hub
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Learn Technology.
            <span className="text-blue-400">
              {" "}Build Your Future.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore programming tutorials, web development guides,
            AI innovations and practical software engineering
            knowledge to grow your IT career.
          </p>

          <Link
            href="/academy"
            className="mt-8 inline-block rounded-lg bg-amber-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Explore Our Courses →
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-bold">
          Explore Topics
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {blogCategories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-blue-600">
              KNOWLEDGE & INSIGHTS
            </span>
            <h2 className="mt-2 text-3xl font-bold">
              Latest Articles
            </h2>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
          <h3 className="text-xl font-semibold">
            New Articles Coming Soon
          </h3>

          <p className="mt-3 text-slate-600">
            We are preparing practical technology guides,
            programming tutorials and learning resources.
            Stay connected with NewaNext.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block font-semibold text-blue-600 hover:underline"
          >
            Contact NewaNext →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Start Your Technology Journey
          </h2>

          <p className="mt-5 text-slate-600">
            Learn practical skills and prepare yourself
            for the future of technology with NewaNext Academy.
          </p>

          <Link
            href="/academy"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Explore Academy →
          </Link>
        </div>
      </section>

    </main>
  );
}
