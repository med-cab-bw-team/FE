// create reducers hereß
import {
    combineReducers
  } from "redux";

  import { RegistrationReducer } from './RegistrationReducer';
  import { LoginReducer } from './LoginReducer';

export const rootReducer = combineReducers({
    registration: RegistrationReducer,
    login: LoginReducer
  })