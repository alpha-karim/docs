# AlphaRelay docs consolidated export for NotebookLM

Generated from repository files under `/workspace/docs`.



---

## Source: `AGENTS.md`

```
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
```


---

## Source: `CONTRIBUTING.md`

```
> **Customize this file**: Tailor this template to your project by noting specific contribution types you're looking for, adding a Code of Conduct, or adjusting the writing guidelines to match your style.

# Contribute to the documentation

Thank you for your interest in contributing to our documentation! This guide will help you get started.

## How to contribute

### Option 1: Edit directly on GitHub

1. Navigate to the page you want to edit
2. Click the "Edit this file" button (the pencil icon)
3. Make your changes and submit a pull request

### Option 2: Local development

1. Fork and clone this repository
2. Install the Mintlify CLI: `npm i -g mint`
3. Create a branch for your changes
4. Make changes
5. Navigate to the docs directory and run `mint dev`
6. Preview your changes at `http://localhost:3000`
7. Commit your changes and submit a pull request

For more details on local development, see the **Local preview** section on the [home page](index.mdx).

## Writing guidelines

- **Use active voice**: "Run the command" not "The command should be run"
- **Address the reader directly**: Use "you" instead of "the user"
- **Keep sentences concise**: Aim for one idea per sentence
- **Lead with the goal**: Start instructions with what the user wants to accomplish
- **Use consistent terminology**: Don't alternate between synonyms for the same concept
- **Include examples**: Show, don't just tell
```


---

## Source: `README.md`

```
# AlphaRelay documentation

Operator documentation for [AlphaRelay](https://www.alpha-relay.com), built with [Mintlify](https://mintlify.com).

## Content

- **Home** — `index.mdx`
- **Start Here** — `alpharelay/plain-english.mdx`, `alpharelay/guide-overview.mdx`, `alpharelay/roles-and-devices.mdx`, `alpharelay/field-vs-relay.mdx`, `alpharelay/training-mission.mdx`
- **Run a Mission** — `alpharelay/before-you-go-to-the-field.mdx`, `alpharelay/start-field-mission.mdx`, `alpharelay/start-relay-mission.mdx`, `alpharelay/watch-in-mission-overwatch.mdx`, `alpharelay/event-logging.mdx`, `alpharelay/completing-a-mission.mdx`
- **Review and Report** — `alpharelay/footage-upload.mdx`, `alpharelay/footage-playback.mdx`, `alpharelay/report-generation.mdx`, `alpharelay/evidence-sealing.mdx`, `alpharelay/export-offline-package.mdx`
- **Admin Setup** — `alpharelay/dashboard-account-organization.mdx`, `alpharelay/one-time-setup.mdx`, `alpharelay/security-privacy-ai-processing.mdx`, `alpharelay/minimum-requirements.mdx`
- **Help** — `alpharelay/troubleshooting.mdx`, `alpharelay/connectivity-guide.mdx`, `alpharelay/known-limitations.mdx`, `alpharelay/glossary.mdx`

## Local preview

Install the [Mintlify CLI](https://www.npmjs.com/package/mint) (use an LTS Node.js version if the CLI reports an unsupported Node version):

```bash
npm i -g mint
mint dev
```

Open the URL shown in the terminal (often `http://localhost:3000`).

## Publishing

Connect the repo to your Mintlify project in the [dashboard](https://dashboard.mintlify.com) so pushes to your default branch deploy the site.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
```


---

## Source: `alpharelay/before-you-go-to-the-field.mdx`

```
---
title: "Before You Go to the Field"
description: "Prepare devices, roles, mission type, connectivity, and sync before a mission."
icon: "clipboard-check"
---

## What this is

Use this checklist before a training or operational mission so the team knows which devices, roles, and connection path it will use.

## When to use it

- You are preparing for a mission.
- You are training a new team.
- You changed devices, networks, or operators.
- You need to confirm the mission type before launch.

## Basic steps

1. Charge the Android field device.
2. Confirm the controller and aircraft are connected and tested, if applicable.
3. Confirm the AlphaRelay Android field app is installed and updated.
4. Sign in with the correct operator account.
5. Confirm the pilot license is active.
6. Confirm the correct organization is selected.
7. Open Mission Overwatch once while online on the command device.
8. Choose Field Mission or Relay Mission.
9. Test the local network if using Relay Mission.
10. Confirm the internet plan for livestreaming, sync, upload, reports, and export.
11. Check storage and SD card access.
12. Assign the field operator, Mission Overwatch user, reviewer, and supervisor.

## What good looks like

- The selected mission type matches the team's workflow.
- The Android field device can start a mission.
- Mission Overwatch users can sign in.
- The team knows what needs internet and what can wait for sync.
- Everyone knows who starts, watches, logs, reviews, and approves.

## Common problems

- Field Mission and Relay Mission are confused before launch.
- Relay Mission devices are not on the same reachable local network.
- The team expects cloud sync or upload without internet.
- The pilot license has not been activated.

## More detail

| Field condition | Use this path |
| --- | --- |
| One Android field device will run the mission without a same-local-network command device | Field Mission |
| Mission Overwatch needs to connect from the same local network | Relay Mission |
| Mission Overwatch user needs livestreaming and the field device has internet | Configured livestreaming through **Live stream (WebRTC)** |
| Field site has no internet | Local mission work, then sync later |
| Agency needs a final record | Upload, review, report, seal, approve when needed, then export |

During a mission, the Android field app can support takeoff, land, yaw or rotation, altitude, gimbal, camera positioning, tap-to-fly, and related DJI controls when available. Pilots who prefer the physical controller can hide on-screen drone controls while keeping quick events, telemetry, and relay status visible.

<Warning>
  Internet access and local mission connectivity are not the same thing. Follow the connection requirements for the mission type you are using.
</Warning>
```


---

## Source: `alpharelay/completing-a-mission.mdx`

```
---
title: "End a Mission"
description: "Land, close the mission, and watch for upload or queue state."
icon: "flag-checkered"
---

## What this is

Use this page when the field work is complete and the team is ready to close the mission.

## When to use it

- The mission is ending.
- The aircraft is ready to land or has landed.
- You need to stop the mission and relay session.
- Reviewers are waiting for footage or sync status.

## Basic steps

1. Tap **Land** on the Android field device when appropriate.
2. Follow normal landing and safety procedures.
3. Tap **Stop Mission** on the Android field device when the mission is complete.
4. If needed, close the mission from the **Mission** card in Mission Overwatch.
5. Watch for footage upload, queued handoff, or sync messages.
6. Keep AlphaRelay open while upload or queue behavior completes.

## What good looks like

- The mission is closed.
- The relay session ends when the mission ends.
- Footage is uploaded or clearly queued.
- Review starts after the timeline and footage state are understood.

## Common problems

- The app or browser is closed while footage is still queued.
- The team starts review before upload or playback links are ready.
- Mission closeout happens before safety procedures are complete.

## More detail

Missions are always started from the Android field workflow. Closing can happen from the Android field device or Mission Overwatch.

When supported, AlphaRelay stops aircraft SD recording after a successful land command and prepares the mission video for handoff.

<Warning>
  Do not close the app before footage upload or queue behavior has completed according to the documented workflow.
</Warning>
```


---

## Source: `alpharelay/connectivity-guide.mdx`

```
---
title: "Connectivity"
description: "Understand local mission connectivity, internet sync, and queued upload behavior."
icon: "tower-broadcast"
---

## What this is

Connectivity in AlphaRelay has two different jobs: local mission connection during the mission, and internet connection for cloud-backed work.

## When to use it

- You are choosing Field Mission or Relay Mission.
- Mission Overwatch cannot connect.
- Footage or events are queued.
- You need to know what requires internet.

## The simple version

AlphaRelay may use different connections depending on the mission type and workflow.

- Field Mission can run from the Android field device and be reviewed later.
- Relay Mission needs the Android field device and Mission Overwatch device to reach each other on the same local network.
- Both mission types can support livestreaming when the field device has internet and livestreaming is configured.
- Cloud sync, sign-in, uploaded footage, reports, and export data need internet.
- Some events, screenshots, or pilot-handoff footage can queue and sync later.
- Mission Overwatch needs the correct local connection to watch a Relay Mission.

<Warning>
  Internet access and local mission connectivity are not the same thing. Follow the connection requirements for the mission type you are using.
</Warning>

## What works without internet

Depending on the mission state and device setup, AlphaRelay can support:

- Local mission work when supported by the selected mission type
- Relay Mission viewing on the same reachable local network
- Event logging
- Screenshots captured from the local mission connection
- Local mission state
- Deferred pilot-handoff footage queueing
- Recently validated Android field device licensing within the app's offline validation window

## What needs internet

Internet is needed for:

- Operator sign-in
- Mission sync
- Uploaded mission footage
- Uploaded mission photos
- Playback links
- Cloud evidence records
- Organization data
- Cross-device review
- Remote live stream setup when configured
- Report generation and cloud-backed review actions
- Offline package export data and media downloads

## If Mission Overwatch cannot connect

1. Confirm you are using Relay Mission.
2. Confirm the Android field device and Mission Overwatch device are on the same reachable local network.
3. Confirm the Android field app shows the mission connection as running.
4. Wait for the active mission to sync into the dashboard.
5. Open the active mission from **Mission Dashboard**.
6. If connection still fails, click **Connect** with the field blank to scan.
7. If needed, enter the address shown on the Android field device.
8. Trust the relay certificate if the browser prompts, then connect again.

## Common problems

- The team expects Relay Mission viewing without a reachable local network.
- The team expects cloud sync or upload without internet.
- The browser or app is closed before queued work can finish.
- Remote live is confused with Relay Mission local connectivity.

## More detail

AlphaRelay uses separate connection paths:

```text
Android Field Device
  |-- Local Relay -> Mission Overwatch on same field Wi-Fi
  |-- WebRTC Livestreaming -> Mission Overwatch users over internet
  `-- Cloud Sync -> Events, footage, reports, evidence records
```

Relay Mission local viewing uses the local relay path. Mission Overwatch can fill the Android field device address from synced mission metadata and attempt connection. If the field stays blank or the address looks wrong after sync, leave it empty and click **Connect** to scan, or paste the IPv4 shown on the field device.

When configured, livestreaming uses **Live stream (WebRTC)** for Mission Overwatch users over the internet. It can be used with Field Mission or Relay Mission when the field device has internet and livestreaming is running.

Mission Overwatch installs a service worker on first online visit and can also be installed as a PWA from the **Install app** button when the browser supports it. The offline app shell only covers the page itself. Cloud sign-in, mission sync, footage uploads, and playback links still need the network and a signed-in session.

You may see **Queued for cloud sync**, **Loading playback link**, a pending mission video count, or an Android field device upload banner. These states usually mean AlphaRelay has local mission data or pilot-handoff footage that still needs to reach the cloud.

When you see queued states:

1. Stay signed in.
2. Keep the browser or Android field app open.
3. Move the device to a network with internet access when practical.
4. Use **Upload now** if it appears and the device is online.
5. Wait for the upload and playback link to finish before final review.
```


---

## Source: `alpharelay/dashboard-account-organization.mdx`

```
---
title: "Accounts and Organizations"
description: "Use the dashboard, account settings, organization management, storage summary, time zone, and license views."
icon: "gauge-high"
---

## What this is

Accounts and organization settings control who can sign in, which organization they use, and how mission records are attributed.

## When to use it

- You need to find active or closed missions.
- You need to update your name or rank.
- You manage team members or roles.
- You need Android field device license details.

## Basic steps

1. Sign in to AlphaRelay.
2. Open **Mission Dashboard** to find active and closed missions.
3. Open **Account** to save your full name and rank or title.
4. Open **Organization** if you are an owner or admin.
5. Confirm team membership, roles, status, time zone, storage visibility, and license access.

## What good looks like

- Operators can sign in before training.
- Names and ranks are saved for attribution.
- Team roles match the workflow.
- Organization time zone matches the reporting standard.
- Android field device licenses are visible to admins.

## Common problems

- A user cannot open **Organization** because they are not an owner or admin.
- Names or ranks are blank, so AlphaRelay falls back to account email where needed.
- The wrong organization is selected before a mission.

## More detail

Use **Mission Dashboard** to open Mission Overwatch, review active and closed missions, search mission data, and access supervisor review queues when your role can act on them.

Use **Account** to change your password, request an email change, save your full name, and save your rank or title.

Organization owners and admins can use **Organization** to review indexed storage, add or update team members, change roles, update member status, remove memberships, set time zone, view Android field device license keys, and copy a license key or QR code.
```


---

## Source: `alpharelay/event-logging.mdx`

```
---
title: "Log Events"
description: "Capture important mission moments from the field device, Mission Overwatch, or footage review."
icon: "list"
---

## What this is

Events are timestamped mission notes. Use them to mark important activity during the mission or while reviewing footage.

## When to use it

- Something important happens during the mission.
- The field operator needs to mark a moment quickly.
- Mission Overwatch needs to add a command-side note.
- A reviewer finds something during footage playback.

## Basic steps

1. Start the mission.
2. Log quick events from the Android field device when field activity happens.
3. Log Mission Overwatch events when command-side notes are needed.
4. After the mission, open **Play with Events** if you need to tag a moment from footage.
5. Review the timeline to confirm events appear in the right place.

## What good looks like

- Events are short and specific.
- Events appear on the mission timeline.
- Screenshots are linked when the documented workflow supports them.
- Post-mission tags are added only after the mission is closed.

## Common problems

- Events are too vague to help during review.
- Mission Overwatch event logging is expected during a Field Mission without the correct live workflow.
- Events are not reviewed against footage before the report is finalized.

## More detail

On the Android field device, operators can use quick event buttons, the quick event wheel, manual event notes, voice relay logging when enabled, and optional local AI events when configured. When voice relay logging is enabled, use `relay <event details>`.

In Mission Overwatch, use the **Event Logging** quick buttons or the **Manual Event (fast)** card.

After a mission is closed, reviewers can open **Play with Events**, scrub to the relevant frame, enter an **Event name**, and click **Tag event**. AlphaRelay adds the event to the mission log, stores a screenshot from the video frame, and links the event to the mission timeline.
```


---

## Source: `alpharelay/evidence-sealing.mdx`

```
---
title: "Seal the Mission Record"
description: "Lock reviewed custody evidence when the mission record is ready."
icon: "shield-check"
---

## What this is

Sealing preserves reviewed custody evidence and hashes. It is a separate step from supervisor approval.

<Warning>
  Sealing evidence and approving the report are not the same action. Sealing preserves custody evidence and hashes. Supervisor approval finalizes the after-action report and locks timeline events and photos.
</Warning>

## When to use it

- The mission is closed.
- Footage, screenshots, and photos have been reviewed.
- The report has been generated and checked.
- Items Requiring Officer Review have been addressed.
- The custody record is ready to preserve.

## Basic steps

1. Open the closed mission.
2. Confirm footage is uploaded and playable.
3. Review **Play with Events**.
4. Confirm event names, screenshots, timestamps, and photos.
5. Generate and review the after-action report.
6. Address **Items Requiring Officer Review**.
7. Open **Mission chain of custody**.
8. Use **Download mission custody certificate (HTML)** if needed.
9. Click **Seal entire mission (verify downloads)** when the record is ready.

## What good looks like

- The correct mission is open.
- The mission status is closed.
- Footage and event markers have been checked.
- The report has been reviewed.
- Custody evidence is ready to preserve.

## Common problems

- Sealing is started before footage or queued sync has finished.
- Report edits are still needed.
- Items Requiring Officer Review are unresolved.
- The team expects sealing to approve the report.

## More detail

Sealing locks registered evidence rows in the custody ledger so reviewed files and hashes cannot be changed casually after finalization.

The sealed record helps preserve mission events, event screenshots, uploaded footage references, mission photos, chain-of-custody data, custody certificate state, report context, and evidence review history.

After sealing, continue with supervisor approval when the report is ready, then export an offline package if the mission needs archive, handoff, command review, or records retention.
```


---

## Source: `alpharelay/export-offline-package.mdx`

```
---
title: "Export the Offline Package"
description: "Create a downloadable ZIP archive of the mission record."
icon: "box-archive"
---

## What this is

The offline package is a downloadable ZIP file that contains a point-in-time copy of the mission record for offline review, handoff, or retention.

## When to use it

- The mission needs records retention.
- A supervisor or command reviewer needs a package.
- The team needs offline review.
- The mission record is ready to hand off or archive.

## Basic steps

1. Open the closed mission from **Mission Dashboard**.
2. Confirm the mission review is complete.
3. Confirm needed footage, screenshots, photos, report data, and custody data are available.
4. Click **Export Offline Package**.
5. Choose a save location if your browser asks.
6. Wait for the export to complete.
7. Unzip the package.
8. Open `index.html` from the extracted folder.

## What good looks like

- The ZIP file is created.
- The extracted package includes the offline viewer.
- Available footage, screenshots, photos, report, and custody data open from the package.
- The package reflects the mission state at export time.

## Common problems

- Export starts before footage or media downloads are available.
- Very large missions take longer to package.
- Local browser restrictions prevent video playback after extraction.
- Files are moved out of the extracted folder.

## More detail

The offline package may include:

- Mission record
- Chain-of-custody data
- Frozen custody certificate
- After-action report HTML file
- Footage clips, when available
- Event screenshots, when available
- Mission photos, when available
- A small offline viewer for reviewing the mission timeline and media

Footage and screenshots are placed inside a `media/` folder when the browser is able to download them. Mission photos are stored under `media/` when AlphaRelay can retrieve them during export.

Large missions may take longer because video files are streamed into the ZIP package during export. Chrome or Edge is recommended for very large missions.

The offline package is not a replacement for live mission sync. It is a point-in-time archive created while you are signed in and connected to the internet.
```


---

## Source: `alpharelay/field-vs-relay.mdx`

```
---
title: "Field Mission vs Relay Mission"
description: "Choose the mission type that matches how your team is working."
icon: "split"
---

AlphaRelay has two main mission types. Choose the one that matches how your team is working.

<Note>
  Both mission types can support livestreaming when the field device has internet and livestreaming is configured. The main difference is whether Mission Overwatch also needs a local Relay Mission connection during the mission.
</Note>

## Field Mission

Use Field Mission when the field device is the main tool and the mission can be reviewed later. Use livestreaming with Field Mission when the field device has internet and your team needs live viewing without the local Relay Mission connection.

Best for:

- Simple field recording
- Offline or limited-connectivity work
- Missions where local Relay Mission viewing is not needed
- Missions that need livestreaming from an internet-connected field device
- Missions that will be reviewed after the fact

## Relay Mission

Use Relay Mission when Mission Overwatch needs to connect to the field device during the mission over the local mission connection.

Best for:

- Command-side viewing
- Live event logging from Mission Overwatch
- Team-based mission monitoring
- Missions where another user needs to follow the live mission timeline
- Livestreaming from an internet-connected field device when that workflow is configured

## Simple decision guide

Choose Field Mission if:

- One operator is capturing the mission
- Local Relay Mission viewing is not required
- The team can review the mission afterward
- The team wants livestreaming from an internet-connected field device without the local Relay Mission connection

Choose Relay Mission if:

- Mission Overwatch needs the local Relay Mission connection during the mission
- Another user needs to watch or log events live
- The team is working from a local command or review position

<Tip>
  Use Field Mission when one operator is capturing the mission and local Relay Mission viewing is not required.
</Tip>

<Tip>
  Use Relay Mission when Mission Overwatch needs the local mission connection during the mission.
</Tip>
```


---

## Source: `alpharelay/footage-playback.mdx`

```
---
title: "Review Footage"
description: "Watch mission footage, use Play with Events, and check timeline markers."
icon: "play"
---

## What this is

Footage review lets you compare mission video with events, screenshots, photos, and the timeline before reporting or export.

## When to use it

- Footage upload has completed or playback links are ready.
- You need to review event timing.
- You need to tag an event found after the mission.
- You need to compare more than one uploaded angle.

## Basic steps

1. Open the closed mission from **Mission Dashboard**.
2. Go to **Mission Footage**.
3. Confirm the correct clip is available.
4. Click **Play with Events**.
5. Play or scrub through the footage.
6. Check event markers against the video.
7. Tag a post-mission event if review reveals an important moment.

## What good looks like

- The footage plays.
- Event markers appear on the timeline.
- Screenshots and photos appear where expected.
- Any post-mission tags have clear names.
- Secondary angles are aligned before final review.

## Common problems

- Footage is still queued or playback links are still loading.
- The wrong clip is selected as the primary footage.
- A secondary angle needs sync adjustment.
- The report has already been submitted or approved, locking timeline edits.

## More detail

Uploaded clips appear under **Mission Footage**. Reviewers can watch footage, play, pause, scrub, download clips through the browser or clip controls, open **Play with Events**, and review multiple uploaded angles from the same mission.

**Play with Events** includes event markers, event screenshots, timeline photos, active-event highlighting, angle tabs, **All angles**, and **Adjust sync to primary** for secondary clips.

After the mission is closed, reviewers can add evidence-backed events from uploaded footage:

1. Open **Play with Events**.
2. Switch to the angle that shows the moment clearly.
3. Scrub to the frame you want to capture.
4. Enter a short event name.
5. Click **Tag event**.

Mission events stay tied to the primary mission timeline. When a secondary angle has a sync offset, AlphaRelay maps those same events onto the secondary video.
```


---

## Source: `alpharelay/footage-upload.mdx`

```
---
title: "Upload Footage"
description: "Upload, queue, or manually add mission footage after the mission."
icon: "cloud-arrow-up"
---

## What this is

Footage upload makes mission video available for review, reports, custody work, and offline export.

## When to use it

- The mission has ended.
- The Android field device has mission footage ready.
- Footage is queued for later sync.
- You need to manually upload an MP4.

## Basic steps

1. End the mission.
2. Watch the Android field app or Mission Overwatch for upload or queued status.
3. Keep the app or browser open while upload or queue behavior completes.
4. Move the device to an internet-connected network if upload needs to finish.
5. Use **Upload now** if it appears and the device is online.
6. If automatic upload is not practical, upload the MP4 manually from **Mission Footage**.

## What good looks like

- The correct mission footage is linked to the mission.
- Playback links finish loading.
- Queued footage is allowed to sync before final review.
- Manual uploads use the correct MP4 file.

## Common problems

- The field network supports local mission work but not cloud upload.
- Battery or bandwidth is not enough for immediate upload.
- Manual upload is attempted while the browser is offline.
- The team starts final review before playback links are ready.

## More detail

After the mission, the Android field app may attempt to automatically upload recorded footage. For direct field-device-to-cloud upload, the Android field device must have internet access.

If the device hands video to Mission Overwatch over the local connection, the Mission Overwatch browser needs internet access to upload it immediately. If the browser does not have internet access, the handoff can queue locally for later sync.

If you do not want to wait for auto upload, or if battery life is a concern, tap **Skip**, then manually upload the footage later.

To manually upload a file:

1. Remove the SD card from the aircraft or connect the aircraft to a computer.
2. Copy the mission MP4 file to your computer.
3. Open the mission in AlphaRelay.
4. Go to **Mission Footage**.
5. Click **Upload MP4**.
6. Select the correct video file.

Mission Overwatch also supports mission photo uploads through **Mission photos** / **Upload Photos**. Photos can be timeline photos or evidence-only photos, and can include a caption, category, notes, and timeline placement.

<Warning>
  Do not close the app before footage upload or queue behavior has completed according to the documented workflow.
</Warning>
```


---

## Source: `alpharelay/glossary.mdx`

```
---
title: "Glossary"
description: "Plain-English definitions for common AlphaRelay terms."
icon: "book"
---

## Alpha AI

Alpha AI drafts after-action report content from the structured mission record.

## Chain of custody

Chain of custody is the evidence history for a mission record.

## Cloud sync

Cloud sync saves mission data to AlphaRelay cloud services when internet is available.

## Device license

A device license lets an approved Android field device use the AlphaRelay field app.

## Event

An event is a timestamped mission note from the field device, Mission Overwatch, or footage review.

## Evidence sealing

Evidence sealing preserves reviewed custody evidence and hashes.

## Field Mission

Field Mission is the mission type for using the Android field device as the main tool when live local viewing is not required.

## Footage review

Footage review is the process of checking uploaded mission video against events, photos, and the timeline.

## Mission Dashboard

Mission Dashboard is the web app area where you find active and closed missions.

## Mission Overwatch

Mission Overwatch is the browser workspace for watching, logging, reviewing, reporting, sealing, and exporting one mission.

## Offline package

An offline package is a downloadable ZIP archive with a point-in-time copy of the mission record.

## Organization

An organization is the AlphaRelay team space that contains users, roles, settings, licenses, and mission records.

## Play with Events

Play with Events is the review view that plays footage alongside mission event markers.

## Relay Mission

Relay Mission is the mission type for connecting Mission Overwatch to the Android field device during the mission.

## Report

The report is the after-action report generated from mission data and reviewed by a human.

## Sync

Sync is the process of moving local mission changes to AlphaRelay cloud services when connectivity is available.

## Timeline

The timeline is the mission sequence of events, photos, footage moments, and review markers.

## Upload queue

The upload queue holds footage or mission data that needs to sync when internet access is available.
```


---

## Source: `alpharelay/guide-overview.mdx`

```
---
title: "The 5-Step Mission Workflow"
description: "The basic AlphaRelay workflow from device setup to final mission record."
icon: "route"
---

## What this is

This page gives trainers and new users the full AlphaRelay workflow in one simple path.

## When to use it

- You are teaching AlphaRelay for the first time.
- You need a short mission lifecycle overview.
- You want to know which page to read next.
- You are preparing for a training mission.

## Basic steps

1. Set up your devices.
   Confirm the Android field device, Mission Overwatch user, organization access, and licenses are ready.
2. Start the mission.
   Choose Field Mission or Relay Mission, then start from the Android field device.
3. Watch and log events.
   Watch live in Mission Overwatch when livestreaming or Relay Mission viewing is being used. Log events from the field device, Mission Overwatch, or post-mission footage review.
4. Review the mission.
   End the mission, upload footage or let queued footage finish syncing, then review footage with the mission timeline.
5. Create the final record.
   Generate and review the after-action report, seal the mission record when custody evidence is ready, and export the offline package when the team needs a point-in-time archive.

## What good looks like

- The mission appears in the dashboard.
- The selected mission type matches the team's workflow.
- Livestreaming is understood as available from either mission type when the field device has internet and livestreaming is configured.
- Events appear on the timeline.
- Footage is available or queued as documented.
- The report is reviewed before approval.
- The record is sealed and exported when the workflow calls for it.

## Common problems

- The team chose Relay Mission but the devices are not on the same reachable local network.
- Footage is still queued and needs internet before review is complete.
- The report was generated before the timeline and footage were checked.
- Evidence sealing is confused with supervisor approval.

## More detail

Use these pages for the deeper workflow:

- [Field Mission vs Relay Mission](/alpharelay/field-vs-relay)
- [Before You Go to the Field](/alpharelay/before-you-go-to-the-field)
- [Start a Field Mission](/alpharelay/start-field-mission)
- [Start a Relay Mission](/alpharelay/start-relay-mission)
- [Review Footage](/alpharelay/footage-playback)
- [Generate a Report](/alpharelay/report-generation)
- [Seal the Mission Record](/alpharelay/evidence-sealing)
- [Export the Offline Package](/alpharelay/export-offline-package)
```


---

## Source: `alpharelay/known-limitations.mdx`

```
---
title: "Known Limitations"
description: "Transparent field limitations for local connection, remote live, cloud sync, local AI, reports, and offline packages."
icon: "triangle-alert"
---

## What this is

This page sets realistic expectations before training or field use.

## When to use it

- You are planning a mission in a difficult network environment.
- You need to explain sync or upload limits.
- You are using optional local AI.
- You are preparing reports, approval, sealing, or export.

## Basic steps

1. Confirm whether the mission needs local viewing, internet sync, or both.
2. Confirm footage upload can finish before final review.
3. Review local AI events before treating them as operational facts.
4. Resolve report review items before finalization.
5. Export only after the mission record is ready.

## What good looks like

- The team understands what requires internet.
- Queued upload finishes before final review.
- AI events and AI report drafts receive human review.
- Evidence sealing and supervisor approval are handled separately.

## Common problems

- WebRTC remote live is expected without internet.
- Relay Mission local viewing is expected across networks that cannot reach each other.
- Manual upload is expected to queue before it starts.
- Offline export is expected to include media that was not available at export time.

## More detail

- WebRTC remote live requires internet.
- Relay Mission local viewing requires the Android field device and Mission Overwatch device to be on the same reachable local network.
- Cloud sync waits for internet.
- Losing local viewing, WebRTC remote live, or cloud sync does not always stop the entire mission because these are separate paths.
- Some uploaded footage may require manual review or sync adjustment.
- Manual browser uploads require a signed-in browser with internet access before upload starts.
- Queued pilot-handoff footage should be allowed to finish uploading before final review.
- Offline packages are only as complete as the reviewed and synced mission record available at export time.
- Local AI detection capabilities may vary by device, model, app build, and configuration.
- Local AI events require human review before they are treated as operational facts.
- Alpha AI report drafts require officer review.
- Items Requiring Officer Review must be resolved before finalization.
- Supervisor approval makes the report permanent and locks timeline events and photos.
- Evidence sealing preserves custody evidence and hashes, but it is not the same action as supervisor approval.
```


---

## Source: `alpharelay/minimum-requirements.mdx`

```
---
title: "Minimum Requirements"
description: "Device, browser, network, storage, permission, controller, and offline expectations for AlphaRelay."
icon: "clipboard-list"
---

## What this is

Use this page to confirm the environment is ready before training or field use.

## When to use it

- You are preparing devices for a team.
- You are checking browser or network readiness.
- You are planning upload, sync, or export.
- You are testing a new aircraft or controller setup.

## Basic steps

1. Use an agency-approved Android tablet or phone for the field app.
2. Use a current desktop browser for Mission Overwatch, review, reporting, and export.
3. Confirm the selected mission type has the connection it needs.
4. Grant the Android permissions requested by the field app.
5. Confirm storage, battery, controller, and aircraft readiness.
6. Run a first training mission with the same device class.

## What good looks like

- The Android field device can run the current AlphaRelay app.
- Mission Overwatch opens in a supported browser.
- Relay Mission devices can reach each other locally.
- Cloud sync and upload have internet when needed.
- Storage and battery are sufficient for the mission and handoff.

## Common problems

- The team expects Relay Mission viewing without local network reachability.
- Upload or export is attempted without internet.
- Android permissions are disabled during a mission.
- Manual footage access is not tested before field use.

## More detail

Recommended Android field-device qualities:

- Current supported Android version for the installed AlphaRelay app
- Reliable Wi-Fi radio for Relay Mission local connection work
- Enough CPU and memory for live video, telemetry, event logging, and optional local AI
- Enough battery for the mission plus footage handoff or upload
- Sufficient free storage for mission video, queued uploads, logs, and screenshots
- Screen brightness suitable for field use

| Workflow | Requirement |
| --- | --- |
| Relay Mission local connection | Android field device and Mission Overwatch device must be reachable on the same local Wi-Fi or VLAN. |
| WebRTC remote live | Android field device needs internet access and remote live must be started from the field app. |
| Cloud sync | The active browser or Android device needs internet access and a signed-in session. |
| Footage upload | Uploading video requires internet access and enough time, bandwidth, storage, and battery. |
| Offline package export | Browser must be able to download the mission data and any included media at export time. |

Offline behavior depends on the workflow. Local mission work can continue when supported by the selected mission type. Relay Mission local viewing needs local network reachability, not internet. WebRTC remote live, cloud sync, upload, playback links, and export media downloads need internet.
```


---

## Source: `alpharelay/one-time-setup.mdx`

```
---
title: "Devices and Licenses"
description: "Install the Android field app, sign in, and activate device access."
icon: "screwdriver-wrench"
---

## What this is

Use this page when setting up AlphaRelay before the first training mission.

## When to use it

- A new operator needs browser access.
- A new Android field device needs the app.
- A license needs to be activated.
- A browser profile needs Mission Overwatch ready before field use.

## Basic steps

1. Go to [https://www.alpha-relay.com](https://www.alpha-relay.com).
2. Sign in using your operator credentials.
3. Download the Android field app from [https://www.alpha-relay.com/download.html](https://www.alpha-relay.com/download.html).
4. Install and open the app.
5. Grant the requested permissions.
6. Step through the **First-Time Guide** on first launch.
7. Activate the pilot license when prompted.
8. Open Mission Overwatch once while online on each browser profile that will use it.

## What good looks like

- The operator can sign in.
- The Android field app opens.
- The field device license is active.
- Mission Overwatch has been opened online before field use.
- Account and organization details are ready.

## Common problems

- The license key is missing or inactive.
- The Android field device cannot validate after the offline validation window expires.
- The browser has not opened Mission Overwatch before low-connectivity field work.

## More detail

To activate a license:

1. In AlphaRelay, go to **Organization**.
2. Find the Android field device license row.
3. Use the QR code or license key issued by your admin.
4. Scan or enter the license inside the field app when prompted.

You can update the license later from **Pilot console → System → AlphaRelay license**, or by long-pressing **Choose Mission Mode** on the main screen.

The field app validates license keys against AlphaRelay and can continue within its offline validation window after a recent successful check. If the validation window expires, connect the device to the internet before starting again.
```


---

## Source: `alpharelay/plain-english.mdx`

```
---
title: "AlphaRelay in Plain English"
description: "A short, plain-English introduction to AlphaRelay."
icon: "circle-info"
---

AlphaRelay turns a field mission into a clear, reviewable record.

During a mission, the Android field device captures mission activity, footage, and operator events. When the field device has internet and livestreaming is configured, Mission Overwatch users can watch live from either mission type. Relay Mission also supports local Mission Overwatch connection for live viewing and command-side logging. After the mission, AlphaRelay helps the team upload footage, review what happened, generate a report, seal the record, and export an offline package.

## The basic flow

1. Start the mission from the Android field device.
2. Watch live in Mission Overwatch when livestreaming or Relay Mission viewing is being used.
3. End the mission when the field work is complete.
4. Upload and review footage.
5. Generate the after-action report.
6. Seal and export the final record.

## The two mission types

### Field Mission

Use this when the field device is the main tool and local Mission Overwatch connection is not required. Field Mission can still support livestreaming when the field device has internet and livestreaming is configured.

### Relay Mission

Use this when Mission Overwatch needs to connect to the field device over the local mission connection for live viewing and command-side logging. Relay Mission can also support livestreaming when the field device has internet and livestreaming is configured.
```


---

## Source: `alpharelay/report-generation.mdx`

```
---
title: "Generate a Report"
description: "Generate, review, edit, submit, and approve an after-action report."
icon: "file-lines"
---

## What this is

Alpha AI drafts an after-action report from the structured mission record. A human reviewer must verify it before submission or approval.

<Warning>
  Alpha AI drafts report material. It does not replace officer review.
</Warning>

## When to use it

- The mission is closed.
- Footage and events have been reviewed.
- Items Requiring Officer Review need attention.
- The report is ready for supervisor review.

## Basic steps

1. Open the closed mission.
2. Review the timeline, footage, photos, and custody state.
3. Scroll to **After-Action Report**.
4. Click **Generate Report**.
5. Review the generated report.
6. Resolve **Items Requiring Officer Review**.
7. Edit the narrative or executive summary as needed.
8. Submit for supervisor approval when the record is ready.
9. Approve or return to draft if you have the supervisor role.

## What good looks like

- The report matches the mission timeline.
- Footage, screenshots, and photos are accurate.
- Items Requiring Officer Review are resolved.
- The officer has reviewed the draft before submission.
- Approval happens only when the final report should become permanent.

## Common problems

- The report is generated before footage review is complete.
- AI draft language is treated as final without human review.
- Timeline events or photos need edits after submission.
- Sealing evidence is confused with approving the report.

## More detail

AlphaRelay uses Alpha AI to build the after-action report from mission data, including events, screenshots, timestamps, mission metadata, scenario information, footage blocks, and custody and integrity data.

The report may include a narrative summary, important timeline, evidence notes, **Items Requiring Officer Review**, mission photos, evidence custody summary, review history, and approval status.

Use **Edit executive summary** next to **Generate Report** to refine the short summary that appears in the mission header and dashboard.

**Submit for supervisor approval** when the mission report is complete and ready for command or supervisory review. While the report is awaiting supervisor approval, operator edits to the report, mission timeline, and photos are restricted.

Organization admins acting as supervisors can approve the report or click **Return to draft** if more changes are needed. Once approved, the after-action report cannot be regenerated or edited, and timeline events and photos stay locked.
```


---

## Source: `alpharelay/roles-and-devices.mdx`

```
---
title: "Devices and Roles"
description: "Understand who uses AlphaRelay and which device each part of the workflow runs on."
icon: "users"
---

## What this is

AlphaRelay uses an Android field device, Mission Overwatch in a browser, reviewer tools, and admin setup. This page explains who does what.

## When to use it

- You are assigning roles before training.
- You need to know which device starts the mission.
- You are setting up reviewers or supervisors.
- You are onboarding an admin.

## Basic steps

1. Assign the Android field operator.
2. Assign the Mission Overwatch user if Relay Mission or browser review is needed.
3. Assign the reviewer or officer.
4. Assign the supervisor if approval is part of the workflow.
5. Assign the organization admin for accounts, access, licenses, and setup.

## What good looks like

- The Android field operator starts the mission.
- Mission Overwatch opens missions from the dashboard.
- Reviewers check footage, events, reports, and custody.
- Supervisors approve only when the record is final.
- Admins manage people, organization details, and device access.

## Common problems

- Someone expects Mission Overwatch to start a mission.
- Reviewers start final reporting before footage sync is complete.
- Admin setup is left until the field exercise starts.

## More detail

| Role or device | Primary responsibility |
| --- | --- |
| Android field operator | Starts Field Mission or Relay Mission, logs field events, manages mission closeout, and supports footage handoff. |
| Mission Overwatch user | Opens active or closed missions from the dashboard, watches Relay Mission when connected, logs events, uploads media, reviews footage, reports, seals, and exports. |
| Reviewer or officer | Reviews the timeline, footage, photos, report draft, Items Requiring Officer Review, and custody state. |
| Supervisor | Reviews the completed mission record and approves or returns the report when authorized. |
| Organization admin | Manages accounts, roles, time zone, storage visibility, scenario templates, and Android field device licenses. |
| Android field device | Runs the field app and starts missions. |
| Mission Overwatch device | Browser-based workspace for live Relay Mission use, review, reporting, sealing, and export. |
| Cloud account | Supports sign-in, sync, uploaded footage, shared records, and organization data. |
```


---

## Source: `alpharelay/security-privacy-ai-processing.mdx`

```
---
title: "Security, Privacy, and AI"
description: "Understand local processing, cloud sync, AI report drafting, custody hashes, and review responsibilities."
icon: "lock"
---

## What this is

This page explains what runs locally, what syncs to the cloud, and what must be reviewed before sharing, sealing, approving, or exporting a mission record.

## When to use it

- Your team needs to understand Alpha AI report drafting.
- You are preparing to share or export a mission record.
- You need to explain local processing and cloud sync.
- You need to distinguish sealing from supervisor approval.

## Basic steps

1. Confirm the correct mission is open.
2. Confirm footage, screenshots, and photos are present.
3. Review the Alpha AI draft as draft material.
4. Resolve **Items Requiring Officer Review**.
5. Confirm custody evidence is ready before sealing.
6. Confirm supervisor approval is appropriate before making the report permanent.
7. Confirm the offline package includes the records your agency needs.

## What good looks like

- AI output is reviewed by a human.
- Timeline and media references are verified.
- Custody evidence is sealed only when ready.
- Supervisor approval happens only when the report should become permanent.
- Export happens from the correct reviewed mission.

## Common problems

- Alpha AI output is treated as final authority.
- Sealing evidence is treated as report approval.
- The package is shared before sync or review is complete.

## More detail

The Android field device runs the field app, mission controls, quick events, relay status, and optional local AI event detection when configured. Mission Overwatch can also keep a local app shell after it has been opened online, but sign-in, sync, uploads, and playback links still need network access.

Cloud sync can include mission metadata, event records, screenshots, mission photos, report data, custody records, uploaded footage references, review status, and organization context needed to support shared review.

Alpha AI drafts after-action report material from structured mission data. It can use events, timestamps, mission metadata, screenshots, photos, footage references, custody context, and review state. Treat AI output as draft material, not final authority.

Custody hashes and sealing support evidentiary review by preserving records of reviewed files and custody evidence. Sealing preserves custody evidence and hashes. Supervisor approval finalizes the after-action report and locks timeline and photos.
```


---

## Source: `alpharelay/start-field-mission.mdx`

```
---
title: "Start a Field Mission"
description: "Start a mission when the Android field device is the main tool."
icon: "tablet-screen-button"
---

## What this is

Field Mission is the simplest mission type. Use it when the Android field device is the main tool and the local Relay Mission connection is not required.

## When to use it

- One operator is capturing the mission.
- The team can review the mission afterward.
- Local Relay Mission viewing is not needed.
- The team may still use livestreaming when the field device has internet and livestreaming is configured.
- Connectivity may be limited in the field.

<Tip>
  Use Field Mission when one operator is capturing the mission and the team will review it later.
</Tip>

## Basic steps

1. Open the Android field app.
2. Tap **Choose Mission Mode**.
3. Enter a mission name if needed.
4. Select a scenario template, or choose **No scenario template**.
5. Tap **Field Mission**.
6. Complete the license step if prompted.
7. Run the mission from the Android field device.
8. End the mission when field work is complete.

## What good looks like

- The mission starts from the Android field device.
- Field events can be logged.
- The mission appears in AlphaRelay after sync.
- Livestreaming can be used when the field device has internet and livestreaming is configured.
- Footage and events are available or queued according to the documented workflow.

## Common problems

- The Android field device needs a valid license before starting.
- Cloud-backed review waits until the device has internet access.
- Footage may need upload or queued sync before review is complete.

## More detail

Mission records are created on the Android field device. Mission Overwatch does not start missions from the browser.

When livestreaming is configured, reviewers can use **Live stream (WebRTC)** from Mission Overwatch after livestreaming is started from the Android field app. This is separate from the local Relay Mission connection.

See [Connectivity](/alpharelay/connectivity-guide) for internet, local network, and queued sync behavior.
```


---

## Source: `alpharelay/start-relay-mission.mdx`

```
---
title: "Start a Relay Mission"
description: "Start a mission when Mission Overwatch needs to connect during the mission."
icon: "tower-broadcast"
---

## What this is

Relay Mission connects the Android field device to Mission Overwatch during the mission for local live viewing and command-side event logging. It can also support livestreaming when the field device has internet and livestreaming is configured.

## When to use it

- Mission Overwatch needs to connect during the mission.
- Another user needs to watch or log events live.
- The team has a local command or review position.
- The Android field device and Mission Overwatch device can use the same reachable local network.
- The team may also use livestreaming when the field device has internet and livestreaming is configured.

<Tip>
  Use Relay Mission when Mission Overwatch needs to connect during the mission.
</Tip>

## Basic steps

1. Put the Android field device and Mission Overwatch device on the same reachable local network.
2. Open the Android field app.
3. Tap **Choose Mission Mode**.
4. Enter a mission name if needed.
5. Select a scenario template, or choose **No scenario template**.
6. Tap **Relay Mission**.
7. Complete the license step if prompted.
8. Open the active mission from the Mission Dashboard.
9. Let Mission Overwatch connect using the synced mission details.

## What good looks like

- The mission starts from the Android field device.
- The active mission appears in the dashboard after sync.
- Mission Overwatch opens the selected mission.
- Live viewing and command-side event logging work when the local connection is available.

## Common problems

- The devices are not on the same reachable local network.
- The mission has not synced to the dashboard yet.
- The browser needs the relay certificate trusted before it can connect.
- The field device network address changed during the mission.

## More detail

After a Relay Mission syncs, Mission Overwatch can fill the field device address from mission metadata and attempt connection. If connection does not succeed, use **Connect** with the field blank to scan, or enter the address shown on the Android field device.

For deeper connection troubleshooting, see [Connectivity](/alpharelay/connectivity-guide) and [Troubleshooting](/alpharelay/troubleshooting).
```


---

## Source: `alpharelay/training-mission.mdx`

```
---
title: "First Training Mission"
description: "Practice the AlphaRelay workflow with a short non-operational mission."
icon: "graduation-cap"
---

## Purpose

Use this exercise to teach the basic AlphaRelay workflow from mission start to final record.

## Training goals

- Start a mission
- Confirm the selected mission type
- Confirm when livestreaming is available
- Add events
- Review the timeline
- Review footage
- Generate a report
- Seal and export the record if supported in the current workflow

## Practice scenario

Use a short, non-operational test mission. Keep the exercise simple so the team can focus on the workflow.

## Steps

1. Choose Field Mission or Relay Mission.
2. Open the Android field app.
3. Tap **Choose Mission Mode**.
4. Name the mission `Training mission` if your team wants a clear test label.
5. Select a scenario template, or choose **No scenario template**.
6. Start the selected mission type.
7. Open the active mission in Mission Overwatch if using Relay Mission or configured livestreaming.
8. Add one event from the Android field device.
9. Add one event from Mission Overwatch if that workflow is being used.
10. Run a short, safe field exercise.
11. End the mission.
12. Confirm footage is uploaded or queued according to the documented workflow.
13. Open **Play with Events**.
14. Confirm event markers appear on the timeline.
15. Generate the after-action report.
16. Seal and export the record if that is part of the current workflow.

## Debrief questions

- Did the team choose the right mission type?
- Did the team understand that either mission type can support livestreaming when the field device has internet?
- Were events easy to find on the timeline?
- Was footage available or queued as expected?
- Was the report clear?
- Was the final export complete?

## Common problems

- The training mission tries to test too many things at once.
- Relay Mission is selected without a working local connection.
- The team closes the app before upload or queued sync finishes.

## More detail

Repeat this training workflow whenever the team changes devices, networks, aircraft, or operating procedures.
```


---

## Source: `alpharelay/troubleshooting.mdx`

```
---
title: "Troubleshooting"
description: "Common fixes for setup, connection, sync, footage, playback, reports, and export."
icon: "wrench"
---

## What this is

Use this page when AlphaRelay is not behaving as expected during setup, mission work, review, or export.

## When to use it

- Mission Overwatch cannot connect.
- Sync or upload is delayed.
- Footage playback or markers are missing.
- Report, sealing, or export actions are blocked.

## Basic steps

1. Confirm the correct mission is open.
2. Confirm the user is signed in.
3. Confirm whether the problem is local connection or internet sync.
4. Keep the app or browser open while queued work finishes.
5. Move to an internet-connected network when cloud sync or upload is needed.

## What good looks like

- The mission type matches the workflow.
- Relay Mission devices can reach each other locally.
- Cloud-backed work resumes when internet is available.
- Footage is uploaded or clearly queued.
- Review and export happen after sync is complete.

## Common problems

### Mission Overwatch cannot see the field feed

1. Confirm the field app is open and the mission connection is running.
2. Confirm you are using Relay Mission.
3. Confirm both devices are on the same reachable local network.
4. Wait for the mission to sync into the dashboard.
5. Click **Connect** with the field blank to scan.
6. Enter the address shown on the Android field device if needed.
7. Trust the relay certificate if the browser prompts.

### Cloud sync is not up to date

1. Confirm the browser or field app is signed in.
2. Move the device to a network with internet access.
3. Keep AlphaRelay open until queued work finishes.
4. Avoid refreshing or closing the browser while sync is pending.

### Pilot video is queued locally

1. Keep the field app or browser open.
2. Connect to an internet-accessible network.
3. Use **Upload now** if the button appears.
4. Wait for upload progress to complete.
5. Wait for **Loading playback link** to resolve in Mission Overwatch.

### Manual upload will not start

1. Confirm the mission is saved and available in AlphaRelay.
2. Confirm you are signed in.
3. Confirm the browser can reach the cloud.
4. Confirm the selected file is the correct mission MP4.
5. Confirm another footage upload is not already running.

### Play with Events has no markers

1. Confirm the mission has logged events.
2. Confirm the correct mission is open.
3. Confirm the clip is playable.
4. Confirm the clip is the primary footage or aligned to the primary timeline.
5. Confirm the mission is closed and the footage is linked.

## More detail

Manual browser uploads do not queue before they start. If the cloud is unreachable, keep the MP4 and retry after sign-in and internet connectivity are restored. Pilot handoff footage received over the local connection can be queued locally and retried automatically.

Mission photos require a synced mission and an active cloud connection. Report submission or approval can lock timeline events and photos.

If a secondary angle is out of sync, open **Play with Events**, switch to the secondary angle, click **Adjust sync to primary**, align the same moment, and save the sync offset.

If local AI is not creating events, confirm the mission has started, open **Pilot console → Mission → Local AI**, confirm detection is enabled, and check confidence, persistence, cooldown, and model availability. In this build, local AI is fixed to person-detected events.

Report actions depend on mission state, role, and report status. Approved reports are permanent and cannot be regenerated or edited.

If an offline package video will not play, keep the extracted folder intact and open `index.html` from inside the folder. Chrome or Edge is recommended for large packages.
```


---

## Source: `alpharelay/watch-in-mission-overwatch.mdx`

```
---
title: "Watch in Mission Overwatch"
description: "Open an active or closed mission in the Mission Overwatch browser workspace."
icon: "monitor-play"
---

## What this is

Mission Overwatch is the browser workspace for one mission. Use it to watch configured livestreaming from either mission type, watch a Relay Mission through the local connection, log events, review footage, generate reports, seal records, and export packages.

## When to use it

- Livestreaming is configured and you need live viewing.
- A Relay Mission is active and you need local command-side viewing.
- You need to log events from the browser.
- You are reviewing a closed mission.
- You need report, custody, sealing, or export tools.

## Basic steps

1. Sign in at [https://www.alpha-relay.com](https://www.alpha-relay.com).
2. Open **Mission Dashboard**.
3. Select the active or closed mission.
4. For livestreaming, use **Live stream (WebRTC)** when offered.
5. For Relay Mission local viewing, let Mission Overwatch connect to the Android field device.
6. Use the mission workspace for event logging, footage review, reports, sealing, and export as needed.

## What good looks like

- The correct mission is open.
- Configured livestreaming is available when the field device has internet.
- Active Relay Mission details load from the dashboard when local viewing is being used.
- Event logging and review tools match the selected mission.
- Closed missions show review, report, custody, and export tools.

## Common problems

- The active mission has not synced yet.
- Relay Mission devices are not on the same reachable local network.
- The user is not signed in.
- The mission is already closed and only review tools are available.

## More detail

Mission Overwatch can also show **Live stream (WebRTC)** when remote live is configured and running from the Android field app. Use that path only when your team has configured it.

Mission Overwatch can install an offline app shell after an online visit. The shell helps the page reopen in the same browser profile, but sign-in, sync, uploads, and playback links still need network access.
```


---

## Source: `docs.json`

```
{
  "$schema": "https://mintlify.com/docs.json",
  "theme": "mint",
  "name": "AlphaRelay",
  "colors": {
    "primary": "#2563EB",
    "light": "#3B82F6",
    "dark": "#1D4ED8"
  },
  "favicon": "/favicon.png",
  "navigation": {
    "tabs": [
      {
        "tab": "Documentation",
        "groups": [
          {
            "group": "Start Here",
            "pages": [
              "index",
              "alpharelay/plain-english",
              "alpharelay/guide-overview",
              "alpharelay/roles-and-devices",
              "alpharelay/field-vs-relay",
              "alpharelay/training-mission"
            ]
          },
          {
            "group": "Run a Mission",
            "pages": [
              "alpharelay/before-you-go-to-the-field",
              "alpharelay/start-field-mission",
              "alpharelay/start-relay-mission",
              "alpharelay/watch-in-mission-overwatch",
              "alpharelay/event-logging",
              "alpharelay/completing-a-mission"
            ]
          },
          {
            "group": "Review and Report",
            "pages": [
              "alpharelay/footage-upload",
              "alpharelay/footage-playback",
              "alpharelay/report-generation",
              "alpharelay/evidence-sealing",
              "alpharelay/export-offline-package"
            ]
          },
          {
            "group": "Admin Setup",
            "pages": [
              "alpharelay/dashboard-account-organization",
              "alpharelay/one-time-setup",
              "alpharelay/security-privacy-ai-processing",
              "alpharelay/minimum-requirements"
            ]
          },
          {
            "group": "Help",
            "pages": [
              "alpharelay/troubleshooting",
              "alpharelay/connectivity-guide",
              "alpharelay/known-limitations",
              "alpharelay/glossary"
            ]
          }
        ]
      }
    ],
    "global": {
      "anchors": [
        {
          "anchor": "AlphaRelay",
          "href": "https://www.alpha-relay.com",
          "icon": "globe"
        }
      ]
    }
  },
  "logo": {
    "light": "/logo/alpharelay.png",
    "dark": "/logo/alpharelay.png"
  },
  "navbar": {
    "links": [
      {
        "label": "Open AlphaRelay",
        "href": "https://www.alpha-relay.com"
      }
    ]
  },
  "contextual": {
    "options": ["copy", "view"]
  },
  "footer": {
    "socials": {}
  }
}
```


---

## Source: `index.mdx`

```
---
title: "AlphaRelay Training Guide"
description: "Learn the AlphaRelay mission workflow from setup through final export."
icon: "graduation-cap"
---

AlphaRelay helps your team run a mission, capture key events, review footage, generate a report, and export a defensible mission record.

## Learn AlphaRelay in 5 steps

<Steps>
  <Step title="Set up your devices">
    Install the Android field app, sign in, and confirm your team has access.
  </Step>
  <Step title="Start a mission">
    Choose the right mission type and begin recording field activity.
  </Step>
  <Step title="Watch and log events">
    Use Mission Overwatch to view the mission, add notes, and capture important moments.
  </Step>
  <Step title="Review the mission">
    Upload footage, play it back with events, and check the timeline.
  </Step>
  <Step title="Create the final record">
    Generate the report, seal the evidence, and export the offline package.
  </Step>
</Steps>

## Start here

<CardGroup cols={2}>
  <Card title="New users" icon="circle-info" href="/alpharelay/plain-english">
    Start with AlphaRelay in Plain English.
  </Card>
  <Card title="Field operators" icon="tablet-screen-button" href="/alpharelay/start-field-mission">
    Start with Start a Field Mission.
  </Card>
  <Card title="Command / Overwatch users" icon="tower-broadcast" href="/alpharelay/watch-in-mission-overwatch">
    Start with Watch in Mission Overwatch.
  </Card>
  <Card title="Reviewers" icon="play" href="/alpharelay/footage-playback">
    Start with Review Footage and Generate a Report.
  </Card>
  <Card title="Admins" icon="users-gear" href="/alpharelay/dashboard-account-organization">
    Start with Accounts and Organizations.
  </Card>
  <Card title="Troubleshooting" icon="wrench" href="/alpharelay/troubleshooting">
    Start with Troubleshooting.
  </Card>
</CardGroup>

## Quick links

- **Web app:** [https://www.alpha-relay.com](https://www.alpha-relay.com)
- **Android field app:** [https://www.alpha-relay.com/download.html](https://www.alpha-relay.com/download.html)
```
