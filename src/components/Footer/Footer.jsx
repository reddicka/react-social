import styles from './Footer.module.css'

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div>
                    футир верх
                </div>

                <div>
                    футир низ
                </div>
            </div>
        </footer>
    )
}

export default Footer