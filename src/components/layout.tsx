import React from 'react';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Arwes, Col, Row, Frame, ThemeProvider, createTheme } from 'arwes';

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

const Layout: React.FC<LayoutProps> = ({ children, page }) => {
  const { title, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={createTheme(myTheme)}>
      <Arwes>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <div
          css={css`
            margin-left: auto;
            margin-right: auto;
            max-width: ${TOTAL_WIDTH}px;
          `}
        >
          <Row>
            <Col s={12}>
              <Header />
            </Col>
          </Row>
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
