import style from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={`${style.item} ${style.active}`}>
                    <a href="/">Профиль</a>
                </li>
                <li className={style.item}>
                    <a href="/">Моя музыка</a>
                </li>
                <li className={style.item}>
                    <a href="/">Моя видео</a>
                </li>
                <li className={style.item}>
                    <a href="/">Моя друзя</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
