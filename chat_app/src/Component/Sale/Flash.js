import React from 'react'
import { Col } from "reactstrap";
import { dataFl } from "../../constants/data";

function Flash() {
    return (
        <React.Fragment>
            {
                dataFl.map((x, i) =>
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
