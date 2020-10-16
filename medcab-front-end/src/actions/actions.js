import axios from 'axios';

export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL';


export const registrationStart = (e) => (dispatch) => {
    // console.log(e);
    dispatch({type: REGISTRATION_START, payload: {
        targetName: e.target.name,
        targetValue: e.target.value
    }})
}


export const register = (state) => (dispatch) => {
    console.log(state);
    axios.post('https://med-cab-bw.herokuapp.com/api/auth/register', state )
        .then(res => {
            console.log(res);
            dispatch({type: REGISTRATION_SUCCESS, payload: res.data.user});
            // localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            console.error(err);
            dispatch({type: REGISTRATION_FAIL, payload: err});
        })
} 