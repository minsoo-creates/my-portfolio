export const WorkExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Interpreter Sergeant (S3 Ops)",
      company: "United Nations Interim Forces in Lebanon (UNIFIL)",
      period: "Sep 2024 – May 2025",
      description:
        "Provided English–Korean interpretation for multinational meetings, drafted operational back-briefs, coordinated plans, and received commendations from the ROK Ambassador and UNIFIL leadership.",
      skills: [
        "English-Korean Interpretation",
        "Operational Planning",
        "Microsoft Office",
        "Presentation",
      ],
      icon: (
        <img
          src="/images/unifil logo.jpeg"
          alt="UNIFIL"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      id: 2,
      role: "Treasurer",
      company: "Korean Undergraduate Student Association (KUSA)",
      period: "Jul 2023 – Dec 2023",
      description:
        "Managed budget and finances, provided monthly reports, collected dues, and oversaw funding for events while collaborating with the executive board to ensure sustainability of organizational goals.",
      skills: [
        "Budget Management",
        "Financial Reporting",
        "Collaboration",
        "Event Planning",
      ],
      icon: (
        <img
          src="/images/umd kusa logo.png"
          alt="KUSA"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      id: 3,
      role: "Software Engineering Intern",
      company: "Sociable AI",
      period: "Jan 2023 – Aug 2023",
      description:
        "Developed and maintained a chatbot platform using TypeScript, React.js, TailwindCSS, and Python, integrating APIs like OpenAI and social platforms while improving performance through debugging and log analysis.",
      skills: ["Python", "Notion", "React", "Pitching"],
      icon: (
        <img
          src="/images/sociable_ai_logo.jpeg"
          alt="AI"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      id: 4,
      role: "Teaching Assistant",
      company: "University of Maryland (Korean Class)",
      period: "Jan 2023 – May 2023",
      description:
        "Taught Korean language and culture to 20+ students using interactive methods. Collaborated with faculty to design and revise curriculum aligned with standards.",
      skills: [
        "Teaching",
        "Curriculum Design",
        "Korean Language",
        "Student Engagement",
      ],
      icon: (
        <img
          src="/images/umd logo.svg"
          alt="UMD"
          className="w-full h-full object-cover"
        />
      ),
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 bg-card rounded-lg shadow hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Icons for experiences */}
                <div className="p-0 rounded-full bg-primary/10 flex-shrink-0 self-start w-12 h-12 overflow-hidden">
                  {exp.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1 text-left">
                  {/* Company Name and Period */}
                  <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mb-1 gap-1 md:gap-0">
                    <h3 className="text-lg md:text-xl font-bold text-primary">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  {/* Role / Job Title */}
                  <h4 className="text-sm italic text-muted-foreground mb-1">
                    {exp.role}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.description}
                  </p>

                  {/* Skills / Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
