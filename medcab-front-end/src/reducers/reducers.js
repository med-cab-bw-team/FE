// create reducers hereß
import {
    combineReducers
  } from "redux";

  import { RegistrationReducer } from './RegistrationReducer';

export const rootReducer = combineReducers({
    registration: RegistrationReducer
  })