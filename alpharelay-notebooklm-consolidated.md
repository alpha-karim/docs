# AlphaRelay — operator reference (single file)

Plain Markdown for tools like NotebookLM. **Canonical, navigable docs:** the Mintlify site built from `docs/alpharelay/*.mdx` and `index.mdx`. This file is a **compressed** mirror of the same facts, not a second source of truth.

**Links**

- Web: https://www.alpha-relay.com  
- Pilot APK: https://www.alpha-relay.com/download.html  

---

## What AlphaRelay is

AlphaRelay ties together the **Android pilot app** (DJI bridge), the browser **Mission Dashboard**, and **Mission Overwatch** (`mission-overwatch.html`) so teams can run missions, log structured events, sync footage and photos, review multi-angle video with the timeline, generate after-action reports (Alpha AI), seal custody evidence, route supervisor approval, and export an offline ZIP.

**Missions always start on the pilot device.** The dashboard opens focused Mission Overwatch with **Open in console**; Overwatch does not create missions.

---

## Main surfaces

| Surface | File / app | Role |
|--------|------------|------|
| Mission Dashboard | `dashboard.html` | After sign-in: active/closed missions, search, KPIs, report queues, executive summaries, **Open in console** |
| Mission Overwatch | `mission-overwatch.html` | One mission: relay or remote live feed, events, footage, photos, custody, reports, export |
| Organization | `org-management.html` | Team, roles, time zone, storage summary, **Pilot tablet/phone (Android bridge) license** keys / QR |
| Account | `account.html` | Password, email change request, full name, rank/title |
| Marketing / download | `index.html`, `download.html` | Public site and APK |
| Internal admin | `admin.html` | Platform ops only (separate admin schema/API) |

Pilot app name in UI strings: **AlphaRelay Pilot**.

---

## Pilot mission modes

From **Choose Mission Mode**:

- **Full relay** — LAN WebSocket/TLS relay (default ports `8787` ws / `8789` wss) plus MJPEG video so Mission Overwatch on the **same Wi‑Fi** can connect. Requires Wi‑Fi on the tablet per app rules.
- **Pilot only** — No assumption that a LAN overwatch session exists; remote reviewers use **Live stream (WebRTC)** in Mission Overwatch when the pilot starts **Remote live stream** (**Start remote live**) from the pilot console.

Optional **Scenario template** or **No scenario template**. Optional mission name.

**Stop Mission** ends relay and mission together (typical shutdown). **Close Mission** in Mission Overwatch can finalize from the browser when needed.

**License:** keys look like `ar-…`. Org admins issue QR Keys under Organization. In-app: **Pilot console → AlphaRelay license**, or long-press **Choose Mission Mode** for license settings. Validation uses `https://www.alpha-relay.com`; offline grace applies after a recent check.

---

## Mission Overwatch — Live Overwatch Screen

For **full relay**, the **Live Overwatch Screen** card connects to the tablet:

- **Tablet/phone IP (LAN)** — Often prefilled from cloud-synced mission metadata; Overwatch normalizes a bare IPv4 to `wss://…:8789`.
- **Relay token** — Optional shared token if your deployment enables bridge auth.
- **Connect** / **Scan LAN** — Fallbacks if auto-connect fails.
- Self-signed TLS: follow **Trust relay certificate** flow when prompted.

When the mission is **pilot only**, LAN relay UI is hidden; review still uses events, footage, and reports. Remote viewers use **Live stream (WebRTC)** when the pilot has started remote live.

Event logging in Overwatch: quick buttons plus **Manual Event (fast)**.

---

## Remote live stream — **Live stream (WebRTC)**

This path lets reviewers watch the **same live mission feed over the internet** without joining the pilot’s LAN (MJPEG/WebSocket relay). It complements—not replaces—structured logs, footage uploads, and the rest of the mission record.

### Operator-visible flow

1. **Pilot** opens **Pilot console → Remote live stream** and taps **Start remote live** when there is an **active mission** (pilot-only mission **or** a mission where Mission Overwatch is already connected to the relay—the app blocks starting remote live with no mission context).
2. The **AlphaRelay server** (Vercel function under `api/cloudflare/`) creates a **Cloudflare Stream live input** for that mission using platform credentials. The live ingest/play URLs are written into **mission metadata** (`cloudflareLive`) and sync like other mission fields.
3. The **pilot app publishes** video to Cloudflare using **WHIP** (WebRTC ingest). Operators do **not** paste publish URLs by hand.
4. **Mission Overwatch** picks up metadata after sync and exposes **Live stream (WebRTC)**. The browser plays the feed using **WHEP** (WebRTC playback) for **sub‑second latency** vs typical multi‑second HLS delay.

### LAN relay vs remote live at the same time

On **full relay** missions, Overwatch may have **both** the LAN **MJPEG** feed (via **Live Overwatch Screen** → relay connected) **and** a Cloudflare playback URL. When both exist, the UI lets the operator **pin** which source is shown (**relay / MJPEG** vs **cloud / WebRTC**); otherwise it prefers the LAN feed when the relay session has video.

For **pilot only** missions, the LAN relay panel stays hidden—remote reviewers rely on **Live stream (WebRTC)** once the pilot has started remote live.

### Requirements and limits

- **Internet** on the pilot device (to register the stream and publish) and on each viewer browser.
- **Server-side configuration**: Cloudflare Stream credentials must be set on the deployment that serves `/api/cloudflare/*`; without them, remote live setup fails at stream creation.
- **Browser**: WebRTC-capable browser for playback; autoplay may need a user gesture until video starts.
- **Stopping**: Pilot uses **Stop remote live** (terminates publishing); telemetry/events still follow normal relay/sync rules.

---

## Connectivity (two layers)

1. **LAN relay** — Pilot tablet and overwatch machine on same network for lowest-latency video/telemetry (full relay).
2. **Internet** — Sign-in, Postgres/Supabase sync, Storage uploads, playback URLs, org data. Local work can continue with queues flushing when online.

Mission Overwatch can install a **service worker / PWA** (**Install app**) so the **static shell** loads offline; cloud data still needs network + session.

---

## Footage and photos

- Pilot SD recording: app-managed around takeoff/land on supported workflows; manual DJI recording possible.
- Uploads may **defer**: pilot queues clips; overwatch may queue pilot-handoff files if the browser was offline during upload.
- **Mission Footage → Upload MP4** for manual browser upload from disk.
- **Mission photos** — timeline vs evidence-only; captions and placement affect reports and custody.

---

## Play with events

Closed missions: **Play with events** opens the timeline viewer (markers, screenshots, multi-angle tabs, **Adjust sync to primary**, **All angles**). **Tag event** captures the current frame into the mission log. After submit-for-approval, timeline edits lock until supervisor **Return to draft** or final **Approve report**.

---

## Reports, sealing, approval

1. **Generate Report** — Alpha AI from structured mission data.
2. **Edit executive summary** — Short header/dashboard summary without full regen.
3. Officer addresses **Items requiring officer review**.
4. **Mission chain of custody** — Download certificate; **Seal entire mission (verify downloads)** when ready.
5. **Submit for supervisor approval** / **Return to draft** / **Approve report** — Approval locks report and timeline permanently.

---

## Export offline package

From Mission Overwatch when the sticky header shows **Past mission:**, **Export offline package…** builds a ZIP (`index.html` viewer, `mission.json`, custody JSON/HTML, report HTML, `media/` when downloadable). Large exports: prefer Chrome/Edge. Local file video quirks: see README inside ZIP or use a tiny local HTTP server.

---

## Quick troubleshooting

| Symptom | Check |
|--------|--------|
| No live feed | Full relay? Same Wi‑Fi? Relay running? Prefilled IP stale → **Scan LAN** or pilot’s IPv4; trust TLS |
| Remote viewer off-LAN | Pilot **Start remote live**; Overwatch **Live stream (WebRTC)** |
| License fails | Internet or grace window; valid `ar-` key; seats not exhausted |
| Footage stuck | Online + signed in; **Upload now** on pilot; wait for playback URL |
| No timeline markers | Events exist? Primary footage linked? Secondary sync offset? |

---

## Glossary (short)

- **Mission Dashboard** — Signed-in home showing missions and intelligence search.
- **Mission Overwatch** — Focused mission console from **Open in console**.
- **Live Overwatch Screen** — Relay connection card for full relay.
- **Live stream (WebRTC)** — Internet viewer path: pilot **Start remote live** → Cloudflare Stream → browser **WHEP** playback in Mission Overwatch.
- **Primary footage** — Timeline reference clip; events map here first.
- **Sync offset** — Aligns a secondary angle to the primary timeline.
- **Alpha AI** — Report drafting from mission structure + evidence context.

---

_End of condensed reference. For step-by-step onboarding and screenshots-oriented prose, use the Mintlify pages under `docs/alpharelay/`._
