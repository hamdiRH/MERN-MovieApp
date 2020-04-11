import React, { useState } from "react";
import { Drawer, Button, Form, Input, Rate } from "antd";
import PropTypes from "prop-types";
import "./addMovie.scss";
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
const validateMessages = {
  required: "Field is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const AddMovie = ({ addNewMovie }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);
  const onFinish = (values) => {
    addNewMovie(values.movie);
  };
  return (
    <div className="add-movie">
      <div style={{ position: "fixed", bottom: "40px", right: "40px" }}>
        <img
          src={require("../../assets/add.png")}
          onClick={showDrawer}
          width={"60"}
        />
      </div>
      <Drawer
        title="Add new movie"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["movie", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["movie", "description"]}
            label="Description"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name={["movie", "rate"]}
            label="Rate"
            rules={[
              {
                required: true,
              },
              {
                type: "number",
                min: 0,
                max: 5,
              },
            ]}
          >
            <Rate />
          </Form.Item>
          <Form.Item
            name={["movie", "year"]}
            label="year"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["movie", "image"]}
            label="image"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

AddMovie.propTypes = {
  addNewMovie: PropTypes.func.isRequired,
};

export default AddMovie;
