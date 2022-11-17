import React from "react";
import styles from './DialogPage.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

function DialogPage(props) {
    let dialogsList = props.state.dialogs.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
    )

    let messagesList = props.state.messages.map(message =>
        <MessageItem message={message.message} type={message.type} key={message.id} />
    )

    let newMessageElement = React.createRef()
    let sendMessage = () => {
        props.dispatch({ type: 'SEND-MESSAGE' })
    }

    let onMessageChange = () => {
        let newText = newMessageElement.current.value
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newText})
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
                value={ props.state.newMessageText }
            />
            <button onClick={ sendMessage }>Отправить</button>
        </div>
    );
}

export default DialogPage;
