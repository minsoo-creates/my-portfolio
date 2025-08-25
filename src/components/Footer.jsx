import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Memoji */}
        <div className="flex items-center">
          <img
            src="/images/minsoo-memoji.png"
            alt="Minsoo Memoji"
            className="h-10 w-10 rounded-full mr-4"
          />
        </div>

        {/* Center: Footer Text */}
        <p className="flex-1 text-center text-m text-muted-foreground">
          &copy; {new Date().getFullYear()} Minsoo Ku. Crafted with passion and precision.
        </p>

        {/* Right: Scroll to the Top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
