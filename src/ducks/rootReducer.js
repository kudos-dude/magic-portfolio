import { combineReducers } from 'redux';
import { reduceReducers } from './utils/reducerUtils';

import entitiesReducer from './entities/reducer';
import entityCrudReducer from './entities/entitiesCrudReducer';

const combinedReducers = combineReducers({
  entities: entitiesReducer,
});

const rootReducer = reduceReducers(
  combinedReducers,
  entityCrudReducer,
);

export default rootReducer;