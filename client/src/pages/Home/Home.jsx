import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Avatar, Rate } from "antd";
import AddMovie from "./AddMovie";
import UpdateMovie from "./UpdateMovie";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./index.scss";
const { Meta } = Card;
const Home = ({
  data,
  fetchMovies,
  fetchMovie,
  addNewMovie,
  updateMovie,
  deleteMovie,
}) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return (
    <>
      <AddMovie addNewMovie={addNewMovie} />

      <div className="home">
        {data.movies.map(
          ({ name, description, rate, year, image, _id: id }) => (
            <Card
              key={Math.random()}
              style={{ width: 300, margin: "0 15px 30px", height: "100%" }}
              cover={
                <img
                  style={{ width: 300, height: "300px" }}
                  alt={name}
                  src={image}
                />
              }
              actions={[
                <DeleteOutlined
                  key="delete"
                  onClick={() => {
                    deleteMovie(id);
                  }}
                />,
                <UpdateMovie
                  updateMovie={updateMovie}
                  name={name}
                  description={description}
                  rate={rate}
                  year={year}
                  image={image}
                  id={id}
                />,
              ]}
            >
              <Meta
                title={
                  <>
                    <h5>
                      {name} - {year}
                    </h5>
                    <Rate allowHalf defaultValue={rate} disabled />
                  </>
                }
                description={description}
              />
            </Card>
          )
        )}
      </div>
    </>
  );
};

Home.propTypes = {
  data: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  addNewMovie: PropTypes.func.isRequired,
  updateMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default Home;
