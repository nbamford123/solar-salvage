import { FixedObject } from 'gatsby-image';

export type GatsbyFixedImage = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  sharp?: { fixed?: FixedObject | null } | null;
};

export interface Comic {
  chapter: number;
  page: number;
  posted?: Date;
  comic?: GatsbyFixedImage;
  note: string;
}

export interface ComicMdx {
  frontmatter?: {
    chapter: number;
    page: number;
    posted: Date;
    comic: GatsbyFixedImage;
  };
  body: string;
}

export const makeComic = (mdx: ComicMdx): Comic => ({
  chapter: mdx.frontmatter?.chapter || 0,
  page: mdx.frontmatter?.page || 0,
  posted: mdx.frontmatter?.posted,
  // This sucks, but there's no way to coerce graphql into returning the appropriate type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  comic: (mdx.frontmatter?.comic ?? undefined) as any,
  note: mdx?.body || '',
});
