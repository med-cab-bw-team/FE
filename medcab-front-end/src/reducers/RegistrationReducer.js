import {REGISTRATION_START} from '../actions/actions';


intialRegistrationState = {
    username: '',
    password: '',
    email: '',
    isRegistering: false
}

export const RegistrationReducer = (state = initialRegistrationState, action) => {
    switch(action.type) {
        case REGISTRATION_START:
            return {
                ...state,
                isRegistering: true,
                [action.payload.targetName]: action.payload.targetValue
            }
        default:
            return {
                state
            }
    }

}