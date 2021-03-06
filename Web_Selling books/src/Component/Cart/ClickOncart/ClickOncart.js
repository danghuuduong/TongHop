import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Button } from 'antd';
import { ThemeContext } from "../../../ThemeProvides";
import { Container, Row, Col } from "reactstrap";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import ConvertNVD from '../../Handle/ConvertNVD'
import Promotionpay from '../Payment/Payment';
import style from './ClickOncart.module.css';

const CheckboxGroup = Checkbox.Group;

function ClickOncart() {
    const Context = React.useContext(ThemeContext);
    const plainOptions = Context.products

    const [checkedList, setCheckedList] = React.useState([]);
    const [checkAll, setCheckAll] = React.useState(false);

    // Handle Checkbox All--------------------------------------
    const onChange = list => {                                //
        setCheckedList(list);                                 //
        setCheckAll(list.length === plainOptions.length);     //
    };                                                        //
    const onCheckAllChange = e => {                           //
        setCheckedList(e.target.checked ? plainOptions : []); //
        setCheckAll(e.target.checked);                        //
    };                                                        //
    // Handle Remove checkedList--------------------------------
    const HandleRemoveChecklish = (x) => {
        Context.remove_products(x)
        const result = checkedList.filter(word => word.id !== x.id);
        setCheckedList(result)
    }
    return (
        <Container fluid className='bgr_gray'>
            <Container style={{ paddingTop: 15 }}>
                <Row >
                    <Col xs={8}>
                        <Row style={{ backgroundColor: '#fff', height: 50, alignItems: 'center', marginBottom: 10, borderRadius: 8, fontSize: 18, fontWeight: 600 }}>
                            <Col xs={7}>
                                <Checkbox onChange={onCheckAllChange} checked={checkAll} style={{ marginLeft: 10 }}>
                                    <div style={{ marginLeft: 7, fontSize: 18 }}>  Ch???n t???t C??? ( {Context.products.length} s???n ph???m) </div>
                                </Checkbox>
                            </Col >
                            <Col xs={2} style={{ textAlign: 'center', transform: 'translateX(-5px)' }}>
                                <div>S??? L?????ng</div>
                            </Col>
                            <Col xs={3} style={{ transform: 'translateX(-5px)' }}>
                                Th??nh Ti???n
                            </Col>
                        </Row>
                        <Row style={{ backgroundColor: '#fff', borderRadius: 8, overflowY: "scroll", height: 495 }}>
                            {
                                Context.products.length < 1 && <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30 }}>
                                    <img src='https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg' alt='' width={150} />
                                    <p>Ch??a c?? s???n ph???m trong gi??? h??ng c???a b???n.</p>
                                    <Button className="bt__forceUpdate_lg_ok"
                                        style={{ borderRadius: 10, width: 200, height: 40 }}
                                    >MUA S???M NGAY</Button>
                                </div>
                            }
                            <CheckboxGroup value={checkedList} onChange={onChange} style={{ width: '100%', pading: 0, margin: 0 }}>
                                {
                                    Context.products.map((x, i) => {
                                        return (
                                            <React.Fragment key={`ClickOncart${x.id} ${i}`}>
                                                <div style={{ margin: '0 25px 5px 25px' }} >
                                                    <Checkbox type="checkbox" value={x} style={{ margin: 0, padding: 0, transform: 'translate(-15px,70px)' }}></Checkbox>
                                                    <Row>
                                                        <Col style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }} xs={7} >
                                                            <div style={{ display: "flex" }}>
                                                                <div className={style.ClickOncart_img}>
                                                                    <img src={x.imgURl} alt="err" width={130} />
                                                                </div>
                                                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                                                                    <div>
                                                                        <div>{x.title}</div>
                                                                        <div className="yellow">C?? H??ng</div>
                                                                    </div>
                                                                    <div>
                                                                        <ConvertNVD money={x.prirce} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                            <div className={style.up_dow_quantity}>
                                                                <span> <MinusOutlined /> </span>
                                                                <div style={{ fontSize: 16, width: 40, textAlign: 'center' }}>{x.sl}</div>
                                                                <span> <PlusOutlined /> </span>
                                                            </div>
                                                        </Col>
                                                        <Col xs={3} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 15px' }}>
                                                            <span className="text_pirive"><ConvertNVD money={x.prirce * x.sl} /></span>
                                                            <span style={{ cursor: 'pointer' }} onClick={() => HandleRemoveChecklish(x)}><i className="fas fa-trash-alt"></i></span>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <hr />
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </CheckboxGroup>
                        </Row>
                    </Col>
                    {/* --------------------Thanh 6 c??i button Sake M?? gi???m gi??-------------- */}
                    <Col xs={4}>
                        <Promotionpay checkedList={checkedList} />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ClickOncart
