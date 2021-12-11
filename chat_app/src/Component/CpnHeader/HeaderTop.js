import React from "react";
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
      <Navbar color="red" expand="lg" light>
        <NavbarBrand href="/">LOGO</NavbarBrand>

        <NavbarToggler onClick={noRefCheck} />

        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">
                <i class="fas fa-phone-alt" style={{ color: "#1b74e4" }} />
                +(84)986442833
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <i
                  class="fab fa-facebook-square"
                  style={{ color: "#1b74e4" }}
                />{" "}
                Faceobook
              </NavLink>
            </NavItem>
          </Nav>
          {/* ============================================================= */}
          <Nav navbar>
            <NavItem>
              <NavLink style={{ position: "relative" }}>
                <i class="far fa-bell"></i> Thông báo
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
                <i class="fas fa-user-plus"></i> Đăng Ký
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <i class="fas fa-key"></i> Đăng Nhập
              </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                <i
                  class="fas fa-language"
                  style={{ fontSize: 22, color: "#ff9f28" }}
                ></i>{" "}
                Ngôn Ngữ
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Tiếng Việt</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>English</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>
                <i class="fas fa-headset"></i> Liên Hệ
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default HeaderTop;
