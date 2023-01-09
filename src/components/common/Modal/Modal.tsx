import styles from './Modal.module.css'
import {FC} from "react";

type PropsType = {
    title: string
    text: string
    error: string
}

const Modal: FC<PropsType> = ({title, text, error}) => {
    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>{text}</p>
                <p className={styles.error}>{error}</p>
            </div>
        </div>
    )
}

export default Modal