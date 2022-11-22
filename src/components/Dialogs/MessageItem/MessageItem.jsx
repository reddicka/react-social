import styles from './MessageItem.module.css';

function MessageItem(props) {
    return (
        <div className={styles.message_item + ' ' + styles[props.type]}>{props.message}</div>
    )
}

export default MessageItem;
