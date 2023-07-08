import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice'
import colorsReducer from "./features/colorsSlice";
import goodsReducer from './features/goodsSlice'

 const rootReducer = combineReducers({
    navigation: navigationReducer,
    colors: colorsReducer,
    goods: goodsReducer,

})

export default rootReducer;