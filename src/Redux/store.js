// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, message: "Hi, how are you?", likesCount: 24 },
//         { id: 2, message: "Today i read a book!", likesCount: 135 },
//         {
//           id: 3,
//           message: "I'm gonna to visit London next week! Yeee!",
//           likesCount: 47,
//         },
//       ],
//       newPostText: "",
//     },
//     dialogsPage: {
//       dialogs: [
//         {
//           id: 1,
//           name: "dimych",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//         {
//           id: 2,
//           name: "andrew",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//         {
//           id: 3,
//           name: "yura",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//         {
//           id: 4,
//           name: "sergey",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//         {
//           id: 5,
//           name: "vlad",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//         {
//           id: 6,
//           name: "vadim",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//         {
//           id: 6,
//           name: "vadim",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//         {
//           id: 6,
//           name: "vadim",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//         {
//           id: 6,
//           name: "vadim",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//       ],
//       messages: [
//         {
//           id: 1,
//           message: "Hi",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//         {
//           id: 2,
//           message: "How is your education?",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//         {
//           id: 3,
//           message: "I'm gonna to visit London next week! Yeee!",
//           img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
//         },
//       ],
//       newMessageText: "",
//     },
//   },
//   _callSubscriber() {
//     console.log("fff");
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._callSubscriber(this._state);
//   },
// };

// export default store;
// window.store = store;
