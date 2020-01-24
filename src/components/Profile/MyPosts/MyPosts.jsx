import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import Button from 'react-bootstrap/Button';

let maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {

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
});

// class MyPosts extends PureComponent {

//     shouldComponentUpdate(nextProps, nextState) {
//         return nextProps != this.props || nextState != this.state;
//     }

//     render() {
//         let postElements = this.props.posts.map(post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount} />);

//         let onAddPost = (values) => {
//             this.props.addPost(values.newPostText);
//         }

//         return (<div className={classes.postsBlock}>
//             <h3>My Posts</h3>
//             <AddNewPostFormRedux onSubmit={onAddPost} />
//             <div className={classes.posts}>
//                 {postElements}
//             </div>
//         </div>)
//     }
// }

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.newPost} >
            <div>
                <Field validate={[required, maxLength10]} component={Textarea}
                    name="newPostText" placeholder="Post message" />
            </div>
            <div>
                <Button variant="primary" type="submit">Add post</Button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;