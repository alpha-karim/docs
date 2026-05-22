# AlphaRelay Operator Documentation — NotebookLM Export

Generated on 2026-05-22 by `scripts/generate-notebooklm-export.mjs`.

**Web app:** https://www.alpha-relay.com
**Pilot app (APK):** https://www.alpha-relay.com/download.html

---

## Terminology (match the product UI)

- **AlphaRelay** — product name
- **Pilot app** — Android app on the pilot tablet or phone (`download.html`)
- **Field-device mission** / **Relay mission** — mission mode buttons in the pilot app
- **Pilot console** — in-app settings panel (Mission, Flight, Events, System)
- **Mission Dashboard** — command home (`dashboard.html`)
- **Mission Overwatch** / **Mission Console** — per-mission browser workspace (`mission-overwatch.html`; dashboard link says **Open Mission Console**)
- **Live Overwatch Screen** — relay connection panel in Mission Overwatch
- **Live stream (WebRTC)** — remote live viewing over the internet (Cloudflare)
- **Quick events**, **scenario template**, **Items Requiring Officer Review**
- **Import mission** — Mission History action for creating a closed post-flight record from external footage and photos
- **Export offline package…**, **Export evidence package (JSON)**
- **Alpha AI** — after-action report drafting assistant

---

## AlphaRelay Training Guide

AlphaRelay turns a field mission into a reviewable record: events, footage, after-action report, custody evidence, and export.

## Five-step workflow

1. **Set up devices** — Install the pilot app, activate the device license, and sign in to the web app.
2. **Start a mission** — Choose **Field-device mission** or **Relay mission** in the pilot app.
3. **Watch and log events** — Use Mission Overwatch for relay viewing, remote live, and command-side event logging.
4. **Review the mission** — Upload or sync footage, then review with **Play with Events**.
5. **Finalize the record** — Generate the report, seal evidence, get supervisor approval, and export when ready.

## Start here

- **New users:** AlphaRelay in plain English.
- **Pilots:** Start a mission from the pilot app.
- **Overwatch users:** Watch and log in Mission Overwatch.
- **Reviewers:** Import or review footage and generate a report.
- **Admins:** Accounts and organizations.
- **Troubleshooting:** Common fixes.
- **Ask the docs:** Chat with NotebookLM about AlphaRelay (Google sign-in required).

**Note:** **Ask the docs** opens AlphaRelay’s NotebookLM chat in a new tab. You need a Google account and access to the shared notebook. Answers are AI-generated from the documentation — verify against the guides here for operational use.

## Links

- **Web app:** [alpha-relay.com](https://www.alpha-relay.com)
- **Pilot app (APK):** [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html)
- **Ask the docs (NotebookLM):** [Chat with the documentation](https://notebooklm.google.com/notebook/d83a28f5-b26c-4908-8d5f-2c7fdfda2603)

---

## AlphaRelay in Plain English

AlphaRelay helps teams run drone or field missions and produce a defensible record afterward.

The **pilot app** on an Android tablet or phone runs the mission, captures footage, and logs events. **Mission Overwatch** in a browser is where command staff watch live feeds, add events, review footage, build after-action reports, seal evidence, and export packages. The **Mission Dashboard** is the command home for finding missions and supervisor review queues.

## Basic flow

1. Start a live mission from the pilot app.
2. Watch live in Mission Overwatch when using relay viewing or remote live.
3. End the mission when field work is complete.
4. Upload and review footage.
5. Generate the after-action report, seal evidence, and export.

## Two mission modes

| Mode | When to use |
| --- | --- |
| **Field-device mission** | One pilot captures the mission; local relay viewing is not required. Works on cellular. |
| **Relay mission** | Mission Overwatch connects to the pilot device over the same Wi‑Fi for live viewing and command-side logging. Requires Wi‑Fi. |

Both modes can start **Live stream (WebRTC)** when the pilot device has internet and remote live is enabled from the pilot app.

Live missions start from the pilot app — not from the browser. For work that already happened outside AlphaRelay, **Import mission** in **Mission History** creates a closed post-flight record for review and reporting.

---

## The 5-Step Mission Workflow

Use this page as the full lifecycle map. Each step links to a deeper guide.

## 1. Set up devices

Install the pilot app, activate the device license, sign in to the web app, and open Mission Overwatch once while online on each browser profile that will use it in the field.

→ Devices and licenses · Before you go to the field

## 2. Start a mission

Open the pilot app, tap **Choose Mission Mode**, name the mission, pick a scenario template (or **No scenario template**), then choose **Field-device mission** or **Relay mission**.

→ Start a mission · Field-device vs relay mission

## 3. Watch and log events

For **Relay mission**, connect Mission Overwatch through **Live Overwatch Screen**. For remote viewers, use **Live stream (WebRTC)** after the pilot starts live from the app. Log quick events from the pilot app or Mission Overwatch.

→ Watch in Mission Overwatch · Log events

## 4. Review the mission

End the mission, let footage upload or queue, then open **Play with Events** to check markers against video. For work captured outside AlphaRelay, use **Import mission** from **Mission History** to create a closed post-flight record first.

→ End a mission · Import a mission · Upload footage · Review footage

## 5. Finalize the record

Generate the after-action report with Alpha AI, resolve **Items Requiring Officer Review**, seal custody evidence, submit for supervisor approval, and export when the record is complete.

→ Generate a report · Seal the mission record · Export offline package

**Warning:** Sealing evidence and supervisor approval are separate steps. Sealing preserves custody hashes; approval locks the report and timeline.

---

## Devices and Roles

| Role | Device | Responsibility |
| --- | --- | --- |
| Pilot | Pilot app (Android tablet/phone) | Starts missions, flies, logs field events, ends mission, uploads footage |
| Overwatch user | Browser — Mission Overwatch | Relay viewing, remote live, command-side events, review, report, seal, export |
| Reviewer / officer | Browser — Mission Overwatch | Checks timeline, footage, report draft, and custody |
| Supervisor | Browser — Mission Dashboard / Overwatch | Approves or returns after-action reports |
| Org admin | Browser — Organization page | Members, roles, licenses, time zone, storage |

## Key rules

- Missions **always start from the pilot app**, not Mission Overwatch.
- Open missions from **Mission Dashboard** (link may say **Open Mission Console**).
- **Relay mission** needs the pilot device and Overwatch device on the same reachable Wi‑Fi.
- **Field-device mission** does not show the LAN relay panel in Mission Overwatch during the live mission.

---

## Field-Device vs Relay Mission

In the pilot app, tap **Choose Mission Mode** and pick one of two buttons:

## Field-device mission

Use when one pilot captures the mission and local relay viewing is not needed.

- Available on **cellular or Wi‑Fi**
- Mission Overwatch is used mainly **after** the mission for review, reporting, and export
- Remote live still works when the pilot starts **Live stream (WebRTC)** from the app

Best for: solo operations, offline field work, missions reviewed later.

## Relay mission

Use when Mission Overwatch must connect to the pilot device **during** the mission over the local network.

- Requires **Wi‑Fi** on the pilot device (not cellular-only)
- Shows **Live Overwatch Screen** in Mission Overwatch for LAN video, telemetry, and command-side logging
- Remote live can run at the same time when configured

Best for: command-side viewing, live event logging from the browser, team monitoring from a local overwatch position.

## Quick decision

| Situation | Choose |
| --- | --- |
| One pilot, review later | Field-device mission |
| Command staff watch live on same Wi‑Fi | Relay mission |
| Remote viewers over internet | Either mode + **Live stream (WebRTC)** from pilot app |
| No Wi‑Fi at all | Field-device mission; sync when internet returns |

**Note:** Both modes can live stream over the internet. The difference is whether Mission Overwatch also needs the **local relay** connection during the mission.

See Connectivity for what requires internet vs local Wi‑Fi.

---

## First Training Mission

Run a short test mission to learn the workflow end to end.

## Steps

1. Choose **Field-device mission** or **Relay mission** in the pilot app.
2. Name the mission `Training mission` and pick a scenario template or **No scenario template**.
3. Start the mission.
4. If using **Relay mission**, open the mission from Mission Dashboard and connect **Live Overwatch Screen**.
5. Add one event from the pilot app (quick event button or voice: `relay `).
6. Add one event from Mission Overwatch if using relay or remote live.
7. Run a short, safe exercise.
8. Tap **Stop Mission** on the pilot device.
9. Confirm footage uploaded or is queued (see upload banner / status).
10. Open **Play with Events** and confirm markers appear.
11. Generate the after-action report and walk through seal / approval / export if your workflow uses them.

## Debrief

- Was the right mission mode chosen?
- Did events appear on the timeline?
- Was footage available or queued as expected?
- Was the report understandable before submission?

Repeat this exercise when devices, networks, or aircraft change.

---

## Before You Go to the Field

## Checklist

1. Charge the pilot tablet or phone and confirm aircraft/controller are ready.
2. Install or update the **pilot app** from [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html).
3. Confirm the **device license** is active (scan QR or enter `ar-…` key).
4. Sign in to the web app with the correct operator account.
5. Open **Mission Overwatch** once while online on each browser that will use it in the field (installs the offline app shell).
6. Choose **Field-device mission** or **Relay mission** before launch.
7. For **Relay mission**: confirm pilot device and Overwatch computer are on the **same Wi‑Fi**.
8. Plan for internet when you need sync, upload, reports, or export.
9. Assign pilot, overwatch user, reviewer, and supervisor roles.

## Connection quick reference

| Need | Requirement |
| --- | --- |
| Relay mission live viewing | Same reachable Wi‑Fi between pilot device and Overwatch |
| Remote live (**Live stream (WebRTC)**) | Pilot device has internet; pilot starts live from app |
| Cloud sync / upload / reports | Internet on the active device |
| Field work with no internet | Supported; data queues until sync |

**Warning:** Internet and local relay connectivity are different. Relay mission viewing does not require internet, but it does require local Wi‑Fi reachability.

Pilots can hide on-screen drone controls and use the physical controller while keeping quick events and relay status visible. See Minimum requirements for device specs.

---

## Start a Mission

Missions always start from the **pilot app**. Mission Overwatch cannot start missions.

## Steps (both modes)

1. Open the pilot app on the Android tablet or phone.
2. Tap **Choose Mission Mode**.
3. Enter a mission name if useful.
4. Select a scenario category and template, or **No scenario template**.
5. Tap **Field-device mission** or **Relay mission**.
6. Complete the license check if prompted.
7. Fly the mission from the pilot view. Use **Takeoff**, **Land**, quick events, and **Stop Mission** when finished.

## Field-device mission

- Works on **cellular or Wi‑Fi**
- No **Live Overwatch Screen** during the live mission
- Review, reporting, and export happen in Mission Overwatch after sync

Optional: start **Live stream (WebRTC)** from the pilot app so remote Overwatch users can watch over the internet.

## Relay mission

- Requires **Wi‑Fi** on the pilot device
- Starts the LAN relay for Mission Overwatch
- After the mission syncs to Mission Dashboard, open the mission and use **Live Overwatch Screen**:
  1. Leave **Tablet/phone IP (LAN)** blank and click **Connect** to scan, or enter the IPv4 shown on the pilot device.
  2. Add **Relay token** if the relay uses one.
  3. Trust the self-signed relay certificate if the browser prompts.

Mission Overwatch uses `wss://` on port **8789** automatically when you enter a LAN IP.

## After start

- The mission appears in **Mission Dashboard** after cloud sync.
- Footage and events may upload during or after the mission depending on connectivity.
- Tap **Stop Mission** in the pilot app (or **Close Mission** in Mission Overwatch) when field work is done.

→ Watch in Mission Overwatch · Connectivity

---

## Watch in Mission Overwatch

Mission Overwatch is the per-mission browser workspace. Open it from **Mission Dashboard** by selecting a mission (the dashboard may label this **Open Mission Console**).

Sign in at [alpha-relay.com](https://www.alpha-relay.com). For LAN-only field use, the dashboard can open Mission Overwatch in offline-ready mode when internet is unavailable.

## Relay mission — Live Overwatch Screen

Shown only for **Relay mission** (hidden for field-device missions).

1. Confirm the pilot app relay is running and both devices share the same Wi‑Fi.
2. In **Live Overwatch Screen**, leave **Tablet/phone IP (LAN)** blank and click **Connect** to scan, or enter the pilot device IPv4.
3. Enter **Relay token** if required.
4. If connection fails on HTTPS, use **Trust relay certificate** and proceed through the browser warning, then retry.

You get LAN MJPEG video, telemetry, and command-side event logging with lowest latency.

## Remote live — Live stream (WebRTC)

When the pilot starts live from the app, Overwatch users on the internet can click **Live stream (WebRTC)**. This uses Cloudflare WebRTC (WHEP) — sub-second latency over the public internet, separate from the LAN relay.

Works with either mission mode when the pilot device has internet.

## Closed missions

After **Stop Mission**, Mission Overwatch switches to review tabs: footage timeline, **Play with Events**, after-action report, chain of custody, and export actions.

## Offline app shell

Mission Overwatch installs a service worker on first online visit. You can also use **Install app** for a PWA shell. The shell helps the page reopen offline, but sign-in, sync, uploads, and playback links still need network access.

---

## Log Events

Events are timestamped notes on the mission timeline. Keep them short and specific.

## During the mission

**Pilot app**

- Tap **quick event** buttons or the quick event wheel (phone layouts)
- Enter manual event notes
- Voice relay: say `relay` followed by the event details (e.g. `relay suspect entered north door`)
- Optional **Local AI** auto-tags (e.g. person detected) — review these before treating them as facts

**Mission Overwatch**

- Use **Event Logging** quick buttons (match the scenario template labels)
- Use **Manual Event (fast)** for free-text notes
- Quick buttons hide while the relay is live if labels match the pilot device

Screenshots from the live feed are captured automatically when the workflow supports them.

## After the mission

1. Open **Play with Events**.
2. Scrub to the relevant frame.
3. Enter an **Event name** and click **Tag event**.

AlphaRelay adds the event to the mission log, stores a screenshot from that frame, and links it to the timeline.

Resolve event timing against footage before generating the final report.

---

## End a Mission

## Steps

1. Tap **Land** on the pilot device when appropriate.
2. Follow normal landing and safety procedures.
3. Tap **Stop Mission** in the pilot app when field work is complete.
4. Optionally tap **Close Mission** from the **Mission** card in Mission Overwatch.
5. Keep the pilot app or browser open while upload or queue messages finish.

## What happens

- The relay session ends with the mission.
- SD recording stops after a successful land when supported.
- Footage may upload immediately or queue for later sync.
- Review should wait until footage status is clear.

**Warning:** Do not force-close the pilot app or browser while footage is uploading or queued.

→ Upload footage

---

## Import a Mission

Use **Import mission** when work happened outside AlphaRelay but still needs the Mission Overwatch review, report, custody, and export workflow.

Imported missions are created as closed, post-flight records. They do not replace live AlphaRelay mission start, relay viewing, or pilot-side event capture.

## Before you import

- Sign in to AlphaRelay while online.
- Confirm your account belongs to an organization.
- Put the primary MP4 first if you are uploading multiple footage files; the first video becomes the reference footage.
- Keep the browser open until the upload status finishes.

## Steps

1. Open **Mission Dashboard**.
2. Go to **Mission History**.
3. Click **Import mission**.
4. Enter the **Mission name**.
5. Add **Mission started**, **Mission ended**, **Pilot / operator**, and **Mission notes** when known.
6. Select any **Mission footage** MP4 files that should be uploaded.
7. Select any **Photos** that should be stored with the mission.
8. Click **Create post-flight mission**.

AlphaRelay creates the completed mission record, uploads selected footage and photos, then opens Mission Overwatch on the **Media** tab.

## After import

- Use **Upload MP4** or **Upload Photos** on the **Media** tab if an upload was skipped or needs to be retried.
- Open **Play with Events** to review the imported footage.
- Tag missing moments from the footage before submitting the report.
- Generate the after-action report, seal evidence, submit for approval, and export when the record is complete.

Imported photos are added as evidence-only mission photos. They are not automatically attached to timeline events.

**Warning:** If the import reports an upload issue after creating the mission, stay on the opened **Media** tab and finish the missing uploads there.

→ Upload footage · Review footage · Generate a report

---

## Upload Footage

Footage often uploads **after** the mission when the pilot device or Overwatch browser regains internet. Queued uploads are normal, not errors.

## Automatic upload

After **Stop Mission**, the pilot app attempts to upload recorded footage when online. If the pilot hands video to Mission Overwatch over the LAN relay, the **browser** needs internet to upload immediately — otherwise it queues locally.

Watch for upload banners, **Upload now**, or **Loading playback link** status in Mission Overwatch.

## Manual MP4 upload

When auto upload is impractical:

1. Copy the mission MP4 from the aircraft SD card or computer.
2. Open the closed mission in Mission Overwatch.
3. Go to **Mission Footage** → **Upload MP4**.
4. Select the correct file.

Tap **Skip** during auto upload if you plan to upload manually later.

## Import external mission footage

If the mission did not start in AlphaRelay, use **Mission Dashboard** → **Mission History** → **Import mission**. The import flow creates a closed mission record, uploads selected MP4 footage and photos, then opens Mission Overwatch on the **Media** tab.

Use the normal **Upload MP4** and **Upload Photos** controls afterward if any media needs to be added or retried.

## Mission photos

Use **Mission photos** / **Upload Photos** to add timeline photos or evidence-only photos with caption, category, and notes.

**Warning:** Keep the app or browser open until upload or queue processing finishes.

→ Import a mission · Review footage · Troubleshooting

---

## Review Footage

Open a closed mission from **Mission Dashboard**, then go to **Mission Footage**.

## Play with Events

1. Confirm the primary clip is loaded (wait for **Loading playback link** to finish).
2. Click **Play with Events**.
3. Scrub through footage and compare event markers, screenshots, and timeline photos.
4. Use angle tabs or **All angles** for multi-camera review.
5. For secondary clips, use **Adjust sync to primary** if timing is off.

## Tag from footage

After the mission is closed:

1. Open **Play with Events** on the clearest angle.
2. Scrub to the frame.
3. Enter an event name and click **Tag event**.

## Locks

Once a report is submitted for approval or approved, timeline events and photos are locked. Tag missing moments before submission.

→ Generate a report

---

## Generate a Report

Alpha AI drafts the after-action report from mission events, footage references, photos, and custody data. A human must verify everything before submission.

**Warning:** Alpha AI output is draft material — not final authority.

## Steps

1. Open the closed mission and review timeline, footage, and photos.
2. Scroll to **After-Action Report** and click **Generate Report**.
3. Resolve **Items Requiring Officer Review**.
4. Edit the narrative or use **Edit executive summary** for the dashboard header summary.
5. Click **Submit for supervisor approval** when ready.

## Supervisor actions

Supervisors (often org admins) can **Approve** or **Return to draft**. Once approved:

- The report cannot be regenerated or edited
- Timeline events and photos stay locked

Supervisor and operator inboxes live on **Mission Dashboard** under Reports & Reviews.

## Email notifications

When configured, AlphaRelay sends email on report workflow events (submit, approve, return).

→ Seal the mission record

---

## Seal the Mission Record

Sealing locks reviewed custody evidence and hashes. It is **separate** from supervisor report approval.

**Warning:** Sealing ≠ approving the report. Sealing preserves custody hashes. Approval locks the after-action report and timeline.

## When to seal

After footage, events, photos, and the report draft have been reviewed and **Items Requiring Officer Review** are resolved.

## Steps

1. Open the closed mission.
2. Confirm footage plays and **Play with Events** markers look correct.
3. Open **Mission chain of custody**.
4. Click **Seal entire mission (verify downloads)** when ready.
5. Optionally download **Download mission custody certificate (HTML)**.

Sealing verifies downloaded bytes against stored hashes and locks registered evidence rows in the custody ledger.

## Export evidence package (JSON)

For a machine-readable, court-ready bundle with cryptographic chain verification:

1. Open **Mission chain of custody**.
2. Click **Export evidence package (JSON)** on an evidence item.

Use this when your agency needs JSON rather than (or in addition to) the HTML custody certificate or offline ZIP.

→ Export offline package · Generate a report

---

## Export the Offline Package

The offline package is a point-in-time ZIP of the mission record for handoff, command review, or retention.

## Steps

1. Open the closed, reviewed mission in Mission Overwatch.
2. Click **Export offline package…**
3. Save the ZIP and wait for packaging to finish (large missions take longer).
4. Unzip and open `index.html` from the extracted folder — keep files inside the folder.

## Contents

When available at export time:

- Mission record and timeline
- After-action report HTML
- Chain-of-custody data and frozen custody certificate
- Footage, event screenshots, and mission photos under `media/`
- Built-in offline viewer

## Tips

- Export needs internet to download mission data and media at export time.
- Chrome or Edge is recommended for very large packages.
- The ZIP reflects mission state at export time — it is not a live sync replacement.

For JSON evidence export, use **Export evidence package (JSON)** in chain of custody instead.

---

## Accounts and Organizations

## Mission Dashboard

Command home at [alpha-relay.com/dashboard.html](https://www.alpha-relay.com/dashboard.html):

- Active mission roster and KPIs
- Mission history with search and filters
- **Import mission** for creating a closed post-flight record from external footage and photos
- Intelligence search across missions, events, and footage
- Supervisor inbox (pending approval) and operator returned-to-draft inbox
- Analytics

Select a mission to open **Mission Overwatch** (dashboard link: **Open Mission Console**).

→ Import a mission

## Account

Set full name, rank/title, password, and email change requests. Names appear on mission attribution.

## Organization

Owners and admins manage:

- Team members, roles, and status
- Organization time zone
- Storage visibility
- Pilot device license keys and QR codes for the pilot app

Only owners and admins can open **Organization**.

→ Devices and licenses

---

## Devices and Licenses

## Web sign-in

1. Go to [alpha-relay.com](https://www.alpha-relay.com) and sign in.
2. Open **Mission Overwatch** once while online on each browser profile used in the field.

## Pilot app setup

1. Download the APK from [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html).
2. Install and open **AlphaRelay Pilot**.
3. Grant requested permissions.
4. Complete the **First-Time Guide** on first launch.

## Device license

The pilot app uses an org license key — not a Supabase login.

1. In **Organization**, copy the license key or scan the QR code (opens `alpharelay://license?key=…`).
2. Enter or scan the key when the pilot app prompts.
3. Update later from **Pilot console → System → AlphaRelay license**, or long-press **Choose Mission Mode**.

The app validates against AlphaRelay and keeps a **10-day offline grace** after the last successful check. Connect to the internet before starting if the grace window expired.

Keys are issued by org admins from **Organization** or internal admin tools.

→ Before you go to the field

---

## Security, Privacy, and AI

## What runs locally

- **Pilot app**: flight controls, quick events, LAN relay, optional Local AI detection, voice relay
- **Mission Overwatch PWA shell**: page cache after first online visit (sign-in and sync still need network)

## What syncs to the cloud

When internet is available: mission metadata, events, screenshots, photos, footage references, reports, custody records, and org data — protected by sign-in and database access rules.

## Alpha AI

Drafts after-action report content from structured mission data. Always review:

- Timeline accuracy
- Footage and photo references
- **Items Requiring Officer Review**

Treat AI output as draft material.

## Custody and approval

| Action | Effect |
| --- | --- |
| **Seal entire mission** | Locks custody evidence hashes |
| **Supervisor approval** | Locks the report, timeline events, and photos |
| **Export offline package…** / **Export evidence package (JSON)** | Point-in-time copies for retention or handoff |

Do not share exports before sync and review are complete.

---

## Minimum Requirements

## Pilot device (Android tablet or phone)

- Supported Android version for the installed pilot app
- Reliable Wi‑Fi for **Relay mission**
- Enough CPU, memory, battery, and storage for live video, telemetry, event logging, and optional Local AI
- DJI Mini 3 Pro workflow when using aircraft integration (see pilot app setup)

## Overwatch / review (desktop browser)

- Current Chrome, Edge, or Safari for Mission Overwatch, dashboard, and export
- Internet for sync, upload, reports, and export media downloads

## By workflow

| Workflow | Requirement |
| --- | --- |
| Relay mission LAN viewing | Pilot device + Overwatch on same reachable Wi‑Fi |
| Field-device mission | Cellular or Wi‑Fi on pilot device |
| **Live stream (WebRTC)** | Pilot device internet; live started from pilot app |
| Cloud sync / upload | Internet + signed-in session |
| Offline package export | Internet at export time to download media |

Permissions: grant camera, microphone (voice relay), storage, and location prompts from the pilot app as requested.

Run a training mission on the same device class before operational use.

---

## Troubleshooting

## Mission Overwatch cannot connect (Relay mission)

1. Confirm **Relay mission** is running on the pilot app (not field-device mission).
2. Both devices on the **same Wi‑Fi** — not guest/isolated networks.
3. Wait for the mission to appear in Mission Dashboard after sync.
4. In **Live Overwatch Screen**, click **Connect** with IP blank to scan, or enter the pilot device IPv4.
5. Trust the relay certificate if prompted (**Trust relay certificate** → browser Advanced/Proceed → retry).

## Cloud sync delayed

1. Confirm you are signed in.
2. Move to internet and keep the app or browser open until queued work finishes.
3. Do not refresh during pending sync.

## Footage queued or not playing

1. Keep pilot app or browser open on internet.
2. Tap **Upload now** if shown.
3. Wait for **Loading playback link** to clear in Mission Overwatch.
4. For manual upload: confirm signed in, online, correct MP4, no other upload running.

Manual browser uploads do **not** queue before starting — retry when online.

## Play with Events has no markers

- Confirm events exist and the correct primary clip is selected.
- Mission must be closed with footage linked.
- Secondary angles may need **Adjust sync to primary**.

## Local AI not tagging

Open **Pilot console → Mission → Local AI**, confirm detection is enabled, and the on-device model is present. Local AI requires the relay to be running. Review auto-tags before treating them as operational facts.

## Report actions blocked

Check mission state and your role. Submitted or approved reports lock timeline edits. Approved reports cannot be regenerated.

## Offline package video won't play

Open `index.html` from inside the extracted folder without moving files out. Use Chrome or Edge for large packages.

→ Connectivity · Known limitations

---

## Connectivity

AlphaRelay uses **three separate paths**. Losing one does not always stop the mission.

```text
Pilot app
  |-- LAN relay (Relay mission) → Mission Overwatch on same Wi‑Fi
  |-- Live stream (WebRTC) → Remote Overwatch over internet
  `-- Cloud sync → Events, footage, reports, evidence
```

## Without internet

- **Field-device mission** or **Relay mission** local work (relay needs Wi‑Fi, not internet)
- Event logging and LAN screenshots
- Queued footage and deferred sync
- Pilot license within the 10-day offline grace window

## Needs internet

- Sign-in and mission sync
- Footage and photo upload
- Playback links
- **Live stream (WebRTC)** setup and viewing
- Report generation and supervisor workflow
- Offline package and evidence JSON export downloads

## Relay mission connection

1. Pilot app running **Relay mission** on Wi‑Fi.
2. Open mission from Mission Dashboard.
3. **Live Overwatch Screen** → **Connect** (scan or enter pilot device IP).
4. Trust self-signed certificate on HTTPS if needed.

Mission Overwatch auto-fills the pilot IP from synced mission metadata when available.

## Queued states

**Queued for cloud sync**, **Loading playback link**, or upload banners mean local data still needs to reach the cloud. Stay signed in, keep the app open, move to internet, and use **Upload now** when offered.

**Warning:** Internet ≠ local relay. Relay mission viewing needs same-network reachability, not cloud access.

## PWA / offline shell

Mission Overwatch caches its shell after an online visit. Cloud sign-in, sync, uploads, and playback still require network access.

---

## Known Limitations

## Network

- **Relay mission** LAN viewing requires same reachable Wi‑Fi — not cellular-only on the pilot device.
- **Live stream (WebRTC)** requires internet on the pilot device.
- Cloud sync, upload, and export wait for internet.
- Losing relay, remote live, or cloud sync does not always end the mission — paths are independent.

## Media

- Footage often uploads after the mission ends.
- Queued pilot-handoff footage must finish before final review.
- Manual browser MP4 upload requires internet before upload starts (no pre-queue).
- **Import mission** requires a signed-in, online browser and creates a closed post-flight record only.
- Offline packages only include media available at export time.

## AI

- **Local AI** depends on device, model file, and configuration — review auto-tags before relying on them.
- **Alpha AI** report drafts require officer review; resolve **Items Requiring Officer Review** before finalization.

## Workflow locks

- Supervisor approval makes the report permanent and locks timeline events and photos.
- Evidence sealing preserves custody hashes — it is not report approval.

## Browser

- Large offline ZIP exports work best in Chrome or Edge.
- Self-signed relay certificates require a one-time browser trust step on HTTPS Mission Overwatch.

---

## Glossary

| Term | Meaning |
| --- | --- |
| **Alpha AI** | System that drafts after-action report content from mission data |
| **Chain of custody** | Evidence history and hash verification for a mission |
| **Field-device mission** | Pilot-only mode — no LAN relay panel during live mission |
| **Import mission** | Mission History flow that creates a closed post-flight record from external footage and photos |
| **Items Requiring Officer Review** | Report checklist items that need human resolution before submission |
| **Live Overwatch Screen** | Mission Overwatch panel for LAN relay connection |
| **Live stream (WebRTC)** | Remote live video over the internet (Cloudflare WHEP) |
| **Mission Console** | Dashboard link name for opening Mission Overwatch |
| **Mission Dashboard** | Command home — KPIs, history, search, AAR inboxes |
| **Mission Overwatch** | Per-mission browser workspace for live view, review, report, seal, export |
| **Offline package** | ZIP archive with viewer for point-in-time mission export |
| **Pilot app** | AlphaRelay Pilot Android app on tablet or phone |
| **Pilot console** | In-app settings (Mission, Flight, Events, System) |
| **Play with Events** | Footage player with synchronized event markers |
| **Quick events** | One-tap event buttons from scenario templates |
| **Relay mission** | Mission mode with LAN WebSocket relay for Mission Overwatch |
| **Scenario template** | Preloaded objectives, events, and report sections for a mission type |
| **Voice relay** | Voice logging with keyword `relay` before event details |

---
