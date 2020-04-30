import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ComicWrapper } from '../components/comicWrapper';
import Layout from '../components/layout';
import ReadLink from '../components/readLink';
import { ComicMdx, makeComic } from '../types';

export const query = graphql`
  query($chapter: Int!, $page: Int!) {
    mdx(
      frontmatter: {
        type: { eq: "comic" }
        chapter: { eq: $chapter }
        page: { eq: $page }
      }
    ) {
      frontmatter {
        chapter
        page
        posted
        comic {
          sharp: childImageSharp {
            fixed(width: 600, height: 900) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      body
    }
  }
`;

export interface ComicTemplateProps {
  data: { mdx: ComicMdx };
}
const ComicTemplate: React.FC<ComicTemplateProps> = ({
  data: { mdx: comicMdx },
}) => {
  const comic = makeComic(comicMdx);
  return (
    <Layout>
      <h1>{comic.page}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted on {comic.posted}
      </p>
      <ComicWrapper comic={comic} />
      <MDXRenderer>{comic.note}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  );
};

export default ComicTemplate;
