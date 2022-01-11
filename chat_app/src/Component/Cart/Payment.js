import React from 'react'
import ConvertNVD from '../Handle/ConvertNVD'
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import style from './Payment.module.css';

function Promotion_pay({ checkedList }) {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#fff', padding: 15, borderRadius: 8 }}>
                <div className={style.promotion}>
                    <div>
                        <span><i className="fas fa-ad"></i></span>
                        <span style={{ marginLeft: 10 }}>KHUYẾN MÃI</span>
                    </div>
                    <div>
                        <span>Xem Thêm</span>
                        <span style={{ marginLeft: 10 }}><i className="fas fa-chevron-right"></i></span>
                    </div>
                </div>
                <hr />
                <div className={style.promotion_code}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <h5>MOCA: GIẢM NGAY 99K</h5>
                        <span style={{ color: '#2f80ed', cursor: 'pointer' }}>Chi Tiết</span>
                    </div>
                    <span>Nhập mã "MOCA100”: Giảm 30K, thanh toán qua ví </span>
                    <span> Nhập mã tại Fahasa</span>
                </div>
                <p style={{ color: 'red' }}>*Điều kiện không thỏa </p>
                <div className={style.btn_click_buymore}>
                    <span>Mua Thêm</span>
                </div>
                <hr />

                <div className={style.promotion_code}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <h5>MOCA: GIẢM NGAY 55K</h5>
                        <span style={{ color: '#2f80ed', cursor: 'pointer' }}>Chi Tiết</span>
                    </div>
                    <span>Giảm 25K, đơn hàng 100K, thanh toán qua ví ZaloPay</span>
                    <hr />
                    <span>Có thể áp dụng đồng thời nhiều mã <i className="fas fa-exclamation-triangle" /></span>
                </div>
            </div>
            <div style={{ backgroundColor: '#fff', padding: 15, borderRadius: 8, marginTop: 15 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Thành Tiền</span>
                    <span>
                        {checkedList.length > 0 ? <div>  <ConvertNVD money={checkedList.map((x => x.prirce * x.sl)).reduce((x, i) => x += i)} />  </div> : <div> 0 đ</div>}
                    </span>
                </div>
                <hr />
                <div >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h5>Tổng Số Tiền (gồm VAT)</h5>
                        <h5>
                            {checkedList.length > 0 ? <div>  <ConvertNVD money={checkedList.map((x => x.prirce * x.sl)).reduce((x, i) => x += i)} />  </div> : <div> 0 đ</div>}
                        </h5>
                    </div>
                    <Button className={checkedList.length > 0 ? "bt__forceUpdate_lg_ok" : "bt__forceUpdate_lg"}
                        disabled={checkedList.length < 1} size="large"
                        style={{ borderRadius: 10, fontSize: 18, fontWeight: 700, height: 45, marginTop: 15 }}
                    >
                        <NavLink end="true" to="/payment">THANH TOÁN</NavLink>
                    </Button>
                    <span className='text'>(Giảm giá trên web chỉ áp dụng cho bán lẻ)</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Promotion_pay
