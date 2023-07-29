import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';

import Layout from '../components/layout';
import { Blog } from '../components/blog';
import { BlogNavLink } from '../components/blogNav';
import { getCurrentDate } from '../util/getCurrentDate';
import { makePost, PostMdx } from '../types';

export const query = graphql`
  query PostMdx($skip: Int!, $limit: Int!) {
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
  const posts = data.allMdx.edges
    .filter(
      (e) =>
        e.node.frontmatter?.date &&
        new Date(e.node.frontmatter.date) <= new Date(getCurrentDate()),
    )
    .map((edge) => makePost(edge.node));

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
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 1.5rem;
        `}
      >
        {!isFirst ? (
          <BlogNavLink
            dir="backward"
            to={prevPage}
            rel="prev"
            text="Previous Page"
          />
        ) : (
          <div />
        )}
        {!isLast && (
          <BlogNavLink
            dir="forward"
            to={nextPage}
            rel="next"
            text="Next Page"
          />
        )}
      </div>
    </>
  );
  return <Layout page={page} />;
};
export default BlogListTemplate;
