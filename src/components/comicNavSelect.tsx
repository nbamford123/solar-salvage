import { css } from '@emotion/react';
import { withStyles } from 'arwes';
import { rgba } from 'polished';

const selectStylesReset = {
  // A reset of styles, including removing the default dropdown arrow
  appearance: 'none',
  // Additional resets for further consistency
  backgroundColor: 'transparent',
  border: 'none',
  padding: '0 1em 0 0',
  margin: '0',
  width: '100%',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  cursor: 'inherit',
  lineHeight: 'inherit',
  outline: 'none',
};
const newSelectStyles = {
  display: 'block',
  padding: '.6em 1.4em .5em .8em',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  margin: '0',
  border: '1px solid #aaa',
  boxShadow: '0 1px 0 1px rgba(0,0,0,.04)',
  borderRadius: '.5em',
  '-moz-appearance': 'none',
  '-webkit-appearance': 'none',
  appearance: 'none',
  backgroundColor: 'transparent',
  backgroundImage:
    "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%)",
  backgroundRepeat: 'no-repeat, repeat',
  backgroundPosition: 'right .7em top 50%, 0 0',
  backgroundSize: '1em auto, 100%',
  '&:-ms-expand': {
    display: 'none',
  },
  '&:hover': {
    borderColor: '#888',
  },
  '&:focus': {
    borderColor: '#aaa',
    boxShadow: '0 0 1px 3px rgba(59, 153, 252, .7)',
    color: '#222',
    outline: 'none',
  },
};

const selectStyles = (theme: any) => {
  return {
    root: {
      ...newSelectStyles,
      // ...selectStylesReset,
      // alignItems: 'center',
      // color: theme.color.control.base,
      // cursor: 'pointer',
      // display: 'grid',
      // gridTemplateAreas: 'select',
      // height: '2.5rem',
      // minWidth: '15ch',
      // maxWidth: '30ch',
      // padding: '0.25em 0.5em',
      // textShadow: `0 0 ${theme.shadowLength}px ${rgba(
      //   theme.color.control.base,
      //   theme.alpha,
      // )}`,
      // textAlign: 'center',
      // transition: `color ${theme.animTime}ms ease-out`,
      // textDecoration: 'none',
      // width: '100%',
      // '&:after': {
      //   content: '"S"',
      //   width: '0.8em',
      //   height: '0.5em',
      //   backgroundColor: 'white',
      //   clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)'
      // }
    },
  };
};
export const ComicNavSelect = withStyles(
  selectStyles,
)(
  ({
    children,
    classes,
  }: {
    children: React.ReactNode;
    classes: { root: string };
    to: string;
  }) => <select className={classes.root}>{children}</select>,
);
