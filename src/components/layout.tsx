import React from 'react';
import { Global, css } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Arwes, Col, Row, ThemeProvider, createTheme } from 'arwes';

import Header from './header';
import { Hero } from './hero';

import useSiteMetadata from '../hooks/useSiteMetadata';
import { Sidebar } from './sidebar';
import { MainWrapper } from './mainWrapper';
import { totalWidth } from '../types';

export interface LayoutProps {
  children?: React.ReactNode;
  page: React.ReactNode;
}
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
    <ThemeProvider theme={createTheme()}>
      <Arwes>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Hero />
        <Header />
        <Row>
          <Col s={8}>{page}</Col>
          <Col s={2}>
            <Sidebar />
          </Col>
        </Row>
        <Row>{children}</Row>
      </Arwes>
    </ThemeProvider>
  );
};
export default Layout;
