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
- **Choose Mission Mode** / **Start Mission** — current pilot-app mission start. It creates an Internet mission and automatically starts remote live when validated internet is available.
- **Local Network** — deployment-specific LAN relay path retained in the product but not presented as a mission-start button in the current public Pilot app.
- **Controller Screen Capture** — recommended capture path on Android drone controllers where the controller's native flight app keeps flight control and AlphaRelay captures the controller screen
- **Pilot mode** — direct AlphaRelay aircraft-control path offered on detected DJI SDK-controller setups only after the operator confirms a listed DJI MSDK 5.17 aircraft and AlphaRelay verifies its live connection
- **Goggles Mode** — Avata 2 / Goggles 3 workflow on a separate Android phone or tablet; AlphaRelay captures DJI Fly, automatically starts an Internet mission with no scenario, and opens DJI Fly after screen-capture approval
- **Pilot console** — in-app settings panel (Mission, Flight, Events, System)
- **Mission Dashboard** — command home (`dashboard.html`)
- **Mission Overwatch** / **Mission Console** — per-mission browser workspace (`mission-overwatch.html`; dashboard link says **Open Mission Console**)
- **Live Overwatch Screen** — relay connection panel in Mission Overwatch
- **Live stream (WebRTC)** — remote live viewing over the internet
- **AI live watch** — Mission Overwatch control that analyzes sampled remote-live frames and logs officer-review alerts when configured; it defaults on unless a saved mission choice disables it
- **Mission tools** — quick events, typed manual events, and browser **Dictate** for active Internet missions
- **Timeline finding review** — accepted AI Review findings and analyzed AI-alert screenshots require **Accept as is** or **Review & edit** in the timeline before AAR use
- **Quick events**, **scenario template**, **Items Requiring Officer Review**
- **Import mission** — Mission History action for creating a closed post-flight record from external footage and photos
- **Export offline package…**, **Export evidence package (JSON)**
- **AI** — configured report drafting, media review, screenshot analysis, and live-watch assistance

## Style

- Active voice, second person, sentence-case headings
- Bold UI labels; code formatting for paths, commands, and IP examples
- Keep pages short — link to Troubleshooting or Connectivity instead of repeating fixes
- Document operator-facing workflows only; do not invent unpublished behavior
