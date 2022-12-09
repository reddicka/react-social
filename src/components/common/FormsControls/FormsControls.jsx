import React from "react";
import styles from './FormsControls.module.css'

export const FormControl = ({input, meta, formElement, ...props}) => {
    let hasError = meta.touched && meta.error

    return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        {React.createElement(formElement, {...input, ...props})}
        {hasError && <p>{meta.error}</p>}
    </div>
    )
}