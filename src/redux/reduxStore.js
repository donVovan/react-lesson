import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

/*
let store = createStore(reducers);

export default store;*/

export const store = configureStore({
        reducer: rootReducer
})

