import styles from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <li className={styles.dialogs_item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </li>
    )
}

export default DialogItem;
