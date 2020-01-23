import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { contractAddNewFormReducer } from './contracts';
import { countriesReducer } from './countries';
import { citiesReducer } from './cities';
import { legalEntitiesReducer, legalEntityTypesReducer } from './legalEntities';
import {
  mailSenderNamesReducer,
  mailSendersReducer,
  mailSubjectsReducer,
  mailAddNewFormReducer,
  mailsPendingActionsNotifyEmailsReducer
} from './mails';
import { snackbarReducer } from './snackbar';
import { userDataReducer, userLoginFormReducer } from './user';
import { appReducer } from './app';

const combinedReducers = combineReducers({
  app: appReducer,
  cities: citiesReducer,
  contracts: combineReducers({
    addNewForm: contractAddNewFormReducer
  }),
  countries: countriesReducer,
  legalEntities: combineReducers({
    entities: legalEntitiesReducer,
    types: legalEntityTypesReducer
  }),
  mails: combineReducers({
    addNewForm: mailAddNewFormReducer,
    senders: mailSendersReducer,
    senderNames: mailSenderNamesReducer,
    subjects: mailSubjectsReducer,
    pendingActions: combineReducers({
      notifyEmails: mailsPendingActionsNotifyEmailsReducer
    })
  }),
  snackbar: snackbarReducer,
  user: combineReducers({
    data: userDataReducer,
    login: userLoginFormReducer
  })
});

const combinedDefaultState = {};

//const loggerMiddleware = createLogger();

const store = createStore(
  combinedReducers,
  combinedDefaultState,
  applyMiddleware(thunkMiddleware /*,
    loggerMiddleware*/)
);

export default store;
