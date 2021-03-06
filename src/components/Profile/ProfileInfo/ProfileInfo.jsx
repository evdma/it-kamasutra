import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm';
import Button from 'react-bootstrap/Button';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (<div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large || userPhoto}
                className={classes.mainPhoto} alt="" />
            {isOwner && <input type="file" onChange={onMainPhotoSelected} className={classes.controlsBtn} />}
            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />
            }
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    </div>)
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            <div>
                {isOwner && <Button variant="primary" onClick={goToEditMode} className={classes.controlsBtn}>edit</Button>}
            </div>
            <div>
                <b>Fullname</b>: {profile.fullname}
            </div>
            <div>
                Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>
                    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}
            </div>
        </div>
    );
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo