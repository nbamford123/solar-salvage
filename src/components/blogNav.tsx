import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { NavLink } from '../components/navLink';

const ArrowText = styled.div`
  font-size: 2.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const BlogNavLink: React.FC<{
  to: string;
  rel: string;
  dir: 'backward' | 'forward';
  text: string;
}> = ({ to, rel, dir, text }) => (
  <NavLink to={to} rel={rel}>
    <div
      css={css`
        align-items: center;
        display: flex;
      `}
    >
      {dir === 'backward' ? <ArrowText>‹‹</ArrowText> : null}
      {text}
      {dir === 'forward' ? <ArrowText>››</ArrowText> : null}
    </div>
  </NavLink>
);
