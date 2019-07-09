import { SET_CURRENT_DECK } from './types';

export default (state = { currentDeckId: null }, action) => {
  switch (action.type) {
    case SET_CURRENT_DECK:
      return {
        ...state,
        currentDeckId: action.payload.currentDeckId,
      };
    default:
      return state;
  }
};
