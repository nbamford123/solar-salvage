import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import { Blog } from '../components/blog';
import { ReadLink } from '../components/readLink';
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
            date
          }
          body
        }
      }
    }
  }
`;
export interface BlogListTemplateProps {
  data: { allMdx: { edges: Array<{ node: PostMdx }> } };
  pageContext: {
    numPages: number;
    currentPage: number;
  };
}

const BlogListTemplate: React.FC<BlogListTemplateProps> = ({
  pageContext,
  data,
}) => {
  const posts = data.allMdx.edges.map(edge => makePost(edge.node));

  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/${
    currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
  }`;
  const nextPage = `/blog/${(currentPage + 1).toString()}`;

  const page = (
    <>
      <Blog posts={posts} />
      {!isFirst && (
        <ReadLink to={prevPage} rel="prev">
          ← Previous Page
        </ReadLink>
      )}
      {!isLast && (
        <ReadLink to={nextPage} rel="next">
          Next Page →
        </ReadLink>
      )}
    </>
  );
  return <Layout page={page} />;
};
export default BlogListTemplate;
