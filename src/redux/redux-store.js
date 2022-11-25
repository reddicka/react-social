import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import findUserReducer from "./find_users-reducer";

let reducers = combineReducers({
    profilePageData :profileReducer,
    dialogsPageData: dialogsReducer,
    findUserPageData: findUserReducer
})

let store = createStore(reducers)

export default store