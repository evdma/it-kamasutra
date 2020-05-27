import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { InitialStateType } from '../../redux/dialogs-reducer';
import AddMessageForm from './AddMessageForm/AddMessageForm';

type OwnPropsType = {
    dialogsPage: InitialStateType;
    sendMessage: (messageText: string) => void;
    match: any;
}

export type NewMessageFormValuesType = {
    newMessageBody: string;
}

const Dialogs: React.FC<OwnPropsType> = (props) => {
    let state = props.dialogsPage;
    // let activeDialogId = +props.match.params.dialogId;
    let dialogsElements = state.dialogs.map(
        dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}
            // isActive={activeDialogId === dialog.id}
            isActive={false}
        />
    );

    let messagesElements = state.messages.map(
        message => <Message message={message.message} key={message.id} id={message.id} />
    );

    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    }

    return (<div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div>{messagesElements}</div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    </div>)
}

export default Dialogs;