import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RouteN",
    description:
      "Full-stack Flutter travel app with Firebase backend, combining smart destination search, personalized recommendations, Google Maps integration, and a community platform with reviews, photos, and social features.",
    image: "/images/routen logo.jpg",
    tags: ["Flutter", "Firebase", "Travel App"],
    githubUrl: "https://github.com/minsoo-creates/RouteN",
  },
  {
    id: 2,
    title: "Sociable AI",
    description:
      "A SaaS platform that automates proactive and reactive social media community management across multiple platforms, helping brands increase engagement, track virality, and convert interactions into measurable growth using AI-driven tools.",
    image: "/images/sociable website.png",
    tags: ["Python", "Web Dev", "Figma"],
    demoUrl: "https://sociable.how",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "My personal developer portfolio showcasing skills, experiences, and projects. Built with React, TailwindCSS, and deployed on Netlify with a clean, responsive design.",
    image: "/images/minsoo-memoji.png",
    tags: ["React", "TailwindCSS", "Netlify"],
    githubUrl: "https://github.com/minsoo-creates/my-portfolio",
    demoUrl: "https://minsooku.netlify.app",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my personal and collaborative projects, showcasing
          skills in software development, concurrency, and AI-driven
          applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 w-full overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Buttons at the bottom-left */}
                <div className="flex space-x-3 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
