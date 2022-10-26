import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.header_row}>
                    <div className={styles.logo}></div>
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
