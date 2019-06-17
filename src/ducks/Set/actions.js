import { DATA_LOADED } from '../commonTypes';

export const setLoaded = setData => {
  return {
    type: DATA_LOADED,
    payload: {
      set: setData,
    },
  };
};
