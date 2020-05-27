import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { PostType } from '../../../types/types';
import AddPostForm, { AddPostFormValuesType } from './AddPostForm/AddPostForm';

export type MapPropsType = {
    posts: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void;
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let postElements = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount} />);

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

    return (<div className={classes.postsBlock}>
        <h3>My Posts</h3>
        <AddPostForm onSubmit={onAddPost} />
        <div className={classes.posts}>
            {postElements}
        </div>
    </div>)
};

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;