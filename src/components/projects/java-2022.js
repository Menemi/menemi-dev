import React from "react";

export default function Java2022() {
  return (
    <div className="project-unit reversed">
      <div className="project-logo-container">
        <a href="https://github.com/Menemi/IS-2022-Java-4-sem" target="_blanc">
          <box-icon type="logo" name="github" size="250px" color="#00000" class="project-logo"></box-icon>
        </a>
      </div>
      <div className="project-info">
        <div>
          <h4 className="project-name highlight-text">Java [2022]</h4>
        </div>
        <div className="project-unit-desription">
          <p>Java-проект про котиков с использованием Spring. Swagger использовался, как API приложения</p>
        </div>
        <div className="project-stack-container">
          <p className="project-stack">java</p>
          <p className="project-stack">spring</p>
          <p className="project-stack">rest api</p>
        </div>
        <a href="https://github.com/Menemi/IS-2022-Java-4-sem" target="_blanc"><i class="bx bxl-github bx-md btn" /></a>
      </div>
    </div>
  );
}