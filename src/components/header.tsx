import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { Header as ArwesHeader, Col, Row, Words } from 'arwes';
import { withTheme } from 'theming';

import { pageWidth } from '../types';

import { SolarSalvageTitle } from './title';

interface NavLinkProps {
  fontWeight?: string;
}

export interface HeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any;
}
export const Header: React.FC<HeaderProps> = ({ theme }) => {
  const NavLink = styled(Link)<NavLinkProps>`
    color: theme.color.control.base;
    textShadow: 0 0 ${theme.shadowLength}px rgba(${theme.color.control.base}, ${theme.alpha})
    transition: color ${theme.animTime}ms ease-out;
    textDecoration: 'none';
    cursor: 'pointer';

    &:hover: {
      color: ${theme.color.control.light};
    }
    &.current-page {
      border-bottom: 2px solid #222;
    }
    &:last-of-type {
      margin-right: 0;
    }
  `;
  return (
    <ArwesHeader
      css={css`
        max-width: ${pageWidth}px;
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
          <NavLink to="/" activeClassName="current-page">
            LATEST PAGE
          </NavLink>
          <NavLink to="/blog" activeClassName="current-page">
            NEWS
          </NavLink>
          <NavLink to="/about" activeClassName="current-page">
            ABOUT
          </NavLink>
          <NavLink to="/archive" activeClassName="current-page">
            ARCHIVE
          </NavLink>
        </nav>
      </Row>
    </ArwesHeader>
  );
};

export default Header;
