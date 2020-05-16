import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import PostWrapper from '../components/postWrapper';
import ReadLink from '../components/readLink';
import { makePost, PostMdx } from '../types';

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
          }
          body
        }
      }
    }
  }
`;
export interface BlogListTemplateProps {
  data: { allMdx: { edges: Array<{ node: PostMdx }> } };
}

const BlogListTemplate: React.FC<BlogListTemplateProps> = ({ data }) => {
  const edges = data.allMdx.edges;
  const page = (
    <>
      <div
        css={css`
          background: white;
          display: flex;
          flex-direction: column;
          padding: 0.5rem;
        `}
      >
        <h2>Blog</h2>
        {edges.map(edge => {
          const post = makePost(edge.node);
          return <PostWrapper key={post.slug} post={post} />;
        })}
      </div>
      <ReadLink to="/">&larr; back to all posts</ReadLink>{' '}
    </>
  );
  return <Layout page={page} />;
};
export default BlogListTemplate;
