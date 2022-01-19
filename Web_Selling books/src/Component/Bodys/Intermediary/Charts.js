import React from 'react'
import { Tabs, Rate } from 'antd';
import { Row, Col } from "reactstrap";
import style from "./Charts.module.css";
const { TabPane } = Tabs;
function Charts({ data_view2 }) {
    return (
        <React.Fragment>
            <Tabs defaultActiveKey="1" >
                {
                    data_view2.map(value => (
                        <TabPane tab={value.the_loai} key={value.id}>
                            <Row style={{ margin: '10px 0' }}>
                                <Col lg={4}>
                                    <div>
                                        <img src={value.Link_img_Url} alt='' />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <Row >
                                        {
                                            value.content.map(x =>
                                                <Col lg={6} key={`products2_${x.id}`} style={{ padding: 0 }} >
                                                    <div className={style.view2products}>
                                                        <div>
                                                            <img src={x.LinkUrl} alt='' width={175} />
                                                        </div>
                                                        <div>
                                                            <span>{x.title}</span>
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <span className='text_pirive'>{x.money}</span>
                                                                <span className={style.btndiscount}>{x.discount}</span>
                                                            </div>
                                                            <span>
                                                                <Rate allowHalf disabled defaultValue={3} style={{ fontSize: 13, transform: "translateY(-2px)" }} />
                                                                <span>({x.numberEvaluate})</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Col>)
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </TabPane>
                    ))
                }


            </Tabs>
        </React.Fragment>
    )
}

export default Charts
