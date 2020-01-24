import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import styles from "./users.module.css";

let Users = ({ currentPage, onPageChanged, pageSize, totalUsersCount, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount}
            onPageChanged={onPageChanged} pageSize={pageSize} />
        <div className={styles.usersContainer}>{
            props.users.map(user =>
                <User key={user.id} user={user}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow} unfollow={props.unfollow}
                />
            )
        }</div>
    </div>
}

export default Users;