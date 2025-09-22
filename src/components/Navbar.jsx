import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    return document.body.classList.contains("dark");
  });

  const toggleDark = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const linkStyle = ({ isActive }) => ({
    margin: "0 0.75rem",
    textDecoration: "none",
    color: isActive ? "#00ccff" : "#fff",
    fontWeight: isActive ? "700" : "500",
    padding: "0.25rem .5rem",
    borderRadius: "6px",
  });

  return (
    <nav className={`navbar ${dark ? "dark" : ""}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0.75rem 1rem" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavLink to="/" style={linkStyle} end>🏡 Home</NavLink>
        <NavLink to="/about" style={linkStyle}>👩🏽 About</NavLink>
        <NavLink to="/projects" style={linkStyle}>🖥️ Projects</NavLink>
        <NavLink to="/contact" style={linkStyle}>📞 Contact</NavLink>
      </div>
      <div style={{ marginLeft: "1rem", position: "absolute", right: "1rem" }}>
        <button
          onClick={toggleDark}
          className="ml-4 px-3 py-1 rounded-md border border-gray-700 text-sm"
        >
          {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
