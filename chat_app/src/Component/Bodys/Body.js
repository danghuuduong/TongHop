import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavLeft from "./BodyContent/NavLeft";
import Contents from "./BodyContent/Contents";
import Classify from "../Handle/Classify";
import Flash from "../Sale/Flash";
import style from "./Body.module.css";
import Charts from "./Intermediary/Charts";
const dataPr = [
  { id: 1, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2021/bigsale_flashsale_310.jpg' },
  { id: 2, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2021/NCC_T1221_Gold_Kokuyo310x210.jpg' },
  { id: 3, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/CMS-PAGE/MangaComic/TGDQ/after1812/TGDQv4_310%20x%20210.png' },
  { id: 4, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2021/moca_310%20x%20210.png' },
]
function Body() {
  return (
    <div className="bgr_gray">
      <Container style={{ marginTop: 0, paddingTop: 10 }}>
        <Row style={{ marginBottom: 15 }} className={style.prlink}>
          {
            dataPr.map(x => <Col md={3} style={{ padding: '10px 0', backgroundColor: 'white', textAlign: 'center' }} key={x.id}><img src={x.Pr_Link} width={'95%'} alt="" /></Col >)
          }
        </Row>
        <Row className={style.flash}>
          <Flash />
        </Row>
        <Row>
          <Col lg={2} md={12} style={{ padding: 0 }} >
            <NavLeft className={style.Col_NavLeft} />
          </Col>
          <Col lg={10} md={12} style={{ backgroundColor: "#fff", padding: 0, margin: 0 }} >
            <Classify /> <hr />
            <Row style={{ margin: 0 }}>  <Contents /> </Row>
          </Col>
        </Row>
        <Row>
          <Charts />
        </Row>
        <Row>
          <p style={{ margin: 50, backgroundColor: 'black' }}>FOODTER</p>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
