import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { ThemeContext } from "../../../ThemeProvides";
import ConvertNVD from "../../Handle/ConvertNVD";

function Detail() {
    const Context = React.useContext(ThemeContext);
    const item = Context.detailpProducts
    return (
        <Container >
            <React.Fragment>
                {!item ? <div>MUa thêm sản phẩm</div>
                    : <>
                        <Row style={{ marginTop: 15, backgroundColor: '#fff', borderRadius: 8 }}>
                            <Col>
                                <img src={item.imgURl} alt='...' />
                            </Col>
                            <Col xs={8} >
                                <h3>{item.title}</h3>
                                <div>
                                    <span>   Mã Giảm Giá Của Shop </span>
                                    <button>Giảm 500k</button>
                                    <button>Giảm 300k</button>
                                </div>
                                <div>
                                    <div>Vận chuyển</div>
                                    <div>
                                        <div><i className="fas fa-shipping-fast" /> Xử lý đơn hàng bởi Shop Duong</div>
                                        <div>
                                            <div><i className="fas fa-shipping-fast" /> <span>Miễn phí vận chuyển  </span></div>
                                            <div>Miễn phí vận chuyển cho đơn hàng trên ₫10.000.000</div>
                                        </div>

                                        <div>
                                            <div><i className="fas fa-shipping-fast" /> <span>Vận chuyển tới </span> <span>Đà nẵng...</span></div>
                                            <div>Phí vận chuyển 0 đ</div>
                                        </div>
                                        <div >
                                            <span> <MinusOutlined /> </span>
                                            <div style={{ fontSize: 16, width: 40, textAlign: 'center' }}>5</div>
                                            <span> <PlusOutlined /> </span>
                                            <span className="text_pirive">
                                                <ConvertNVD money={item.prirce} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <span><button>Thêm vào giỏ hàng</button></span>
                                <span><button>Mua Ngay</button></span>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 15, backgroundColor: '#fff', borderRadius: 8 }}>
                            <h3>THÔNG TIN SẢN PHẨM</h3>
                            <Col>
                                <Row>
                                    <Col xs={3}>Mã hàng </Col>
                                    <Col>3300000013367</Col>
                                </Row>
                                <Row>
                                    <Col xs={3}>Độ Tuổi</Col>
                                    <Col>12+</Col>
                                </Row>
                                <Row>
                                    <Col xs={3}>Trọng lượng (gr)</Col>
                                    <Col>200.0000</Col>
                                </Row>
                                <Row>
                                    <Col xs={3}>Kích Thước Bao Bì</Col>
                                    <Col>17.6 x 11.3 cm</Col>
                                </Row>
                                <Row>
                                    <Col xs={3}>Tác giả</Col>
                                    <Col>Tatsuki Nohda</Col>
                                </Row>
                            </Col>
                        </Row>
                    </>}
            </React.Fragment>


        </Container>
    )
}

export default Detail
