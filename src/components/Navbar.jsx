import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  // Dynamic style for active/inactive links
  const linkStyle = ({ isActive }) => ({
    margin: "0 0.75rem",
    textDecoration: "none",
    color: isActive ? "#00ccff" : "#fff",
    fontWeight: isActive ? "700" : "500",
    padding: "0.25rem .5rem",
    borderRadius: "6px",
    transition: "color 0.3s",
  });

  return (
    <nav className="flex items-center justify-center p-3 bg-gray-900 dark:bg-gray-800 relative">
      {/* Links */}
      <div className="flex items-center">
        <NavLink to="/" style={linkStyle} end>
          🏡 Home
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          👩🏽 About
        </NavLink>
        <NavLink to="/projects" style={linkStyle}>
          🖥️ Projects
        </NavLink>
        <NavLink to="/contact" style={linkStyle}>
          📞 Contact
        </NavLink>
      </div>

      {/* Dark mode toggle */}
      <div className="absolute right-4">
        <DarkModeToggle />
      </div>
    </nav>
  );
}
