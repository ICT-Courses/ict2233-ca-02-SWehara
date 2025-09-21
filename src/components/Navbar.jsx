import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
      <Link to="/projects" style={{ margin: "0 1rem" }}>Projects</Link>
      <Link to="/contacts" style={{ margin: "0 1rem" }}>Contacts</Link>
    </nav>
  );
}
