import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/actions';


const initialUser = {
    username: '',
    password: '',
    isLoggedIn: false,
    error: ''
}


export const LoginReducer = (state = initialUser, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                [action.payload.targetName]: action.payload.targetValue
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                isLoggedIn: true
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}