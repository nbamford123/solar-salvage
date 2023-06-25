import React from 'react';
import { Helmet } from 'react-helmet';

export const Head: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <Helmet
        defaultTitle="Solar Salvage"
        title={title}
        titleTemplate="%s | Solar Salvage"
      />
    </>
  );
};
