import React from "react";
import styles from './DialogPage.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

function DialogPage(props) {
    let dialogsList = props.stateDialogsPage.dialogs.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
    )

    let messagesList = props.stateDialogsPage.messages.map(message =>
        <MessageItem message={message.message} type={message.type} key={message.id} />
    )

    let newMessageElement = React.createRef()
    let sendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = () => {
        let newText = newMessageElement.current.value
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
                ref={ newMessageElement }
                onChange={ onMessageChange }
                value={ props.stateDialogsPage.newMessageText }
            />
            <button onClick={ sendMessage }>Отправить</button>
        </div>
    );
}

export default DialogPage;
