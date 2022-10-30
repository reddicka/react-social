import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    function isActiveLink() {
        return ({isActive}) => isActive ? styles.active : undefined
    }

    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    <NavLink to="/"
                        className={isActiveLink()}
                    >
                        Профиль
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs"
                        className={isActiveLink()}
                    >
                        Диалоги
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/friends"
                        className={isActiveLink()}
                    >
                        Моя друзя
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music"
                        className={isActiveLink()}
                    >
                        Моя музыка
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/video"
                        className={isActiveLink()}
                    >
                        Моя видео
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
