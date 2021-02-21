import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText, 
    DropdownMenu, UncontrolledDropdown, DropdownToggle, DropdownItem,
    Button} from 'reactstrap';
import { NavLink} from 'react-router-dom';

const Navbarr = ({user, signInWithGoogle, signOut}) => {


  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='main bg' fixed="top" color="light" light expand="md">
        <NavbarBrand href='/'>ArticleHub</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
         
          <Nav className="mr-auto"navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Read
            </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavLink className="nav-link" activeClassName="active" to='/economical'>Economical</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink className="nav-link" activeClassName="active" to='/technical'>Technical</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink className="nav-link" activeClassName="active" to='/sport'>Sport</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink className="nav-link" activeClassName="active" to='/science'>Science</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              { user ? 
               <NavLink className="nav-link" activeClassName="active" to='/write'>Write</NavLink>
              : <NavbarText disabled>Write</NavbarText>
              }
              
            </NavItem>
          </Nav>
          
          <Nav className="navbar-nav ml-auto">
           <NavItem>
            {
              user ? (
                <>
                <NavbarText>{user.displayName} &nbsp;</NavbarText>
                <Button onClick={signOut}>Sign out</Button>
                </>
              )
              : <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            }
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}
  

export default Navbarr;