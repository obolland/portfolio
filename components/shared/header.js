import React, { useState } from 'react';

import Link from 'next/link';

import AdminMenu from '../shared/adminMenu';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
//   NavbarText
} from 'reactstrap';

//functions begin...

export const BsNavLink = ({ href, title, className='' }) => {
    return (
      <Link href={href}>
        <a className={`navbar-link port-navbar-link ${className}`}>{title}</a>
      </Link>
    )
}

const BsNavBrand = () => {
    return (
        <Link href='/'> 
            <a className="navbar-brand port-navbar-brand">Olly Bolland</a>
        </Link>
    )
}

const Mailto = ({ email, children }) => {
    return (
      <a href={`mailto:${email}`}>{children}</a>
    );
  };

//functions end.


const Header = ({ user, userLoading, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar
                className={`port-navbar port-default absolute ${className}`}
                dark
                expand="md">
                <BsNavBrand />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href='/about' title='About' />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href='/portfolios' title='Portfolios' />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href='/blogs' title='Blogs' />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href='/cv' title='CV' />
                        </NavItem>
                        {/* <NavItem className="port-navbar-item">
                            <BsNavLink href='/secretssr' title='SecretSSR' />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink href='/adminssr' title='AdminSSR' />
                        </NavItem> */}
                    </Nav>
                    {/* <NavbarText className="port-navbar-social">
                        <a href="https://linkedin.com/in/olly-bolland/" target="_blank">
                            <span className="iconify navbar-social mr-3" data-icon="mdi:linkedin" data-inline="false" />
                        </a>
                        <a href="https://github.com/obolland/" target="_blank">
                            <span className="iconify navbar-social" data-icon="mdi:github" data-inline="false" /> 
                        </a>
                        <Mailto email="info@ollybolland.com">
                            <span className="iconify navbar-social ml-3" data-icon="mdi:email-outline" data-inline="false" />
                        </Mailto>
                    </NavbarText> */}
                    <Nav navbar>   
                        <NavItem className="port-navbar-item ml-4">
                            <AdminMenu user={user} userLoading={userLoading}/>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;