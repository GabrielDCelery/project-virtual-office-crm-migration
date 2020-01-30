import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {
  formAddNewAddressReducer,
  formAddNewContractReducer,
  userReducer,
  recommendationsAddresses,
  recommendationsCities,
  recommendationsCountries
} from './reducers';

const combinedReducers = combineReducers({
  forms: combineReducers({
    addNewContract: formAddNewContractReducer,
    addNewAddress: formAddNewAddressReducer
  }),
  recommendations: combineReducers({
    addresses: recommendationsAddresses,
    cities: recommendationsCities,
    countries: recommendationsCountries
  }),
  user: userReducer
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
