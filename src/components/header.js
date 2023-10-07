import React from "react";

export default function Header() {
  return (
    <header>
      <h2 className="header-title highlight-text">Menemi.dev</h2>
      <div className="nav-container">
        <a href="#home" className="btn nav-btn highlight-text">Главная</a>
        <a href="#experience" className="btn nav-btn highlight-text">Опыт работы</a>
        <a href="#education" className="btn nav-btn highlight-text">Образование</a>
        <a href="#projects" className="btn nav-btn highlight-text">Проекты</a>
        <a href="#contacts" className="btn nav-btn highlight-text">Контакты</a>
      </div>
    </header>
  );
}