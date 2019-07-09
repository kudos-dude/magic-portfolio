import uuid from 'uuid/v1';

import { ENTITY_UPDATE, ENTITY_DELETE, ENTITY_CREATE } from '../commonTypes';

const ITEM_TYPE = 'Deck';

export const addCard = deckWithNewCard => {
  return {
    type: ENTITY_UPDATE,
    payload: {
      itemType: ITEM_TYPE,
      itemID: deckWithNewCard.id,
      newItemAttributes: deckWithNewCard,
    },
  };
};

export const removeCard = deckWithCardRemoved => {
  return {
    type: ENTITY_UPDATE,
    payload: {
      itemType: ITEM_TYPE,
      itemID: deckWithCardRemoved.id,
      newItemAttributes: deckWithCardRemoved,
    },
  };
};

export const createEmptyDeck = deckId => dispatch => {
  dispatch({
    type: ENTITY_CREATE,
    payload: {
      itemType: ITEM_TYPE,
      newItemAttributes: {
        id: deckId,
      },
    },
  });
};

export const clearDeck = emptyDeck => {
  return {
    type: ENTITY_UPDATE,
    payload: {
      itemType: ITEM_TYPE,
      itemID: emptyDeck.id,
      newItemAttributes: {
        id: emptyDeck.id,
      },
    },
  };
};

export const deleteDeck = deckId => {
  return {
    itemType: ENTITY_DELETE,
    itemID: deckId,
  };
};
