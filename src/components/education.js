import React from "react";

export default function Education() {
  return (
    <section id="education">
      <div className="education-container">
        <h3 className="highlight-text">Образование — неоконченное высшее</h3>
        <div className="education-unit reversed">
          <img src="images/itmo.png" alt="kreativ-logo" className="education-logo none-selectable" />
          <div className="education-info">
            <div>
              <h4 className="highlight-text">Университет ИТМО [2020 — 2024]</h4>
              <h5>Факультет информационных технологий и программирования</h5>
              <h5>Информационные системы и технологии (ИСиТ)</h5>
              <h5>Разработка информационных систем и технологий</h5>
            </div>
            <div className="education-unit-desription">
              <p>На данный момент учусь в университете ИТМО на 4 курсе. Проходил летнюю практику после 3 курса. Изучаю frontend направление разработки: React, Angular. Во время обучения в университете писал различные проекты на C#, Java, C++, знаю принципы ООП, Rest API и многом другом.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}