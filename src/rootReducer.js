import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice'
import colorsReducer from "./features/colorsSlice";

 const rootReducer = combineReducers({
    navigation: navigationReducer,
    colors: colorsReducer,

})

export default rootReducer;