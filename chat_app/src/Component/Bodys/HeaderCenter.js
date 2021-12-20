import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
// import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../ThemeProvides";
import CardList from "./Card_lish";

const { Search } = Input;

const suffix = <i style={{ fontSize: 25 }} className="fas fa-microphone" />;
const search = <i style={{ fontSize: 18 }} className="fas fa-search" />;

function HeaderCenter() {
  const Context = React.useContext(ThemeContext);
  const onSearch = (value) => {
    alert(`Không tìm thấy từ khóa: "${value}"`);
  };
  console.log(Context.products);
  return (
    <Container>
      <Row style={{ position: "relative" }}>
        <Col>
          <NavLink to="/">
            <img src="/Images/logo.png" alt="logo" width={120} />
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
              suffix={suffix}
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
          <div className="icon_card">
            <span>
              {" "}
              <i className="fas fa-shopping-cart"></i>{" "}
            </span>
            <span>GIỎ HÀNG</span>
            {Context.products.length >= 1 && (
              <span className="count_cart">
                {/* https://www.fahasa.com/ */}

                {/* {Context.products[0].sl ? (
                  <span>
                    {Context.products.length > 1 ? (
                      <>
                        {Context.products?.reduce(
                          (total, value) => (total = total + (value.sl ?? 1)),
                          0
                        )}
                      </>
                    ) : (
                      <>{Context.products[0].sl}</>
                    )}
                  </span>
                ) : (
                  <span>1</span>
                )} */}

                {Context.products.reduce(
                  (total, value) => (total += value.sl ?? 1),
                  0
                )}

                {/* {Context.products
                  .map((x) => x.sl ?? 1)
                  .reduce((total, value) => (total = total + value), 0)} */}
              </span>
            )}
            <div className="card_products">
              <CardList />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderCenter;
