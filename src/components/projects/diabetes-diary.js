import React from "react";

export default function DiabetesDiary() {
  return (
    <div className="project-unit">
      <div className="project-logo-container">
        <a href="https://github.com/Menemi/diabetes-diary" target="_blanc">
          <img src="images/diabetes-diary.png" alt="diabetes-diary" className="project-logo none-selectable" />
        </a>
      </div>
      <div className="project-info">
        <div>
          <h4 className="project-name highlight-text">Diabetes Diary [2023]</h4>
        </div>
        <div className="project-unit-desription">
          <p>Fullstack приложение для удобного ведения дневника диабетика</p>
        </div>
        <div className="project-stack-container">
          <p className="project-stack">react</p>
          <p className="project-stack">c#</p>
          <p className="project-stack">asp.net</p>
        </div>
        <a href="https://github.com/Menemi/diabetes-diary" target="_blanc"><i class="bx bxl-github bx-md btn" /></a>
      </div>
    </div>
  );
}