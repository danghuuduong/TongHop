import React from "react";
import { Row, Col } from "antd";
import { PhoneOutlined, GoogleOutlined } from "@ant-design/icons";
function Home() {
  return (
    <>
      <Row
        style={{
          backgroundColor: "#1e1e1f",
          height: 45,
          color: "#ffffff99",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col span={12}>
          <div style={{ transform: "translateX(10%)" }}>
            <span>
              {" "}
              <PhoneOutlined /> +1 (123) 888 9999
            </span>
            <span> | </span>
            <span>
              {" "}
              <GoogleOutlined /> danghuuduong98@gmail.com{" "}
            </span>
          </div>
        </Col>

        <Col span={12}>
          <div style={{ transform: "translateX(-10%)", textAlign: "end" }}>
            <span>
              {" "}
              <PhoneOutlined /> Store Locator
            </span>
            <span> | </span>
            <span>
              {" "}
              <PhoneOutlined /> Checkout
            </span>
            <span> | </span>
            <span>
              {" "}
              <PhoneOutlined /> My Account
            </span>
            <span> | </span>
            <span>
              {" "}
              <PhoneOutlined /> Languege
            </span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Home;
