import React from "react";

export default function Home() {
  return (
    <section id="home">
      <div className="home-header">
        <div className="home-title">
          <div className="home-main-title">
            <h1 className="highlight-text">
              Разработчик
            </h1>
            <i class="bx bxl-codepen bx-md highlight-text" />
          </div>
          <p>
            Привет, Я Титов Даниил. Разработчик, живущий в Санкт-Петербурге, Россия. <i class="bx bx-map" />
          </p>
          <div className="home-contacts">
            <a href="https://github.com/Menemi" target="_blanc"><i class="bx bxl-github bx-md btn" /></a>
            <a href="https://t.me/Menemi" target="_blanc"><i class="bx bxl-telegram bx-md btn" /></a>
          </div>
        </div>
        <img src="images/photo.jpg" alt="personal" className="home-avatar none-selectable" />
      </div>
      <div className="home-stack-container">
        <p>Навыки</p>
        <i class="bx bx-dots-vertical-rounded" />
        <div className="home-stack">
          <div className="home-stack-block-icons">
            <i className="bx bxl-html5 bx-lg black-icon" />
            <i className="bx bxl-css3 bx-lg black-icon" />
          </div>
          <div className="home-stack-block-icons">
            <i className="bx bxl-javascript bx-lg black-icon" />
            <i className="bx bxl-typescript bx-lg black-icon" />
          </div>
          <div className="home-stack-block-icons">
            <i className="bx bxl-react bx-lg black-icon" />
            <i className="bx bxl-angular bx-lg black-icon" />
          </div>
          <div className="home-stack-block-icons">
            <img src="images/c-sharp.svg" alt="c-sharp" className="lg-icon none-selectable" />
            <i className="bx bxl-python bx-lg black-icon" />
          </div>
          <div className="home-stack-block-icons">
            <i className="bx bxl-c-plus-plus bx-lg black-icon" />
            <i className="bx bxl-java bx-lg black-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}