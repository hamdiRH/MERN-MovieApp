import React, { useState, useRef } from "react";
import { Drawer, Button, Form, Input, Rate } from "antd";
import PropTypes from "prop-types";
import "./addMovie.scss";
import { EditOutlined } from "@ant-design/icons";
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

const UpdateMovie = ({
  updateMovie,
  name,
  description,
  rate,
  year,
  image,
  id,
}) => {
  const formRef = useRef();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);
  const onFinish = (values) => {
    updateMovie(id, values.movie);
  };

  return (
    <div className="add-movie">
      <EditOutlined key="edit" onClick={showDrawer} />

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
          initialValues={{ movie: { name, description, rate, year, image } }}
          ref={formRef}
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

UpdateMovie.propTypes = {
  updateMovie: PropTypes.func.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  rate: PropTypes.number,
  year: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
};

export default UpdateMovie;
