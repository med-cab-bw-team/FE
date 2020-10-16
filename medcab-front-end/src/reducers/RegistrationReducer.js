import {REGISTRATION_START, REGISTRATION_SUCCESS, REGISTRATION_FAIL} from '../actions/actions';


 const initialState = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    isOfAge: false,
    isRegistering: false,
    error: ''
}

export const RegistrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTRATION_START:
            return {
                ...state,
                // isRegistering: true,
                [action.payload.targetName]: action.payload.targetValue
            }
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                username: action.payload.username,
                email: action.payload.email
            }
        case REGISTRATION_FAIL:
            return {
                ...state,
                isRegistering: false,
                error: action.payload
            }
        default:
            return state
    }

}