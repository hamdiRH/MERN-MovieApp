import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Breadcrumb } from "antd";
import "./index.scss";
const { Header, Content, Footer } = Layout;
const App = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <img src="https://png2.cleanpng.com/sh/e08dcea73ef6c5a22b4cf351a04515f5/L0KzQYm3VMA1N5d6fZH0aYP2gLBuTgBpd6V0fARqcHjsc37tifxuNaFthAZ4Z4LkgLnCTf1wfppqRdVqbXX1cX7qif5mNWZme6cAOEjnRbTpgfI4NmU6T6c9NUW6QYa5Usg5Omg1SaUCOUixgLBu/kisspng-photographic-film-photography-movie-camera-cine-5ac5588d5cbab7.4575455715228827013798.png" />
        </div>
      </Header>
      <Content className="content">{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        MovieApp ©2020 Created by
        <a href="https://github.com/hamdiRH">HmadiRH</a>
      </Footer>
    </Layout>
  );
};

App.propTypes = {};

export default App;
