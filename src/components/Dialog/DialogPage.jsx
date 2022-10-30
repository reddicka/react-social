import styles from './DialogPage.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <li className={styles.dialogs_item}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </li>
    )
}

function MessageItem(props) {
    return (
        <div className={styles.message_item + ' ' + styles[props.type]}>{props.message}</div>
    )
}

function DialogPage() {
    return (
        <div className={styles.dialog_page}>
            <div className={styles.dialogs_list}>
                <ul>
                    <DialogItem name='Стасян' id='1' />
                    <DialogItem name='Василка' id='2' />
                    <DialogItem name='Данилбка' id='3' />
                    <DialogItem name='Танюха' id='4' />
                </ul>
            </div>

            <div className={styles.messages_list}>
                <MessageItem message='Вам песьмо такое' type='inbox' />
                <MessageItem message='А я ему такое' type='outbox' />
                <MessageItem message='Привет' type='inbox' />
                <MessageItem message='Привет писька' type='outbox' />
            </div>

            <textarea></textarea>
            <button> Отправить</button>
        </div>
    );
}

export default DialogPage;
