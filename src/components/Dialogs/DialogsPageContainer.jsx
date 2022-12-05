import {sendMessage,updateNewMessageText} from "../../redux/dialogs-reducer";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    dialogsPageData: state.dialogsPage,
})

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        updateNewMessageText
    }),
    WithAuthRedirect
)(DialogsPage)