import React from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";

const maxLengthNum =  maxLength(10)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="messageBody"></label>
                <Field
                    component={FormControl}
                    formElement='textarea'

                    name="messageBody"
                    id="messageBody"
                    placeholder="Введите сообщение..."
                    validate={[required, maxLengthNum]}
                />
                <button>Отправить</button>
            </div>
        </form>
    )
}

let AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

const AddMessage = (props) => {
    let addNewMessage = (values) => {
        props.sendMessage(values.messageBody)
    }

    return <AddMessageFormRedux onSubmit={addNewMessage} />
}

export default AddMessage