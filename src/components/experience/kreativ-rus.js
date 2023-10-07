import React from "react";

export default function KreativRus() {
  return (
    <div className="job-unit">
      <img src="images/kreativ-rus.png" alt="kreativ-logo" className="job-logo none-selectable" />
      <div className="job-info">
        <div>
          <h4 className="highlight-text">Kreativ RUS [Sep 2022 — Sep 2023]</h4>
          <h5>.NET Backend developer, Санкт-Петербург, <a href="http://www.kreativ-rus.com" target="_blanc" className="pretty-link">www.kreativ-rus.com</a></h5>
        </div>
        <div className="job-unit-desription">
          <p>Разработка системы управления производственными процессами (MES) в рамках backend направления, а именно: исправление багов существующей системы, а также дополнение её новыми функциями.</p>
          <p>C# использовался, как основной язык проекта, ASP.NET Core и Entity Framework, как вспомогательные фреймворки.</p>
        </div>
        <div className="job-stack-container">
          <img src="images/c-sharp.svg" alt="c-sharp" className="job-stack-logo none-selectable" />
          <img src="images/asp-net.png" alt="asp.net" className="job-stack-logo none-selectable" />
        </div>
      </div>
    </div>
  );
}