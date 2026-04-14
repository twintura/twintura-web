import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-primary text-white">

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full flex flex-col items-center text-center">

          {/* 🔥 HEADLINE */}
          <h1 className="h1 mb-6 max-w-3xl">
            We build{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
              }}
            >
              modern software
            </span>{" "}
            that scales
          </h1>

          {/* 📝 SUBTEXT */}
          <p className="text-base-premium mb-12 max-w-xl">
            Twintura is a software company focused on building fast, scalable and
            beautifully designed applications for startups and businesses.
          </p>

          {/* 👨‍💻 TEAM */}
          <div className="flex w-full max-w-2xl justify-between items-center mb-12">

            {/* 👤 PERSON 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border border-default shadow-lg group">

                <Image
                  src="/projects/profil_pic.png"
                  alt="Igor Ivanov"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10" />

              </div>

              <p className="mt-4 font-medium">Igor Ivanov</p>
            </div>

            {/* 👤 PERSON 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border border-default shadow-lg group">

                <Image
                  src="/projects/profil_pic.png"
                  alt="Igor Ivanov"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10" />

              </div>

              <p className="mt-4 font-medium">Ivan Ivanov</p>
            </div>

          </div>


          {/* 📝 TEXT */}
          <h2 className="h3 mb-4">Founders</h2>
          <p className="text-base-premium max-w-2xl mx-auto text-center">
            Twintura is built by twin developers who share a vision for creating
            high-quality digital products. We focus on performance, scalability,
            and design — delivering solutions that help businesses grow.
          </p>



        </div>
      </section>

      {/* 💼 ABOUT */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Twintura is a software company dedicated to building modern, scalable, and
            high-performance applications. We combine engineering precision with thoughtful
            design to create digital products that are reliable, efficient, and built to grow.
          </p>
        </div>
      </section>

      {/* ⚙️ SERVICES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-card border border-default p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Web Apps</h3>
              <p className="text-muted">
                Modern, fast and scalable web applications built with the latest technologies.
              </p>
            </div>

            <div className="bg-card border border-default p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
              <p className="text-muted">
                Cross-platform mobile apps designed for performance and user experience.
              </p>
            </div>

            <div className="bg-card border border-default p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Custom Software</h3>
              <p className="text-muted">
                Tailored solutions for businesses that need something unique and powerful.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🚀 PROJECT / CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have a project in mind?
          </h2>

          <p className="text-muted mb-6">
            Let’s build something powerful together.
          </p>
          <Button href="/contact">Contact Us</Button>
        </div>
      </section>

    </main>
  );
}