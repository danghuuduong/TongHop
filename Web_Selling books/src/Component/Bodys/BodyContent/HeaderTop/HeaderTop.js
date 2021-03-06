import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../../ThemeProvides";
import Logout from "../../../Handle/Logout";
import { Modal } from "antd";
import Login from "../../../Handle/Login";
// import style from "./HeaderTop.module.css";


function HeaderTop() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const Context = React.useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const noRefCheck = () => {
    setIsOpen(!isOpen);
  };
  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Container>
      <Row
        className="bgr_gray"
        style={{ backgroundColor: isOpen ? "red" : "" }}
      >
        <Col className="pd0_importan">
          <Navbar expand="lg" light style={{ height: 35 }}> {/* color="white" */}
            {/* <NavbarBrand href="/"><img src={img} style={{width:150}} /> </NavbarBrand> */}

            <NavbarToggler onClick={noRefCheck} style={{ fontSize: 16, color: "#dfd", transform: "translateY(-5px)", }}  ></NavbarToggler>

            <Collapse navbar isOpen={isOpen} style={{ padding: 0, margin: 0 }} >
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink to="/">
                    TRANG CHỦ
                  </NavLink>
                </NavItem>

                <NavItem>
                  <div >  <i className="fas fa-phone-alt" /> +(84)986442833 </div>
                </NavItem>

                <NavItem>
                  <NavLink to="/hepy">
                    <i className="fas fa-headset"></i> CHĂM SÓC KHÁCH HÀNG
                  </NavLink>
                </NavItem>
              </Nav>
              {/* ============================================================= */}
              <Nav navbar>
                <NavItem>
                  <div style={{ position: "relative" }}>
                    <i className="far fa-bell"></i> THÔNG BÁO
                    <span style={{ backgroundColor: "#ff9f28", textAlign: "center", position: "absolute", top: -4, left: 15, width: 15, borderRadius: 3, color: "white", }} >
                      1
                    </span>
                  </div>
                </NavItem>

                <>
                  {Context.user ? (
                    <Logout />
                  ) : (
                    <>
                      <NavItem>
                        <NavLink to="/register">
                          ĐĂNG KÝ
                        </NavLink>
                      </NavItem>

                      {!isOpen && (
                        <span style={{ color: "black", transform: "translateY(-2px)", }}  ></span>
                      )}

                      <NavItem>
                        <div onClick={showModal}>ĐĂNG NHẬP</div>
                        <Modal visible={isModalVisible} onCancel={showModal} footer={null} width={435} >
                          <Login />
                        </Modal>
                      </NavItem>
                    </>
                  )}
                </>

                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    <img src="/Images/english.png" alt="hong" width={25} style={{ marginRight: 5 }} />
                    LANGUAGE
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Tiếng Việt</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>English</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderTop;
