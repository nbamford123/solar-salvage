import React from 'react';

import { css } from '@emotion/core';
import { Header as ArwesHeader, Col, Row, Words, withStyles } from 'arwes';
import { Link } from 'gatsby';
import { rgba } from 'polished';

import { pageWidth } from '../types';
import { SolarSalvageTitle } from './title';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const linkStyles = (theme: any) => ({
  root: {
    color: theme.color.control.base,
    textShadow: `0 0 ${theme.shadowLength}px ${rgba(
      theme.color.control.base,
      theme.alpha,
    )}`,
    marginRight: '1rem',
    transition: `color ${theme.animTime}ms ease-out`,
    textDecoration: 'none',
    cursor: 'pointer',

    '&:hover': {
      color: theme.color.control.light,
    },
    // doesn't work
    // '&.current-page': {
    //   borderBottom: '2px solid #222',
    // },
    '&:last-of-type': {
      marginRight: '0',
    },
  },
});

const NavLink = withStyles(linkStyles)(
  ({
    classes,
    children,
    to,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    classes: any;
    children: React.ReactNode;
    to: string;
  }) => {
    console.log(classes);
    return (
      <Link className={classes.root} to={to}>
        {children}
      </Link>
    );
  },
);

export const Header: React.FC = () => (
  <ArwesHeader
    css={css`
      max-width: ${pageWidth}px;
    `}
    title="Solar Salvage"
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          align-items: center;
          display: flex;
          justify-content: space-between;
        `}
      >
        <SolarSalvageTitle />
        <nav>
          <NavLink to="/">LATEST PAGE</NavLink>
          <NavLink to="/blog">NEWS</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/archive">ARCHIVE</NavLink>
        </nav>
      </div>
      <div
        css={css`
          align-items: center;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Words>A SCIENCE FICTION WEBCOMIC</Words>
        <Words>UPDATES M W F</Words>
      </div>
    </div>
  </ArwesHeader>
);
export default Header;
