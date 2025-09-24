import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    margin: "0 0.75rem",
    textDecoration: "none",
    color: isActive ? "#00ccff" : "#fff",
    fontWeight: isActive ? "700" : "500",
    padding: "0.25rem .5rem",
    borderRadius: "6px",
  });

  return (
    <nav className="navbar flex items-center justify-center p-3 relative bg-gray-900 dark:bg-gray-800 transition-colors duration-300">
      <div className="flex items-center">
        <NavLink to="/" style={linkStyle} end>🏡 Home</NavLink>
        <NavLink to="/about" style={linkStyle}>👩🏽 About</NavLink>
        <NavLink to="/projects" style={linkStyle}>🖥️ Projects</NavLink>
        <NavLink to="/contact" style={linkStyle}>📞 Contact</NavLink>
      </div>
      <div className="absolute right-4">
        <DarkModeToggle />
      </div>
    </nav>
  );
}
