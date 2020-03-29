import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectMovies = (state, id) =>
  state.data.find(el => el.id === Number(id)) || initialState;
export const selectOneMovie = createSelector(
  [selectMovies],
  employe => employe
);
