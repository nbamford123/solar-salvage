import React from 'react';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import {
  Arwes,
  Col,
  // createResponsive,
  createTheme,
  Frame,
  Row,
  ThemeProvider,
} from 'arwes';

import Header from './header';
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
};
const background = {
  small: './img/background.jpg',
  medium: './img/background-medium.jpg',
  large: './img/background-large.jpg',
  xlarge: './img/background-large.jpg',
};

// const responsive = createResponsive({
//   getTheme: () => myTheme,
// });

const Layout: React.FC<LayoutProps> = ({ children, page }) => {
  const { title, description } = useSiteMetadata();

  return (
    <ThemeProvider theme={createTheme(myTheme)}>
      <Arwes animate pattern="./img/glow.png" background={background}>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Header />
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
              <Frame animate level={1} corners={3}>
                {page}
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
      </Arwes>
    </ThemeProvider>
  );
};
export default Layout;
