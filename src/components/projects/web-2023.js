import React from "react";

export default function Web2023() {
  return (
    <div className="project-unit reversed">
      <div className="project-logo-container">
        <a href="https://github.com/Menemi/IS-2023-web-6-sem" target="_blanc">
          <box-icon type="logo" name="github" size="250px" color="#00000" class="project-logo"></box-icon>
        </a>
      </div>
      <div className="project-info">
        <div>
          <h4 className="project-name highlight-text">Web [2023]</h4>
        </div>
        <div className="project-unit-desription">
          <p>Сайт для владельцев экзотических животных. Университетский web-проект. [backend]</p>
        </div>
        <div className="project-stack-container">
          <p className="project-stack">TypeScript</p>
          <p className="project-stack">Prisma</p>
          <p className="project-stack">Swagger</p>
        </div>
        <a href="https://github.com/Menemi/IS-2023-web-6-sem" target="_blanc"><i class="bx bxl-github bx-md btn" /></a>
      </div>
    </div>
  );
}