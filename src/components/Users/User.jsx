import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import cn from "classnames";

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (<div className={cn(styles.userWrapper, { [styles.followed]: user.followed })}>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="" />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <Button variant="danger" disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>Unfollow</Button>
                    : <Button variant="success" disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Follow</Button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </span>
        </span>
    </div>)
}

export default User;