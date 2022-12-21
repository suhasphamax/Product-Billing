import React, { useState } from "react";

import {Button} from 'reactstrap'

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
    NavbarText,
  } from 'reactstrap';

export function Header() {

    return (

            <div>
      <Navbar >
        <NavbarBrand className="offset-5"> Product Billing</NavbarBrand>



      </Navbar>
    </div>


    )
}

