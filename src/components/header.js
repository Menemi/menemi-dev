import React from "react";

export default function Header() {
  return (
    <header>
      <h2 className="header-title">Menemi.dev</h2>
      <div className="nav-container">
        <a href="#home" className="btn nav-btn">Home</a>
        <a href="#about" className="btn nav-btn">About</a>
        <a href="#projects" className="btn nav-btn">Projects</a>
        <a href="#contacts" className="btn nav-btn">Contacts</a>
      </div>
    </header>
  );
}