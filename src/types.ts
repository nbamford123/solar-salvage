import { FixedObject } from 'gatsby-image';

//
// Widths for main elements page
//

// Comic width will be 900, make all of the pages this width
export const pageContentWidth = 900;

// Comic image plus .5 rem on each side
// 900 + 16 = 918
export const pageWidth = pageContentWidth + 16;

// Sidebar content is 300 width
export const sidebarContentWidth = 300;

// Total sidebar width + .5rem padding on each side, 1px border, and .5rem margin on each side
// sideBarContent + 16 + 2 + 16 = 334
export const sidebarWidth = sidebarContentWidth + 16 + 2 + 16;

// The whole site
export const totalWidth = pageWidth + sidebarWidth;

// Header height
export const headerHeight = 200;

export type GatsbyFixedImage = {
  sharp?: { fixed?: FixedObject | FixedObject[] | undefined };
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
