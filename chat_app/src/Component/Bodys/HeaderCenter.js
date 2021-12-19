import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
// import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../ThemeProvides";
import Card_lish from "./Card_lish";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
function HeaderCenter() {
  const Context = React.useContext(ThemeContext);
  const onSearch = (value) => {
    alert(`Không tìm thấy từ khóa: "${value}"`)
  }
  return (
    <Container>
      <Row style={{ position:'relative'}}>
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
              enterButton="Search"
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
          <div style={{ paddingRight: 24,position:'relative' }} className="icon_card" >
            <i className="fas fa-shopping-cart" style={{ fontSize: 40 }}> </i>
            {
              Context.products.length >= 1 && <span style={{ position:'absolute',fontSize:16,left:0,top:-5,fontWeight:700,
              backgroundColor:'red',color:'white',width:25,textAlign:'center',borderRadius:7}}>{Context.products.length}</span>
            }
           <div className="card_products">
             <Card_lish/>
            </div>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default HeaderCenter;
