import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
// import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
function HeaderCenter() {
  const onSearch = (value) => console.log(value);
  return (
    <Container>
      <Row>
        <Col>
          <NavLink to="/">
            <img src="/Images/logo.png" alt="logo" width={120} />
          </NavLink>
        </Col>
        <Col
          xs={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              suffix={suffix}
              onSearch={onSearch}
            />
          </Space>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <div style={{ paddingRight: 24 }}>
            <i class="fas fa-shopping-cart" style={{ fontSize: 40 }}></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderCenter;
