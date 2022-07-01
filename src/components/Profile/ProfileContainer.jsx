import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, setProfileThunk, getStatus, updateStatus } from "../../Redux/profileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from "redux";

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

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId) {
                // this.props.history.push('/login');
            }
        }
        this.props.setProfileThunk(userId);
        this.props.getStatus(userId);
    }

    // componentDidUpdate(prevProps) {
    //     if (!this.props.isAuth) {
    //         debugger
    //         this.props.rou.push('/login');
    //     }
    // }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,

});

export default compose(
    connect(mapStateToProps, { setUserProfile, setProfileThunk, getStatus, updateStatus }),
    withRouter,
)(ProfileContainer)

