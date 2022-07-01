
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setAuthUserData, logout } from "../../Redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(
  connect(mapStateToProps, { setAuthUserData, logout })
)(HeaderContainer)
