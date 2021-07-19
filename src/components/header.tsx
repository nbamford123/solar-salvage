import {
  AiOutlineCalendar,
  AiOutlineFileText,
  AiOutlineFolderOpen,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { css } from '@emotion/react';
import { Header as ArwesHeader, Heading } from 'arwes';
import { Link } from 'gatsby';
import { NavLink } from './navLink';
import { SolarSalvageTitle } from './title';
import { totalWidth } from '../types';

const HeadingText = ({ children }: { children: React.ReactNode }) => (
  <Heading node="h3">{children}</Heading>
);

const iconCss = css`
  position: relative;
  top: 2px;
`;
const HeaderNavLink: React.FC<{ to: string }> = ({ children, to }) => (
  <NavLink header to={to}>
    {children}
  </NavLink>
);

export const Header: React.FC = () => (
  <ArwesHeader title="Solar Salvage">
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: ${totalWidth}px;
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
          <HeaderNavLink to="/">
            <AiOutlineCalendar css={iconCss} /> LATEST PAGE
          </HeaderNavLink>
          <HeaderNavLink to="/blog">
            <AiOutlineFileText css={iconCss} /> NEWS
          </HeaderNavLink>
          <HeaderNavLink to="/about">
            <AiOutlineQuestionCircle css={iconCss} /> ABOUT
          </HeaderNavLink>
          <HeaderNavLink to="/archive">
            <AiOutlineFolderOpen css={iconCss} /> ARCHIVE
          </HeaderNavLink>
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
