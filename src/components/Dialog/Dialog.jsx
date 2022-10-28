import styles from './Dialog.module.css';

function Dialog() {
    return (
        <div className={styles.dialog_page}>
            <div className={styles.dialogs_list}>
                <ul>
                    <li className={styles.dialogs_item}>Стасян</li>
                    <li className={styles.dialogs_item + ' ' + styles.dialog_active}>Василка</li>
                    <li className={styles.dialogs_item}>Данилбка</li>
                    <li className={styles.dialogs_item}>Танюха</li>
                </ul>
            </div>

            <div className={styles.messages_list}>
                <div className={styles.message_item + ' ' + styles.inbox}>Вам песьмо такое</div>
                <div className={styles.message_item + ' ' + styles.outbox}>А я ему такое</div>
                <div className={styles.message_item + ' ' + styles.inbox}>Привет</div>
                <div className={styles.message_item + ' ' + styles.outbox}>Привет писька</div>
            </div>

            <textarea></textarea>
            <button> Отправить</button>
        </div>
    );
}

export default Dialog;
