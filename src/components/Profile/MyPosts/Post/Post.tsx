import React from 'react';
import classes from './Post.module.css'

type PropsType = {
    message: string;
    likesCount: number;
    id: number;
}

const Post: React.FC<PropsType> = (props) => {
    return (<div className={classes.item} key={props.id}>
        <img src="https://pixel.nymag.com/imgs/daily/vulture/2018/11/02/02-avatar-2.w700.h700.jpg" alt="" />
        {props.message}
        <div>
            <span>like <span className={classes.like}>{props.likesCount}</span></span>
        </div>
    </div>)
}

export default Post;