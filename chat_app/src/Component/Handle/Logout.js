import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Avatar } from "antd";
import { ThemeContext } from "../../ThemeProvides";

function Logout() {
  const Context = React.useContext(ThemeContext);
  return (
    <UncontrolledDropdown inNavbar nav>
      <DropdownToggle caret nav>
        <span style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: -7, left: 0 }}>
            <Avatar size={35} src={Context.user.photoURL} />
          </span>
        </span>

        <span style={{ color: "#f56a00", marginLeft: 40 }}>
          {Context.user.displayName.split(" ")[0] +
            Context.user.displayName.split(" ")[1]}
        </span>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Xem</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={Context.hanldeGoogle_signOut}>
          Đăng Xuất
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default Logout;
