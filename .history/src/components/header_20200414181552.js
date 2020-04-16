import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { graphql, Link, GatsbyLinkProps, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// interface NavLinkProps extends GatsbyLinkProps<> {
//   fontWeight: string;
// }
const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const headerImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "solsal_banner_05.jpg" }) {
        sharp: childImageSharp {
          fixed(width: 980, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Img
      Tag="section"
      imgStyle={{ marginTop: 0 }}
      fixed={image.sharp.fixed}
      fadeIn="soft"
    />
  );
};

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      flex-direction: column;
      width: 980px - 0.5rem) / 2) 0.5rem;
    `}
  >
    {headerImage()}
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin-top: 0;
      `}
    >
      <nav>
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="current-page">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="current-page">
          Contact
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;
