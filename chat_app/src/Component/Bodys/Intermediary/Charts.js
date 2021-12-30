import React from 'react'
import { Tabs, Rate } from 'antd';
import { Row, Col } from "reactstrap";
import style from "./Charts.module.css";

const { TabPane } = Tabs;

function Charts() {
    function callback(key) {
        console.log(key);
    }
    return (
        <React.Fragment>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Văn học" key="1">
                    <Row>
                        <Col lg={4}>
                            <div>
                                <img src='https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2021/Tho-Bay-Mau-350x415.jpg' alt='' />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <Row >
                                <Col lg={6} style={{ padding: 0 }}>
                                    <div className={style.view2products}>
                                        <div>
                                            <img src='https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/9/7/9786049638343_2.jpg' alt='' width={175} />
                                        </div>
                                        <div>
                                            <span>Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)</span>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <span className='text_pirive'>83.750 đ </span>
                                                <span className={style.btndiscount}>-22%</span>
                                            </div>
                                            <span>
                                                <Rate
                                                    allowHalf
                                                    disabled
                                                    defaultValue={3}
                                                    style={{ fontSize: 13, transform: "translateY(-2px)" }}
                                                />
                                                <span>(3)</span>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </TabPane>
                {/* <TabPane tab="Light Novel" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Thiếu nhi" key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Manga - Comic" key="4">
                    Content of Tab Pane 4
                </TabPane>
                <TabPane tab="Kinh Tế" key="5">
                    Content of Tab Pane 5
                </TabPane> */}
            </Tabs>
        </React.Fragment>
    )
}

export default Charts
