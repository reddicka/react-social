import {sendMessage,updateNewMessageText} from "../../redux/dialogs-reducer";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    dialogsPageData: state.dialogsPage,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText
})(DialogsPage)
