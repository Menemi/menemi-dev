import React from "react";

export default function Web2022() {
  return (
    <div className="project-unit reversed">
      <div className="project-logo-container">
        <a href="https://menemi.github.io/IS-2022-web-5-sem/" target="_blanc">
          <img src="images/web-2022.png" alt="web-2022" className="project-logo none-selectable" />
        </a>
      </div>
      <div className="project-info">
        <div>
          <h4 className="project-name highlight-text">Web [2022]</h4>
        </div>
        <div className="project-unit-desription">
          <p>Сайт для владельцев экзотических животных. Университетский web-проект. [frontend]</p>
        </div>
        <div className="project-stack-container">
          <p className="project-stack">HTML</p>
          <p className="project-stack">CSS</p>
          <p className="project-stack">JavaScript</p>
        </div>
        <a href="https://github.com/Menemi/IS-2022-web-5-sem" target="_blanc"><i class="bx bxl-github bx-md btn" /></a>
      </div>
    </div>
  );
}