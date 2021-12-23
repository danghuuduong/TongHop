import React from 'react'
import { Row, Col } from "reactstrap";
import { Select } from 'antd';
import { ThemeContext } from "../../ThemeProvides";
import { dataQA } from '../../constants/data';

const { Option } = Select;

function Classify() {
    const Context = React.useContext(ThemeContext);

    function handleChange(value) {
        switch (value) {
            case 'min':
                const sortData = Context.data.sort((a, b) => a.prirce - b.prirce);
                return Context.setData([...sortData]);
            case 'max':
                const sortData2 = Context.data.sort((a, b) => b.prirce - a.prirce);
                return Context.setData([...sortData2]);
            default:
                console.log(1);
                return Context.setData(Array.from(dataQA));
        }
    }
    return (
        <Row style={{ margin: 10 }}>
            <Col>56316 mặt hàng được tìm thấy theo: "phim tập"</Col>
            <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                <div style={{ textAlign: 'end', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <div >Sắp Xếp Theo:</div>
                    <Select defaultValue="Độ Phổ Biến" style={{ width: 150, marginLeft: 10 }}
                        onChange={handleChange} className='Classify_select'>
                        <Option value="Độ Phổ Biến">Độ Phổ Biến</Option>
                        <Option value="min">Thấp đến cao</Option>
                        <Option value="max">Cao đến thấp</Option>
                    </Select>
                </div>
                <div style={{ marginLeft: 20, display: 'flex' }}>
                    <div>Xem:</div>
                    <div style={{ marginLeft: 10 }}>
                        <span><i className="fas fa-bars"></i></span>
                        <span style={{ marginLeft: 10 }}><i className="fas fa-th-list"></i></span>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Classify
