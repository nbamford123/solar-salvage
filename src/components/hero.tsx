import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

// Too much of a pain in the ass to deal with this for import
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
  justify-content: center;
  margin: auto;
  max-width: ${headerWidth}px;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
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
            margin: auto;
          `}
        >
          <SolarSalvageTitle />
        </div>{' '}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>A science fiction webcomic</p>
          <p>New pages M W F</p>
        </div>
      </TextBox>
    </ImageBackground>
  );
};
