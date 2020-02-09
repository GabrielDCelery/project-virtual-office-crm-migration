import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
  formAddNewContractReducer,
  recommendationsAddresses,
  recommendationsCities,
  recommendationsCountries,
  recommendationsLegalEntities,
  recommendationsNaturalPeople,
  snackbarReducer,
  userReducer
} from './reducers';

const combinedReducers = combineReducers({
  forms: combineReducers({
    addNewContract: formAddNewContractReducer
  }),
  recommendations: combineReducers({
    addresses: recommendationsAddresses,
    cities: recommendationsCities,
    countries: recommendationsCountries,
    legalEntities: recommendationsLegalEntities,
    naturalPeople: recommendationsNaturalPeople
  }),
  user: userReducer,
  snackbar: snackbarReducer
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
