import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      // default: respect prefers-color-scheme
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
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
      className="ml-4 px-3 py-1 rounded-md border border-gray-700 text-sm"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
