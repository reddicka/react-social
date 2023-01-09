import React, {FC} from "react";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";

type PropsType = {
    sendMessage: (messageBody: string) => void
}

const maxLengthNum =  maxLength(10)

const AddMessageForm = (props: any) => {
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

const AddMessage: FC<PropsType> = (props) => {
    let addNewMessage = (values: any) => {
        props.sendMessage(values.messageBody)
    }

    return <AddMessageFormRedux onSubmit={addNewMessage} />
}

export default AddMessage