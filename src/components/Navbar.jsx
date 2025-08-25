import { ClassName } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ScreenMode } from "./ScreenMode";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 py-5 bg-background/100 shadow-xs transition-all duration-300">
      <div className="container flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1">
          <a href="#hero" className="flex items-center">
            <img
              src="/images/minsoo-memoji.png"
              alt="Minsoo Memoji"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
          </a>
        </div>

        {/* Center: Nav items (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: Theme toggle + mobile menu */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <ScreenMode />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={ClassName(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
