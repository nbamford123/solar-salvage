import { GatsbyImage } from 'gatsby-plugin-image';

//
// Widths for main elements page
//

// Comic width will be 900, make all of the pages this width + 2 x 8px padding
export const PRIMARY_CONTENT_WIDTH = 916;

// Maybe I'm making this too fixed, it could have auto lr margins like the header
// Grid cols have 2 x 10px horizontal padding
// 916 + 20 = 936
export const PRIMARY_COLUMN_WIDTH = PRIMARY_CONTENT_WIDTH + 16;

// Sidebar content is 300 width
export const SIDEBAR_CONTENT_WIDTH = 300;

// Total sidebar width + .5rem padding on each side, 1px border, and .5rem margin on each side
// sideBarContent + 16 + 2 + 16 = 334
// export const sidebarWidth = sidebarContentWidth + 16 + 2 + 16;

// The whole site on largest screen size
export const TOTAL_WIDTH = 1280;

// Header height
export const HEADER_HEIGHT = 200;

export type GatsbyFixedImage = {
  sharp?: { fixed?: GatsbyImage | GatsbyImage[] | undefined };
};

export interface PostMdx {
  frontmatter?: {
    title?: string | null;
    author?: string | null;
    date?: Date;
  } | null;
  fields?: {
    slug?: string | null;
  } | null;
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
  date: (mdx.frontmatter?.date && new Date(mdx.frontmatter.date)) || new Date(),
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
    chapter?: number | null;
    page?: number | null;
    posted?: Date;
    comic?: GatsbyFixedImage;
  } | null;
  fields?: {
    slug?: string | null;
  } | null;
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

export interface ArwesTheme {
  color: { control: { base: string | number; light: string } };
  shadowLength: number;
  alpha: number | undefined;
  animTime: number;
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
