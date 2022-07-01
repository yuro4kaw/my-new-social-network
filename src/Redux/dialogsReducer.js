const CREATE_NEW_MESSAGE = "CREATE_NEW_MESSAGE";


let initialState = {
  dialogs: [
    {
      id: 1,
      name: "dimych",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
    {
      id: 2,
      name: "andrew",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
    {
      id: 3,
      name: "yura",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
    {
      id: 4,
      name: "sergey",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
    {
      id: 5,
      name: "vlad",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
    {
      id: 6,
      name: "vadim",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
    {
      id: 6,
      name: "vadim",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
    {
      id: 6,
      name: "vadim",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
    {
      id: 6,
      name: "vadim",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
  ],
  messages: [
    {
      id: 1,
      message: "Hi",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
    {
      id: 2,
      message: "How is your education?",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
    {
      id: 3,
      message: "I'm gonna to visit London next week! Yeee!",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
    },
  ],
  
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_MESSAGE: {
      let newMessage = {
        id: 3,
        message: action.newMessageBody,
        img: "img/avatar.jpg",
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      return stateCopy;
    }
    default:
      return state;
  }
};

export const createNewMessageActionCreator = (newMessageBody) => ({
  type: CREATE_NEW_MESSAGE, newMessageBody
});


export default dialogsReducer;
