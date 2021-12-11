import React from "react";
import style from "./style.module.css";
import { Row, Container, Col } from "reactstrap";
import HeaderTop from "../CpnHeader/HeaderTop";

function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="bg-light" sm="12" xs="12">
            <HeaderTop />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
