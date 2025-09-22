import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  // Initialize dark mode from localStorage or prefers-color-scheme
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return true; // default dark mode
    }
  });

  useEffect(() => {
    const root = document.documentElement;

    // Add transition class once for smooth color changes
    root.classList.add("transition-colors", "duration-300");

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDark(d => !d)}
      className="ml-4 px-3 py-1 rounded-md border border-gray-700 text-sm transition-colors duration-300 hover:bg-gray-700 dark:hover:bg-gray-300 dark:hover:text-gray-900"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
