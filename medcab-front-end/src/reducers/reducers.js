// create reducers hereß
import {
    combineReducers
  } from "redux";

  import { RegistrationReducer, RecommendationReducer } from './RegistrationReducer';
  import { LoginReducer } from './LoginReducer';
  import { UpdateReducer } from './UpdateReducer';

export const rootReducer = combineReducers({
    registration: RegistrationReducer,
    login: LoginReducer,
    recommendation: RecommendationReducer,
    update: UpdateReducer
  })