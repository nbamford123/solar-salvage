import { withStyles } from 'arwes';
import { rgba } from 'polished';
import SelectSearch, { SelectSearchProps } from 'react-select-search';

import { ArwesTheme } from '../../types';
import './styles.css';

const selectStyles = (theme: ArwesTheme) => {
  return {
    input: {
      // ...newSelectStyles,
      backgroundColor: 'transparent',
      border: `1px solid ${theme.color.control.base}`,
      borderRadius: '3px',
      color: theme.color.control.base,
      cursor: 'pointer',
      display: 'block',
      fontFamily: 'Noto Sans',
      fontSize: '1rem',
      height: '36px',
      // lineHeight: 1,
      // textDecoration: 'none',
      outline: 'none',
      padding: '0 40px 0 16px',
      textAlign: 'left',
      textShadow: `0 0 ${theme.shadowLength}px ${rgba(
        theme.color.control.base,
        theme.alpha,
      )}`,
      transition: `color ${theme.animTime}ms ease-out`,
      '&:hover, &:focus': {
        color: theme.color.control.light,
      },
      width: '100%',
      webkitAppearance: 'none',
      webkitSearchDecoration: '-webkit-appearance:none',
      webkitSearchCancelButton: '-webkit-appearance:none',
      webkitSearchResultsDecoration: '-webkit-appearance:none',
    },
    value: {
      // border: `1px solid  ${theme.color.control.base}`,
      borderRadius: '4px',
      position: 'relative',
      zIndex: 1,
      '&:before': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        right: '36px',
        top: 'calc(50% - 9px)',
        width: '11px',
        height: '11px',
        transform: 'rotate(45deg)',
        borderRight: `2px solid ${theme.color.control.base}`,
        // borderBottom: `2px solid ${theme.color.control.base}`,
        pointerEvents: 'none',
        boxShadow: `${theme.shadowLength}px 0  ${theme.shadowLength}px -${
          theme.shadowLength / 2
        }px ${rgba(theme.color.control.base, theme.alpha)}`,
      },
      '&:after': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        right: '36px',
        top: 'calc(50% - 9px)',
        width: '11px',
        height: '11px',
        transform: 'rotate(45deg)',
        // borderRight: `2px solid ${theme.color.control.base}`,
        borderBottom: `2px solid ${theme.color.control.base}`,
        borderBottomColor: theme.color.control.base,
        pointerEvents: 'none',
        boxShadow: `0 ${theme.shadowLength}px ${theme.shadowLength}px -${
          theme.shadowLength / 2
        }px ${rgba(theme.color.control.base, theme.alpha)}`,
      },
      '&:hover::before, &:active::before': {
        boxShadow: 'none',
        borderColor: theme.color.control.light,
        transition: `color ${theme.animTime}ms ease-out, border-color ${theme.animTime}ms ease-out`,
      },
      '&:hover::after': {
        boxShadow: 'none',
        borderColor: theme.color.control.light,
        transition: `color ${theme.animTime}ms ease-out, border-color ${theme.animTime}ms ease-out`,
      },
    },
    select: {
      background: 'black',
      boxShadow: `0 0 ${theme.shadowLength}px ${rgba(
        theme.color.control.base,
        theme.alpha,
      )}`,
      position: 'absolute',
      zIndex: 2,
      top: '44px',
      right: 0,
      left: 0,
      borderRadius: '3px',
      overflow: 'auto',
      maxHeight: '360px',
    },
    option: {
      background: 'transparent',
      border: 'none',
      color: theme.color.control.base,
      cursor: 'pointer',
      fontSize: '1rem',
      textShadow: `0 0 ${theme.shadowLength}px ${rgba(
        theme.color.control.base,
        theme.alpha,
      )}`,
      transition: `color ${theme.animTime}ms ease-out`,
      '&:hover, &:active': {
        color: theme.color.control.light,
      },
    },
    isSelected: {
      color: '#999999',
      cursor: 'default',
      pointerEvents: 'none',
      textShadow: 'none',
      '&:hover, &:active': {
        color: '#999999',
      },
    },
  };
};
interface ArwesSelectProps extends SelectSearchProps {
  children: React.ReactNode;
  classes: {
    input: string;
    isSelected: string;
    option: string;
    select: string;
    value: string;
  };
}
export const ArwesSelect = withStyles(selectStyles)(
  ({ classes, ...rest }: ArwesSelectProps) => (
    <SelectSearch
      autoComplete="off"
      // closeOnSelect={false}
      // printOptions="always"
      className={(component) => {
        return component === 'input'
          ? classes.input
          : component === 'container'
          ? 'select-search'
          : component === 'value'
          ? classes.value
          : component === 'select'
          ? classes.select
          : component === 'option'
          ? classes.option
          : component === 'is-selected'
          ? classes.isSelected
          : `select-search__${component}`;
      }}
      {...rest}
    />
  ),
);
