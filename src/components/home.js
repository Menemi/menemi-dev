import React from "react";

export default function Home() {
  return (
    <section id="home">
      <div className="home-header">
        <div className="home-title">
          <h1>
            Разработчик <i class="bx bxl-codepen" />
          </h1>
          <p>
            Привет, Я Титов Даниил. Разработчик, живущий в Санкт-Петербурге, Россия. <i class="bx bx-map" />
          </p>
          <div>
            <a href="https://github.com/Menemi" target="_blanc"><i class="bx bxl-github btn" /></a>
            <a href="https://t.me/Menemi" target="_blanc"><i class="bx bxl-telegram btn" /></a>
          </div>
        </div>
        <img src="images/photo.jpg" alt="personal" className="home-avatar"></img>
      </div>
      <div className="home-stack-container">
        <p>Стэк</p>
        <i class="bx bx-dots-vertical-rounded" />
        <div className="home-stack">
          <div className="home-stack-block-icons">
            <box-icon type="logo" name="html5" size="lg" />
            <box-icon type="logo" name="css3" size="lg" />
          </div>
          <div className="home-stack-block-icons">
            <box-icon type="logo" name="javascript" size="lg" />
            <box-icon type="logo" name="typescript" size="lg" />
          </div>
          <div className="home-stack-block-icons">
            <box-icon type="logo" name="react" size="lg" />
            <box-icon type="logo" name="angular" size="lg" />
          </div>
          <div className="home-stack-block-icons">
            <img src="images/c-sharp.svg" alt="c-sharp" className="lg-icon" draggable="false"></img>
            <box-icon type="logo" name="python" size="lg" />
          </div>
          <div className="home-stack-block-icons">
            <box-icon type="logo" name="c-plus-plus" size="lg" />
            <box-icon type="logo" name="java" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}