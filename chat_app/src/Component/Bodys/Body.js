import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavLeft from "./BodyContent/NavLeft";
import Contents from "./BodyContent/Contents";
import Classify from "../Handle/Classify";
import Flash from "../Sale/Flash";

function Body() {
  // function onShowSizeChange(current, pageSize) {
  //   console.log(current, pageSize);
  // }
  return (
    <div className="bgr_gray">
      <Container style={{ marginTop: 0, paddingTop: 10 }}>
        <Row className="flash" >
            <Flash />
        </Row>
        <Row>
            <Col className="Col_NavLeft"
               lg={2} md={12}  >
              <NavLeft />
            </Col>
            <Col lg={10} md={12} style={{ backgroundColor: "#fff", padding: 0, margin: 0 }} >
              <Classify /> <hr /> 
              <Row style={{ margin: 0 }}>  <Contents /> </Row>
            </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default Body;
