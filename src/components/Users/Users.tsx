import React, { FC } from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import styles from "./users.module.css";
import { UserType } from '../../types/types';
import UsersSearchForm from './UsersSearchForm';
import { FilterType } from '../../redux/users-reducer';

type PropsType = {
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    onFilterChanged: (filter: FilterType) => void;
    pageSize: number,
    totalUsersCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

let Users: FC<PropsType> = ({ currentPage, onPageChanged, pageSize, totalUsersCount, ...props }) => {
    return <div>
        <UsersSearchForm onFilterChanged={props.onFilterChanged} />
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