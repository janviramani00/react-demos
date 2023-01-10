import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

export default function A() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Call when component mounts");
    return () => {
      console.log("unmount.......");
    };
  }, [count]);

  const increaseValue = () => {
    if (count < 5) setCount(count + 1);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button onClick={increaseValue}>Plus</Button>
      <h1>{count}</h1>
      <Form className="form"
        name="basic"
        //style={{ width: "200px" }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
