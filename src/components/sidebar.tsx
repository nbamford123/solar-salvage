import { Project } from '@nbamford123/arwes';
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
  margin-top: 6rem;
`;

export const Sidebar: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <MyProject header="Links">
        <a href="https://www.girlgeniusonline.com/">Girl Genius</a>
      </MyProject>
    </div>
  );
};
