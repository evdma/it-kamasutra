import React from 'react';
import { createField, Input, Textarea, GetStringKeys } from '../../common/FormsControls/FormsControls';
import { reduxForm, InjectedFormProps } from 'redux-form';
import classes from './ProfileInfo.module.css';
import styles from '../../common/FormsControls/FormControls.module.css';
import Button from 'react-bootstrap/Button';
import { ProfileType } from '../../../types/types';

type PropsType = {
    profile: ProfileType
};

type ProfileTypeKeys = GetStringKeys<ProfileType>;

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Button variant="success" type="submit" className={classes.controlsBtn}>save</Button>
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Fullname</b>: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
            <div>
                <b>My professional skills</b>: {createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>
                    <div key={key} className={classes.contacts}>
                        {/* TODO create solution for embedded object */}
                        <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
                    </div>)}
            </div>
        </form>
    );
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;