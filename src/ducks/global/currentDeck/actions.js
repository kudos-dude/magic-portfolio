import { SET_CURRENT_DECK } from "./types";

export const setCurrentDeckId = deckId => dispatch => {
  dispatch({
    type: SET_CURRENT_DECK,
    payload: {
      currentDeckId: deckId,
    },
  });
};
