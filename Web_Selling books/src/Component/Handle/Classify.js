import React from 'react'
import { Row, Col } from "reactstrap";
import { Select } from 'antd';
import { ThemeContext } from "../../ThemeProvides";
import { dataQA } from '../../constants/data';

const { Option } = Select;

function Classify({ NumberSearch }) {
    const Context = React.useContext(ThemeContext);
    const valueSearch = Context.search.slice(-1)[0]
    const handleChange = (value) => {
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
        <Row style={{ margin: '20px 5px' }}>
            <Col>
                {
                    Context.Pathname !== '/' && <>
                        {
                            NumberSearch === 0 ? <div>KHÔNG TÌM THẤY KẾT QUẢ : {valueSearch}</div> :
                                <div style={{ fontSize: 18, }}>{NumberSearch} KẾT QUẢ TÌM KIẾM VỚI: "{valueSearch}"</div>
                        }
                    </>
                }
            </Col>
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
