import React from 'react';
import { css } from '@emotion/core';

import Blog from ''
import Layout from '../components/layout';

const Index = () => {
  const posts = usePosts();
  return (
    <>
      <Layout>
        <div
          css={css`
            display: flex;
          `}
        >
          <h2>Blog</h2>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Index;
