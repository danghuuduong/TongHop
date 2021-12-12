import React from "react";
import img from '../Images/logo.png'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// https://codesandbox.io/s/stupefied-leftpad-se7e3?file=/src/App.js
function HeaderTop() {
  const [isOpen, setIsOpen] = React.useState(false);
  const noRefCheck = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar color="red" expand="lg" light style={{backgroundColor:'#dfdedd',height:43}}>
        {/* <NavbarBrand href="/"><img src={img} style={{width:150}} /> </NavbarBrand> */}

        <NavbarToggler onClick={noRefCheck} style={{fontSize:16,color:'#dfd', transform:'translateY(-3px)'}}/>

        <Collapse navbar isOpen={isOpen} style={{transform: isOpen ? 'translateX(10px)' : ''}}>
          <Nav className="me-auto" navbar style={{ transform: isOpen ? '' : 'translateX(15%)'}}>
            <NavItem>
              <NavLink href="/components/" >
                <i class="fas fa-phone-alt" />
                +(84)986442833
              </NavLink>
            </NavItem>

            

            <NavItem>
              <NavLink>
                <i class="fas fa-headset"></i> CHĂM SÓC KHÁCH HÀNG
              </NavLink>
            </NavItem>
          </Nav>
          {/* ============================================================= */}
          <Nav navbar style={{ transform: isOpen ? '' : 'translateX(-10%)'}}>
            <NavItem>
              <NavLink style={{ position: "relative" }}>
                <i class="far fa-bell"></i> THÔNG BÁO
                <span
                  style={{
                    backgroundColor: "#ff9f28",
                    textAlign: "center",
                    position: "absolute",
                    top: -4,
                    left: 15,
                    width: 15,
                    borderRadius: 3,
                    color: "white",
                  }}
                >
                  1
                </span>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                 ĐĂNG KÝ
              </NavLink>
            </NavItem>
            <span style={{color:'black', transform:'translateY(5px)'}}> |
            </span>
            <NavItem>
              <NavLink>
                ĐĂNG NHẬP
              </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                <i
                  class="fas fa-language"
                  style={{ fontSize: 22, color: "#ff9f28" }}
                ></i>{" "}
                LANGUAGE
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Tiếng Việt</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>English</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default HeaderTop;
