import React from 'react'
import { Col } from "reactstrap";

const data = [
    { id: 1, fl_title: "Flash Sale", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_flashsale.png" },
    { id: 2, fl_title: "Mã Giảm Giá", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_mgg.png" },
    { id: 3, fl_title: "Chợ Sách Cũ", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_PCSC.png" },
    { id: 4, fl_title: "Xu Hướng", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico-xuhuong.png" },
    { id: 5, fl_title: "Gợi Ý Cho Bạn", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_goiy.png" },
    { id: 6, fl_title: "Kinh Tế", fl_imgURL: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_kinhte.png" },
]
function Flash() {
    return (
        <React.Fragment>
            {
                data.map((x,i) => 
                <Col key={`flash${x.id}${i}`} style={{ textAlign: "center", margin: '10px 0' }} md={2} sm={4} xs={6}>
                    <img
                        src={x.fl_imgURL}
                        style={{ width: 50 }}
                        alt="..."
                    />
                    <div>{x.fl_title}</div>
                </Col>
                )
            }

        </React.Fragment>
    )
}

export default Flash
