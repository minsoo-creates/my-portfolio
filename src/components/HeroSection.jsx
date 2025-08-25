export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary ml-1">Minsoo</span> Ku
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
            I am a Junior Computer Science student at the University of Maryland, College Park, who previously served in United Nations Peacekeeping Operations.
          </p>
          <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/images/Minsoo Ku Resume - cmsc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-design bg-transparent text-primary border border-primary hover:bg-primary/10"
            >
              View Resume
            </a>
            <a href="#projects" className="button-design">
              View My Work
            </a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/images/4DE3A417-6B52-4182-AA3F-FFC47D807BC3.jpeg"
            alt="Minsoo Ku"
            className="hidden md:block w-[28rem] h-[28rem] object-cover shadow-lg rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
