import Link from "next/link";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";

const projects = [
  {
    title: "Faculty of Music Arts Skopje",
    description: "Modern web platform for the Faculty of Music Arts in Skopje, designed to present programs, events, and academic content in a clear and accessible way.",
    status: "Completed",
    type: "external",
    href: "https://www.fmu.ukim.edu.mk/",
    tech: "Next.js • Tailwind • Firebase",
    img: "/projects/FMU.png",
    imageType: "cover"
  },
  {
    title: "BarberBook",
    description: "Appointment booking system for barbershops, designed to simplify scheduling, manage clients, and streamline daily operations.",
    type: "internal",
    href: "/products/barberbook",
    status: "In Progress",
    tech: "React Native • Expo",
    img: "/projects/barber.svg",
    imageType: "icon"
  },
  {
    title: "Pametko",
    description: "Interactive learning app for children, designed to make education fun, engaging, and effective through gamified lessons.",
    type: "internal",
    href: "/products/pametko",
    status: "In Progress",
    tech: "React Native • Expo",
    img: '/projects/pametko.png',
    imageType: "icon"
  },
] as const;

export default function ProjectsPage() {
  return (
    <main className="bg-primary text-white min-h-screen px-6 py-24">

      {/* 🔥 HERO */}
      <section className="text-center mb-20">
        <h1 className="h1 mb-6">
          Our <span className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #3B82F6, #8B5CF6)",
              WebkitBackgroundClip: "text",
            }}>Projects</span>
        </h1>

        <p className="text-base-premium max-w-2xl mx-auto">
          A selection of projects we’ve built and are currently working on.
        </p>
      </section>

      {/* 🧩 PROJECTS GRID */}
      <section >

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, i) => (
            <ProductCard key={i} project={project} />
          ))}
        </div>

        {/* {projects.map((projects) => {
          
        )}
        } */}



      </section>

      {/* 🚀 CTA */}
      <section className="mt-24 text-center">
        <h2 className="h2 mb-6">
          Want to build something like this?
        </h2>

        <p className="text-base-premium mb-8">
          Let’s create your next project together.
        </p>

        <Button href="/contact">
          Start a Project
        </Button>
      </section>

    </main>
  );
}