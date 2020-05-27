import React from 'react';
import classes from '../MyPosts.module.css';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { required, maxLengthCreator } from '../../../../utils/validators/validators';
import { Textarea, createField, GetStringKeys } from '../../../common/FormsControls/FormsControls';
import Button from 'react-bootstrap/Button';

let maxLength10 = maxLengthCreator(10);

type PropsType = {};

export type AddPostFormValuesType = {
    newPostText: string;
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>;

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.newPost} >
            <div>
                {createField<AddPostFormValuesTypeKeys>("Post message", "newPostText", [required, maxLength10], Textarea)}
            </div>
            <div>
                <Button variant="primary" type="submit">Add post</Button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({ form: 'ProfileAddNewPostForm' })(AddPostForm);
