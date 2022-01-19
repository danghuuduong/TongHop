import React from 'react'
import { Row, Col, Container } from "reactstrap";

function index() {
    return (
        <Container fluid>
            <Row style={{ marginTop: 20, background: '#fff', padding: 20 }} >
                <Col xs={4}>
                    <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #cecece' }}>
                        <span style={{ marginBottom: 15 }}>
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo.png" alt='' style={{ maxWidth: '100%' }} />
                        </span>

                        <p>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA60 -
                            62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
                        <p>Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt
                            mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
                        </p>
                        <img src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/logo-bo-cong-thuong-da-thong-bao.png" alt='' width={120} />
                        <div>
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/footer/Facebook-on.png" alt='' />
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png" alt='' />
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Youtube-on.png" alt='' />
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/tumblr-on.png" alt='' />
                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/twitter-on.png" alt='' />
                        </div>
                        <div style={{ marginTop: 15 }}>
                            <img src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/android.png" alt='' width={120} style={{ marginRight: 15 }} />
                            <img src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/appstore.png" alt='' width={120} />
                        </div>
                    </div>
                </Col>
                <Col xs={8}>
                    <Row>
                        <Col>
                            <div>
                                <h5>DỊCH VỤ</h5>
                                <p>Điều khoản sử dụng</p>
                                <p>Chính sách bảo mật</p>
                                <p>Giới thiệu Fahasa</p>
                                <p>Hệ thống trung tâm - nhà sách</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h5>HỖ TRỢ</h5>
                                <p>Chính sách đổi - trả - hoàn tiền</p>
                                <p>Chính sách khách sỉ</p>
                                <p>Phương thức vận chuyển</p>
                                <p>Phương thức thanh toán và xuất HĐ</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h5>TÀI KHOẢN CỦA TÔI</h5>
                                <p>Đăng nhập/Tạo mới tài khoản</p>
                                <p>Thay đổi địa chỉ khách hàng  </p>
                                <p>Chi tiết tài khoản</p>
                                <p>Lịch sử mua hàng</p>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col style={{ marginBottom: 25 }}>
                            <h4>LIÊN HỆ</h4>
                            <span style={{ marginRight: 15 }}> <i className="fas fa-map-marker-alt"></i>186/03 Đỗ Bá - Ngũ Hành Sơn - Đà Nẵng</span>
                        </Col>
                        <Col>
                            <span> <i className="fas fa-phone-alt"></i>0986442833</span>
                        </Col>
                    </Row>


                    <Row >

                        <Col><img src="https://www.fahasa.com/media/wysiwyg/Logo-NCC/vnpost.png" alt='' width={120} /></Col>
                        <Col><img src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/momopay.png" alt='' width={70} /></Col>
                        <Col><img src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/ZaloPay-logo-130x83.png" alt='' width={120} /></Col>
                        <Col><img src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/shopeepay_logo.png" alt='' width={120} /></Col>
                        <Col><img src="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/logo_moca_120.jpg" alt='' width={70} /></Col>
                    </Row>
                </Col>
                <Row style={{ margin: "30px 10px 10px 10px", textAlign: 'center' }}>
                    <span>Giấy chứng nhận Đăng ký Kinh doanh số **0986442833** do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 28/11/2012.</span>
                </Row>
            </Row>
        </Container>
    )
}

export default index
