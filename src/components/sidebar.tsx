import React from 'react';
import { css } from '@emotion/core';

export const Sidebar: React.FC<{}> = () => {
  return (
    <div
      css={css`
        border: 1px solid black;
        margin: 0.5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
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
