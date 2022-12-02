import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import avatar from '../../assets/img/user.png'

const Header = (props) => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.header_row}>
                    <div className={styles.logo}>
                        <img src={props.avatarUrl || avatar} alt={props.login} />
                    </div>
                    <div>
                        {
                            props.isAuth
                            ? <button>Выйти из {props.login}</button>
                            : <NavLink to={'/login'}>Войти</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
