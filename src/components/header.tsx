import {
  AiOutlineCalendar,
  AiOutlineFileText,
  AiOutlineFolderOpen,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { css } from '@emotion/react';
import { Appear, Header as ArwesHeader, Highlight, Words } from 'arwes';
import { Link } from 'gatsby';

import { ArwesIcon } from './arwesIconStyles';
import { NavLink } from './navLink';
import { SolarSalvageTitle } from './title';
import { TOTAL_WIDTH } from '../types';

const HeadingText: React.FC<{ animate: boolean }> = ({ animate, children }) => (
  <h3>
    <Words animate show={animate}>
      {children}
    </Words>
  </h3>
);

const iconCss = css`
  position: relative;
  top: 2px;
`;
const HeaderNavLink: React.FC<{ show: boolean; text: string; to: string }> = ({
  show,
  children,
  text,
  to,
}) => (
  <NavLink header to={to}>
    <Highlight animate layer="header">
      <Appear animate show={show}>
        {children}
      </Appear>
      <Words
        css={css`
          margin-left: 0.5rem;
        `}
        animate
        show={show}
      >
        {text}
      </Words>
    </Highlight>
  </NavLink>
);

const HeaderNavMenu: React.FC<{ mobile: boolean; entered: boolean }> = ({
  entered,
  mobile = false,
}) =>
  mobile ? (
      <ArwesIcon>
        <FiMenu css={iconCss} />
      </ArwesIcon>
  ) : (
    <div
      css={css`
        align-items: center;
        display: flex;
      `}
    >
      <HeaderNavLink show={entered} text="LATEST PAGE" to="/">
        <AiOutlineCalendar css={iconCss} />
      </HeaderNavLink>
      <HeaderNavLink show={entered} text="NEWS" to="/blog">
        <AiOutlineFileText css={iconCss} />
      </HeaderNavLink>
      <HeaderNavLink show={entered} text="ABOUT" to="/about">
        <AiOutlineQuestionCircle css={iconCss} />
      </HeaderNavLink>
      <HeaderNavLink show={entered} text="ARCHIVE" to="/archive">
        <AiOutlineFolderOpen css={iconCss} />
      </HeaderNavLink>
    </div>
  );

export const Header: React.FC<{ show: boolean }> = ({ show }) => (
  <ArwesHeader animate show={show} title="Solar Salvage">
    {(headerAnim: { entered: boolean }) => (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin: auto;
          max-width: ${TOTAL_WIDTH}px;
          padding-right: 10px;
          padding-left: 10px;
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
            <HeaderNavMenu entered={headerAnim.entered} mobile={true} />
          </nav>
        </div>
        <div
          css={css`
            align-items: center;
            display: flex;
            justify-content: space-between;
          `}
        >
          <HeadingText animate={headerAnim.entered}>
            A SCIENCE FICTION WEBCOMIC
          </HeadingText>
          <HeadingText animate={headerAnim.entered}>UPDATES M W F</HeadingText>
        </div>
      </div>
    )}
  </ArwesHeader>
);
export default Header;
