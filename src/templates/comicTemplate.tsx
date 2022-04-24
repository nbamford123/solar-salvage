import React from 'react';
import { graphql } from 'gatsby';

import { ComicWrapper } from '../components/comicWrapper';
import Layout from '../components/layout';

import { makeComic } from '../types';

export const query = graphql`
  query ComicMdx($chapter: Int!, $page: Int!) {
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
          childImageSharp {
            gatsbyImageData(width: 900, height: 1350)
          }
        }
      }
      fields {
        slug
      }
      body
    }
  }
`;

export interface ComicTemplateProps {
  data: { mdx: GatsbyTypes.ComicMdxQuery['mdx'] };
}
const ComicTemplate: React.FC<ComicTemplateProps> = ({
  data: { mdx: comicMdx },
}) => {
  const comic = makeComic(comicMdx);
  const page = <ComicWrapper comic={comic} />;
  return <Layout page={page} />;
};

export default ComicTemplate;
