import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavLeft from "./NavLeft";
import Contents from "./Contents";
import Classify from "../Handle/Classify";
import { Pagination } from "antd";

function Body() {
  // function onShowSizeChange(current, pageSize) {
  //   console.log(current, pageSize);
  // }
  return (
    <div className="bgr_gray">
      <Container style={{ marginTop: 0, paddingTop: 10 }}>
        <Row className="flash">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "15px 0px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_flashsale.png"
                style={{ width: 50 }}
                alt="..."
              />
              <div>Flash Sale</div>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_mgg.png"
                style={{ width: 50 }}
                alt="..."
              />
              <div>Mã Giảm Giá</div>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_PCSC.png"
                style={{ width: 50 }}
                alt="..."
              />
              <div>Phiên Chợ Sách Cũ</div>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico-xuhuong.png"
                style={{ width: 50 }}
                alt="..."
              />
              <div>Xu Hướng</div>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_covid-2.png"
                style={{ width: 50 }}
                alt="..."
              />
              <div>Health Care</div>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_vpp_hot.png"
                style={{ width: 50 }}
                alt="..."
              />
              <div>Văn Phòng Phẩm </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_goiy.png"
                style={{ width: 50 }}
                alt="..."
              />
              <div>Gợi Ý Cho Bạn</div>
            </div>
          </div>
        </Row>
        <Row>
          <>
            <Col
              style={{
                padding: 0,
                margin: "0 10px 0 0",
                backgroundColor: "#fff",
              }}
            >
              <NavLeft />
            </Col>
            <Col
              xs={10}
              style={{ backgroundColor: "#fff", padding: 0, margin: 0 }}
            >
              {/* Row */} <Classify /> <hr /> {/* Row */}
              <Row style={{ margin: 0 }}>
                <Contents />
              </Row>
              <div className="paging">
                <Pagination defaultCurrent={1} total={150} />
              </div>
            </Col>
          </>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
