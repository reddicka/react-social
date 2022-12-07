import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="messageBody"></label>
                <Field
                    component="textarea"
                    name="messageBody"
                    id="messageBody"
                    placeholder="Введите сообщение..."
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