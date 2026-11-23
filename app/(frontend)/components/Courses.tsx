
import Link from "next/link";

export default function Courses() {
  const coursesList = [
    {
      title: "Graphic Design",
      description:
        "Adobe Illustrator Course Master Vector Design & Creative Illustration Techniques",
      tag: "Starts in 2 days",
      rating: "5.0",
      price: "RS 2500",
      oldPrice: "RS 25000",
      discount: "90% off",
      bgColor: "from-blue-600 via-cyan-500 to-indigo-600",
      tagBg: "bg-gradient-to-r from-amber-500 to-orange-500",
    },
    {
      title: "Cyber Security",
      description:
        "Secure your digital future with trusted cyber security solutions and practical defense techniques.",
      tag: "Starts in 5 days",
      rating: "5.0",
      price: "RS 15000",
      oldPrice: "RS 50000",
      discount: "70% off",
      bgColor: "from-purple-700 via-indigo-800 to-slate-900",
      tagBg: "bg-gradient-to-r from-amber-500 to-orange-500",
    },
    {
      title: "Mernstack",
      description:
        "Master the MERN Stack. Build the Web of Tomorrow with modern web architectures.",
      tag: "Starts in 2 days",
      rating: "5.0",
      price: "RS 10000",
      oldPrice: "RS 20000",
      discount: "50% off",
      bgColor: "from-emerald-600 via-teal-700 to-cyan-800",
      tagBg: "bg-gradient-to-r from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 text-gray-900 relative">

      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">

          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Upskill Today
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Our Courses
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Master in-demand skills with practical, project-based learning.
          </p>

        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {coursesList.map((course) => (

            <div
              key={course.title}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col min-w-0 hover:shadow-2xl transition-shadow duration-300 group"
            >

              {/* Course Banner */}
              <div
                className={`relative min-h-[220px] rounded-t-3xl bg-gradient-to-r ${course.bgColor} p-5 flex flex-col gap-8 text-white`}
              >

                {/* Decorative Background */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

                {/* Top Row: Tag and Rating */}
                <div className="relative z-10 flex justify-between items-start gap-3">

                  <span
                    className={`${course.tagBg} text-xs font-bold px-3.5 py-2 rounded-full text-white shadow-md uppercase tracking-wide`}
                  >
                    {course.tag}
                  </span>

                  <span className="bg-black/40 backdrop-blur-md border border-white/20 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shrink-0">
                    ⭐ {course.rating}
                  </span>

                </div>

                {/* Course Title */}
                <div className="relative z-10 flex-1 flex items-center justify-center w-full min-w-0 px-2 py-3">

                  <h3 className="w-full text-center font-black text-2xl sm:text-3xl leading-tight tracking-wide text-white drop-shadow-lg whitespace-normal break-words">
                    {course.title.toUpperCase()}
                  </h3>

                </div>

              </div>

              {/* Course Details */}
              <div className="p-6 flex-1">

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {course.description}
                </p>

              </div>

              {/* Pricing and Footer */}
              <div className="p-6 pt-0 mt-auto border-t border-gray-100 flex items-center justify-between gap-3">

                {/* Price */}
                <div className="min-w-0">

                  <div className="flex items-center gap-2 mt-4 flex-wrap">

                    <span className="text-base font-extrabold text-gray-900">
                      {course.price}
                    </span>

                    <span className="text-xs text-gray-400 line-through">
                      {course.oldPrice}
                    </span>

                  </div>

                  <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md mt-1">
                    {course.discount}
                  </span>

                </div>

                {/* Curriculum Button */}
                <Link
                  href="/curriculum"
                  className="mt-4 shrink-0 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
                >
                  Curriculum &rarr;
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
