import React from "react";
import { Container, Row, Col} from "reactstrap";
import NavLeft from "./BodyContent/NavLeft";
import Contents from "./BodyContent/Contents";
import Classify from "../Handle/Classify";
import Flash from "../Sale/Flash";
import style from "./Body.module.css";
import Charts from "./Intermediary/Charts";
import FooterC from "./FooterC";
import Carousels from "./Carousel/index";
const dataPr = [
    { id: 1, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2022/TrangMonthlySale_T122_bo1__310x210.jpg' },
    { id: 2, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/CMS-PAGE/MangaComic/TGDQ/after1812/TGDQv4_310%20x%20210.png' },
    { id: 3, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2022/TrangMonthlySale_T122_bo2__310x210.jpg' },
    { id: 4, Pr_Link: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2022/TrangMonthlySale_T122_bo3__310x210.jpg' },
]

function Body() {
    return (
        <div className="bgr_gray">
            <Container style={{ marginTop: 0, paddingTop: 10 }} fluid='lg'>
                <Row style={{marginBottom:20}}>
                    <Col style={{padding:0}}><NavLeft /></Col>
                    <Col xs={9} style={{padding:0}}>
                      <Carousels />  
                    </Col>
                </Row>
                <Row  className={style.prlink}>
                    {
                        dataPr.map(x => <Col key={`sale4cai${x.id}`} md={3} style={{ padding: '10px 0', backgroundColor: 'white', textAlign: 'center' }} key={x.id}><img src={x.Pr_Link} width={'95%'} alt="" /></Col >)
                    }
                </Row>
                <Row className={style.flash}>
                    <Flash />
                </Row>
                <Row>
                    <Col  md={12} style={{ backgroundColor: "#fff", padding: 0, margin: 0 }} >
                        <Classify /> <hr />
                        <Row style={{ margin: 0 }}>  <Contents /> </Row>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: '#fff', marginTop: 15 }}>
                    <Charts />
                </Row>
               <FooterC />
            </Container>
        </div>
    );
}

export default Body;
