import * as CONSTANTS from "./constants";
import produce from "immer";
export const initialState = {
  loading: {
    movies: false,
  },
  data: {
    movies: [],
  },
  error: false,
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case CONSTANTS.GET_ALL_MOVIES_REQUEST:
        draft.loading.movies = true;
        break;
      case CONSTANTS.GET_ALL_MOVIES_SUCCESS:
        draft.loading.movies = false;
        draft.data.movies = payload;
        break;
      case CONSTANTS.GET_ALL_MOVIES_FAILURE:
        draft.loading.movies = false;
        break;
      default:
        return draft;
    }
  });

export default reducer;
