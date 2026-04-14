import Link from "next/link";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  img: string;
  type: "external" | "internal";
  href: string;
  status: "Completed" | "In Progress";
  tech: string;
  imageType?: "cover" | "icon";
};

export default function ProductCard({ project }: { project: Project }) {
  const Card = (
    <div className="h-full flex flex-col bg-card border border-default p-6 rounded-2xl transition-all hover:-translate-y-1 hover:border-white/20">

      {/* 🖼 IMAGE */}
      <div className="h-40 mb-4 rounded-xl overflow-hidden">

        {project.imageType === "cover" ? (
          <div className="relative w-full h-full">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/0">
            <Image
              src={project.img}
              alt={project.title}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        )}

      </div>

      {/* 🧠 CONTENT */}
      <div className="flex flex-col flex-1">

        <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm text-muted opacity-70 leading-relaxed mb-4">
          {project.description}
        </p>

        <p className="text-xs text-white/60 mb-4">
          {project.tech}
        </p>

        {/* 📊 STATUS */}
        <span
          className={`mt-auto text-xs font-medium ${
            project.status === "Completed"
              ? "text-green-400"
              : "text-yellow-400"
          }`}
        >
          {project.status}
        </span>

      </div>
    </div>
  );

  // 🔀 Routing logic
  if (project.type === "external") {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        {Card}
      </a>
    );
  }

  return <Link href={project.href}>{Card}</Link>;
}