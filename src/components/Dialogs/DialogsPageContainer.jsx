import {setNewMessage} from "../../redux/dialogs-reducer.ts";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    dialogsPageData: state.dialogsPage,
})

export default compose(
    connect(mapStateToProps, {
        sendMessage: setNewMessage,
    }),
    WithAuthRedirect
)(DialogsPage)