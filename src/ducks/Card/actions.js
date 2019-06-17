import { DATA_LOADED, CLEAR_TYPE } from '../commonTypes';

import { ALL_CARDS_URL } from '../urls';

export const cardsLoaded = cardData => {
  return {
    type: DATA_LOADED,
    payload: {
      cards: cardData,
    },
  };
};

export const clearCards = () => {
  return {
    type: CLEAR_TYPE,
    payload: {
      type: 'Card',
    },
  };
};

export const loadCardsByPage = pageNumber => async dispatch => {
  const response = await fetch(`${ALL_CARDS_URL}?order=released&page=${pageNumber}`);
  const data = await response.json();

  dispatch(cardsLoaded(data.data));
};

export const searchCardsByName = name => async dispatch => {
  const response = await fetch(`${ALL_CARDS_URL}/search?q=${name}`);
  const data = await response.json();

  dispatch(clearCards());
  dispatch(cardsLoaded(data.data));
};
