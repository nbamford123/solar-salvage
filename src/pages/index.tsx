import React from 'react';
import '@fontsource/electrolize';
import '@fontsource/titillium-web';

import { BlogWrapper } from '../components/blogWrapper';
import { ComicWrapper } from '../components/comicWrapper';
import Layout from '../components/layout';

import { useLatestComic } from '../hooks/useLatestComic';
import { useLatestBlogs } from '../hooks/useLatestBlogs';

const Index: React.FC = () => {
  const comic = useLatestComic();
  // Most recent news for the front page
  const posts = useLatestBlogs();

  const page = <ComicWrapper comic={comic} />;

  return (
    <Layout page={page}>
      <BlogWrapper posts={posts} />
    </Layout>
  );
};

export default Index;
