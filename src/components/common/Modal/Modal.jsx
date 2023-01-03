import styles from './Modal.module.css'

const Modal = ({title, text, error}) => {
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