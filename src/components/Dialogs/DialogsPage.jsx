import React from "react";
import styles from './DialogsPage.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

function DialogsPage(props) {
    let state = props.dialogsPageData

    let dialogsList = state.dialogs.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
    )

    let messagesList = state.messages.map(message =>
        <MessageItem message={message.message} type={message.type} key={message.id} />
    )

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let newText = e.target.value
        props.updateNewMessageText(newText)
    }

    return (
        <div className={styles.dialog_page}>
            <div className={styles.dialogs_list}>
                <ul>
                    { dialogsList }
                </ul>
            </div>

            <div className={styles.messages_list}>
                { messagesList }
            </div>

            <textarea
                // ref={ newMessageElement }
                onChange={ onMessageChange }
                value={ state.newMessageText }
            />
            <button onClick={ onSendMessageClick }>Отправить</button>
        </div>
    );
}

export default DialogsPage;
