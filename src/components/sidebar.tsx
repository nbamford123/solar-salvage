import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { sidebarContentWidth } from '../types';

const ContentBox = styled.div`
  background: white;
  height: 300px;
  width: ${sidebarContentWidth}px;
`;

export const Sidebar: React.FC<{}> = () => {
  return (
    <div
      css={css`
        align-items: center;
        background: #eee;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0 0.5rem;
        padding: 0.5rem;
      `}
    >
      <ContentBox />
      <ContentBox />
      <ContentBox />
    </div>
  );
};
