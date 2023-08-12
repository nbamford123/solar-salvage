import { Disqus } from 'gatsby-plugin-disqus';
import { useLocation } from '@reach/router';
import { css } from '@emotion/react';

import { useChapterSummaries } from '../hooks/useChapterSummaries';
import { Comic } from 'types';

export const Comments: React.FC<{ comic: Comic }> = ({ comic }) => {
  const location = useLocation();
  // Fetch my chapter
  const chapters = useChapterSummaries();
  const myChapter = chapters.find(
    (chapterSummary) => chapterSummary.chapter === comic.chapter,
  );
  return (
    <Disqus
      config={{
        url: location.href,
        identifier: `${comic.chapter}-${comic.page}`,
        title: `${myChapter?.title} page ${comic.page}`,
        // language: 'zh_TW', //e.g. for Traditional Chinese (Taiwan)
      }}
      css={css`
        padding-top: 24px;
      `}
    />
  );
};
