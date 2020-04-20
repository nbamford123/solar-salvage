import React from 'react';
import { css } from '@emotion/core';

import { MainWrapper } from '../components/mainWrapper';
import { Blog } from '../components/blog';
import Layout from '../components/layout';

const Index = () => {
  return (
    <>
      <Layout>
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <MainWrapper />
          <Blog />
        </div>
      </Layout>
    </>
  );
};

export default Index;
