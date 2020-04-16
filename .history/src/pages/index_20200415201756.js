import React from 'react';
import { css } from '@emotion/core';

import Blog from '../components/blog'
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
          >
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Index;
