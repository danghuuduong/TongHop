import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Divider } from 'antd';
import { ThemeContext } from "../../ThemeProvides";
import { Container, Row, Col } from "reactstrap";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const CheckboxGroup = Checkbox.Group;


function ClickOncart() {
    const Context = React.useContext(ThemeContext);
    const plainOptions = Context.products

    const [checkedList, setCheckedList] = React.useState([]);
    const [checkAll, setCheckAll] = React.useState(false);
    console.log("🙉🍀 --> checkedList", checkedList)

    const onChange = list => {
        setCheckedList(list);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setCheckAll(e.target.checked);
    };
    return (
        <Container fluid className='bgr_gray'>
            <Container style={{ paddingTop: 15 }}>
                <Row >
                    <Col xs={8}>
                        <Row style={{ backgroundColor: '#fff', height: 50,
                         alignItems: 'center',marginBottom:10,borderRadius:8 ,fontSize:18,fontWeight:600}}>
                            <Col xs={7}>
                                <Checkbox onChange={onCheckAllChange} checked={checkAll} style={{marginLeft:10}}>
                                    <div style={{marginLeft:7,fontSize:18}}>
                                         Chọn tất Cả ( {Context.products.length} sản phẩm)
                                    </div>
                                        
                                </Checkbox>
                            </Col >
                            <Col xs={2} style={{textAlign:'center',transform:'translateX(-5px)'}}>
                                <div>
                                Số Lượng
                                </div>
                            </Col>
                            <Col xs={3} style={{transform:'translateX(-5px)'}}>
                                Thành Tiền
                            </Col>
                            
                        </Row>
                        <Row  style={{ backgroundColor: '#fff',borderRadius:8 }}>
                            <CheckboxGroup value={checkedList} onChange={onChange} style={{ width: '100%', pading: 0, margin: 0 }}>
                                {
                                    Context.products.map((x, i) => {
                                        return (
                                            <>
                                                <div style={{ margin:'0 25px 5px 25px' }}>
                                                    <Checkbox type="checkbox" value={x} key={i} style={{ margin: 0, padding: 0, transform: 'translate(-15px,70px)' }}></Checkbox>
                                                    <Row>
                                                        <Col style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }} xs={7} >
                                                            <div style={{ display: "flex" }}>
                                                                <div className="ClickOncart_img"> <img src={x.imgURl} alt="err" width={130} /></div>
                                                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                                                                    <div>
                                                                        <div>{x.title}</div>
                                                                        <div className="yellow">Có Hàng</div>
                                                                    </div>
                                                                    <div className="text_pirive" style={{ color: 'black' }}>{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", }).format(x.prirce)}</div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <div className="up_dow_quantity">
                                                                <span> <MinusOutlined /> </span>
                                                                <div style={{ fontSize: 16, width: 40, textAlign: 'center' }}>{x.sl}</div>
                                                                <span> <PlusOutlined /> </span>
                                                            </div>
                                                        </Col>
                                                        <Col xs={3} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 15px' }}>
                                                            <span className="text_pirive">{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", }).format(x.prirce * x.sl)}</span>
                                                            <span style={{ cursor: 'pointer' }} onClick={() => Context.remove_products(x)}><i className="fas fa-trash-alt"></i></span>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <hr />
                                            </>

                                        )
                                    })
                                }
                            </CheckboxGroup>
                        </Row>
                    </Col>
                    <Col xs={4} style={{ border: '1px solid #f0f0f0' }}>
                        <div>
                            <h3>Tổng Thành Tiền</h3>
                            {
                            checkedList.length > 0 && <div>
                                {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", }).format(checkedList.map((x => x.prirce * x.sl)).reduce((x, i) => x += i))}
                            </div>
                        }
                            Tổng cộng
                        </div>
                        <button>Thanh toán</button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ClickOncart
