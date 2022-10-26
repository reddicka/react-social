import React from 'react';
import style from './Header.module.css';

function Header() {
    return (
        <header>
            <div className={style.container}>
                <div className={style.header_row}>
                    <div className={style.logo}></div>
                    <div>
                        <ul>
                            <li>
                                <a href="/">Контакты</a>
                            </li>
                            <li>
                                <a href="/">О проекте</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
