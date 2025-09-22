import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 text-center bg-gray-900 dark:bg-gray-800 text-white transition-colors duration-300">
      © {new Date().getFullYear()} Senuri Wehara. All rights reserved •
      <span className="ml-2">
        <a
          href="https://github.com/SWehara"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
        >
          GitHub
        </a>
      </span>
    </footer>
  );
}
