import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import {
  Appear,
  Arwes,
  Col,
  createResponsive,
  createSounds,
  createTheme,
  Frame,
  Row,
  SoundsProvider,
  ThemeProvider,
} from '@nbamford123/arwes';

import Header from './header';
import { MobileContext } from './MobileContext';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Sidebar } from './sidebar';
import { TOTAL_WIDTH } from '../types';

export interface LayoutProps {
  children?: React.ReactNode;
  page: React.ReactNode;
}
const myTheme = {
  typography: {
    headerFontFamily: '"Electrolize", "sans-serif"',
    fontFamily: '"Titillium Web", "sans-serif"',
  },
  responsive: {
    // The rest are default, but I needed small a little bigger
    small: 700,
    medium: 992,
    large: 1200,
  },
};

const background = {
  small: '/img/background.jpg',
  medium: '/img/background-medium.jpg',
  large: '/img/background-large.jpg',
  xlarge: '/img/background-large.jpg',
};

// const responsive = createResponsive({
//   getTheme: () => myTheme,
// });

const sounds = {
  shared: { volume: 1 },
  players: {
    click: {
      sound: { src: ['sound/click.mp3'] },
      settings: { oneAtATime: true },
    },
    typing: {
      sound: { src: ['sound/typing.mp3'] },
      settings: { oneAtATime: true },
    },
    deploy: {
      sound: { src: ['sound/deploy.mp3'] },
      settings: { oneAtATime: true },
    },
  },
};

interface ResponsiveState {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  status: string;
}

const theme = createTheme(myTheme);

const Layout: React.FC<LayoutProps> = ({ children, page }) => {
  const { title, description } = useSiteMetadata();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const responsive = createResponsive({
      getTheme: () => theme,
    });
    if (responsive.get().status === 'small') setMobile(true);
    responsive.on((state: ResponsiveState) => {
      if (state.status === 'small') setMobile(true);
      else setMobile(false);
    });
    // return responsive.off(listener);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SoundsProvider sounds={createSounds(sounds)}>
        <Arwes animate pattern="/img/glow.png" background={background}>
          {(anim: { entered: boolean }) => (
            <MobileContext.Provider value={{ mobile: mobile }}>
              <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
              </Helmet>
              <Header show={anim.entered} />
              <div
                css={css`
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 1rem;
                  max-width: ${TOTAL_WIDTH}px;
                `}
              >
                <Row>
                  <Col s={12} xl={9}>
                    <Frame animate level={1} corners={3} show={anim.entered}>
                      <div
                        css={css`
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          margin-bottom: 1rem;
                          margin-top: 1rem;
                          position: relative;
                        `}
                      >
                        <Appear animate show={anim.entered}>
                          {page}
                        </Appear>
                      </div>
                    </Frame>
                  </Col>
                  <Col s={12} xl={3}>
                    <Sidebar />
                  </Col>
                </Row>
                <Row>
                  <Col s={12}>{children}</Col>
                </Row>
              </div>
            </MobileContext.Provider>
          )}
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  );
};
export default Layout;
