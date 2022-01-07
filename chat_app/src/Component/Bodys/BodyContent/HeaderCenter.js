import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Input, Space, Badge } from "antd";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../ThemeProvides";
import style from "./HeaderCenter.module.css";

const { Search } = Input;
// const suffix = <i style={{ fontSize: 25 }} className="fas fa-microphone" />;
const search = <i style={{ fontSize: 18 }} className="fas fa-search" />;

function HeaderCenter() {
    const Context = React.useContext(ThemeContext);
    const [offsets, setOffset] = React.useState(0);

    const onSearch = (value) => {
        alert(`Không tìm thấy từ khóa: "${value}"`);
    };
    React.useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);
    return (
        <Container>
            <Row style={{ position: "relative" }}>
                <Col>
                    <NavLink to="/">
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo.png" alt="" width={200} />
                    </NavLink>
                </Col>
                <Col
                    xs={8}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <Search
                            placeholder="Tìm kiếm..."
                            enterButton={search}
                            size="large"
                            // suffix={suffix}
                            onSearch={onSearch}
                        />
                    </Space>
                </Col>
                <Col
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                    }}
                >
                    <NavLink end to="/checkout/cart">
                        <div className={offsets > 388 && Context.products.length >= 1 ? style.icon_cardSrcoll : ''}>
                            <div className={`${style.icon_card}`}>
                                <span>
                                    <i className="fas fa-shopping-cart"></i>
                                </span>
                                <span style={{ color: "#f7941e" }}>GIỎ HÀNG</span>
                                {Context.products.length >= 1 && (
                                    <Badge className={style.count_cart} count={Context.products.map((x) => x.sl).reduce((total, value) => (total = total + value), 0)} />
                                )}
                            </div>
                            {
                                offsets > 388 && <div className={style.tron}></div>
                            }
                            {
                                offsets > 388 && <div className={style.tron2}></div>
                            }


                        </div>

                    </NavLink>
                </Col>

            </Row>
        </Container >
    );
}

export default HeaderCenter;
