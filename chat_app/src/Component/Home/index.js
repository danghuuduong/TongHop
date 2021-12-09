import React from "react";
import { Row, Col } from "antd";
import style from "./style.module.css";
function Home() {
  return (
    <>
      <Row
        style={{
          backgroundColor: "#f57224",
          height: 40,
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col span={12}>
          <div  className={style['navigation_top_left']}>
            <span>
              <i class="fas fa-phone-alt" /> +1 (123) 888 9999
            </span>
            <span>
              <i class="far fa-envelope" /> danghuuduong98@gmail.com
            </span>
          </div>
        </Col>

        <Col span={12}>
          <div className={style['navigation_top_right']}>
            <span>
               ĐĂNG NHẬP
            </span>
            <span>
               ĐĂNG KÝ
            </span>
            <span>
               LIÊN HỆ
            </span>
            <span>
               NGÔN NGỮ
            </span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Home;
