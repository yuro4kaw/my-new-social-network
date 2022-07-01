import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";
import { createNewMessageActionCreator } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addMessage = () => {
//                         store.dispatch(createNewMessageActionCreator());
//                     }

//                     let onMessageChange = (text) => {
//                         store.dispatch(updateNewMessageTextActionCreator(text));
//                     }

//                     return (
//                         <Dialogs
//                             addMessage={addMessage}
//                             updateNewMessageText={onMessageChange}
//                             dialogsPage={state.dialogsPage}
//                             newMessageText={state.dialogsPage.newMessageText}
//                         />)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => { dispatch(createNewMessageActionCreator(newMessageBody)); }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);