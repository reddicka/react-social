import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={`${styles.item} ${styles.active}`}>
                    <a href="/">Профиль</a>
                </li>
                <li className={styles.item}>
                    <a href="/">Моя музыка</a>
                </li>
                <li className={styles.item}>
                    <a href="/">Моя видео</a>
                </li>
                <li className={styles.item}>
                    <a href="/">Моя друзя</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
