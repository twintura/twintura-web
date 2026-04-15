export default function AboutPage() {
  return (
    <div className="bg-primary text-white">

      {/* HERO */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          About{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #3B82F6, #8B5CF6)",
            }}
          >
            Twintura
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          We are a software company founded by twin developers...
        </p>
      </section>

      {/* STORY */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl sm:max-w-4xl mx-auto space-y-4 sm:space-y-6 text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Our Story
          </h2>

          <p className="text-gray-400 text-sm sm:text-base">
            Twintura started as a shared vision...
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Over time, we’ve worked on multiple projects...
          </p>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 sm:mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

            <div className="bg-card border border-default p-6 rounded-2xl hover:border-white/20 transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Quality
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                We focus on clean code.
              </p>
            </div>

            <div className="bg-card border border-default p-6 rounded-2xl hover:border-white/20 transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Performance
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Fast applications are our priority.
              </p>
            </div>

            <div className="bg-card border border-default p-6 rounded-2xl hover:border-white/20 transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Design
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                We build modern UX.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}