import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navItem = [
    {
      path: "#home",
      name: "Главная"
    },
    {
      path: "#experience",
      name: "Опыт работы"
    },
    {
      path: "#education",
      name: "Образование"
    },
    {
      path: "#projects",
      name: "Проекты"
    },
    {
      path: "#contacts",
      name: "Контакты"
    }
  ]

  return (
    <>
      <header style={{ display: isOpen ? "none" : "flex" }}>
        <h2 className="header-title highlight-text">Menemi.dev</h2>
        <div className="header-container">
          <a href="#home" className="btn nav-btn highlight-text">Главная</a>
          <a href="#experience" className="btn nav-btn highlight-text">Опыт работы</a>
          <a href="#education" className="btn nav-btn highlight-text">Образование</a>
          <a href="#projects" className="btn nav-btn highlight-text">Проекты</a>
          <a href="#contacts" className="btn nav-btn highlight-text">Контакты</a>
        </div>

        <i class="bx bx-menu bx-md menu-btn" onClick={toggle} />
      </header>

      <div style={{ display: isOpen ? "block" : "none" }} className="navigation">
        <div className="header">
          <i class="bx bx-x bx-md menu-btn" onClick={toggle} />
        </div>
        <div className="nav-container" style={{ display: isOpen ? "flex" : "none" }}>
          {
            navItem.map((item, index) => (
              <a href={item.path} key={index} className="nav-item btn"
                onClick={toggle}>
                {item.name}
              </a>
            ))
          }
        </div>
      </div>
    </>
  );
}