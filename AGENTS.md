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
- **Pilot app** — Android app on the pilot tablet, phone, or Android drone controller (`download.html`)
- **Internet** / **Local Network** — mission mode buttons in the pilot app. Use **Internet** when local LAN viewing is not required; use **Local Network** when Mission Overwatch must connect to the pilot device over the same Wi‑Fi.
- **Companion Capture Mode** — automatic pilot app mode on Android drone controllers where the controller's native flight app keeps flight control and AlphaRelay captures the controller screen
- **Pilot console** — in-app settings panel (Mission, Flight, Events, System)
- **Mission Dashboard** — command home (`dashboard.html`)
- **Mission Overwatch** / **Mission Console** — per-mission browser workspace (`mission-overwatch.html`; dashboard link says **Open Mission Console**)
- **Live Overwatch Screen** — relay connection panel in Mission Overwatch
- **Live stream (WebRTC)** — remote live viewing over the internet
- **AI live watch** — optional Mission Overwatch control that analyzes sampled remote-live frames and logs officer-review alerts when configured
- **Quick events**, **scenario template**, **Items Requiring Officer Review**
- **Import mission** — Mission History action for creating a closed post-flight record from external footage and photos
- **Export offline package…**, **Export evidence package (JSON)**
- **AI** — configured report drafting, media review, screenshot analysis, and live-watch assistance

## Style

- Active voice, second person, sentence-case headings
- Bold UI labels; code formatting for paths, commands, and IP examples
- Keep pages short — link to Troubleshooting or Connectivity instead of repeating fixes
- Document operator-facing workflows only; do not invent unpublished behavior
