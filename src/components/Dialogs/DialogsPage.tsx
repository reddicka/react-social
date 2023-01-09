import React, { FC } from "react";
import styles from './DialogsPage.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import AddMessage from "./NewMessage";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogs: Array<DialogType> | []
    messages: Array<MessageType> | []
    sendMessage: (newMessageText: string) => void
}

const DialogsPage: FC<PropsType> = ({dialogs, messages, sendMessage}) => {

    let dialogsList = dialogs.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
    )

    let messagesList = messages.map(message =>
        <MessageItem id={message.id} message={message.message} type={message.type} key={message.id} />
    )

    return (
        <div className={styles.dialog_page}>
            <div className={styles.dialogs_list}>
                <ul>
                    { dialogsList }
                </ul>
            </div>

            <div>
                <div className={styles.messages_list}>
                    { messagesList }
                </div>

                <AddMessage sendMessage={sendMessage} />
            </div>
        </div>
    );
}

export default DialogsPage;
