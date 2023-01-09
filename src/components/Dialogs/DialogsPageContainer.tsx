import {DialogType, MessageType, setNewMessage} from "../../redux/dialogs-reducer";
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogs: Array<DialogType> | []
    messages: Array<MessageType> | []
}

type MapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
}

type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
})


export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType,
        OwnPropsType, AppStateType>(mapStateToProps, {
        sendMessage: setNewMessage
    }),
    WithAuthRedirect
    // @ts-ignore
)(DialogsPage)