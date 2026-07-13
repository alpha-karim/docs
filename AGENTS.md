> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- AlphaRelay operator documentation built on [Mintlify](https://mintlify.com)
- Mission guide hub: `alpharelay/guide-overview.mdx`
- Pages are MDX with YAML frontmatter; navigation in `docs.json`
- Run `mint dev` to preview locally
- Run `mint broken-links` to check links
- After MDX changes, run `node scripts/generate-notebooklm-export.mjs` to refresh `notebooklm-export.md`

## Terminology (match the product UI)

- **AlphaRelay** — product name
- **Pilot app** — Android app on the pilot tablet or phone (`download.html`)
- **Field-device mission** / **Relay mission** — mission mode buttons in the pilot app
- **Companion Capture Mode** — automatic pilot app mode on supported DJI RC Plus 2 family controllers where DJI Pilot 2 keeps flight control and AlphaRelay captures the controller screen
- **Pilot console** — in-app settings panel (Mission, Flight, Events, System)
- **Mission Dashboard** — command home (`dashboard.html`)
- **Mission Overwatch** / **Mission Console** — per-mission browser workspace (`mission-overwatch.html`; dashboard link says **Open Mission Console**)
- **Live Overwatch Screen** — relay connection panel in Mission Overwatch
- **Live stream (WebRTC)** — remote live viewing over the internet (Cloudflare)
- **Quick events**, **scenario template**, **Items Requiring Officer Review**
- **Import mission** — Mission History action for creating a closed post-flight record from external footage and photos
- **Export offline package…**, **Export evidence package (JSON)**
- **Alpha AI** — after-action report drafting assistant

## Style

- Active voice, second person, sentence-case headings
- Bold UI labels; code formatting for paths, commands, and IP examples
- Keep pages short — link to Troubleshooting or Connectivity instead of repeating fixes
- Document operator-facing workflows only; do not invent unpublished behavior
