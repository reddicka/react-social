import styles from './Navbar.module.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={`${styles.item} ${styles.active}`}>
                    <Link to="/profile">Профиль</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/dialogs">Диалоги</Link>
                </li>
                <li className={styles.item}>
                    <a href="/friends">Моя друзя</a>
                </li>
                <li className={styles.item}>
                    <a href="/music">Моя музыка</a>
                </li>
                <li className={styles.item}>
                    <a href="/video">Моя видео</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
