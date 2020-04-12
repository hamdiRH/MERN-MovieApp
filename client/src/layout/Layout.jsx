import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import "./index.scss";
const { Header, Content, Footer } = Layout;
const App = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <img src={require("../assets/logo.png")} alt={"logo"} />
          <span>MovieApp</span>
        </div>
      </Header>
      <Content className="content">{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        MovieApp ©2020 Created by{" "}
        <a href="https://github.com/hamdiRH">HmadiRH</a>
      </Footer>
    </Layout>
  );
};

App.propTypes = {
  children: PropTypes.any,
};

export default App;
