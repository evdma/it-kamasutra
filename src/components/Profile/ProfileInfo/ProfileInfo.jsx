import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (<div>
        <div>
            <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" />
        </div>
        <div className={classes.descriptionBlock}>ava+desc</div>
    </div>)
}

export default ProfileInfo