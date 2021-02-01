import React, {useState} from 'react';

import { BsNavLink } from '../shared/header';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const AdminMenu = ({ user, userLoading }) => {
  const [toggle, setToggle] = useState(false)
  return (
      <Dropdown
          className="port-navbar-link port-dropdown-menu "
          nav
          isOpen={toggle}
          toggle={() => {setToggle(!toggle)}}>
              <DropdownToggle className="port-dropdown-toggle" nav>
              &#9661;Admin
              </DropdownToggle>
              <DropdownMenu right>
                  <DropdownItem>
                      <BsNavLink
                          href='/portfolios/new'
                          title='Create Portfolio'
                          className='port-dropdown-item' />
                  </DropdownItem>
                  <DropdownItem>
                      {!userLoading &&
                          <>
                              {user.name ?
                                  <BsNavLink href="/api/v1/logout" title="Logout" className='port-dropdown-item'/>
                              :
                                  <BsNavLink href="/api/v1/login" title="Login" className='port-dropdown-item'/>
                              }
                          </>
                      }
                  </DropdownItem>
              </DropdownMenu>
      </Dropdown>
  )
}

export default AdminMenu;