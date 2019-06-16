export const createReducer = (initialState, fnMap) =>
  (state = initialState, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };


/**
 * @acemarke -
 * reduceReducers is a nifty little utility. 
 * It lets us supply multiple reducer functions as arguments and effectively forms a pipeline
 * out of those functions, then returns a new reducer function. If we call that new reducer
 * with the top-level state, it will call the first input reducer with the state,
 * pass the output of that to the second input reducer, and so on.
 * (If I were more Functional-Programming-minded,
 * I’d guess that there’s probably a lot of similarities with compose(),
 * but this is about as far as my mind goes in that direction. 
 * I’m sure someone will be happy to correct me or clarify things.)
 * 
 */

export const reduceReducers = (...reducers) =>
  (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current),
      previous,
    );

export const createConditionalSliceReducer = (sliceName, fnMap) => {
  // Create a reducer that knows how to handle one slice of state, with these action types
  const sliceReducer = createReducer({}, fnMap);

  // Create a new wrapping reducer
  return (state, action) => {
    // Check to see if this slice reducer knows how to handle this action
    if (fnMap[action.type]) {
      // If it does, pass the slice to the slice reducer, and update the slice
      return {
        ...state,
        [sliceName]: sliceReducer(state[sliceName], action),
      };
    }

    // Otherwise, return the existing state unchanged
    return state;
  };
};

