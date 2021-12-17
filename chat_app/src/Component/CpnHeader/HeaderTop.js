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
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../ThemeProvides";
import Logout from "../Handle/Logout";

function HeaderTop() {
  const Context = React.useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const noRefCheck = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar color="red" expand="lg" light style={{ height: 43 }}>
        {/* <NavbarBrand href="/"><img src={img} style={{width:150}} /> </NavbarBrand> */}

        <NavbarToggler
          onClick={noRefCheck}
          style={{ fontSize: 16, color: "#dfd", transform: "translateY(-3px)" }}
        />

        <Collapse
          navbar
          isOpen={isOpen}
          style={{
            backgroundColor: "white",
            padding: 0,
            margin: 0,
          }}
        >
          <Nav
            className="me-auto"
            navbar
            style={{ transform: isOpen ? "" : "translateX(15%)" }}
          >
            <NavItem>
              <div href="/components/">
                <i className="fas fa-phone-alt" />
                +(84)986442833
              </div>
            </NavItem>

            <NavItem>
              <NavLink end to="/hepy">
                <i className="fas fa-headset"></i> CHĂM SÓC KHÁCH HÀNG
              </NavLink>
            </NavItem>
          </Nav>
          {/* ============================================================= */}
          <Nav
            navbar
            style={{
              transform: isOpen ? "" : "translateX(-10%)",
            }}
          >
            <NavItem>
              <div style={{ position: "relative" }}>
                <i className="far fa-bell"></i> THÔNG BÁO
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
              </div>
            </NavItem>

            <>
              {Context.user ? (
                <Logout />
              ) : (
                <>
                  <NavItem>
                    <NavLink end to="/register">
                      ĐĂNG KÝ
                    </NavLink>
                  </NavItem>

                  {!isOpen && (
                    <span
                      style={{ color: "black", transform: "translateY(-2px)" }}
                    ></span>
                  )}

                  <NavItem>
                    <NavLink end to="/login">
                      ĐĂNG NHẬP
                    </NavLink>
                  </NavItem>
                </>
              )}
            </>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                {/* <i
                  className="fas fa-language"
                  style={{ fontSize: 22, color: "#ff9f28" }}
                ></i>{" "} */}
                <img
                  src="/Images/english.png"
                  alt="hong"
                  width={25}
                  style={{ marginRight: 5 }}
                />
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
    </>
  );
}

export default HeaderTop;
