import styles from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import {FC} from "react";

type PropsTypes = {
    id: number
    name: string
}

const DialogItem: FC<PropsTypes> = (props) => {
    return (
        <li className={styles.dialogs_item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </li>
    )
}

export default DialogItem;
