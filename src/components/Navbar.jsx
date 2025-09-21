import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    margin: "0 1rem",
    textDecoration: "none",
    color: isActive ? "#00ccffff" : "#fff", // active link color
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav style={{ display: "flex", justifyContent: "center", padding: "1rem", backgroundColor: "#020d30ff" }}>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </nav>
  );
}
