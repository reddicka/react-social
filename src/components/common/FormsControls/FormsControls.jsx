import React from "react";
import styles from './FormsControls.module.css'

/*
    Шаблонный компонент для input'ов (<Field /> формы).
    в input (служебное) принимает: name, value, колбэки (onChange, onBlur и т.д.)
    в meta (служебное) принимает: ошибки, был ли посещен и т.д.
    в formElement принимает "тег": input, textarea
    ... и передает дальше пропсы для инпута
    в пропсы передаются:
        тип инпута: text, email, password, checkbox, radio, file и т.д.
        placeholder
        и т.д.
*/

// для ts
// type PropsType = {
//     input: object
//     meta: object
//     formElement: string
// }
// : FC<PropsType>

export const FormControl = ({input, meta, formElement, ...props}) => {
    let hasError = meta.touched && meta.error

    // console.log({input, meta, formElement, ...props})

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {React.createElement(formElement, {...input, ...props})}
            {hasError && <p>{meta.error}</p>}
        </div>
    )
}