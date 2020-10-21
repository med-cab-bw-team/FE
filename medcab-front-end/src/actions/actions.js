import axios from 'axios';


export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL';


export const RECOMMEND_START = 'RECOMMEND_START';
export const RECOMMEND_SUCCESS = 'RECOMMEND_SUCCESS';
export const RECOMMEND_FAIL = 'RECOMMEND_FAIL';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export const registrationStart = (e) => (dispatch) => {
    // console.log(e);
    dispatch({type: REGISTRATION_START, payload: {
        targetName: e.target.name,
        targetValue: e.target.value
    }})
}


export const register = (state) => (dispatch) => {
    // console.log(state);
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

export const loginStart = (e) => (dispatch) => {
    dispatch({type: LOGIN_START, payload: {
        targetName: e.target.name,
        targetValue: e.target.value
    }})
}


export const login = (state) => (dispatch) => {
   
    console.log(state);
    axios.post('https://med-cab-bw.herokuapp.com/api/auth/login', state)
        .then(res => {
            console.log(res, "it's working?");
            dispatch({type: LOGIN_SUCCESS, payload: res.data.token});
            localStorage.setItem('token', res.data.token)
            
        })
        .catch(err => {
            console.error(err);
            dispatch({type: LOGIN_FAIL, payload: err})
            alert("Username or Password are incorrect")
        })
}


export const recommendStart = (e) => (dispatch) => {
    dispatch({type: RECOMMEND_START, payload: {
        targetName: e.target.name,
        targetValue: e.target.value
    }})
}

export const recommendation = (state) => (dispatch) => {
    console.log(state);
    axios.post('https://greengardenapi.herokuapp.com/recommendation/', state)
        .then(res => {
            dispatch({type: RECOMMEND_SUCCESS, payload: res});
        })
        .catch(err => {
            console.error(err);
            dispatch({type: RECOMMEND_FAIL, payload: err});
        })
}