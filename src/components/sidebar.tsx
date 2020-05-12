import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

// vertical spacing between the boxes should be controlled from here-- every descendent except lastOf could have margin-bottom
const ContentBox = styled.div`
  background: white;
  height: 300px;
  width: 300px;
  margin: 0.5rem;
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
        width: 100%;
      `}
    >
      <ContentBox />
      <ContentBox />
      <ContentBox />
    </div>
  );
};
