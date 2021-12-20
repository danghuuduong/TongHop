import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import NavLeft from "./NavLeft";
import Contents from "./Contents";
import Classify from "../Handle/Classify";
import { Pagination } from 'antd';

function Body() {
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  return (
    <div className="bgr_gray">
      <Container style={{ marginTop: 0, paddingTop: 10 }}>
        <Row>  
          <>
            <Col  style={{ padding: 0, margin: "0 10px",   backgroundColor: "#fff",   }}  >
              <NavLeft />
            </Col>
            <Col xs={10}   style={{ backgroundColor: "#fff", padding: 0,margin:0 }} > 
              {/* Row */} <Classify />   <hr />    {/* Row */}

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
