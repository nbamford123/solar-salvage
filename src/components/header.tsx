import React from 'react';

import {
  AiOutlineCalendar,
  AiOutlineFileText,
  AiOutlineFolderOpen,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { css } from '@emotion/core';
import { Header as ArwesHeader, Heading, withStyles } from 'arwes';
import { Link } from 'gatsby';
import { rgba } from 'polished';

import { pageWidth } from '../types';
import { SolarSalvageTitle } from './title';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const linkStyles = (theme: any) => ({
  root: {
    color: theme.color.control.base,
    fontSize: '1rem',
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

const HeadingText = ({ children }: { children: React.ReactNode }) => (
  <Heading node="h3">{children}</Heading>
);

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
  }) => (
    <Link className={classes.root} to={to}>
      {children}
    </Link>
  ),
);
const iconCss = css`
  position: relative;
  top: 2px;
`;
export const Header: React.FC = () => (
  <ArwesHeader title="Solar Salvage">
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin: auto;
        width: ${pageWidth}px;
      `}
    >
      <div
        css={css`
          align-items: center;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Link to="/">
          <SolarSalvageTitle />
        </Link>
        <nav>
          <NavLink to="/">
            <AiOutlineCalendar css={iconCss} /> LATEST PAGE
          </NavLink>
          <NavLink to="/blog">
            <AiOutlineFileText css={iconCss} /> NEWS
          </NavLink>
          <NavLink to="/about">
            <AiOutlineQuestionCircle css={iconCss} /> ABOUT
          </NavLink>
          <NavLink to="/archive">
            <AiOutlineFolderOpen css={iconCss} /> ARCHIVE
          </NavLink>
        </nav>
      </div>
      <div
        css={css`
          align-items: center;
          display: flex;
          justify-content: space-between;
        `}
      >
        <HeadingText>A SCIENCE FICTION WEBCOMIC</HeadingText>
        <HeadingText>UPDATES M W F</HeadingText>
      </div>
    </div>
  </ArwesHeader>
);
export default Header;
