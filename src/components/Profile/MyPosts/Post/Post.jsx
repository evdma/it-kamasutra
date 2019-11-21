import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (<div className={classes.item} key={props.id}>
        <img src="https://pixel.nymag.com/imgs/daily/vulture/2018/11/02/02-avatar-2.w700.h700.jpg" alt="" />
        {props.message}
            <div>
            <span>like {props.likesCount}</span>
        </div>
    </div>)
}

export default Post;