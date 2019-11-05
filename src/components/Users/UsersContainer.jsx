import React from 'react';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import {connect} from 'react-redux'

let mapStateTopProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchTopProps = (dispatch) => {
    return {
        follow: userId => {
            dispatch(followAC(userId))
        },
        unfollow: userId => {
            dispatch(unFollowAC(userId))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: pageNumber =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: totalCount =>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateTopProps,mapDispatchTopProps)(Users);