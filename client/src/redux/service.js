import axios from "axios";
import { BaseApi } from "./constants";

export const getAllMovies = async () => {
  const result = await axios.get(`${BaseApi}/movies/getall`);
  return result.data;
};

export const getOneMovie = async id => {
  const result = await axios.get(`${BaseApi}/movies/getone/${id}`);
  return result.data;
};

export const deleteMovie = async id => {
  const result = await axios.delete(`${BaseApi}/movies/delete/${id}`);
  return result.data;
};

export const updateMovie = async (id, body) => {
  const result = await axios.put(`${BaseApi}/movies/update/${id}`, body);
  return result.data;
};
export const addMovie = async body => {
  const result = await axios.post(`${BaseApi}/movies/add`, body);
  return result.data;
};
