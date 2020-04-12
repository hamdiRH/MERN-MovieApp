import { takeEvery, put, all, call } from "redux-saga/effects";
import * as api from "./service";
import * as CONSTANTS from "./constants";

export function* getAllMovies() {
  try {
    const data = yield call(api.getAllMovies);
    yield put({
      type: CONSTANTS.GET_ALL_MOVIES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: CONSTANTS.GET_ALL_MOVIES_FAILURE, e });
  }
}

export function* getOneMovie() {
  try {
    const data = yield call(api.getOneMovie);
    yield put({
      type: CONSTANTS.GET_ONE_MOVIE_SUCCESS,
      payload: data.data,
    });
  } catch (e) {
    yield put({ type: CONSTANTS.GET_ONE_MOVIE_FAILURE, e });
  }
}

export function* deleteMovie(action) {
  try {
    const result = yield call(api.deleteMovie, action.id);
    yield put({
      type: CONSTANTS.DELETE_MOVIE_SUCCESS,
      payload: result,
    });
    const data = yield call(api.getAllMovies);
    yield put({
      type: CONSTANTS.GET_ALL_MOVIES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: CONSTANTS.DELETE_MOVIE_FAILURE, e });
  }
}

export function* addMovie(action) {
  try {
    const result = yield call(api.addMovie, action.body);
    yield put({
      type: CONSTANTS.ADD_MOVIE_SUCCESS,
      payload: result.data,
    });
    const data = yield call(api.getAllMovies);
    yield put({
      type: CONSTANTS.GET_ALL_MOVIES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: CONSTANTS.ADD_MOVIE_FAILURE, e });
  }
}

export function* updateMovie(action) {
  try {
    const result = yield call(api.updateMovie, action.id, action.body);
    yield put({
      type: CONSTANTS.PUT_MOVIE_SUCCESS,
      payload: result,
    });
    const data = yield call(api.getAllMovies);
    yield put({
      type: CONSTANTS.GET_ALL_MOVIES_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({ type: CONSTANTS.PUT_MOVIE_FAILURE, e });
  }
}

export function* getAllMoviesWatcher() {
  yield takeEvery(CONSTANTS.GET_ALL_MOVIES_REQUEST, getAllMovies);
}
export function* getOneMovieWatcher() {
  yield takeEvery(CONSTANTS.GET_ONE_MOVIE_REQUEST, getOneMovie);
}
export function* deleteMovieWatcher() {
  yield takeEvery(CONSTANTS.DELETE_MOVIE_REQUEST, deleteMovie);
}
export function* addMovieWatcher() {
  yield takeEvery(CONSTANTS.ADD_MOVIE_REQUEST, addMovie);
}
export function* updateMovieWatcher() {
  yield takeEvery(CONSTANTS.PUT_MOVIE_REQUEST, updateMovie);
}
export default function* employmentSaga() {
  yield all([
    getAllMoviesWatcher(),
    getOneMovieWatcher(),
    deleteMovieWatcher(),
    addMovieWatcher(),
    updateMovieWatcher(),
  ]);
}
