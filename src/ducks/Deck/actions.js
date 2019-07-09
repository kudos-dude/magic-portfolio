import { ENTITY_UPDATE, ENTITY_DELETE, ENTITY_CREATE } from '../commonTypes';

const ITEM_TYPE = 'Deck';

export const addCard = deckWithNewCard => dispatch => {
  dispatch({
    type: ENTITY_UPDATE,
    payload: {
      itemType: ITEM_TYPE,
      itemID: deckWithNewCard.id,
      newItemAttributes: deckWithNewCard,
    },
  });
};

export const removeCard = deckWithCardRemoved => dispatch => {
  dispatch({
    type: ENTITY_UPDATE,
    payload: {
      itemType: ITEM_TYPE,
      itemID: deckWithCardRemoved.id,
      newItemAttributes: deckWithCardRemoved,
    },
  });
};

export const createEmptyDeck = deckId => dispatch => {
  dispatch({
    type: ENTITY_CREATE,
    payload: {
      itemType: ITEM_TYPE,
      newItemAttributes: {
        id: deckId,
        cards: [],
      },
    },
  });
};

export const clearDeck = deck => dispatch => {
  dispatch({
    type: ENTITY_UPDATE,
    payload: {
      itemType: ITEM_TYPE,
      itemID: deck.id,
      newItemAttributes: {
        id: deck.id,
        cards: [],
      },
    },
  });
};

export const deleteDeck = deckId => dispatch => {
  dispatch({
    itemType: ENTITY_DELETE,
    itemID: deckId,
  });
};
