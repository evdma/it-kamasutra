import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (<div>
        {!editMode && <div>
            <b>Status</b>:
            <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
        </div>}
        {editMode &&
            <div>
                <input autoFocus={true}
                    onChange={onStatusChange} onBlur={deactivateEditMode} value={status}
                />
            </div>}
    </div>)

}

export default ProfileStatusWithHooks