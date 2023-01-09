import styles from './Footer.module.css'
import {FC} from "react";

type PropsType = {

}

const Footer: FC<PropsType> = (props) => {
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