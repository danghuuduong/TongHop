import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Checkbox } from "antd";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { ThemeContext } from "../../ThemeProvides";



function ClickOncart() {
    const Context = React.useContext(ThemeContext);
    const [sum, setSum] = React.useState([])
    const [checked, setChecked] = React.useState(false)
    console.log("🙉🍀 __ sum", sum)
    const onChange = (x, e) => {
        const found = sum.find(vl => vl.id === x.id)
        if (e.target.checked && !found) {
            setSum(pev => [...pev, x])
        } else {
            setSum(sum.filter(value => value.id !== x.id))
        }
    };
    const hanldCheckked = () => {
        setChecked(!checked)
    }
    return (
        <Container>
            <Row>
                <Col xs={8}>
                    <Row>
                        <Checkbox onClick={hanldCheckked}>
                            Check all
                        </Checkbox>
                    </Row>
                    <hr />
                    {
                        Context.products.map((x, i) => {
                            return (
                                <>
                                    <Row >
                                        <Col style={{ display: "flex", alignItems: "center" }} xs={7} >
                                            <div> <Checkbox onChange={(e) => onChange(x, e)} checked={checked} />  </div>
                                            <div style={{ display: "flex" }}>
                                                <div className="ClickOncart_img"> <img src={x.imgURl} alt="err" width={110} /></div>
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
                                    <hr />
                                </>
                            )
                        })
                    }
                </Col>
                <Col xs={4} style={{ border: '1px solid #f0f0f0' }}>
                    <div>
                        <h3>Tổng Thành Tiền</h3>
                        {
                            sum.length > 0 && <div>
                                {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", }).format(sum.map((x => x.prirce * x.sl)).reduce((x, i) => x += i))}
                            </div>
                        }
                    </div>
                    <button>Thanh toán</button>
                </Col>
            </Row >
        </Container >
    );
}

export default ClickOncart;
