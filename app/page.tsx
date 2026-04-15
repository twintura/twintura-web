import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="bg-primary text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-6xl w-full flex flex-col items-center text-center">

          <h1 className="h1 mb-6 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
            We build{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #3B82F6, #8B5CF6)",
              }}
            >
              modern software
            </span>{" "}
            that scales
          </h1>

          <p className="text-base-premium mb-10 sm:mb-12 max-w-xl text-sm sm:text-base">
            Twintura is a software company focused on building fast, scalable and
            beautifully designed applications for startups and businesses.
          </p>

          {/* TEAM */}
          <div className="flex justify-center gap-6 sm:gap-10 md:gap-20 items-center mb-12">

            {/* PERSON 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden border border-default shadow-lg group">
                <Image
                  src="/projects/profil_pic.png"
                  alt="Igor Ivanov"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-medium">
                Igor Ivanov
              </p>
            </div>

            {/* PERSON 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden border border-default shadow-lg group">
                <Image
                  src="/projects/profil_pic.png"
                  alt="Ivan Ivanov"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-medium">
                Ivan Ivanov
              </p>
            </div>

          </div>

          <h2 className="h3 mb-4 text-xl sm:text-2xl">Founders</h2>
          <p className="text-base-premium max-w-2xl mx-auto text-sm sm:text-base">
            Twintura is built by twin developers who share a vision for creating
            high-quality digital products. We focus on performance, scalability,
            and design — delivering solutions that help businesses grow.
          </p>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h2>
          <p className="text-muted max-w-2xl mx-auto text-sm sm:text-base">
            Twintura is a software company dedicated to building modern, scalable, and
            high-performance applications.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            <div className="bg-card border border-default p-6 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Web Apps</h3>
              <p className="text-muted text-sm sm:text-base">
                Modern, fast and scalable web applications.
              </p>
            </div>

            <div className="bg-card border border-default p-6 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Mobile Apps</h3>
              <p className="text-muted text-sm sm:text-base">
                Cross-platform mobile apps.
              </p>
            </div>

            <div className="bg-card border border-default p-6 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Custom Software</h3>
              <p className="text-muted text-sm sm:text-base">
                Tailored solutions for businesses.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Have a project in mind?
          </h2>

          <p className="text-muted mb-6 text-sm sm:text-base">
            Let’s build something powerful together.
          </p>

          <Button href="/contact">Contact Us</Button>
        </div>
      </section>

    </main>
  );
}