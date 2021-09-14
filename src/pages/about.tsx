import React from 'react';
import { Project } from 'arwes';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const About: React.FC = () => (
  <Layout
    page={
      <Project header="About Solar Salvage">
        <p>
          Solar Salvage is a long form science fiction webcomic written by James
          Joule and Nathan Bamford.
        </p>
        <Link to="/">&larr; back to latest page</Link>
      </Project>
    }
  />
);

export default About;
