import React from 'react';

import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/postPreview';
import Insta from '../components/insta';

const Index = () => {
  const posts = usePosts();
  return (
    <>
      <Layout>
        <div css={css`
        `}
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};

export default Index;
