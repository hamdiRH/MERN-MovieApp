import React from "react";
import PropTypes from "prop-types";
import { Result, Button } from "antd";

const index = props => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

index.propTypes = {};

export default index;
