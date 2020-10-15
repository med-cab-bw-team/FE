import axios from 'axios';

export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL';


export const registrationStart = (e) => (dispatch) => {
    dispatch({type: REGISTRATION_START, payload: {
        targetName: e.target.targetName,
        targetValue: e.target.value
    }})
}


export const register = (state) => (dispatch) => {
    axios.post('https://med-cab-bw.herokuapp.com/api/auth/register', {
        username: state.username,
        password: state.password,
        email: state.email
    } )
        .then(res => {
            console.log(res);
            dispatch({type: REGISTRATION_SUCCESS})
        })
        .catch(err => {
            console.error(err);
        })
} 