import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Typography, Avatar } from "antd";
import {
  TeamOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import firebase, { auth } from "../../Firebase/config";
const Google_provider = new firebase.auth.GoogleAuthProvider();

function Login() {
  const onFinish = (values) => {};
  //-----------------------------------------------
  const [usersLogin, SetUsersLogin] = useState();
  console.log("🙉🍀 __ usersLogin", usersLogin);

  const hanldeGoogle = () => {
    auth.signInWithPopup(Google_provider);
  };
  const hanldeGoogle_signOut = () => {
    auth.signOut(Google_provider);
  };
  auth.onAuthStateChanged((user) => {
    SetUsersLogin(user?._delegate);
  });
  //-----------------------------------------------

  return (
    <Row justify="center" style={{ height: "100vh" }}>
      <Col
        span={10}
        style={{ border: "1px solid ", textAlign: "center", padding: 10 }}
      >
        <Typography.Title level={2}>Login Em</Typography.Title>
        <Form name="basic" onFinish={onFinish}>
          <Form.Item
            name="username"
            style={{ marginBottom: 5 }}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" prefix={<TeamOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            style={{ marginBottom: 5 }}
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Username"
              prefix={<ShoppingOutlined />}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 10 }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Đăng Nhập
            </Button>
          </Form.Item>
        </Form>
        <span
          style={{ display: "flex", justifyContent: "end", marginBottom: 10 }}
        >
          <span style={{ marginRight: 10 }}>Đăng ký nhanh</span>
          <span>Quên mật khẩu ?</span>
        </span>

        <span style={{ display: "flex" }}>
          <Button style={{ width: "50%" }} onClick={hanldeGoogle}>
            Đăng Nhập Google
          </Button>
          <Button style={{ width: "50%" }}>Đăng Nhập FaceBook</Button>
        </span>
      </Col>
      <div
        style={{
          position: "absolute",
          right: 50,
          top: 10,
        }}
      >
        {usersLogin && (
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              flexDirection: "column",
            }}
          >
            <div>
              {" "}
              Chào bạn{" "}
              <span style={{ color: "#f56a00" }}>
                {usersLogin.displayName}
              </span>{" "}
              <Avatar size={40} src={usersLogin.photoURL} />
            </div>
            <Button onClick={hanldeGoogle_signOut}>Đăng xuất</Button>
          </div>
        )}
      </div>
    </Row>
  );
}

export default Login;
