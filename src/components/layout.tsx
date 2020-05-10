import React from 'react';
import { Global, css } from '@emotion/core';
import { Helmet } from 'react-helmet';

import Header from './header';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { MainWrapper } from './mainWrapper';
import { Blog } from './blog';

export interface LayoutProps {
  page: JSX.Element;
}
const Layout: React.SFC<LayoutProps> = ({ page }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
          * + * {
            margin-top: 1rem;
          }

          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
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
            > div {
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
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          display: flex;
          flex-direction: column;
          margin: 2rem auto;
          max-width: 90vw;
          width: 980px;
        `}
      >
        <MainWrapper page={page} />
        <Blog />
      </main>
    </>
  );
};
export default Layout;