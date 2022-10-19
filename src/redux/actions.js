import { ASYNC_INCR, CHANGE_THEME, DECREMENT, INCREMENT } from "./types";

export function incr() {
    return {
        type:INCREMENT
    }
}
export function decr() {
    return {
        type:DECREMENT
    }
}
export function changeTheme(newTheme) {
    return {
        type:CHANGE_THEME,
        payload:newTheme
    }
}
export function asyncIncr() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(incr())
        }, 2000);
        
    }
}