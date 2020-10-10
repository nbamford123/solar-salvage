import React from 'react';
import { Link, Project } from 'arwes';
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
        // display: flex;
        // flex-direction: column;
        // justify-content: space-around;
      `}
    >
      <Project header="Ad"></Project>
      <Project header="Links">
        <Link href="https://www.girlgeniusonline.com/">Girl Genius</Link>
      </Project>
      <Project header="Some other shit"></Project>
    </div>
  );
};
