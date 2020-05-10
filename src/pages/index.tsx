import React from 'react';

import { ComicWrapper } from '../components/comicWrapper';
import Layout from '../components/layout';
import { latestComic } from '../hooks/latestComic';

const Index = () => {
  const comic = latestComic();
  const page = <ComicWrapper comic={comic} />;

  return <Layout page={page} />;
};

export default Index;
