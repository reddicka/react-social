import React, {FC} from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import avatar from '../../assets/img/user.png'

type PropsType = {
    login: string | null
    isAuth: boolean
    isLoading: boolean
    avatarUrl: string | null
    logout: () => void
}

const Header: FC<PropsType> = (props) => {
    const onLogout = () => {
        props.logout()
    }

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header_row}>
                    <div className={styles.logo}>
                        {
                            // @ts-ignore
                            props.isAuth && <img src={props.avatarUrl || avatar} alt={props.login} />
                        }
                    </div>
                    <div>
                        {
                            props.isAuth
                            ? <button onClick={onLogout}>Выйти из {props.login}</button>
                            : <NavLink to={'/login'}>Войти</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
