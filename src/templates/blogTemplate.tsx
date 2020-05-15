import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import ReadLink from '../components/readLink';
import { makePost, PostMdx } from '../types';

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;
export interface PostTemplateProps {
  data: { mdx: PostMdx };
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const post = makePost(data.mdx);
  const page = (
    <>
      <h1>{post.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by {post.author}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>{' '}
    </>
  );
  return <Layout page={page} />;
};
export default PostTemplate;
