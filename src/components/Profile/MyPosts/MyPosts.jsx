import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

let maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (<div className={classes.postsBlock}>
        <h3>My Posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={classes.posts}>
            {postElements}
        </div>
    </div>)
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength10]} component={Textarea}
                    name="newPostText" placeholder="Post message" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;