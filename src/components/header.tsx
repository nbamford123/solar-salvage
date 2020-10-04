import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import {
  Header as ArwesHeader,
  Link as ArwesLink,
  Col,
  Row,
  Words,
} from 'arwes';
import { totalWidth as headerWidth } from '../types';

import { SolarSalvageTitle } from './title';

interface NavLinkProps {
  fontWeight?: string;
}
const NavLink = styled(ArwesLink)<NavLinkProps>`
  // color: #222;
  // font-size: 1rem;
  // font-weight: ${props => props.fontWeight || 'normal'};
  // line-height: 1;
  // margin: 0 0.5rem 0 0;
  // padding: 0.25rem;
  // text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  // &:last-of-type {
  //   margin-right: 0;
  // }
`;

export const Header = () => (
  <ArwesHeader
    css={css`
      // background: #eee;
      // border-bottom: 1px solid #ddd;
      // display: flex;
      // justify-content: space-between;
      // max-width: ${headerWidth}px;
      // margin: auto;
      // padding-bottom: 0.5rem;
    `}
    title="Solar Salvage"
  >
    <Row>
      <Col s={4}>
        <SolarSalvageTitle />
      </Col>
      <Col s={4}>
        <Words>A SCIENCE FICTION WEBCOMIC</Words>
      </Col>
      <Col s={4}>
        <Words>UPDATES M W F</Words>
      </Col>
    </Row>
    <Row>
      <nav>
        <NavLink href="/" activeClassName="current-page">
          LATEST PAGE
        </NavLink>
        <NavLink href="/blog" activeClassName="current-page">
          NEWS
        </NavLink>
        <NavLink href="/about" activeClassName="current-page">
          ABOUT
        </NavLink>
        <NavLink href="/archive" activeClassName="current-page">
          ARCHIVE
        </NavLink>
      </nav>
    </Row>
  </ArwesHeader>
);

export default Header;
