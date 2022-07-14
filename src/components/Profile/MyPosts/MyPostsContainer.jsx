import { connect } from "react-redux";
import { addPostActionCreator } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";




// const MyPostsContainer = (props) => {

//   //let state = props.store.getState();



//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState();

//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }

//           let onPostChange = (text) => {
//             store.dispatch(updateNewPostTextActionCreator(text));
//           }

//           return <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             postsArray={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText} />
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state, props) => {
  return {
    postsArray: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    isOwner: props.isOwner,
    profile: props.profile,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText));
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
