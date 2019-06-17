import { DATA_LOADED } from '../commonTypes';

import { ALL_SETS_URL } from '../urls';

export const setLoaded = setData => {
  return {
    type: DATA_LOADED,
    payload: {
      sets: setData,
    },
  };
};

export const loadAllCardSets = () => async dispatch => {
  const response = await fetch(ALL_SETS_URL)
  const data = await response.json();

  dispatch(setLoaded(data.data));
};
