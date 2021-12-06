import React from 'react';
import { css } from '@emotion/react';
import { Heading, Paragraph } from 'arwes';

import Layout from '../components/layout';

const About: React.FC = () => (
  <Layout
    page={
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <Heading>About Solar Salvage</Heading>
        <Paragraph>
          Solar Salvage is a long form science fiction webcomic written by James
          Joule and Nathan Bamford.
        </Paragraph>
      </div>
    }
  />
);

export default About;
