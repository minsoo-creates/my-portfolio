import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { ClassName } from "@/lib/utils";

export const ScreenMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const backgroundTheme = localStorage.getItem("theme");
    if (backgroundTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={ClassName(
        "p-2 rounded-full transition-colors duration-300 focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-orange-600" />
      ) : (
        <Moon className="h-6 w-6 text-black" />
      )}
    </button>
  );
};
