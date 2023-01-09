import styles from './MessageItem.module.css';
import {FC} from "react";

type PropsTypes = {
    id: number
    message: string
    type: string
}

const MessageItem: FC<PropsTypes> = (props) => {
    return (
        <div className={styles.message_item + ' ' + styles[props.type]}>{props.message}</div>
    )
}

export default MessageItem;
