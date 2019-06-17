import { DATA_LOADED } from '../commonTypes';

export const listLoaded = listData => {
  return {
    type: DATA_LOADED,
    payload: {
      list: listData,
    },
  };
};
