import { combineReducers } from 'redux';
import { reduceReducers } from './utils/reducerUtils';

import entitiesReducer from './entities/reducer';
import entityCrudReducer from './entities/entitiesCrudReducer';

import autoCompleteReducer from './global/autocomplete/reducer';

const combinedReducers = combineReducers({
  entities: entitiesReducer,
  autoCompleteList: autoCompleteReducer,
});

const rootReducer = reduceReducers(
  combinedReducers,
  entityCrudReducer,
);

export default rootReducer;