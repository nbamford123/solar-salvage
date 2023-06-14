import { useContext } from 'react';
import { css } from '@emotion/react';
import { Header as ArwesHeader, Words } from '@nbamford123/arwes';
import { Link } from 'gatsby';

import { Menu } from './menu';
import { MobileContext } from './MobileContext';
import { MobileMenu } from './mobileMenu';
import { SolarSalvageTitle } from './title';
import { TOTAL_WIDTH } from '../types';

const HeadingText: React.FC<{ animate: boolean }> = ({ animate, children }) => (
  <h3>
    <Words animate show={animate}>
      {children}
    </Words>
  </h3>
);

const HeaderNavMenu: React.FC<{ mobile: boolean; entered: boolean }> = ({
  entered,
  mobile = false,
}) =>
  mobile ? (
    <MobileMenu entered={entered} />
  ) : (
    <div
      css={css`
        align-items: center;
        display: flex;
      `}
    >
      <Menu entered={entered} />
    </div>
  );

export const Header: React.FC<{ show: boolean }> = ({ show }) => {
  const { mobile } = useContext(MobileContext);
  return (
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
              <HeaderNavMenu entered={headerAnim.entered} mobile={mobile} />
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
            <HeadingText animate={headerAnim.entered}>
              UPDATES M W F
            </HeadingText>
          </div>
        </div>
      )}
    </ArwesHeader>
  );
};
export default Header;
