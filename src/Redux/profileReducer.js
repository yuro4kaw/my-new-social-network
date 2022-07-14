import { stopSubmit } from "redux-form";
import { profileAPI } from "../API/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

let initialState = {
    posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 24 },
    { id: 2, message: "Today i read a book!", likesCount: 135 },
    {
      id: 3,
      message: "I'm gonna to visit London next week! Yeee!",
      likesCount: 47,
    },
    ],
    profile: null,
    status: ""
  
};


const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
        return {
            ...state,
            posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS:
            
            return {...state, profile: {...state.profile, photos: action.photos }}
        default:
            return state;
    }
};

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({type: SET_STATUS, status})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const setProfileThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.setProfile(userId);
    dispatch(setUserProfile(response));  
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
       
    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const savePhoto = (photoFile) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photoFile);
    
    if (response.data.resultCode === 0) {
       dispatch(savePhotoSuccess(response.data.data.photos));
    }
    
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    
    
    if (response.data.resultCode === 0) {
        dispatch(setProfileThunk(userId));  
        
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("edit-profile", { _error: message }));
        
        return Promise.reject(message);
    }
        
    
}

export default profileReducer;
