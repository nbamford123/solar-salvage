import { Project } from 'arwes';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// import styled from '@emotion/styled';

// import { sidebarContentWidth } from '../types';

// const ContentBox = styled.div`
//   background: white;
//   height: 300px;
//   width: ${sidebarContentWidth}px;
// `;
const MyProject = styled(Project)`
  margin-bottom: 6rem;
`;

export const Sidebar: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <MyProject header="Ad"></MyProject>
      <MyProject header="Links">
        <a href="https://www.girlgeniusonline.com/">Girl Genius</a>
      </MyProject>
      <MyProject header="Some other shit"></MyProject>
    </div>
  );
};
