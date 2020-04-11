import * as CONSTANTS from "./constants";

export function fetchMovies() {
  return {
    type: CONSTANTS.GET_ALL_MOVIES_REQUEST
  };
}

export function fetchMovie(id) {
  return {
    type: CONSTANTS.GET_ONE_MOVIE_REQUEST,
    id
  };
}

export function addNewMovie(body) {
  return {
    type: CONSTANTS.ADD_MOVIE_REQUEST,
    body
  };
}
export function updateMovie(id, body) {
  return {
    type: CONSTANTS.PUT_MOVIE_REQUEST,
    id,
    body
  };
}

export function deleteMovie(id) {
  return {
    type: CONSTANTS.DELETE_MOVIE_REQUEST,
    id
  };
}

export function clearError() {
  return { type: CONSTANTS.CLEAR_ERROR };
}
