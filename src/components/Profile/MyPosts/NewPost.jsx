import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../../utils/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";

const maxLengthNum = maxLength(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={FormControl}
                    formElement='textarea'

                    name='newPostText'
                    type='textarea'
                    placeholder='Введите текст...'
                    validate={[required, maxLengthNum]}
                />
            </div>
            <div>
                <button>Опубликовать</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({
    form: 'profileAddNewPostForm'
})(AddNewPostForm)

const NewPost = (props) => {
    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <p>Новый пост</p>
            <AddNewPostFormRedux onSubmit={addNewPost} />
        </div>
    )
}

export default NewPost