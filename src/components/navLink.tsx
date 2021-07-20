import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { rgba } from 'polished';
import { withStyles } from 'arwes';

import { ArwesTheme } from '../types';

const rootStyles = (theme: ArwesTheme) => ({
  color: theme.color.control.base,
  cursor: 'pointer',
  lineHeight: 1,
  textDecoration: 'none',
  textShadow: `0 0 ${theme.shadowLength}px ${rgba(
    theme.color.control.base,
    theme.alpha,
  )}`,
  transition: `color ${theme.animTime}ms ease-out`,
  '&:hover': {
    color: theme.color.control.light,
  },
  '& > svg': {
    filter: `drop-shadow(0 0 ${theme.shadowLength}px ${rgba(
      theme.color.control.base,
      theme.alpha,
    )})`,
    '&:hover': {
      filter: 'none',
    },
    transition: `filter ${theme.animTime}ms ease-out`,
  },
});

const linkStyles = (theme: ArwesTheme) => ({
  root: {
    ...rootStyles(theme),
    // doesn't work
    // '&.current-page': {
    //   borderBottom: '2px solid #222',
    // },
  },
  header: {
    ...rootStyles(theme),
    '& > svg': {},
    marginRight: '1rem',
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  disabled: {
    color: '#999999',
    cursor: 'default',
    pointerEvents: 'none',
  },
});

// Probably ought to set this up with some list of variants
// for the various classes, but who knows how the new Arwes will
// work-- hopefully better.
export const NavLink = withStyles(linkStyles)(
  ({
    classes,
    children,
    disabled = false,
    fontSize = '1rem',
    header = false,
    title,
    to,
  }: {
    classes: { root: string; disabled: string; header: string };
    children: React.ReactNode;
    disabled?: boolean;
    fontSize?: string;
    header: boolean;
    to: string;
    title?: string;
  }) => (
    <Link
      className={
        disabled ? classes.disabled : header ? classes.header : classes.root
      }
      css={css`
        font-size: ${fontSize};
      `}
      title={title}
      to={to}
    >
      {children}
    </Link>
  ),
);
