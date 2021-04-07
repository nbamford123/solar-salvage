import React from 'react';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Arwes, Col, Row, Frame, ThemeProvider, createTheme } from 'arwes';

import Header from './header';
// import { Hero } from './hero';

import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Sidebar } from './sidebar';
// import { MainWrapper } from './mainWrapper';
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
    // <>      {
    /* <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
    /*  * + * {
            margin-top: 1rem;
          }

          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;graphql-codegen
          }
          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for the main div that Gatsby mounts into */
    /*  > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong: {
              color: #222;
            }

            li: {
              margin-top: 0.25rem;
            }
          }
        `}
      /> */
    //}
    <ThemeProvider theme={createTheme(myTheme)}>
      <Arwes>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        {/* <Hero /> */}
        <Row>
          <Header />
        </Row>
        <Row>
          <Col s={12} xl={9} offset={['l0', 'xl1']}>
            <Frame
              animate
              level={1}
              corners={3}
              css={css`
                align-items: center;
                display: flex;
                flex-direction: column;
                padding-bottom: 0.5rem;
                padding-top: 0.5rem;
                max-width: ${pageWidth}px;
              `}
            >
              {page}
            </Frame>
          </Col>
          <Col l={0} xl={2}>
            <Sidebar />
          </Col>
        </Row>
        <Row>{children}</Row>
      </Arwes>
    </ThemeProvider>
  );
};
export default Layout;
