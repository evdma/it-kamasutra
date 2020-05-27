import React from 'react';
import classes from './../Dialogs.module.css';

type PropsType = {
    message: string;
    id: number;
}

const Message: React.FC<PropsType> = (props) => {
    return (<div className={classes.message}>{props.message}</div>)
}

export default Message;