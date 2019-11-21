import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (<div>
        {/* <div>
            <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" />
        </div> */}
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large} alt="" />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    </div>)
}

export default ProfileInfo