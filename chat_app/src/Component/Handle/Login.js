import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, Input, Button, Typography, Avatar } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { ThemeContext } from "../../ThemeProvides";

function Login() {
  const [form] = Form.useForm();
  const [, forceUpdate] = React.useState({});
  //-----------------------------------------------
  const Context = React.useContext(ThemeContext);

  const onFinish = (values) => {};

  //-----------------------------------------------

  React.useEffect(() => {
    forceUpdate({});
  }, []);
  return (
    <>
      <Container fluid>
        <Row style={{ backgroundColor: "#eff0f5" }}>
          <Col
            xs={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              flexDirection: "column",
              transform: "translateX(-10%)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img src="/Images/logo.png" alt="logo" width={300} />
              <h1>Shop Oa Oa</h1>
              <h4>
                <div>Sàn Điện tử được đánh giá chất lượng 5 sao</div>
                <span>Đông Nam Á & Quảng Đông trung quốc</span>
              </h4>
            </div>
          </Col>
          <Col xs={6}>
            <div
              style={{
                margin: 70,
                backgroundColor: "white",
                padding: 50,
                borderRadius: 5,
                width: 450,
              }}
            >
              <Typography.Title level={2}>ĐĂNG NHẬP</Typography.Title>
              <Form name="basic" onFinish={onFinish} form={form}>
                <Form.Item
                  name="username"
                  // rules={[{ required: true, message: "Please input your username!" }]}
                  rules={[
                    { required: true, message: "Vui lòng nhập tên đăng nhập" },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Username"
                    prefix={<UserOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  // rules={[{ required: true, message: "Please input your password!" }]}
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu" },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Username"
                    prefix={<LockOutlined />}
                  />
                </Form.Item>

                <Form.Item style={{ marginBottom: 10 }} shouldUpdate>
                  {() => {
                    const forceUpdate =
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length;
                    return (
                      <Button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className={
                          forceUpdate
                            ? "bt__forceUpdate_lg"
                            : "bt__forceUpdate_lg_ok"
                        }
                        disabled={forceUpdate}
                      >
                        Đăng Nhập
                      </Button>
                    );
                  }}
                </Form.Item>
              </Form>
              <div style={{ marginBottom: 5, textAlign: "end" }}>
                <span style={{ color: "blue" }}>Quên mật khẩu ?</span>
              </div>

              <div style={{ marginBottom: 10 }}>
                <div
                  style={{
                    color: "#dbdbdb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ transform: "translateY(-6px)" }}>
                    _____________________________
                  </div>
                  <span style={{ margin: "0 15px", color: "#aba8a8" }}>
                    {" "}
                    HOẶC{" "}
                  </span>
                  <div style={{ transform: "translateY(-6px)" }}>
                    _____________________________
                  </div>
                </div>
              </div>

              <Form.Item>
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    size="large"
                    style={{
                      width: "49%",
                      backgroundColor: "#1877f2",
                      color: "white",
                      fontSize: 18,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="fab fa-facebook-square"
                      style={{ fontSize: 30 }}
                    ></i>
                    <span style={{ marginLeft: 10 }}>Facebook</span>
                  </Button>
                  <Button
                    size="large"
                    style={{
                      width: "49%",
                      backgroundColor: "#4285f4",
                      display: "flex",
                      alignItems: "center",
                      fontSize: 18,
                      borderRadius: 3,
                    }}
                  >
                    <img
                      src="/Images/google.png"
                      style={{
                        width: 34,
                        backgroundColor: "white",
                        transform: "translateX(-13px)",
                      }}
                      alt="google"
                    />
                    <span
                      style={{ marginLeft: 10, color: "white" }}
                      onClick={Context.hanldeGoogle}
                    >
                      Google
                    </span>
                  </Button>
                </span>
              </Form.Item>

              <Form.Item>
                <span>Bạn mới biết đến Dương ?</span>
                <span style={{ color: "red" }}> ĐĂNG KÝ !</span>
              </Form.Item>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
