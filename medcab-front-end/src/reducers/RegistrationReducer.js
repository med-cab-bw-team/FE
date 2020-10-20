import {REGISTRATION_START, REGISTRATION_SUCCESS, REGISTRATION_FAIL, RECOMMEND_START, RECOMMEND_SUCCESS, RECOMMEND_FAIL} from '../actions/actions';


 const initialState = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    currentCity: '',
    state_abbreviation: '',
    isOfAge: false,
    isRegistering: false,
    error: ''
}

const initialRecommend = {
    symptom: '',
    strain: '',
    flavor: '',
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

export const RecommendationReducer = (state = initialRecommend, action) => {
    switch(action.type) {
        case RECOMMEND_START:
            return {
                ...state,
                [action.payload.targetName]: action.payload.targetValue
            }
        case RECOMMEND_SUCCESS:
            return state
        case RECOMMEND_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}