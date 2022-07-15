import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_IS_FETCHING: 
            
            return {
                ...state,
                isFetching: action.isFetching,
                }
                
        
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authProfile();
    if (response.resultCode === 0) { 
        dispatch(toggleIsFetching(false)); //enable button after successful login
            let { id, login, email } = response.data;
            dispatch(setAuthUserData(id, email, login, true));
    }
}

export const GetCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl} 
})
    
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    dispatch(toggleIsFetching(true)); //disable button after click 
    let response = await authAPI.login(email, password, rememberMe, captcha);
    
    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let message = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: message }));
        dispatch(toggleIsFetching(false)); //enable button if there was an error to try LOGIN again
    }
}

export const getCaptchaUrl = () => async (dispatch) => {    
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(GetCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
   
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer;