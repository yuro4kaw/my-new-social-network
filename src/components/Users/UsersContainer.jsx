import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, follow, unfollow, toggleFollowingProgress, requestUsers } from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getAllUsersSuperSelector, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from "../../Redux/usersSelectors";
import Paginator from "../common/Paginator/Paginator";



class UsersContainer extends React.Component {

    componentDidMount() {
        let { page, pageSize } = this.props;
        this.props.requestUsers(page, pageSize);

        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items)
        //     this.props.setTotalCount(response.totalCount)
        // }
        // ); 

    }

    onPageChanged = (pageNumber) => {
        let { pageSize } = this.props
        this.props.requestUsers(pageNumber, pageSize);

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true);

        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {

        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(response.items)
        // }
        // );

    }

    render() {
        return <>
            < Paginator currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} />
            {this.props.isFetching
                ? <Preloader />
                : < Users
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}

                    />
            }
        </>
    }
}

// let mapStateToProps = (state) => {

//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getAllUsersSuperSelector(state),
        // users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followActionCreator(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowActionCreator(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalCountActionCreator(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         }
//     }
// }


export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            requestUsers,
        })
)(UsersContainer)