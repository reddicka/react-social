import React, {FC} from "react";
import styles from './FormsControls.module.css'
import {WrappedFieldMetaProps} from "redux-form";

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

type FormControlPropsType = {
    input: {}
    meta: WrappedFieldMetaProps
    formElement: 'input' | 'textarea'
}

export const FormControl: FC<FormControlPropsType> = (
    {input, meta: {touched, error}, formElement, ...props}
) => {
    let hasError = touched && error

    // console.log({input, meta, formElement, ...props})

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {React.createElement(formElement, {...input, ...props})}
            {hasError && <p>{error}</p>}
        </div>
    )
}