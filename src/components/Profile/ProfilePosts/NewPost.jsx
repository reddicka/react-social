import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength, required} from "../../../utils/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";
import styles from './NewPost.module.css'

const maxLengthNum300 = maxLength(300)

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
                    validate={[required, maxLengthNum300]}
                />
            </div>
            <div>
                <button>Отправить</button>
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
        <div className={styles.newPost}>
            <p className={styles.title}>Написать</p>
            <AddNewPostFormRedux onSubmit={addNewPost} />
        </div>
    )
}

export default NewPost