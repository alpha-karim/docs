> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is AlphaRelay operator documentation built on [Mintlify](https://mintlify.com)
- Mission guide hub: `alpharelay/guide-overview.mdx` (chapters live as separate files under `alpharelay/`)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Run `mint dev` to preview locally (use an LTS Node.js version if the CLI warns about unsupported Node)
- Run `mint broken-links` to check links

## Terminology

- Use **AlphaRelay** as the product name
- Prefer **Mission Overwatch**, **Mission Console**, **pilot tablet**, **pilot app**, **relay**, **scenario template**, **quick events**, **Items Requiring Officer Review**, **Past Mission**, **offline package**, and **custody / chain of custody** as in the UI
- **Alpha AI**: the system that assists with after-action report generation

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Open in console**
- Code formatting for file names, commands, paths, code references, and IP examples

## Content boundaries

- Document operator-facing AlphaRelay workflows; avoid inventing unpublished product behavior
- Do not document internal-only admin consoles unless explicitly requested
