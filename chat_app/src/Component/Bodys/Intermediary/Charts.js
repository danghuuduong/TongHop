import React from 'react'
import { Tabs, Rate } from 'antd';
import { Row, Col } from "reactstrap";
import style from "./Charts.module.css";

const { TabPane } = Tabs;
const data =[
    {
        id:1,
        title:' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
        LinkUrl:'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/9/7/9786049638343_2.jpg',
        money:87000,
        discount:'22%',
        star:3,
        numberEvaluate:13
    },
    {
        id:2,
        title:' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
        LinkUrl:'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_183948.jpg',
        money:87000,
        discount:'22%',
        star:3,
        numberEvaluate:13
    },
    {
        id:3,
        title:' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
        LinkUrl:'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_144859.jpg',
        money:87000,
        discount:'22%',
        star:3,
        numberEvaluate:13
    },
    {
        id:4,
        title:' Địch Công Kỳ Án - Bí Mật Quả Chuông (Tập 5)',
        LinkUrl:'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/b/i/bia-tham-tu-ky-phat--ok-033333.jpg',
        money:87000,
        discount:'22%',
        star:3,
        numberEvaluate:13
    }
]
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
                                {
                                    data.map( x => 
                                     <Col lg={6} style={{ padding: 0 }} key={`products2_${x.id}`}>
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
                                                    <Rate
                                                        allowHalf
                                                        disabled
                                                        defaultValue={3}
                                                        style={{ fontSize: 13, transform: "translateY(-2px)" }}
                                                    />
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
