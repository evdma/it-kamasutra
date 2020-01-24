import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import Button from 'react-bootstrap/Button';

let maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let activeDialogId = +props.match.params.dialogId;
    let dialogsElements = state.dialogs.map(
        dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} isActive={activeDialogId === dialog.id} />
    );

    let messagesElements = state.messages.map(
        message => <Message message={message.message} key={message.id} id={message.id} />
    );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (<div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    </div>)
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]}
                    name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <Button variant="success" type="submit">Send message</Button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs