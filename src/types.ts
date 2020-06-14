import { FixedObject } from 'gatsby-image';

//
// Widths for main elements page
//

// Comic width will be 700, make all of the pages this width
export const pageContentWidth = 700;

// Comic image plus .5 rem x padding
// 700 + 18 = 718
export const pageWidth = 718;

// Sidebar content is 300 width
export const sidebarContentWidth = 300;

// Total sidebar width .5rem padding, 1px border, and .5rem margin
// sideBarContent + 18 + 2 + 18 = 340
export const sidebarWidth = 338;

// The whole site
export const totalWidth = pageWidth + sidebarWidth;

// Header height
export const headerHeight = 200;

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
  fields?: {
    slug: string;
  };
  body: string;
}

export interface Post {
  title: string;
  author: string;
  date: Date;
  body: string;
  slug: string;
}

export const makePost = (mdx: PostMdx): Post => ({
  title: mdx.frontmatter?.title || '',
  author: mdx.frontmatter?.author || '',
  date: mdx.frontmatter?.date || new Date(),
  body: mdx?.body || '',
  slug: mdx?.fields?.slug || '',
});

export interface Comic {
  chapter: number;
  page: number;
  posted?: Date;
  comic: GatsbyFixedImage;
  note: string;
  slug: string;
}

export interface ComicMdx {
  frontmatter?: {
    chapter?: number;
    page?: number;
    posted?: Date;
    comic?: GatsbyFixedImage;
  } | null;
  fields?: {
    slug?: string;
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
  slug: mdx?.fields?.slug || '',
});
