import React from "react";
import DiabetesDiary from "./diabetes-diary";
import Java2022 from "./java-2022";
import Oop2021 from "./oop-2021";
import Web2022 from "./web-2022";
import Web2023 from "./web-2023";

export default function Projects() {
  return (
    <section id="projects">
      <div className="experience-container">
        <h3 className="highlight-text">Проекты</h3>
        <div className="jobs-list">
          <DiabetesDiary />
          <Oop2021 />
          <Java2022 />
          <Web2022 />
          <Web2023 />
        </div>
      </div>
    </section>
  );
}