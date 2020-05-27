import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import cn from "classnames";

type PropsType = {
    id: number;
    name: string;
    isActive: boolean;
}

const DialogItem: React.FC<PropsType> = (props) => {
    let path = `/dialogs/${props.id}`;

    return (<div className={cn(classes.dialog, { [classes.active]: props.isActive })}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

export default DialogItem;