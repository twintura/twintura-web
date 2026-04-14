export default function AboutPage() {
  return (
    <div className="bg-primary text-white">

      <section className="py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          About{" "} 
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #3B82F6, #8B5CF6)",
              WebkitBackgroundClip: "text",
            }}
          >
            Twintura
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          We are a software company founded by twin developers...
        </p>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">

          <h2 className="text-3xl font-semibold">Our Story</h2>

          <p className="text-gray-400">
            Twintura started as a shared vision...
          </p>

          <p className="text-gray-400">
            Over time, we’ve worked on multiple projects...
          </p>

        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-card border border-default p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-400">
                We focus on clean code.
              </p>
            </div>

            <div className="bg-card border border-default p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-gray-400">
                Fast applications are our priority.
              </p>
            </div>

            <div className="bg-card border border-default p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-400">
                We build modern UX.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}