import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavLeft from "./BodyContent/NavLeft";
import Contents from "./BodyContent/Contents";
import Classify from "../Handle/Classify";
import Flash from "../Sale/Flash";
import style from "./Body.module.css";
import Charts from "./Intermediary/Charts";
import { NavLink, useLocation ,useHistory} from "react-router-dom";

import Carousels from "./Carousel/index";
import { dataPr, data_view2, data_view2_2 } from "../../constants/data";
import Filter from "../Handle/Filter";
import { ThemeContext } from "../../ThemeProvides";

function Body() {
    const history = useHistory();
    const Context = React.useContext(ThemeContext);
    console.log("🙉🍀 --> Context.Pathname", Context.Pathname)
    const isValue = Context.search.length
    console.log("🙉🍀 --> isValue", isValue)
   
    React.useEffect(() => {
          if (isValue > 0 ) {
              if( Context.Pathname !== '/checkout/cart'){
                  history.push("/checkout/cart");
              }
          }
      }, [isValue])
    return (
        <div className="bgr_gray">
            <Container style={{ marginTop: 0, paddingTop: 10 }} fluid='lg'>
                {
                  
                    <React.Fragment>
                                
                                <Row style={{ marginBottom: 20 }}>
                                    <Col style={{ padding: 0 }}><NavLeft /></Col>
                                    <Col xs={9} style={{ padding: 0 }}>
                                        <Carousels />
                                    </Col>
                                </Row>
                                <Row className={style.prlink}>
                                    {
                                        dataPr.map(x => <Col key={`sale4cai${x.id}`} md={3} style={{ padding: '10px 0', backgroundColor: 'white', textAlign: 'center' }} >
                                            <img src={x.Pr_Link} width={'95%'} alt="" /></Col >)
                                    }
                                </Row>
                                <Row className={style.flash}>
                                    <Flash />
                                </Row>
                    </React.Fragment>
                }
                
                {/*-------------------------------------- Nội Dung Chính------------------ */}
                <Row>
                    <Col style={{ padding: 0 }}>
                        <Filter />
                    </Col>
                    <Col md={9} style={{ backgroundColor: "#fff", padding: 0, margin: 0 }} >
                        <Classify /> <hr />
                        <Row style={{ margin: 0 }}>  <Contents /> </Row>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: '#fff', marginTop: 15 }}>
                    <Charts data_view2={data_view2_2} />
                </Row>
                <Row style={{ backgroundColor: '#fff', marginTop: 15 }}>
                    <Charts data_view2={data_view2} />
                </Row>

            </Container>
        </div>
    );
}

export default Body;
