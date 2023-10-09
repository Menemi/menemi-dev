import React from "react";

export default function Contacts() {
  return (
    <section id="contacts">
      <div className="contacts-container">
        <h3 className="highlight-text">Контакты</h3>
        <div className="contacts-list">
          <div className="contacts-unit">
            <box-icon name="map" size="50px" class="contacts-icon" />
            <div className="contacts-unit-description">
              <h4 className="highlight-text">Местоположение</h4>
              <p>Санкт-Петербург, Россия</p>
            </div>
          </div>
          <a href="https://t.me/Menemi" target="_blanc" className="contacts-unit">
            <box-icon type="logo" name="telegram" size="50px" class="contacts-icon" />
            <div className="contacts-unit-description">
              <h4 className="highlight-text">Telegram</h4>
              <p>Menemi</p>
            </div>
          </a>
          <a href="https://github.com/Menemi" target="_blanc" className="contacts-unit">
            <box-icon type="logo" name="github" size="50px" class="contacts-icon" />
            <div className="contacts-unit-description">
              <h4 className="highlight-text">Github</h4>
              <p>Menemi</p>
            </div>
          </a>
          <a href="mailto:danila.titov1210@yandex.ru" target="_blanc" className="contacts-unit">
            <box-icon name="at" size="50px" class="contacts-icon" />
            <div className="contacts-unit-description">
              <h4 className="highlight-text">Почта</h4>
              <p>Титов Даниил</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}