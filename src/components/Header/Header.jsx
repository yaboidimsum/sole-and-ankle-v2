import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <SideFlex>
          <Logo />
        </SideFlex>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <SideFlex />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  /*  */
  display: flex;
  align-items: baseline;
  height: 72px;
  
`;

const SideFlex = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  /*  */
  display: flex;
  gap: 48px;
  margin: 0 48px;
  /* border: 2px red solid; */
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  /*  */

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
