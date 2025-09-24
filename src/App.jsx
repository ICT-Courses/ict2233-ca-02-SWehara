import React, { useState, useEffect } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <header className="p-6 flex justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main className="space-y-12">
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
