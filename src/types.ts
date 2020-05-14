import { FixedObject } from 'gatsby-image';

export type GatsbyFixedImage = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  sharp?: { fixed?: FixedObject | FixedObject[] };
};

export interface PostMdx {
  frontmatter?: {
    title: string;
    author: string;
    date: Date;
  };
  body: string;
}

export interface Post {
  title: string;
  author: string;
  date: Date;
  body: string;
}

export const makePost = (mdx: PostMdx): Post => ({
  title: mdx.frontmatter?.title || '',
  author: mdx.frontmatter?.author || '',
  date: mdx.frontmatter?.date || new Date(),
  body: mdx?.body || '',
});

export interface Comic {
  chapter: number;
  page: number;
  posted?: Date;
  comic: GatsbyFixedImage;
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

export interface ChapterMdx {
  chapter?: number | null;
  synopsis?: string | null;
  title?: string | null;
  thumb?: GatsbyFixedImage;
  writtenBy?: string | null;
}

export interface ChapterSummary {
  chapter: number;
  pages: number;
  synopsis: string;
  title: string;
  thumb: GatsbyFixedImage;
  writtenBy: string;
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
