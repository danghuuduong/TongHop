import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";
import {Avatar} from 'antd';

import firebase, { auth } from "../../Firebase/config";
const Google_provider = new firebase.auth.GoogleAuthProvider();

function Logout( {user}) {

    const hanldeGoogle_signOut = () => {
        auth.signOut(Google_provider);
      };
    return (
            <UncontrolledDropdown inNavbar nav>
                         <DropdownToggle caret nav>
                         <span style={{position:'relative'}}>
                            <span style={{position:'absolute',top:-7,left:0}}>
                            <Avatar size={35} src={user.photoURL} />
                            </span>
                        </span>

                        <span style={{ color: "#f56a00",marginLeft:40 }}>
                            {user.displayName}
                        </span> 
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Xem</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={hanldeGoogle_signOut}>Đăng Xuất</DropdownItem>
                        </DropdownMenu>
            </UncontrolledDropdown>
    )
}

export default Logout
