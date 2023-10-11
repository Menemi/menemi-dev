import React from "react";

export default function Contacts() {
  const contactItem = [
    {
      icon: <box-icon name="map" size="50px" />,
      text: "Местоположение",
      description: "Санкт-Петербург, Россия",
    },
    {
      link: "https://t.me/Menemi",
      icon: <box-icon type="logo" name="telegram" size="50px" />,
      text: "Telegram",
      description: "Menemi",
    },
    {
      link: "https://github.com/Menemi",
      icon: <box-icon type="logo" name="github" size="50px" />,
      text: "Github",
      description: "Menemi",
    },
    {
      link: "mailto:danila.titov1210@yandex.ru",
      icon: <box-icon name="at" size="50px" />,
      text: "Почта",
      description: "Титов Даниил",
    },
  ]

  return (
    <section id="contacts">
      <div className="contacts-container">
        <h3 className="highlight-text">Контакты</h3>
        <div className="contacts-list">
          {
            contactItem.map((item, index) => (
              <a href={item.link} key={index} target="_blanc" className="contacts-unit">
                {item.icon}
                <div className="contacts-unit-description">
                  <h4 className="highlight-text">{item.text}</h4>
                  <p>{item.description}</p>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  );
}