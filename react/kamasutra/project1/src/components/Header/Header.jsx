import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://www.rsb.ru/static/src/main/img/icon/logo-mobile-app.png"/>
        </header>
    );
};

export default Header;
