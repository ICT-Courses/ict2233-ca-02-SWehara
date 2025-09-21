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
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0.75rem 1rem", backgroundColor: "#020d30" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavLink to="/" style={linkStyle} end>🏡 Home</NavLink>
        <NavLink to="/about" style={linkStyle}>👩🏽 About</NavLink>
        <NavLink to="/projects" style={linkStyle}>🖥️ Projects</NavLink>
        <NavLink to="/contact" style={linkStyle}>📞 Contact</NavLink>
      </div>
      <div style={{ marginLeft: "1rem", position: "absolute", right: "1rem" }}>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
