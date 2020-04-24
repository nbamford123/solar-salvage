import React from 'react';
import { css } from '@emotion/core';

export const Comic: React.FC<{}> = () => {
  return (
    <div
      css={css`
        border: 1px solid black;
        margin: 0.5rem;
        width: 640px;
      `}
    >
      {' '}
      <div
        css={css`
          background: #eee;
          margin: 0.5rem;
          height: 900px;
          width: 600px;
          flex: 0 0 auto;
        `}
      />
    </div>
  );
};
