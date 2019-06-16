import { DATA_LOADED } from '../commonTypes';

export const cardsLoaded = cardData => {
  return {
    type: DATA_LOADED,
    payload: {
      cards: cardData,
    },
  };
};
