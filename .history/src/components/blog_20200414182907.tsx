import React from 'react';
import { css } from '@emotion/core';

export const Blog: React.FC<{}> = () => {
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