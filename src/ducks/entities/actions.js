import {
  ENTITY_UPDATE,
  ENTITY_DELETE,
  ENTITY_CREATE,
} from "../commonTypes";

export const updateEntity = (itemType, itemID, newItemAttributes) => {
  return {
    type: ENTITY_UPDATE,
    payload: {
      itemType,
      itemID,
      newItemAttributes,
    },
  };
}

export const deleteEntity = (itemType, itemID) => {
  return {
    type: ENTITY_DELETE,
    payload: { 
      itemType, 
      itemID,
    },
  };
}

export const createEntity = (itemType, newItemAttributes) => {
  return {
    type: ENTITY_CREATE,
    payload: {
      itemType,
      newItemAttributes,
    },
  };
}