import * as CONSTANTS from "./constants";
import produce from "immer";
export const initialState = {
  loading: {
    movies: false,
  },
  data: {
    movies: [],
  },
  error: {
    deleteMovie: null,
    updateMovie: null,
  },
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      /** Get all movie */
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
      /** Delete movie */
      case CONSTANTS.DELETE_MOVIE_REQUEST:
        draft.loading.movies = true;
        draft.error.deleteMovie = null;
        break;
      case CONSTANTS.DELETE_MOVIE_SUCCESS:
        draft.loading.movies = false;
        draft.error.deleteMovie = false;
        break;
      case CONSTANTS.DELETE_MOVIE_FAILURE:
        draft.loading.movies = false;
        draft.error.deleteMovie = true;
        break;
      /** Updtae movie */
      case CONSTANTS.PUT_MOVIE_REQUEST:
        draft.loading.movies = true;
        draft.error.updateMovie = null;
        break;
      case CONSTANTS.PUT_MOVIE_SUCCESS:
        draft.loading.movies = false;
        draft.error.updateMovie = false;
        break;
      case CONSTANTS.PUT_MOVIE_FAILURE:
        draft.loading.movies = false;
        draft.error.updateMovie = true;
        break;
      default:
        return draft;
    }
  });

export default reducer;
