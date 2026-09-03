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
- **AlphaRelay Copilot** / **Copilot app** — licensed Android or iOS app used to start controller-screen missions, publish live video, log field events, and support active missions; the Android APK is available from `download.html`
- **Choose Scenario** / **Start Mission** — current Android Copilot mission start. The setup screen includes operator, mission name, scenario, mission-specific AI targets, and capture-mode choices when applicable; starting creates an Internet mission and automatically starts remote live when validated internet is available. iOS presents the same fields directly on mission setup.
- **Local Network** — deployment-specific Android LAN relay path retained in the product but not presented as a mission-start button in the current public Copilot workflow.
- **Controller Screen Capture** — recommended capture path on Android drone controllers where the controller's native flight app keeps flight control and AlphaRelay captures the controller screen
- **Controller Livestream** — Android/iOS Copilot workflow that provides a complete RTMP URL or separate server/key values for a controller or flight app to publish directly; it requires internet and does not control the flight controller
- **HDMI Capture Card** — UVC workflow available through Android Copilot, USB-C iPad, or a laptop browser; recording stays associated with the mission while flight remains on the controller
- **Pilot mode** — direct AlphaRelay aircraft-control path offered on detected DJI SDK-controller setups only after the operator confirms a listed DJI MSDK 5.17 aircraft and AlphaRelay verifies its live connection
- **Goggles Mode** — DJI Avata and compatible DJI Goggles workflow on a separate Android phone or tablet; AlphaRelay captures DJI Fly, automatically starts an Internet mission with no scenario, and opens DJI Fly after screen-capture approval
- **Pilot console** — in-app settings panel (Mission, Flight, Events, System)
- **Mission Dashboard** — command home (`dashboard.html`)
- **Command Center** — default Mission Dashboard view with connection/refresh status, active missions, operational KPIs, attention queue, and latest automatic alerts
- **Mission Overwatch** / **Mission Console** — per-mission browser workspace (`mission-overwatch.html`; dashboard link says **Open Mission Console**); active missions use a full-screen command view with the live feed and an **Operations** drawer for tools and timeline activity
- **Mission Viewer** / **View Live Mission** / **Watch Live Mission** — active-mission viewer in licensed Android and iOS Copilot apps for remote live, timeline updates, and quick or manual event logging from a secondary device; Android viewer events use a received full-frame screenshot when video is available
- **Live Overwatch Screen** — relay connection panel in Mission Overwatch
- **Live stream (WebRTC)** — remote live viewing over the internet
- **AI live watch** — Mission Overwatch control that analyzes sampled remote-live frames and logs officer-review alerts when configured; it defaults on unless a saved mission choice disables it
- **Alert on people** — mission setting for optional informational person and hand-to-hand-contact alerts; weapons and explosives remain non-optional and highest priority
- **Scenario-specific AI targets** / **Mission-specific AI targets** — bounded visible details added to LiveAI's standard detections for an active mission
- **Device Live AI** — cloud-first live analysis from the Copilot device when internet is healthy, with automatic on-device person and possible-weapon fallback when cloud analysis is unavailable; Android also exposes the fallback controls in **Pilot console → Flight → Local AI**
- **Person detection** — informational/yellow alert treatment; this is not identity or face recognition
- **Possible weapon / urgent threat** — red alert treatment that still requires human review
- **Automatic AI-alert review** — an officer must **Approve alert** or **Dismiss alert** before a Device Live AI or AI live-watch screenshot can be analyzed or used in a report
- **Mission tools** — Quick Events, typed manual events, and browser **Dictate** under Mission Overwatch's **Operations → Tools** for active Internet missions
- **Timeline finding review** — accepted AI Review findings and analyzed AI-alert screenshots require **Accept as is** or **Review & edit** in the timeline before AAR use
- **Done — continue** — closed-mission action on Timeline, Media, and AI Review that records completion and advances to the next unfinished review step; Timeline removes remaining unaccepted AI candidates and AI Review rejects remaining undecided findings after confirmation
- **Official mission event** — a human-created event that has not been deleted, an approved automatic AI alert, or an accepted AI Review finding whose timeline analysis is officer-reviewed; use this set for counts, playback markers, reports, exports, and evidence-chain views
- **Quick events** — one-tap event buttons; agency scenarios can define up to seven, with the standard buttons used when the list is empty
- **AI Review analysis coverage** — **Event-focused** searches around accepted events by default; **Full mission — detailed** reviews the best-quality recording more broadly and takes longer
- **What should AI look for?** — operator-selected post-mission analysis tags; at least one is required before **Analyze media**
- **Mission scenarios** — Organization Settings editor for agency-specific scenarios, up to eight visible AI watch targets, and up to seven Quick Events
- **Activity Log** — read-only Organization Settings tab for server-attributed material actions
- **Import mission** — Mission History action for creating a closed post-flight record from external footage and photos
- **Import mission data…** — client-side workflow preview for inventorying large evidence and mapping packages; it does not upload or change files
- **Add optional recording** — Media action for MP4/MOV aircraft, goggles-screen, or other external recordings; AlphaRelay capture remains the mission timeline in Controller Screen Capture and Goggles Mode
- **Ask AI source** — the selected primary uploaded footage only; Ask AI excludes mission photos and event screenshots and prefers an aircraft original when available
- **Ask AI after approval** — remains available as a read-only question and saved-answer workflow after mission approval; timeline, evidence, media, AI Review findings, and report mutations remain locked
- **AAR Chain of Custody** — the explicit report evidence set sealed by **Seal entire mission**; included manual photos and videos are sealable, while excluded alert screenshots remain retained but unsealed
- **Export offline package…**, **Export evidence package (JSON)**
- **Rename** — available from Mission History and Mission Overwatch until the report is submitted for approval
- **AI** — configured report drafting, media review, screenshot analysis, and live-watch assistance

## Style

- Active voice, second person, sentence-case headings
- Bold UI labels; code formatting for paths, commands, and IP examples
- Keep pages short — link to Troubleshooting or Connectivity instead of repeating fixes
- Document operator-facing workflows only; do not invent unpublished behavior
