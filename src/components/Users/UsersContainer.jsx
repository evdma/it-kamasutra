import React from 'react';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC } from '../../redux/users-reducer';
import {connect} from 'react-redux'

let mapStateTopProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export default connect(mapStateTopProps,mapDispatchTopProps)(Users);