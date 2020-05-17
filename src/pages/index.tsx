import React from 'react';

import { BlogWrapper } from '../components/blogWrapper';
import { ComicWrapper } from '../components/comicWrapper';
import Layout from '../components/layout';

import { latestComic } from '../hooks/latestComic';
import { latestBlogs } from '../hooks/latestBlogs';

const Index = () => {
  const comic = latestComic();
  // Most recent news for the front page
  const posts = latestBlogs();

  const page = <ComicWrapper comic={comic} />;

  return (
    <Layout page={page}>
      <BlogWrapper posts={posts} />
    </Layout>
  );
};

export default Index;
