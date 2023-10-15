import React from "react";

export default function WakatimeAddon() {
  return (
    <div className="project-unit big-logo reversed">
      <div className="project-logo-container no-align">
        <a href="https://menemi.github.io/wakatime-addon" target="_blanc">
          <img src="images/wakatime-addon.png" alt="wakatime" className="project-logo slide none-selectable"/>
        </a>
      </div>
      <div className="project-info">
        <div>
          <h4 className="project-name highlight-text">WakaTime Addon [2023]</h4>
        </div>
        <div className="project-unit-desription">
          <p>Frontend-часть проекта, созданного, как замена платной версии WakaTime для команд</p>
        </div>
        <div className="project-stack-container">
          <p className="project-stack">react</p>
          <p className="project-stack">chart.js</p>
        </div>
        <a href="https://github.com/Menemi/wakatime-addon" target="_blanc"><i class="bx bxl-github bx-md btn" /></a>
      </div>
    </div>
  );
}