import React from 'react';
import { css } from '@emotion/react';
import { ArwesTheme } from '../types';
import { withSounds, withStyles } from 'arwes';
import { rgba } from 'polished';

export const iconStyles = (theme: ArwesTheme) => ({
  root: {
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
  },
});

export interface ArwesIconProps {
  children: React.ReactNode;
  classes: { root: string; disabled: string; header: string };
  disabled?: boolean;
  fontSize?: string;
}
export const ArwesIcon = withStyles(iconStyles)(
  ({ children, classes, disabled, fontSize = '2.5rem' }: ArwesIconProps) => (
    <div
      className={disabled ? classes.disabled : classes.root}
      css={css`
        line-height: 0;
        font-size: ${fontSize};
      `}
    >
      {children}
    </div>
  ),
);
