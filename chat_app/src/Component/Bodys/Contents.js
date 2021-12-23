import React from "react";
import { ThemeContext } from "../../ThemeProvides";
import { Col } from "reactstrap";
import { Rate } from "antd";
import ConvertNVD from "../Handle/ConvertNVD";

function Contents() {
  const Context = React.useContext(ThemeContext);
  const selectProduc = (x) => {
    Context.get_products(x);
  };
  return (
    <React.Fragment>
      {Context.data.map((x, i) => {
        return (
          <Col key={x.id} style={{ margin: 0, padding: 0 }} xs={3}>
            <div className="production">
              <div className="production_img">
                <img
                  src={x.imgURl}
                  alt="...error"
                  style={{ maxWidth: "100%" }}
                />
                <span className="production_link">
                  <button>
                    <i className="fas fa-eye" />
                  </button>
                </span>
              </div>
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  height: 45,
                  fontSize: 14,
                }}
              >
                {x.title}
              </div>
              <span className="text_pirive">
                <ConvertNVD money={x.prirce} />
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 12,
                }}
              >
                <Rate
                  allowHalf
                  disabled
                  defaultValue={x.star}
                  style={{ fontSize: 13, transform: "translateY(-2px)" }}
                />
                <span className="sold">Đã bán 10,6k</span>
              </div>
              <button
                className="btn_add_cart"
                onClick={() => {
                  selectProduc(x);
                }}
              >
                {" "}
                <i className="fas fa-cart-plus"></i> Thêm Giỏ hàng
              </button>
            </div>
          </Col>
        );
      })}
    </React.Fragment>
  );
}

export default Contents;
