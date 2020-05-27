import React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea, createField, GetStringKeys } from '../../common/FormsControls/FormsControls';
import Button from 'react-bootstrap/Button';
import { NewMessageFormValuesType } from '../Dialogs';

let maxLength50 = maxLengthCreator(50);

type NewMessageFormTypeValuesKeys = GetStringKeys<NewMessageFormValuesType>;
type PropsType = {};

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormTypeValuesKeys>("Enter your message", "newMessageBody", [required, maxLength50], Textarea)}
            </div>
            <div>
                <Button variant="success" type="submit">Send message</Button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType>({ form: 'dialogAddMessageForm' })(AddMessageForm);