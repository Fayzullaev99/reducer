import { combineReducers } from "redux"
import { INCREMENT, DECREMENT, CHANGE_THEME } from "./types"

function countReducer(state = 0,action) {
    if (action.type === INCREMENT) {
        return state + 1
    }else
    if (action.type === DECREMENT) {
        return state - 1
    }


    return state
}
const initialState = {
    value:'light'
}
function themeReducer(state = initialState,action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state,value:action.payload}
        default: 
            return state
    }
}
export const rootReducer = combineReducers({
    counter: countReducer,
    theme:themeReducer
})