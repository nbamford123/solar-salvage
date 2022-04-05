import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import {
  createResponsive,
  Header as ArwesHeader,
  withStyles,
  Words,
} from 'arwes';
import { Link } from 'gatsby';

import { Menu } from './menu';
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

interface ResponsiveState {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  status: string;
}

export const Header: React.FC<{ show: boolean; theme?: unknown }> = ({
  show,
  theme,
}) => {
  const [min, setMin] = useState(false);

  useEffect(() => {
    const responsive = createResponsive({
      getTheme: () => theme,
    });
    if (responsive.get().status === 'small') setMin(true);
    responsive.on((state: ResponsiveState) => {
      if (state.status === 'small') setMin(true);
      else setMin(false);
    });
    // return responsive.off(listener);
  }, [theme]);

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
              <HeaderNavMenu entered={headerAnim.entered} mobile={min} />
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
export default withStyles()(Header);
