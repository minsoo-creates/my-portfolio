import { useState } from "react";
import { ClassName } from "@/lib/utils";

const skills = [
  // Backend Languages
  {
    name: "Java",
    description: "Programming Language",
    category: "backend",
    icon: "/coding logos/java logo.svg",
  },
  {
    name: "C",
    description: "System Programming",
    category: "backend",
    icon: "/coding logos/c logo.svg",
  },
  {
    name: "Python",
    description: "Programming Language",
    category: "backend",
    icon: "/coding logos/python logo.svg",
  },
  {
    name: "Ocaml",
    description: "Functional Programming",
    category: "backend",
    icon: "/coding logos/ocaml logo.svg",
  },
  {
    name: "Rust",
    description: "Programming Language",
    category: "backend",
    icon: "/coding logos/rust logo.svg",
  },
  {
    name: "Ruby",
    description: "Programming Language",
    category: "backend",
    icon: "/coding logos/ruby logo.png",
  },

  // Frontend / Frameworks
  {
    name: "React",
    description: "Framework",
    category: "frontend",
    icon: "/coding logos/react logo.svg",
  },
  {
    name: "Flutter",
    description: "Framework",
    category: "frontend",
    icon: "/coding logos/flutter logo.svg",
  },
  {
    name: "Tailwind CSS",
    description: "User Interface",
    category: "frontend",
    icon: "/coding logos/tailwind logo.svg",
  },
  {
    name: "HTML",
    description: "User Interface",
    category: "frontend",
    icon: "/coding logos/html logo.svg",
  },
  {
    name: "CSS",
    description: "User Interface",
    category: "frontend",
    icon: "/coding logos/css logo.svg",
  },
];

const categories = ["All Skills", "Backend", "Frontend"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Skills");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All Skills" || skill.category === activeCategory.toLowerCase()
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category buttons */}
<div className="flex justify-center gap-2 md:gap-4 mb-12 overflow-x-auto">
  {categories.map((category, key) => (
    <button
      key={key}
      onClick={() => setActiveCategory(category)}
      className={ClassName(
        "flex-shrink-0 px-2 md:px-5 py-2 rounded-full transition-colors duration-300 capitalize",
        activeCategory === category
          ? "bg-primary text-primary-foreground"
          : "bg-secondary/70 text-foreground hover:bg-secondary/50"
      )}
    >
      {category}
    </button>
  ))}
</div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center justify-between"
            >
              {/* Left: Name + Icon */}
              <div className="flex items-center gap-2">
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-6 w-6 object-contain"
                  />
                )}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Right: Description */}
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
