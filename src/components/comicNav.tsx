import React from 'react';
import { css } from '@emotion/core';

import ReadLink from './readLink';

export const ComicNav: React.FC<{}> = () => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
    `}
  >
    &lt;&lt; &lt; &gt; &gt;&gt;
  </div>
);
