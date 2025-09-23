import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-6 text-center bg-gray-900 dark:bg-gray-800 text-white transition-colors duration-300">
      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/SWehara"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/senuri-wehara-a339461a4"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:senuriwehara03@gmail.com"
          className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
        >
          <FaEnvelope size={20} />
        </a>
      </div>

      {/* Copyright */}
      <div>
        © {new Date().getFullYear()} Senuri Wehara. All rights reserved
      </div>
    </footer>
  );
}
