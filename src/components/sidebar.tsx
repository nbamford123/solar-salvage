import React from 'react';
import { css } from '@emotion/core';

export const Sidebar: React.FC<{}> = () => {
  return (
    <div
      css={css`
        align-items: center;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 0.5rem;
        min-height: 989px;
        width: 100%;
      `}
    >
      <div
        css={css`
          background: #eee;
          height: 300px;
          width: 300px;
        `}
      />
      <div
        css={css`
          background: #eee;
          height: 300px;
          width: 300px;
        `}
      />
    </div>
  );
};
