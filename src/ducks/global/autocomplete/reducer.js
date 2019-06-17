import { AUTO_COMPLETE_LOADED } from './types';

export default (state = [], action) => {
  switch (action.type) {
    case AUTO_COMPLETE_LOADED:
      return action.payload.autoCompleteList;
    default:
      return state;
  }
};
