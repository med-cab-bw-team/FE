import { USER_UPDATE_START, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from '../actions/actions';


const username = localStorage.getItem('username');
const email = localStorage.getItem('email');
const state = localStorage.getItem('state');

const initialUpdate = {
    username: username,
    email: email,
    state_abbreviation: state,
    password: '',
    error: ''
}

export const UpdateReducer = (state = initialUpdate, action) => {
    switch(action.type) {
        case USER_UPDATE_START:
            return {
                ...state,
                [action.payload.targetName]: action.payload.targetValue
            }
        case USER_UPDATE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}