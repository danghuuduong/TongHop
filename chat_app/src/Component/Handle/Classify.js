import React from 'react'
import { Row, Col } from "reactstrap";
import { Select } from 'antd';

const { Option, OptGroup } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
  }
function Classify() {
    return (
        <Row style={{margin:10}}>
            <Col>56316 mặt hàng được tìm thấy theo: "phim tập"</Col>
            <Col style={{display:'flex',alignItems:'center',justifyContent:'end'}}>
                <div style={{textAlign:'end',display:'flex',alignItems:'center',justifyContent:'end'}}>
                    <div >Sắp Xếp Theo:</div>
                    <Select defaultValue="lucy" style={{ width: 150,marginLeft:10 }}
                     onChange={handleChange} className='Classify_select'>
                            <Option value="jack">Độ Phổ Biến</Option>
                            <Option value="lucy">Thấp đến cao</Option>
                            <Option value="Yiminghe">Cao đến thấp</Option>
                    </Select>
                </div>
                <div style={{marginLeft:20,display:'flex'}}>
                    <div>Xem:</div>
                    <div style={{marginLeft:10}}>
                        <span><i className="fas fa-bars"></i></span>
                        <span style={{marginLeft:10}}><i className="fas fa-th-list"></i></span>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Classify
