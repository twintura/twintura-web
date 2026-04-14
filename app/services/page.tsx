import Button from "@/components/Button";

export default function ServicesPage() {
  return (
    <main className="bg-primary text-white">

      {/* 🔥 HERO */}
      <section className="py-24 px-6 text-center">
        <h1 className="h1 mb-6">
          Our <span className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #3B82F6, #8B5CF6)",
              WebkitBackgroundClip: "text",
            }}>Services</span>
        </h1>

        <p className="text-base-premium max-w-2xl mx-auto">
          We design and build modern, scalable software solutions for startups
          and businesses that want to move fast and stand out.
        </p>
      </section>

      {/* ⚙️ SERVICES */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* 💻 WEB */}
          <div className="bg-card border border-default p-8 rounded-2xl hover:border-white/20 transition-all hover:-translate-y-1">
            <h3 className="h5 mb-4">Web Development</h3>

            <p className="text-muted-premium mb-4">
              High-performance web applications built with modern technologies.
            </p>

            <ul className="text-sm text-white/80 space-y-2">
              <li>• Next.js & React apps</li>
              <li>• SaaS platforms</li>
              <li>• Dashboards & admin panels</li>
              <li>• Performance optimization</li>
            </ul>
          </div>

          {/* 📱 MOBILE */}
          <div className="bg-card border border-default p-8 rounded-2xl hover:border-white/20 transition-all hover:-translate-y-1">
            <h3 className="h5 mb-4">Mobile Development</h3>

            <p className="text-muted-premium mb-4">
              Cross-platform mobile apps designed for performance and usability.
            </p>

            <ul className="text-sm text-white/80 space-y-2">
              <li>• React Native apps</li>
              <li>• iOS & Android</li>
              <li>• API integrations</li>
              <li>• App performance tuning</li>
            </ul>
          </div>

          {/* 🧠 CUSTOM */}
          <div className="bg-card border border-default p-8 rounded-2xl hover:border-white/20 transition-all hover:-translate-y-1">
            <h3 className="h5 mb-4">Custom Software</h3>

            <p className="text-muted-premium mb-4">
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

      {/* 🧠 PROCESS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2 mb-12">Our Process</h2>

          <div className="grid md:grid-cols-4 gap-8 text-left">

            <div>
              <h4 className="font-semibold mb-2">01. Discovery</h4>
              <p className="text-muted-premium">
                We understand your goals and requirements.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">02. Design</h4>
              <p className="text-muted-premium">
                We create clean and user-friendly interfaces.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">03. Development</h4>
              <p className="text-muted-premium">
                We build scalable and performant applications.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">04. Launch</h4>
              <p className="text-muted-premium">
                We deploy and support your product.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 💎 WHY US */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2 mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h4 className="font-semibold mb-2">⚡ Fast</h4>
              <p className="text-muted-premium">Quick and efficient delivery.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">🧠 Smart</h4>
              <p className="text-muted-premium">Clean and scalable architecture.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">🎨 Modern</h4>
              <p className="text-muted-premium">Beautiful and intuitive UI.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">🚀 Reliable</h4>
              <p className="text-muted-premium">Long-term support and quality.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="h2 mb-6">
          Have a project in mind?
        </h2>

        <p className="text-base-premium mb-8">
          Let’s build something powerful together.
        </p>

        <Button href="/contact">
          Start a Project
        </Button>
      </section>

    </main>
  );
}