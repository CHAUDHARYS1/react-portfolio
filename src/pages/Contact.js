import React from "react";
import { Form, Input, Typography, Button, Layout } from "antd";
const { Content } = Layout;
const { Title } = Typography;

const Contact = () => {
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };

  return (
    <Content>
      <Title>Let's talk</Title>
      <p>
        Would love to have a conversation, even if it's simple as saying hello!
      </p>
        <Form
          name="nest-messages"
          validateMessages={validateMessages}
          className="contact-form"
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email", required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "website"]} label="Website">
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "introduction"]}
            label="Introduction"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    </Content>
  );
};

export default Contact;
