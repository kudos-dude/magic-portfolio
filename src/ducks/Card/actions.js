import { DATA_LOADED } from '../commonTypes';

import { ALL_CARDS_URL } from '../urls';

export const cardsLoaded = cardData => {
  return {
    type: DATA_LOADED,
    payload: {
      cards: cardData,
    },
  };
};

export const loadAllCards = () => async dispatch => {
  const response = await fetch(ALL_CARDS_URL)
  const data = await response.json();

  dispatch(cardsLoaded(data.data));
};