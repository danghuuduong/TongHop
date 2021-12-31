import React from "react";
import { ThemeContext } from "../../../ThemeProvides";
import { List, Rate } from "antd";
import ConvertNVD from "../../Handle/ConvertNVD";
import style from "./Contents.module.css";

function Contents() {
    const Context = React.useContext(ThemeContext);
    const selectProduc = (x) => {
        Context.get_products(x);
    };
    return (
        <List
            pagination={{ onChange: (page) => { console.log(page); }, pageSize: 10 }}
            dataSource={Context.data}
            grid={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 5, xxl: 5, }}
            renderItem={(x, i) => (
                <List.Item key={x.id} >
                    <div className={style.production}>
                        <div className={style.production_img}>
                            <img src={x.imgURl} alt="...error" style={{ maxWidth: "100%" }} />
                            <span className={style.production_link}>
                                <button>
                                    <i className="fas fa-eye" />
                                </button>
                            </span>
                        </div>
                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", height: 45, fontSize: 14, }} >
                            {x.title}
                        </div>
                        <span className="text_pirive">
                            <ConvertNVD money={x.prirce} />
                        </span>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, }} >
                            <Rate
                                allowHalf
                                disabled
                                defaultValue={x.star}
                                style={{ fontSize: 13, transform: "translateY(-2px)" }}
                            />
                            <span className={style.sold}>Đã bán 10,6k </span>
                        </div>
                        <button className={style.btn_add_cart}
                            onClick={() => { selectProduc(x); }} >
                            <i className="fas fa-cart-plus"></i> Thêm Giỏ hàng
                        </button>
                    </div>
                </List.Item>
            )}
        />
    );
}

export default Contents;
