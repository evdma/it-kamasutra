import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer'

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);
    
    let newPostElement = React.createRef();

    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextCreator(text);
        props.dispatch(action);
    }
    
    return (<div className={classes.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postElements}
        </div>
    </div>)
}

export default MyPosts;