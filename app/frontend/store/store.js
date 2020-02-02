import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
  formAddNewAddressReducer,
  formAddNewContractReducer,
  formAddNewNaturalPersonReducer,
  userReducer,
  recommendationsAddresses,
  recommendationsCities,
  recommendationsCountries,
  snackbarReducer
} from './reducers';

const combinedReducers = combineReducers({
  forms: combineReducers({
    addNewContract: formAddNewContractReducer,
    addNewAddress: formAddNewAddressReducer,
    addNewNaturalPerson: formAddNewNaturalPersonReducer
  }),
  recommendations: combineReducers({
    addresses: recommendationsAddresses,
    cities: recommendationsCities,
    countries: recommendationsCountries
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
