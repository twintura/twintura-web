import Button from "@/components/Button";

export default function ServicesPage() {
  return (
    <main className="bg-primary text-white">

      {/* HERO */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 text-center">
        <h1 className="h1 mb-6 text-3xl sm:text-4xl md:text-5xl">
          Our{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #3B82F6, #8B5CF6)",
            }}
          >
            Services
          </span>
        </h1>

        <p className="text-base-premium max-w-2xl mx-auto text-sm sm:text-base">
          We design and build modern, scalable software solutions for startups
          and businesses that want to move fast and stand out.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* WEB */}
          <div className="bg-card border border-default p-6 sm:p-8 rounded-2xl hover:border-white/20 transition-all hover:-translate-y-1">
            <h3 className="h5 mb-4 text-lg sm:text-xl">Web Development</h3>

            <p className="text-muted-premium mb-4 text-sm sm:text-base">
              High-performance web applications built with modern technologies.
            </p>

            <ul className="text-sm text-white/80 space-y-2">
              <li>• Next.js & React apps</li>
              <li>• SaaS platforms</li>
              <li>• Dashboards & admin panels</li>
              <li>• Performance optimization</li>
            </ul>
          </div>

          {/* MOBILE */}
          <div className="bg-card border border-default p-6 sm:p-8 rounded-2xl hover:border-white/20 transition-all hover:-translate-y-1">
            <h3 className="h5 mb-4 text-lg sm:text-xl">Mobile Development</h3>

            <p className="text-muted-premium mb-4 text-sm sm:text-base">
              Cross-platform mobile apps designed for performance and usability.
            </p>

            <ul className="text-sm text-white/80 space-y-2">
              <li>• React Native apps</li>
              <li>• iOS & Android</li>
              <li>• API integrations</li>
              <li>• App performance tuning</li>
            </ul>
          </div>

          {/* CUSTOM */}
          <div className="bg-card border border-default p-6 sm:p-8 rounded-2xl hover:border-white/20 transition-all hover:-translate-y-1">
            <h3 className="h5 mb-4 text-lg sm:text-xl">Custom Software</h3>

            <p className="text-muted-premium mb-4 text-sm sm:text-base">
              Tailored solutions built specifically for your business needs.
            </p>

            <ul className="text-sm text-white/80 space-y-2">
              <li>• Internal tools</li>
              <li>• Automation systems</li>
              <li>• Business platforms</li>
              <li>• Custom integrations</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2 mb-10 sm:mb-12 text-2xl sm:text-3xl">
            Our Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-left">

            <div>
              <h4 className="font-semibold mb-2">01. Discovery</h4>
              <p className="text-muted-premium text-sm sm:text-base">
                We understand your goals and requirements.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">02. Design</h4>
              <p className="text-muted-premium text-sm sm:text-base">
                We create clean and user-friendly interfaces.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">03. Development</h4>
              <p className="text-muted-premium text-sm sm:text-base">
                We build scalable and performant applications.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">04. Launch</h4>
              <p className="text-muted-premium text-sm sm:text-base">
                We deploy and support your product.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2 mb-10 sm:mb-12 text-2xl sm:text-3xl">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

            <div>
              <h4 className="font-semibold mb-2">⚡ Fast</h4>
              <p className="text-muted-premium text-sm sm:text-base">
                Quick and efficient delivery.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">🧠 Smart</h4>
              <p className="text-muted-premium text-sm sm:text-base">
                Clean and scalable architecture.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">🎨 Modern</h4>
              <p className="text-muted-premium text-sm sm:text-base">
                Beautiful and intuitive UI.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">🚀 Reliable</h4>
              <p className="text-muted-premium text-sm sm:text-base">
                Long-term support and quality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 text-center">
        <h2 className="h2 mb-6 text-2xl sm:text-3xl">
          Have a project in mind?
        </h2>

        <p className="text-base-premium mb-8 text-sm sm:text-base">
          Let’s build something powerful together.
        </p>

        <Button href="/contact">
          Start a Project
        </Button>
      </section>

    </main>
  );
}