import { USER_UPDATE_START, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from '../actions/actions';


const initialUpdate = {
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