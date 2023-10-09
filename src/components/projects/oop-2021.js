import React from "react";

export default function Oop2021() {
  return (
    <div className="project-unit reversed">
      <div className="project-logo-container">
        <a href="https://github.com/Menemi/IS-2021-oop-3-sem" target="_blanc">
          <box-icon type="logo" name="github" size="250px" color="#00000" class="project-logo"></box-icon>
        </a>
      </div>
      <div className="project-info">
        <div>
          <h4 className="project-name highlight-text">OOP [2021]</h4>
        </div>
        <div className="project-unit-desription">
          <p>Полный семестр ООП, 6 различных проектов с использованием многих паттернов проектирования</p>
        </div>
        <div className="project-stack-container">
          <p className="project-stack">c#</p>
          <p className="project-stack">ооп</p>
        </div>
        <a href="https://github.com/Menemi/IS-2021-oop-3-sem" target="_blanc"><i class="bx bxl-github bx-md btn" /></a>
      </div>
    </div>
  );
}