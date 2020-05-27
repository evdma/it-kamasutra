import React, { useState, useEffect, ChangeEvent } from 'react';

type PropsType = {
    status: string;
    updateStatus: (status: string) => void;
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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