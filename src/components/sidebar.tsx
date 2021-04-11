import { Project } from 'arwes';
import { css } from '@emotion/react';
// import styled from '@emotion/styled';

// import { sidebarContentWidth } from '../types';

// const ContentBox = styled.div`
//   background: white;
//   height: 300px;
//   width: ${sidebarContentWidth}px;
// `;

export const Sidebar: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
      `}
    >
      <Project header="Ad"></Project>
      <Project header="Links">
        <a href="https://www.girlgeniusonline.com/">Girl Genius</a>
      </Project>
      <Project header="Some other shit"></Project>
    </div>
  );
};
