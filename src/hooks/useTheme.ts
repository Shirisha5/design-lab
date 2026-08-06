import { useState, useEffect } from "react";

type Theme = "day" | "night";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("day");

  // Load persisted theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("design-lab-theme") as Theme;
    if (saved === "day" || saved === "night") setTheme(saved);
  }, []);

  // Apply theme to root element and persist
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "night") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "night");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "day");
    }
    localStorage.setItem("design-lab-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "day" ? "night" : "day"));

  return { theme, toggleTheme } as const;
}
