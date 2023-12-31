import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import myProfileReducer from "./MyProfileReducer/myProfileReducer"
import userProfileReducer from "./UserProfileReducer/userProfileReducer"
import messagesReducer from "./MessagesReducer/messagesReducer"
import friendsReducer from "./FriendsReducer/friendsReducer"
import usersReducer from "./UsersReducer/usersReducer"
import newsReducer from "./NewsReducer/newsReducer"
import authReducer from "./AuthReducer/authReducer"
import chatReducer from "./ChatReducer/chatReducer"
import appContentReducer from "./AppContentReducer/appContentReducer"
// import sidebarReducer from "./sidebarReducer"

let rootReducers = combineReducers({
    // sidebar: sidebarReducer,
    myProfilePage: myProfileReducer,
    userProfilePage: userProfileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    auth: authReducer,
    chat: chatReducer,
    form: formReducer,
    app: appContentReducer
});
type RootRducerType = typeof rootReducers
export type AppStateType = ReturnType<RootRducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsType<T extends {[key: string]: (...arg: any []) => any}> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
export type TypedDispatch = ThunkDispatch<AppStateType, any, Action>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.__store__ = store;

export default store;