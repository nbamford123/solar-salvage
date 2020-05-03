import React from 'react';
import { css } from '@emotion/core';

import Blog from '../components/blog'
import Layout from '../components/layout';

const Index = () => {
  return (
    <>
      <Layout>
        <div
          css={css`
            display: flex;
          `}
        >
          <Blog />
        </div>
      </Layout>
    </>
  );
};

export default Index;
