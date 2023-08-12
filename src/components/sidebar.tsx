import { Link, Project } from '@nbamford123/arwes';
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
  display: flex;
  flex-direction: column;
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
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <Link href="https://www.girlgeniusonline.com/">Girl Genius</Link>
          <Link href="https://www.penny-arcade.com/">Penny Arcade</Link>
          <Link href="https://soaps.artstation.com/">
            Rebecca Ryan at ArtStation
          </Link>
        </div>
      </MyProject>
    </div>
  );
};
