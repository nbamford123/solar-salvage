import React from 'react';
import { css } from '@emotion/react';
import { ArwesTheme } from '../types';
// withSounds
import { withStyles } from '@nbamford123/arwes';
import { rgba } from 'polished';

export const iconStyles = (theme: ArwesTheme): Record<string, unknown> => ({
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
  onClick?: React.MouseEventHandler;
}
export const ArwesIcon = withStyles(iconStyles)(
  ({ children, classes, disabled, fontSize, ...rest }: ArwesIconProps) => (
    <div
      className={disabled ? classes.disabled : classes.root}
      css={css`
        position: relative;
        top: 2px;
        line-height: 0;
        font-size: ${fontSize};
      `}
      {...rest}
    >
      {children}
    </div>
  ),
);
