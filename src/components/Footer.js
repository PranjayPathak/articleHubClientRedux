import React from "react";
import { Nav, NavItem, NavLink, Container, NavbarText } from "reactstrap";

const footer = () => {
  return (
    <div className="footerP bg">
      <Container>
        <Nav>
          <NavItem>
            <NavLink href="/">ArticleHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/iamvikasthakur/">
              LinkedIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/iamvikasthakur/">GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://drive.google.com/file/d/1iELKHKGzgeuZQ3SP1uUk1x_AvYCB0LLa/view?usp=sharing">
              Resume
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://leetcode.com/iamvikasthakur/">
              Leetcode
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.hackerrank.com/iamvikasthakur/">
              HackerRank
            </NavLink>
          </NavItem>
          <NavItem>
            <NavbarText>
              &nbsp; Made by Vikas Thakur using MERN Stack
            </NavbarText>
          </NavItem>
        </Nav>
      </Container>
    </div>
  );
};

export default footer;
