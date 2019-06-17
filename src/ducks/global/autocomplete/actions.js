import { ALL_CARDS_URL } from 'ducks/urls';
import { AUTO_COMPLETE_LOADED } from './types';


export const autoCompleteLoaded = autoCompleteList => {
  return {
    type: AUTO_COMPLETE_LOADED,
    payload: {
      autoCompleteList,
    },
  };
};

export const searchCardsAutoComplete = partialString => async dispatch => {
  const response = await fetch(`${ALL_CARDS_URL}/autocomplete?q=${partialString}`);
  const data = await response.json();

  dispatch(autoCompleteLoaded(data.data));
};