import React from 'react';
import { css } from '@emotion/react';
import { Heading, Paragraph } from '@nbamford123/arwes';

import { NavLink } from '../components/navLink';
import Layout from '../components/layout';
import { getComicPath } from '../util/getComicPath';

const About: React.FC = () => (
  <Layout
    page={
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: 8px;
        `}
      >
        <Heading>About Solar Salvage</Heading>
        <Paragraph>
          Solar Salvage is a long form science fiction webcomic written by James
          Joule and Nathan Bamford and drawn by Rebecca Ryan concerning the
          (mis)adventures of a small salvage crew in the far future of our Solar
          System.
        </Paragraph>
        <Paragraph>
          New pages are posted Mondays, Wednesdays, and Fridays.
        </Paragraph>
        <>
          <Heading node="h2">New reader?</Heading>
          <Paragraph>
            You can access the first story starting
            <NavLink to={`/${getComicPath(1, 1)}`}> here</NavLink>.
          </Paragraph>
        </>
      </div>
    }
  />
);

export default About;
