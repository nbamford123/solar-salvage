import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { SolarSalvageTitle } from './title';
import { totalWidth as headerWidth } from '../types';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 200px;
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  max-width: ${headerWidth}px;
  padding: 0.5rem;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p {
    color: white;
    margin-top: 0;
  }
`;
export const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "headerbackground.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <div
          css={css`
            margin-right: 0;
          `}
        >
          <SolarSalvageTitle />
        </div>{' '}
        <div
          css={css`
            color: white;
            display: flex;
            justify-content: space-between;
            margin-top: 0;
          `}
        >
          <p>A SCIENCE FICTION WEBCOMIC</p>
          <p>NEW PAGES M W F</p>
        </div>
      </TextBox>
    </ImageBackground>
  );
};
