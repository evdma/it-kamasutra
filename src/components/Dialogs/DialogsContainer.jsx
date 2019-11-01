import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator,sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) =>{
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    
    return <Dialogs dialogsPage={state}
    updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}/>
}

export default DialogsContainer