import { Handshake, Laptop, Users } from "lucide-react";

export const AboutMeSection = () => {
  const skills = [
    {
      icon: <Laptop className="h-8 w-8 text-primary" />,
      title: "Programming & Development",
      description:
        "Advanced in Java, C, and intermediate Python & React. Experienced in building scalable software and web applications.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Leadership & Communication",
      description:
        "Led teams during United Nations Peacekeeping Operations and extracurricular projects. Skilled in cross-cultural communication and coordination.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Project & Operational Management",
      description:
        "Experienced in planning, organizing, and executing projects in academic, military, and startup environments.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-primary">Me</span>
        </h2> 
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col gap-10">
        {/* Subheading and Text */}
        <div className="space-y-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Structured & Global Minded Problem-Solver
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a structured and globally minded problem-solver with a strong
            foundation in computer science and cross-functional team
            collaboration. Experienced in connecting technical knowledge with
            real-world execution through leadership roles, international
            military service, and AI-focused projects.
          </p>
          <div className="flex justify-center pt-4">
            <a href="#contact" className="button-design">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Skills/Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="relative bg-card/70 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-20 pointer-events-none"></div>
              <div className="relative flex flex-col gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 w-max mx-auto">
                  {skill.icon}
                </div>
                <h4 className="font-bold text-lg text-center">{skill.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
