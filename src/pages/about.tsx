import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const About: React.FC<{}> = () => (
  <Layout
    page={
      <div
        css={css`
          background: white;
        `}
      >
        <h1>About Solar Salvage</h1>
        <p
          css={css`
            padding-bottom: 1rem;
          `}
        >
          Solar Salvage is a long form science fiction webcomic written by James
          Joule and Nathan Bamford.
        </p>
        <Link to="/">&larr; back to latest page</Link>
      </div>
    }
  />
);

export default About;
