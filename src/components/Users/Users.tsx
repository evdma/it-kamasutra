import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as queryString from 'querystring';
import Paginator from '../common/Paginator/Paginator';
import { actions, FilterType, requestUsers, follow, unfollow } from '../../redux/users-reducer';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from '../../redux/users-selectors';
import UsersSearchForm from './UsersSearchForm';
import User from './User';
import styles from './users.module.css';

type QueryParamsType = { term?: string; page?: string; friend?: string };

export const Users: FC = () => {
    const users = useSelector(getUsers);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();
    const history = useHistory();

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
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType;

        let actualPage = currentPage;
        let actualFilter = filter;

        if (!!parsed.page) actualPage = Number(parsed.page);
        if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };
        if (!!parsed.friend) {
            switch (parsed.friend) {
                case 'null':
                    actualFilter = { ...actualFilter, friend: null };
                    break;
                case 'true':
                    actualFilter = { ...actualFilter, friend: true };
                    break;
                case 'false':
                    actualFilter = { ...actualFilter, friend: false };
                    break;
            }
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter));
    }, []);


    useEffect(() => {
        const query: QueryParamsType = {};
        if (!!filter.term) query.term = filter.term;
        if (filter.friend !== null) query.friend = String(filter.friend);
        if (currentPage !== 1) query.page = String(currentPage);

        history.push({
            pathname: '/developers',
            search: queryString.stringify(query)
        });
    }, [filter, currentPage]);

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