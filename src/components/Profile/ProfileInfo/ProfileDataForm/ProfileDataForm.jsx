import {Field, reduxForm} from "redux-form";
import {FormControl} from "../../../common/FormsControls/FormsControls";
import {maxLength, required} from "../../../../utils/validators/validators";
import React from "react";

let maxLengthNum = maxLength(15)

const ProfileDataForm = (props) => {
    // debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor='fullName'>Имя, Фамилия:</label><br/>
                <Field
                    component={FormControl}
                    formElement='input'
                    type='text'

                    name='fullName'
                    id='fullName'
                    placeholder='Ванька Петров'
                    autoComplete='fullName'
                    validate={maxLengthNum}
                />
            </div>

            <div>
                <label htmlFor='lookingForAJob'>Ищу работу:</label><br/>
                <Field
                    component={FormControl}
                    formElement='input'
                    type='checkbox'

                    name='lookingForAJob'
                    id='lookingForAJob'
                />
            </div>

            <div>
                <label htmlFor='lookingForAJobDescription'>Описание работы:</label><br/>
                <Field
                    component={FormControl}
                    formElement='textarea'

                    name='lookingForAJobDescription'
                    id='lookingForAJobDescription'
                    placeholder='Описание стека, навыков и т.д.'
                    autoComplete='lookingForAJobDescription'
                    validate={[maxLengthNum]}
                />
            </div>

            <div>
                <label htmlFor='aboutMe'>Обо мне:</label><br/>
                <Field
                    component={FormControl}
                    formElement='textarea'

                    name='aboutMe'
                    id='aboutMe'
                    placeholder='Несколько слов о себе...'
                    autoComplete='aboutMe'
                    validate={[maxLengthNum]}
                />
            </div>

            <ul>
                {
                    Object.keys(props.profileInfo.contacts).map(contact => {
                        return (
                            <li key={contact}>
                                <label htmlFor={contact}>{contact}</label><br/>
                                <Field
                                    component={FormControl}
                                    formElement='input'
                                    type='text'

                                    name={`contacts.${contact}`}
                                    id={contact}
                                    placeholder={contact}
                                    autoComplete={contact}
                                    validate={maxLengthNum}
                                />
                            </li>
                        )
                    })
                }
            </ul>

            <button>Сохранить</button>

        </form>
    )
}

let ProfileDataReduxForm = reduxForm({ form: 'editProfile'})(ProfileDataForm)

export default ProfileDataReduxForm