import {Field, reduxForm} from "redux-form";
import React from "react";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name='newPostText'
                    component='input'
                    type='textarea'
                    placeholder='Введите текст...'
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