import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import findUserReducer from "./find_users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUserPage: findUserReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store