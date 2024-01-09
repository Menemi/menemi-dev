import React from "react";

export default function Home() {
    const stackIcons = [
        {
            firstIcon: <i className="bx bxl-html5 bx-lg black-icon"/>,
            secondIcon: <i className="bx bxl-css3 bx-lg black-icon"/>
        },
        {
            firstIcon: <i className="bx bxl-javascript bx-lg black-icon"/>,
            secondIcon: <i className="bx bxl-typescript bx-lg black-icon"/>
        },
        {
            firstIcon: <i className="bx bxl-react bx-lg black-icon"/>,
            secondIcon: <i className="bx bxl-angular bx-lg black-icon"/>
        },
        {
            firstIcon: <img src="images/c-sharp.svg" alt="c-sharp" className="lg-icon none-selectable"/>,
            secondIcon: <i className="bx bxl-python bx-lg black-icon"/>
        },
        {
            firstIcon: <i className="bx bxl-c-plus-plus bx-lg black-icon"/>,
            secondIcon: <i className="bx bxl-java bx-lg black-icon"/>
        },
    ]

    return (
        <section id="home">
            <div className="home-header">
                <div className="home-title">
                    <div className="home-main-title">
                        <h1 className="highlight-text">
                            Разработчик
                        </h1>
                        <i class="bx bxl-codepen bx-md highlight-text"/>
                    </div>
                    <p>
                        Привет, Я Титов Даниил. Разработчик, живущий в Санкт-Петербурге, Россия. <i class="bx bx-map"/>
                    </p>
                    <div className="home-contacts">
                        <a href="https://github.com/Menemi" target="_blanc"><i class="bx bxl-github bx-md btn"/></a>
                        <a href="https://t.me/Menemi" target="_blanc"><i class="bx bxl-telegram bx-md btn"/></a>
                    </div>
                </div>
                <div className="avatar-container">
                    <img src="images/photo.jpg" alt="personal" className="home-avatar none-selectable"/>
                </div>
            </div>
            <div className="home-stack-container">
                <p>Навыки</p>
                <i class="bx bx-dots-vertical-rounded home-stack-delimiter"/>
                <div className="home-stack">
                    {
                        stackIcons.map((item, index) => (
                            <div className="home-stack-block-icons" key={index}>
                                {item.firstIcon}
                                {item.secondIcon}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}