import React, { Suspense } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import store from "./Redux/reduxStore";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className={"app-wrapper"}>
                <HeaderContainer />
                <Navbar />
                <div className={"app-wrapper-content"}>
                    <Suspense fallback={<Preloader />}>
                        <Routes>
                            <Route path={"/profile"} element={<ProfileContainer />} />
                            <Route path={"/profile/:userId"} element={<ProfileContainer />} />
                            <Route path={"/users/*"} element={<UsersContainer />} />
                            <Route path={"/dialogs/*"} element={<DialogsContainer />} />
                            <Route path={"/news/*"} element={<News />} />
                            <Route path={"/music/*"} element={<Music />} />
                            <Route path={"/settings/*"} element={<Settings />} />
                            <Route path={"/login/*"} element={<Login />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})


let AppContainer = compose(
    connect(mapStateToProps, { initializeApp })
)(App)

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />,
            </Provider>
        </BrowserRouter>
    )
} 

export default MainApp;