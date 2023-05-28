import { combineReducers } from 'redux';
import { rootAPI } from '../rootApi';

const rootReducer = combineReducers({
  [rootAPI.reducerPath]: rootAPI.reducer,
});

export default rootReducer;
