import React, { useState } from 'react';
import Link from 'next/link';
import AdminMenu from './AdminMenu';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

import ActiveLink from './ActiveLink';

//functions begin....

export const BsNavLink = ({ href, title, className='' }) => {
    return (
      <ActiveLink activeClassName="active" href={href}>
        <a className={`navbar-link port-navbar-link ${className}`}>{title}</a>
      </ActiveLink>
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
        <Navbar
            className={`port-navbar port-default absolute ${className} ${isOpen ? 'isOpen' : 'isClosed'}`}
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
                </Nav>
                <NavbarText className="port-navbar-social">
                    <a href="https://linkedin.com/in/olly-bolland/" target="_blank">
                        <span className="iconify navbar-social mr-3" data-icon="mdi:linkedin" data-inline="false" />
                    </a>
                    <a href="https://github.com/obolland/" target="_blank">
                        <span className="iconify navbar-social" data-icon="mdi:github" data-inline="false" /> 
                    </a>
                    <Mailto email="info@ollybolland.com">
                        <span className="iconify navbar-social ml-3" data-icon="mdi:email-outline" data-inline="false" />
                    </Mailto>
                </NavbarText>
                <Nav navbar>   
                    <NavItem className="port-navbar-item ml-4">
                        <AdminMenu user={user} userLoading={userLoading}/>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;