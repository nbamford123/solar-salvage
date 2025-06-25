# Solar Salvage

A science fiction webcomic built as a static site with Gatsby

**[Read the comic →](https://solar-salvage.com/)**

## Project Highlights
- **Design System**: Arwes UI framework for futuristic sci-fi aesthetic
- **Content Architecture**: Dual navigation system handling both pages and chapters
- **Type Safety**: Full TypeScript integration with generated GraphQL types
- **Community Features**: Disqus integration for reader commentary
- **Automated Deployment**: Git-based workflow (merge to main triggers Netlify deploy)

## Technical Stack
- **Framework**: Gatsby (static site generation)
- **UI**: Arwes design system
- **Content**: Markdown/MDX with frontmatter metadata

## Architecture Challenges Solved
- **Complex Navigation**: Built dual-layer navigation system for sequential comic reading (pages) and story organization (chapters)
- **Content Relationships**: GraphQL queries linking chapters, pages, and metadata
- **Type Generation**: Automated TypeScript types from GraphQL schema
- **Performance**: Static generation with optimized image handling

## Lessons Learned
It was fun working with GraphQL queries, but overkill for my needs at the end of the day. I plan to rebuild it in Astro in the long run

## Content
All comic images, metadata, and content stored in repository for version control and easy deployment triggers.
