import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
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

export default compose(
    withAuthRedirect,
    connect(mapStateTopProps,{
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer);