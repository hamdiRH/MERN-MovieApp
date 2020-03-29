import React from "react";
import PropTypes from "prop-types";
import { Card, Avatar,Rate  } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined
} from "@ant-design/icons";

import "./index.scss";
const { Meta } = Card;
const Home = props => {
  return (
    <div className="home">
        {[..."movieApp"].map(el=>
                <Card
                key={Math.random()}
                style={{ width: 300, margin :"0 15px 30px" }}
                cover={
                    <img
                style={{ width: 300, height: "300px"}}

            alt="jumanji"
            src="https://fr.web.img6.acsta.net/pictures/17/11/07/13/40/0517792.jpg"
          />
        }
        actions={[
          <DeleteOutlined key="delete" onClick={() => {}} />,
          <EditOutlined key="edit" onClick={() => {}} />,
         
        ]}
      >
        <Meta title={<>
        <h5> Jumanji - 2019</h5>
        <Rate allowHalf defaultValue={2.5} />
        </>}
        description="L'équipe est de retour mais le jeu a changé. Alors qu'ils retournent dans Jumanji pour secourir l'un des leurs, ils découvrent un monde totalement inattendu. Des déserts arides aux montagnes enneigées, les joueurs vont devoir braver des espaces inconnus et inexplorés, afin de sortir du jeu le plus dangereux du monde." />
      </Card>
            )}
  
    </div>
  );
};

Home.propTypes = {};

export default Home;
