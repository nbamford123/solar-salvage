import React from 'react';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Arwes, Col, Row, Frame, ThemeProvider, createTheme } from 'arwes';

import Header from './header';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Sidebar } from './sidebar';
import { pageWidth } from '../types';

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
        <Header />
        <Row
          css={css`
            display: flex;
            margin-top: 1rem;
            justify-content: center;
          `}
        >
          <Col
            css={css`
              align-items: center;
              display: flex;
              flex-direction: column;
              max-width: ${pageWidth}px;
            `}
          >
            <Frame
              animate
              css={css`
                padding: 0.5rem;
                width: 100%;
              `}
              level={1}
              corners={3}
            >
              {page}
            </Frame>
          </Col>
          <Col>
            <Sidebar />
          </Col>
        </Row>
        <Row
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <Col>{children}</Col>
        </Row>
      </Arwes>
    </ThemeProvider>
  );
};
export default Layout;
