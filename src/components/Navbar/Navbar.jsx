import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const isActiveLink = () => {
        return ({isActive}) => isActive ? styles.active : undefined
    }

    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    <NavLink to="/profile" className={isActiveLink()}>Профиль</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs" className={isActiveLink()}>Диалоги</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/friends" className={isActiveLink()}>Друзья</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music" className={isActiveLink()}>Музыка</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/video" className={isActiveLink()}>Видео</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/search" className={isActiveLink()}>Найти</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
