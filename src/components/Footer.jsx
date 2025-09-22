import React from "react";

export default function Footer() {
  return (
    <footer style={{ padding: "1rem", textAlign: "center", background: "#020d30", color: "white" }}>
      © {new Date().getFullYear()} Senuri Wehara. All rights reserved •
      <span style={{ marginLeft: 8 }}>
        <a href="https://github.com/SWehara" target="_blank" rel="noreferrer" style={{ color: "#9be7ff" }}> GitHub</a>
      </span>
    </footer>
  );
}
