import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../common/Paginator/Paginator';
import { actions, FilterType, requestUsers, follow, unfollow } from '../../redux/users-reducer';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from '../../redux/users-selectors';
import UsersSearchForm from './UsersSearchForm';
import User from './User';
import styles from "./users.module.css";

export const Users: FC = () => {
    const users = useSelector(getUsers);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();

    const onPageChanged = (pageNumber: number) => {
        dispatch(actions.setCurrentPage(pageNumber));
        dispatch(requestUsers(pageNumber, pageSize, filter));
    };

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    };

    const followUser = (userId: number) => {
        dispatch(follow(userId));
    };

    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId));
    };

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter));
    }, []);

    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged} />
        <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount}
            onPageChanged={onPageChanged} pageSize={pageSize} />
        <div className={styles.usersContainer}>{
            users.map(user =>
                <User key={user.id} user={user}
                    followingInProgress={followingInProgress}
                    follow={followUser} unfollow={unfollowUser}
                />
            )
        }</div>
    </div>
}