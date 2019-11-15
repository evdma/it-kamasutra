import React from 'react';
import * as axios from 'axios';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress } from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        });
    }

    render(){
        return <>
        {this.props.isFetching ? <Preloader />: null}
            <Users 
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress = {this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
            />
        </>
    }
}

let mapStateTopProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateTopProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer);