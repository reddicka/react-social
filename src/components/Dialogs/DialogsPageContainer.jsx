import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../reduxTipa/dialogs-reducer";
import DialogsPage from "./DialogsPage";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

// function old__DialogsPageContainer() {
//     return (
//         <StoreContext.Consumer>
//             { store => {
//                 let state = store.getState().dialogsPageData
//
//                 let onSendMessageClick = () => {
//                     let action = sendMessageActionCreator()
//                     store.dispatch(action)
//                 }
//
//                 let onMessageChange = (newText) => {
//                     let action = updateNewMessageTextActionCreator(newText)
//                     store.dispatch(action)
//                 }
//
//                 return <DialogsPage
//                     updateNewMessageText={onMessageChange}
//                     sendMessage={onSendMessageClick}
//                     dialogsPageData={state}
//                 />
//             }}
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        dialogsPageData: state.dialogsPageData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            let action = sendMessageActionCreator()
            dispatch(action)
        },
        updateNewMessageText: (newText) => {
            let action = updateNewMessageTextActionCreator(newText)
            dispatch(action)
        }
    }
}

const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage)

export default DialogsPageContainer;
