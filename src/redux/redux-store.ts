import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import findUsersReducer from "./find_users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// настройки для браузерного расширения Redux DevTools
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// временная штука для разработки
// @ts-ignore
window.__store__ = store

export default store