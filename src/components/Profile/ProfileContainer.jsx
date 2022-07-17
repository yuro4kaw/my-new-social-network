import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, setProfileThunk, getStatus, updateStatus, savePhoto, saveProfile } from "../../Redux/profileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from "redux";
import { Navigate } from "react-router-dom";



function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId) {
                <Navigate to="/login" />
            }
        }
        this.props.setProfileThunk(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.router.params.userId !== prevProps.router.params.userId)
            this.refreshProfile();
    }







    // componentDidUpdate(prevProps) {
    //     if (!this.props.isAuth) {
    //         debugger
    //         this.props.rou.push('/login');
    //     }
    // }

    render() {

        return (
            <Profile
                {...this.props}
                isOwner={!this.props.router.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                isFetching={this.props.isFetching}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,

});

export default compose(
    connect(mapStateToProps, { setUserProfile, setProfileThunk, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
)(ProfileContainer)

