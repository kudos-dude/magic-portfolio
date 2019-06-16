import { createReducer } from '../utils/reducerUtils';

import orm from '../orm';

import { DATA_LOADED, CLEAR_TYPE, CLEAR_SESSION } from '../commonTypes';

const initialState = orm.getEmptyState();

export function loadData(state, payload) {
  const session = orm.session(state);

  // const {
  // } = session;

  // const { 
  // } = payload;

  // tools.forEach(tool => Tool.parse(tool));

  return session.state;
}

export const clearData = (state) => {
  const session = orm.session(state);

  // const {
  // } = session;

  // [
  // ].forEach(modelType => modelType.all().toModelArray().forEach(model => model.delete()));

  return session.state;
};

export const clearType = (state, type) => {
  const session = orm.session(state);

  // const modelType = session[type];

  // modelType.all().toModelArray().forEach(model => model.delete());

  return session.state;
};

export default createReducer(initialState, {
  [DATA_LOADED]: loadData,
  [CLEAR_SESSION]: clearData,
  [CLEAR_TYPE]: clearType,
});