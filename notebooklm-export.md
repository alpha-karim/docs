# AlphaRelay Operator Documentation — NotebookLM Export

Generated on 2026-08-18 by `scripts/generate-notebooklm-export.mjs`.

**Web app:** https://www.alpha-relay.com
**Pilot app (APK):** https://www.alpha-relay.com/download.html

---

## Terminology (match the product UI)

- **AlphaRelay** — product name
- **Pilot app** — Android app on the pilot tablet, phone, or Android drone controller (`download.html`)
- **Choose Mission Mode** / **Start Mission** — current pilot-app mission start. It creates an Internet mission and automatically starts remote live when validated internet is available.
- **Local Network** — deployment-specific LAN relay path retained in the product but not presented as a mission-start button in the current public Pilot app.
- **Controller Screen Capture** — recommended capture path on Android drone controllers where the controller's native flight app keeps flight control and AlphaRelay captures the controller screen
- **Pilot mode** — direct AlphaRelay aircraft-control path offered on detected DJI SDK-controller setups only after the operator confirms a listed DJI MSDK 5.17 aircraft and AlphaRelay verifies its live connection
- **Goggles Mode** — DJI Avata and compatible DJI Goggles workflow on a separate Android phone or tablet; AlphaRelay captures DJI Fly, automatically starts an Internet mission with no scenario, and opens DJI Fly after screen-capture approval
- **Pilot console** — in-app settings panel (Mission, Flight, Events, System)
- **Mission Dashboard** — command home (`dashboard.html`)
- **Command Center** — default Mission Dashboard view with connection/refresh status, active missions, operational KPIs, attention queue, and latest automatic alerts
- **Mission Overwatch** / **Mission Console** — per-mission browser workspace (`mission-overwatch.html`; dashboard link says **Open Mission Console**)
- **Mission Viewer** / **View Live Mission** — active-mission viewer in the licensed Android Pilot app for remote live, timeline updates, and quick or manual event logging from a secondary device
- **Live Overwatch Screen** — relay connection panel in Mission Overwatch
- **Live stream (WebRTC)** — remote live viewing over the internet
- **AI live watch** — Mission Overwatch control that analyzes sampled remote-live frames and logs officer-review alerts when configured; it defaults on unless a saved mission choice disables it
- **Local AI** — on-device person, multiple-person, and possible-weapon detection that runs from relay frames; Controller Screen Capture can notify the pilot without internet
- **Automatic AI-alert review** — an officer must **Approve alert** or **Dismiss alert** before a Local AI or AI live-watch screenshot can be analyzed or used in a report
- **Mission tools** — quick events, typed manual events, and browser **Dictate** for active Internet missions
- **Timeline finding review** — accepted AI Review findings and analyzed AI-alert screenshots require **Accept as is** or **Review & edit** in the timeline before AAR use
- **Done — continue** — closed-mission action on Timeline, Media, and AI Review that records completion and advances to the next unfinished review step; Timeline removes remaining unaccepted AI candidates and AI Review rejects remaining undecided findings after confirmation
- **Official mission event** — a human-created event that has not been deleted, an approved automatic AI alert, or an accepted AI Review finding whose timeline analysis is officer-reviewed; use this set for counts, playback markers, reports, exports, and evidence-chain views
- **Quick events**, **scenario template**, **Items Requiring Officer Review**
- **Import mission** — Mission History action for creating a closed post-flight record from external footage and photos
- **Export offline package…**, **Export evidence package (JSON)**
- **Rename** — available from Mission History and Mission Overwatch until the report is submitted for approval
- **AI** — configured report drafting, media review, screenshot analysis, and live-watch assistance

---

## AlphaRelay Training Guide

AlphaRelay turns a field mission into a reviewable record: events, footage, after-action report, custody evidence, and export.

## Five-step workflow

1. **Set up devices** — Install the pilot app, activate the device license, and sign in to the web app.
2. **Start a mission** — Tap **Choose Mission Mode**, choose a scenario template, and tap **Start Mission**. Remote live starts automatically when the pilot device has validated internet. Android drone controllers use **Controller Screen Capture** by default; detected DJI SDK-controller setups can unlock **Pilot mode** after a supported-aircraft and live-connection check. With a DJI Avata and compatible DJI Goggles connected to an Android device, Goggles Mode starts the mission automatically.
3. **Watch and log events** — Use Mission Overwatch for remote live, AI live watch when configured, and command-side event logging. A second licensed Android device can use **View Live Mission** for a compact live view and event logging. On-device Local AI can create person and possible-weapon alerts for review.
4. **Review the mission** — Upload or sync footage, then follow Mission Overwatch through **Timeline**, **Media**, and **AI Review** when available. Use **Done — continue** after each review step; analyze media findings and use **Ask AI** when configured.
5. **Finalize the record** — Generate the report, seal evidence, submit for supervisor review, and export when ready. Submission locks review work; approval makes the record permanently read-only.

## Start here

- **New users:** AlphaRelay in plain English.
- **Pilots:** Start a mission from the pilot app.
- **Enterprise controllers:** Use AlphaRelay beside the controller flight app.
- **DJI Avata and DJI Goggles:** Relay the goggles live view through DJI Fly.
- **Overwatch users:** Watch and log in Mission Overwatch.
- **Android mission viewers:** Watch and support an active mission from a second licensed Android device.
- **On-device Local AI:** Configure person and possible-weapon detection on the pilot device.
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

The **pilot app** on an Android tablet, phone, or drone controller runs the mission, captures footage, and logs events. A second licensed Android device can use **View Live Mission** to watch an active mission and add events without controlling the aircraft. **Mission Overwatch** in a browser is where command staff watch live feeds, add events, review footage, build after-action reports, seal evidence, and export packages. The **Mission Dashboard** is the command home for finding missions and supervisor review queues.

## Basic flow

1. Start a live mission from the pilot app.
2. Watch live and log command-side events in Mission Overwatch when the pilot device is online.
3. End the mission when field work is complete.
4. Upload and review footage.
5. Generate the after-action report, seal evidence, and export.

## Mission connectivity

| Pilot-device state | What happens |
| --- | --- |
| Online | **Start Mission** creates the mission, syncs it, and starts remote **Live stream (WebRTC)** automatically. |
| Offline | The mission still records locally. Events, footage, and closeout work queue until connectivity returns. |

The current Pilot app does not present a **Local Network** mission button. A LAN relay may still appear in older or deployment-specific builds, but it is separate from the normal public workflow.

On Android drone controllers, the pilot app uses **Controller Screen Capture** by default. The controller's native flight app keeps flight control while AlphaRelay captures the controller screen, streams it into the mission, and records mission footage. On detected DJI SDK-controller setups, a listed and connected DJI aircraft can instead unlock **Pilot mode** for AlphaRelay flight controls.

With a DJI Avata and compatible DJI Goggles, AlphaRelay uses **Goggles Mode** on a separate Android device. DJI Fly displays the goggles live view, AlphaRelay starts a mission with no scenario, and the goggles with their compatible controller remain responsible for the aircraft.

Live missions start from the pilot app — not from the browser. For work that already happened outside AlphaRelay, **Import mission** in **Mission History** creates a closed post-flight record for review and reporting.

The pilot app also includes optional **Local AI** assistance for person, multiple-person, and possible-weapon alerts. Local inference can work without internet, but every alert still requires human review.

---

## The 5-Step Mission Workflow

Use this page as the full lifecycle map. Each step links to a deeper guide.

## 1. Set up devices

Install the pilot app, activate each Android device license, sign in to the web app, and open Mission Overwatch once while online on each browser profile that will use it in the field. A device used for **View Live Mission** needs its own licensed installation in the same organization.

→ Devices and licenses · Before you go to the field

## 2. Start a mission

Open the pilot app, tap **Choose Mission Mode**, name the mission, pick a scenario template (or **No scenario template**), then tap **Start Mission**. The current Pilot app creates an Internet mission and starts remote live automatically when the device has validated internet. If it is offline, the mission still starts and sync waits for connectivity. On Android drone controllers, AlphaRelay uses **Controller Screen Capture** by default so the controller's native flight app remains responsible for flight control. Detected DJI SDK-controller setups can instead unlock **Pilot mode** after a supported-aircraft and live-connection check. For a DJI Avata with compatible DJI Goggles, connect the goggles live view to DJI Fly first; Goggles Mode then starts the mission with no scenario automatically.

→ Start a mission · Mission connectivity · Controller Screen Capture · DJI Avata with DJI Goggles

## 3. Watch and log events

Open the active mission in Mission Overwatch and select **Live stream (WebRTC)**. When AI live watch is configured, Mission Overwatch can sample the remote stream and log alerts for officer review. A second licensed Android device can tap **View Live Mission** to watch remote live, follow the timeline, and add quick or manual events. The pilot app's Local AI can also create person and possible-weapon alerts while its relay or capture session is running.

The Command Center brings active mission state, remote-live or sync problems, automatic alerts awaiting review, and report follow-ups into one attention queue. Mission Overwatch refreshes the focused timeline as device and viewer events arrive.

→ View a live mission on Android · Watch in Mission Overwatch · Log events · On-device Local AI

## 4. Review the mission

End the mission, let footage upload or queue, then follow **Timeline** → **Media** → **AI Review** when available and use **Done — continue** after each completed step. Open **Play with Events** to check markers against video; adjacent Controller Screen Capture chunks play as one recording. When AI is configured, accept or reject suggested findings. An accepted finding moves to the timeline; use **Accept as is** or **Review & edit** there to make it officer-reviewed before it can enter the AAR. Open **Ask AI** inside AI Review to ask questions grounded in the mission imagery. For work captured outside AlphaRelay, use **Import mission** from **Mission History** to create a closed post-flight record first.

→ End a mission · Import a mission · Upload footage · Review footage

## 5. Finalize the record

Generate the after-action report with AI drafting when configured, resolve **Items Requiring Officer Review**, seal custody evidence, submit for supervisor approval, and export when the record is complete.

→ Generate a report · Seal the mission record · Export offline package

**Warning:** Sealing evidence and supervisor approval are separate steps. Sealing preserves custody hashes. Submitting the report locks timeline, media, mission-name, and AI-review changes while a supervisor decides; approval makes that lock permanent.

## AI across the workflow

- During an active remote stream, **AI live watch** samples frames and logs possible threat indicators for officer review.
- On the pilot device, **Local AI** can detect people and possible visible weapons from relay frames and create review alerts without internet.
- For an AI live-watch or Local AI alert, choose **Approve alert** to allow configured screenshot analysis and report eligibility, or **Dismiss alert** to exclude it. Then review any resulting analysis with **Accept as is** or **Review & edit**.
- Browser AI live watch and on-device Local AI coordinate ownership for the same mission. Local AI pauses while healthy browser analysis is active and resumes automatically when that handoff ends.
- After a synced mission closes, **AI Review** analyzes uploaded footage frames, photos, and event screenshots so you can accept or reject suggested findings. Accepted findings require timeline review before report use.
- Inside AI Review, **Ask AI** answers mission-specific questions from the available imagery and shows its confidence, supporting observations, limitations, and supporting evidence.

AI output is draft material. Verify every alert, finding, and answer against the live view or source media before using it in an operational decision, report, or evidence workflow.

Official event counts and evidence surfaces include every undeleted human-created event, approved automatic alerts, and officer-reviewed AI findings. Pending or dismissed automatic alerts and accepted AI Review findings without Timeline officer review remain review material only.

---

## Devices and Roles

| Role | Device | Responsibility |
| --- | --- | --- |
| Pilot | Pilot app (Android tablet, phone, or drone controller) | Starts missions, flies, logs field events, ends mission, uploads footage |
| Android mission viewer | Pilot app on a second licensed Android device | Watches active remote live, follows timeline events, and logs quick or manual events |
| Overwatch user | Browser — Mission Overwatch | Relay viewing, remote live, command-side events, review, report, seal, export |
| Reviewer / officer | Browser — Mission Overwatch | Checks timeline, footage, report draft, and custody |
| Supervisor | Browser — Mission Dashboard / Overwatch | Approves or returns after-action reports |
| Org admin | Browser — Organization page | Members, roles, licenses, time zone, storage |

## Android drone controllers

On Android drone controllers, the pilot device can run **Controller Screen Capture**. The controller's native flight app handles flight control while AlphaRelay captures the controller screen, streams it to the active mission, records controller-screen footage, and logs events.

On a detected DJI SDK-controller setup, AlphaRelay also presents **Pilot mode**. It remains locked until the operator confirms a listed DJI MSDK 5.17 aircraft and AlphaRelay verifies a live flight-controller connection. Pilot mode lets AlphaRelay own the DJI SDK connection and present direct flight and camera controls; availability still depends on the aircraft, controller, payload, firmware, and field validation.

For a DJI Avata with compatible DJI Goggles, the pilot operates through the goggles and their compatible controller. A separate Android phone or tablet runs DJI Fly and AlphaRelay **Goggles Mode** to relay and record the goggles live view.

## Secondary Android mission viewer

On a licensed Android phone, tablet, or controller, tap **View Live Mission** to choose an active mission from the same organization. The viewer shows remote video when available, refreshes the live timeline, and can log scenario quick events or manual events. It cannot start missions, control aircraft, or perform closed-mission review.

## Key rules

- Missions **always start from the pilot app's Start Mission workflow**, not Mission Overwatch or Mission Viewer.
- Open missions from **Mission Dashboard** (link may say **Open Mission Console**).
- The current Pilot app presents one **Start Mission** action and starts remote live automatically when validated internet is available.
- Mission Overwatch **Mission tools** remain available for active Internet missions, including quick events, typed manual events, and browser dictation.
- **Local Network** is a deployment-specific LAN relay path and is not presented by the current public Pilot app.
- **Controller Screen Capture** is automatic on integrated Android drone controllers and the recommended default on detected DJI SDK-controller setups; it is not a separate mission button.
- **Pilot mode** is an explicit alternative on eligible DJI SDK-controller setups and requires supported-aircraft confirmation plus a successful live connection check.
- **Goggles Mode** starts a mission automatically when a prepared Android device detects compatible DJI Goggles over USB.
- **View Live Mission** requires internet and a separate valid Pilot-app license; only active missions in that license's organization appear.

---

## Mission Connectivity

The current Pilot app presents one **Start Mission** action. It creates an Internet mission and automatically starts **Live stream (WebRTC)** when the pilot device has validated internet.

## Online mission

Use the normal **Start Mission** workflow on cellular, Wi-Fi, Ethernet, or VPN internet.

- Mission metadata and events sync to the cloud.
- Remote live starts automatically.
- Mission Overwatch can watch live and log quick, typed, or dictated events.
- Footage may upload during closeout or continue from the durable upload queue.

## Offline mission

If validated internet is unavailable, **Start Mission** still begins local capture and event logging. Remote live cannot start, and cloud work waits in the sync and footage queues. When connectivity returns, queued Android footage resumes automatically; mission metadata and events also retry through the normal sync path.

## Deployment-specific Local Network relay

The current public Pilot app does not show a **Local Network** mission button. Some older or deployment-specific builds may expose **Local Network** and **Live Overwatch Screen** for same-Wi-Fi relay viewing. In those builds:

- The pilot and Mission Overwatch devices must share a reachable Wi-Fi network.
- **Live Overwatch Screen** connects to the pilot device by LAN IP.
- Remote live and cloud sync remain separate internet paths.

## Quick decision

| Situation | Workflow |
| --- | --- |
| Pilot device has internet | **Start Mission**; remote live starts automatically |
| No usable internet | **Start Mission**; capture locally and sync later |
| Remote viewers need live video | Keep the pilot device online and open **Live stream (WebRTC)** in Mission Overwatch |
| A second licensed Android device needs a compact live view | Tap **View Live Mission**; internet is required for the mission list, timeline, events, and video |
| Your deployment exposes **Local Network** | Use its LAN relay instructions on the same reachable Wi-Fi |

**Note:** Remote live and cloud sync use internet. A deployment-specific LAN relay uses local Wi-Fi and is a separate connection path.

See Connectivity for what requires internet vs local Wi‑Fi.

## Controller Screen Capture

On integrated Android drone controllers, AlphaRelay enters **Controller Screen Capture** after **Start Mission**. On detected DJI SDK-controller setups, it is the recommended default beside the optional verified **Pilot mode**. Controller Screen Capture changes the live source and aircraft-control behavior, not the mission-start action.

In this mode, the controller's native flight app controls the aircraft while AlphaRelay captures the controller screen, streams it to the mission, records screen footage, and logs events.

→ Controller Screen Capture

## DJI Avata with DJI Goggles

Goggles Mode requires internet for remote live and sync. On a prepared Android device, a wired connection to compatible DJI Goggles turns on the mode automatically, bypasses mission and scenario selection, and starts remote live from the DJI Fly goggles view.

→ DJI Avata with DJI Goggles

---

## Controller Screen Capture

Controller Screen Capture lets AlphaRelay run beside the native flight app on Android drone controllers. The controller's native flight app remains responsible for aircraft operation; AlphaRelay captures the controller screen, streams it into the mission, records mission footage, and logs events.

This is the recommended capture path. On integrated Android drone controllers it turns on automatically after **Start Mission**. On a detected DJI SDK-controller setup, choose **Controller Screen Capture — Recommended** instead of **Pilot mode** when the native flight app should stay in control.

**Note:** Using a DJI Avata with compatible DJI Goggles and a separate Android phone or tablet? Follow the dedicated DJI Avata with DJI Goggles workflow instead.

## Where it is available

Controller Screen Capture is available on Android-based drone controllers that can install **AlphaRelay Pilot** and grant Android screen capture permission. It is not limited to one controller manufacturer.

AlphaRelay detects known drone-controller identity strings, including DJI RC / RC Pro / RC Plus / RM / Matrice controller families, Autel smart controllers, Herelink / CubePilot controllers, and Inspired Flight GS-ONE controllers. Generic Android phones, tablets, and rugged tablets use the normal pilot workflow unless they are connected to compatible DJI Goggles or Goggles Mode is enabled manually.

When the Android pilot device is connected to a detected DJI SDK remote controller, the mission screen also offers **Pilot mode**. AlphaRelay does not select it automatically: the operator must confirm a listed DJI MSDK 5.17 aircraft, and AlphaRelay must verify a live flight-controller connection before **Start Mission** unlocks. See Start a mission for the current 12-aircraft catalog and verification steps.

## Install on a controller

You do not need to enable Android Developer mode to install AlphaRelay.

1. Connect the controller to internet.
2. Open the controller web browser.
3. Download **AlphaRelay Pilot** from the dashboard app download link. If needed, open [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html) directly.
4. When Android asks about installing unknown apps, allow the browser or file manager to **install unknown apps** from that source.
5. Install and open **AlphaRelay Pilot**.
6. Grant requested permissions.
7. Activate the app with the short controller pairing code generated by an admin, or use another device license method from Devices and Licenses.

## What changes

- The controller's native flight app remains responsible for flight, camera, and safety controls.
- AlphaRelay disables direct aircraft commands in the pilot app.
- The live source becomes the controller screen instead of an in-app aircraft camera preview.
- **Takeoff**, **Land**, camera controls, and other aircraft commands in AlphaRelay are blocked.
- Controller screen recordings are saved in chunks and queued for upload after the mission.
- Voice relay can still create timeline events when microphone permission is granted.
- On-device **Local AI** can sample the captured controller screen and create person, multiple-person, or possible-weapon alerts for review.

## Start a mission

1. Open AlphaRelay on the supported controller.
2. Tap **Choose Mission Mode**.
3. Name the mission and choose a scenario template if needed.
4. If AlphaRelay shows a capture-mode chooser, keep **Controller Screen Capture — Recommended** selected.
5. Tap **Start Mission**.
6. Approve the Android screen capture prompt.
7. Wait for AlphaRelay to move itself to the background.
8. Open or return to the controller's native flight app and fly from there.

If the controller has validated internet, AlphaRelay starts **Live stream (WebRTC)** automatically before it requests screen capture. If the controller is offline, capture still starts and remote live is skipped; sync and footage upload wait for connectivity.

AlphaRelay starts a foreground capture service before it leaves the screen. The controller-screen recording begins after AlphaRelay is no longer the foreground app, so return to the native flight app before takeoff or before the operational portion you want to capture.

Use the controller's native flight app for flight operation. Use AlphaRelay for mission start, event logging, relay / remote live setup, and mission closeout.

## What to expect on the controller

- Android shows a persistent **Controller Screen Capture** notification while screen capture is running.
- The notification status may say **Starting controller screen capture**, **Waiting for AlphaRelay to close**, **Recording controller screen**, or the current mission-capture state.
- AlphaRelay captures whatever is visible on the controller screen. If you open Android settings, the notification shade, or AlphaRelay itself, that screen is part of the recording until you return to the native flight app.
- If the controller shows a screen-recording or screen-casting indicator, leave it enabled for the mission. Turning it off stops screen capture.

## During the mission

- **Live stream (WebRTC)** publishes the controller screen to remote Overwatch users when the pilot device has internet.
- Say `relay` followed by event details to create a voice relay event. AlphaRelay saves a current controller-screen screenshot with the event when available.
- When Local AI is enabled, inference and direct Android alerts work on the controller without internet. Timeline sync and cloud screenshot analysis still wait for connectivity.
- If you need AlphaRelay controls during the mission, return to AlphaRelay from recent apps or the notification, make the update, then return to the native flight app. The recording follows the visible screen.

## Stop and upload

After the flight, close the mission from AlphaRelay or from the notification:

1. Land and finish any required work in the native flight app.
2. Pull down the Android notification shade.
3. Find the **Controller Screen Capture** notification.
4. Tap **Stop Mission**.
5. Let AlphaRelay reopen and finish mission closeout.

The notification action uses the same closeout path as the in-app **Stop Mission** button. AlphaRelay finalizes the current controller-screen recording chunk, queues recordings for upload, closes the mission record, and removes the foreground capture notification when capture has stopped.

If you are already in AlphaRelay, tap **Stop Mission** there instead. Do not force-close AlphaRelay or stop Android screen capture as the normal closeout method.

Queued recordings are stored durably and resume uploading automatically when validated internet returns, including after the app process restarts. Keep the controller powered on, and do not force-stop or uninstall AlphaRelay while uploads are pending.

## Limits

- AlphaRelay does not fly the aircraft in Controller Screen Capture.
- The captured footage is the controller screen, including native flight-app overlays, not a raw camera file.
- Android screen capture permission is required every time capture starts.
- If microphone permission or speech recognition is unavailable, voice relay is disabled but screen capture can still run.
- Controller-screen overlays can affect Local AI. AlphaRelay filters fixed HUD rails and repeated boxes, but every alert still requires human review.

→ Start a mission · On-device Local AI · Watch in Mission Overwatch · Upload footage

---

## DJI Avata with DJI Goggles

Use **Goggles Mode** to run an AlphaRelay mission with a DJI Avata, compatible DJI Goggles, and a compatible controller. The goggles and controller remain responsible for the aircraft. A separate Android phone or tablet receives the goggles live view in DJI Fly, and AlphaRelay captures that DJI Fly screen for remote live viewing, event screenshots, and mission footage.

**Note:** This workflow differs from Controller Screen Capture on an Android drone controller. The DJI Avata workflow uses DJI Fly on a separate Android device instead of a native flight app on an Android drone controller.

## What you need

- A DJI Avata, compatible DJI Goggles, and a compatible motion or FPV remote controller, powered on, activated, updated, and linked
- An Android phone or tablet with both **DJI Fly** and **AlphaRelay Pilot** installed
- An active AlphaRelay device license
- Android screen capture permission
- Internet on the Android device for mission sync, remote live, and footage upload
- For the automatic wired workflow: a compatible USB data/OTG cable for the goggles and Android device

Run a complete test mission with the same phone, cables, and network before operational use.

## Install and activate the Android apps

1. Install **DJI Fly** on the Android device from DJI's official [DJI Fly download page](https://www.dji.com/downloads/djiapp/dji-fly).
2. Download **AlphaRelay Pilot** from [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html).
3. If Android prompts for unknown-source installation, allow the browser or file manager to **install unknown apps** from that source.
4. Open AlphaRelay Pilot, grant the requested permissions, and activate it with the device license or short controller pairing code.

Android Developer mode is not required. See Devices and Licenses for all AlphaRelay activation options.

## Show the goggles live view in DJI Fly

Live-view sharing options vary by goggles model. Confirm that DJI supports your exact aircraft, goggles, and controller combination in [DJI's compatibility guide](https://repair.dji.com/help/content?customId=01700010143&lang=en&paperDocType=ARTICLE&re=US&spaceId=17), then follow the manufacturer's instructions to show the goggles live view in DJI Fly on the Android device.

### Wired — recommended for automatic detection

1. Power on the DJI Avata, DJI Goggles, and paired controller. Confirm the aircraft and controls are linked.
2. Connect the goggles to the Android device using the compatible USB data/OTG cable for your hardware.
3. Open **DJI Fly** on the Android device.
4. Tap **GO FLY** and confirm that the goggles live view appears on the Android screen.

AlphaRelay can identify compatible DJI Goggles over the wired USB connection and turn on Goggles Mode automatically.

### Wireless

1. In the DJI Goggles, start wireless live-view sharing using the option provided by your goggles model.
2. On the Android device, turn on Wi-Fi, Bluetooth, and Location.
3. Open DJI Fly, select the goggles from the connection prompt, and tap **Watch Liveview**.
4. The first time you connect, follow the DJI Fly prompt to confirm the goggles connection.

Wireless sharing uses the Android device's Wi-Fi connection. Keep cellular data available for AlphaRelay remote live, mission sync, and upload.

If Goggles Mode does not turn on automatically during a wireless connection, open **Choose Mission Mode**, enable **Use DJI Fly / goggles video feed**, choose **No scenario template**, and tap **Start Mission**. The setting remains enabled for the next DJI Avata mission; turn it off when returning to the normal phone or tablet workflow.

## Start the AlphaRelay mission

With the DJI Fly live view working:

1. Open **AlphaRelay Pilot** on the same Android device.
2. Complete any first-time permission or license prompts.
3. If Android asks to share or record the screen, approve the screen capture request.
4. Wait for AlphaRelay to start capture and return you to DJI Fly.
5. Confirm that the DJI Fly live view is visible again before takeoff.

When compatible DJI Goggles are detected over USB, AlphaRelay skips mission and scenario selection. It automatically:

- Starts a cloud-backed mission with no scenario template
- Starts remote **Live stream (WebRTC)**
- Captures the DJI Fly screen
- Opens DJI Fly after screen capture is ready

Android requires screen capture approval each time a new capture starts. AlphaRelay cannot bypass that system prompt.

## During the mission

- Fly only with the DJI Goggles and their paired controller. AlphaRelay does not control the DJI Avata.
- Keep DJI Fly in the foreground so the captured view remains the goggles live feed.
- Mission Overwatch users can open **Live stream (WebRTC)** to watch over the internet.
- Say `relay` followed by event details to create a voice relay event when microphone permission is granted. AlphaRelay can attach the current DJI Fly screen to the event.
- Do not disconnect the goggles cable, stop Android screen capture, or force-close AlphaRelay during the mission.

AlphaRelay captures whatever is visible on the Android screen. Opening settings, notifications, or another app changes what remote viewers see and what AlphaRelay records until you return to DJI Fly.

## Stop and upload

After landing:

1. Finish any required aircraft actions in DJI Fly.
2. Pull down the Android notification shade.
3. Find the **Controller Screen Capture** notification.
4. Tap **Stop Mission**.
5. Let AlphaRelay reopen and complete mission closeout.
6. Keep the Android device powered on while queued footage remains. Upload resumes automatically when validated internet returns.

The notification uses the shared capture-service name **Controller Screen Capture**, even during a DJI Avata Goggles Mode mission.

When you stop the mission, AlphaRelay finalizes an MP4 from the live frames it captured from DJI Fly and queues that footage for upload. It does not pull video from the DJI Avata's internal storage or microSD card.

## Limits

- This workflow records the DJI Fly screen, including overlays, not the original aircraft camera file.
- Goggles Mode uses the cloud-backed mission workflow; the current Pilot app does not present a Local Network mission option.
- Remote live, cloud sync, and upload require a usable internet connection on the Android device.
- Android screen capture permission is required each time capture starts.
- If DJI Fly is not installed, AlphaRelay cannot open it automatically.
- If you need the original aircraft recording, copy it from the DJI Avata after the flight and use **Mission Footage → Upload MP4** in the closed mission.

→ Watch in Mission Overwatch · End a mission · Upload footage

---

## First Training Mission

Run a short test mission to learn the workflow end to end.

## Steps

1. Tap **Choose Mission Mode** in the Pilot app.
2. Name the mission `Training mission` and pick a scenario template or **No scenario template**.
3. Tap **Start Mission** and confirm remote live starts automatically when the pilot device is online.
4. Open the mission from Mission Dashboard and select **Live stream (WebRTC)**.
5. If the team will use an Android Mission Viewer, open AlphaRelay Pilot on the second licensed device, tap **View Live Mission**, and confirm video and timeline updates.
6. Add one event from the pilot app (quick event button or voice: `relay `).
7. Add one event from Mission Overwatch. Try **Dictate**, review the transcript, then click **Log Manual Event**.
8. If Local AI will be used, confirm it is enabled under **Pilot console → Flight → Local AI** and perform a safe person-detection check. Do not simulate a weapon alert with a real weapon.
9. Run a short, safe exercise.
10. Tap **Stop Mission** on the pilot device.
11. Confirm footage uploaded or is queued (see upload banner / status).
12. Review the Timeline. For each test Local AI or AI live-watch alert, practice **Approve alert** or **Dismiss alert**. Review any available image analysis with **Accept as is** or **Review & edit**, then click **Done — continue**.
13. Under **Media**, open **Play with Events**, confirm markers appear, and click **Done — continue** after checking footage and photos.
14. If AI Review is configured, accept one safe test finding, reject the rest, and click **Done — continue**. Return to Timeline if the accepted finding reopens it for officer review.
15. Generate the after-action report and walk through seal / approval / export if your workflow uses them.

## Debrief

- Did the mission and remote live start as expected for the available connectivity?
- Did events appear on the timeline?
- Did the Android Mission Viewer show the active mission and stop event logging after close?
- Did Local AI avoid repeated alerts for one continuously visible test subject?
- If browser AI live watch became active, did the Local AI metrics line show the handoff and later resume?
- Was footage available or queued as expected?
- Did adjacent Controller Screen Capture chunks continue as one recording?
- Were any AI-derived timeline findings reviewed before report generation?
- Was the report understandable before submission?

Repeat this exercise when devices, networks, or aircraft change.

---

## Before You Go to the Field

## Checklist

1. Charge the pilot tablet, phone, or drone controller and confirm aircraft/controller are ready.
2. Install or update the **pilot app** from [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html).
3. Confirm the **device license** is active (scan QR, enter an `ar-…` key, or use a non-expiring one-installation pairing code).
4. Sign in to the web app with the correct operator account.
5. Open **Mission Overwatch** once while online on each browser that will use it in the field (installs the offline app shell).
6. Run a test **Start Mission** flow and confirm remote live starts automatically when the pilot device is online.
7. Confirm the Mission Overwatch browser can use its microphone if the team plans to use **Dictate** for manual events.
8. If a second Android device will use **View Live Mission**, activate its own license and test that it can see an active mission, remote video, and timeline events.
9. If Local AI will be used, grant Android notification permission, confirm the intended settings under **Pilot console → Flight → Local AI**, and run a safe detection test.
10. For Android drone controllers: install AlphaRelay Pilot, activate the device license, run a test **Controller Screen Capture** mission, and confirm Android screen capture permission works. If the crew will use **Pilot mode**, also confirm the aircraft appears in the supported list and passes AlphaRelay's live connection check.
11. For a DJI Avata with compatible DJI Goggles: install DJI Fly and AlphaRelay Pilot on the Android device, test the supported goggles live-view connection, and confirm remote live and post-mission upload.
12. Check for older queued video on the Pilot-app startup screen and let it finish, or consciously choose **Skip for now and start new mission**.
13. Plan for internet when you need remote live, Android Mission Viewer, sync, upload, reports, or export.
14. Assign pilot, overwatch user, reviewer, and supervisor roles.

## Connection quick reference

| Need | Requirement |
| --- | --- |
| Remote live (**Live stream (WebRTC)**) | Pilot device has validated internet; live starts automatically with the mission |
| Cloud sync / upload / reports | Internet on the active device |
| Field work with no internet | Supported; data queues until sync |
| Deployment-specific LAN relay | Same reachable Wi-Fi between pilot device and Overwatch |

**Warning:** The current public Pilot app does not present a Local Network mission button. If your deployment exposes a LAN relay, it needs local Wi-Fi reachability and remains separate from internet sync.

Pilots can hide on-screen drone controls and use the physical controller while keeping quick events and relay status visible. See Minimum requirements for device specs.

---

## Start a Mission

Missions always start from the **Pilot app**. Mission Overwatch cannot start missions.

## Steps

1. Open the pilot app on the Android tablet, phone, or drone controller.
2. Tap **Choose Mission Mode**.
3. Enter a mission name if useful.
4. Select a scenario category and template, or **No scenario template**.
5. Tap **Start Mission**.
6. Complete the license check if prompted.
7. If Android asks to share or record the screen, approve the prompt.
8. Fly from the Pilot app or the controller's native flight app, depending on the device. Use quick events and **Stop Mission** when finished.

The current Pilot app starts an Internet mission. When Android reports validated internet, AlphaRelay starts **Live stream (WebRTC)** automatically. If the device is offline, the mission still starts and stores work for later sync; start remote live from **Pilot console → Mission** if internet becomes available during the mission.

When supported Matrice aircraft or controllers are detected, the pilot app may show additional camera tools such as wide/zoom/thermal source selection, visible zoom presets, thermal zoom, laser rangefinder, linked zoom, thermal super-resolution, or laser fill light. Validate those controls with the actual aircraft, payload, controller, and firmware before operational use.

On integrated Android drone controllers, the pilot app uses **Controller Screen Capture** automatically. Approve the Android screen capture prompt, then operate the aircraft in the controller's native flight app. AlphaRelay records and streams the controller screen instead of taking over flight controls.

On a detected DJI SDK-controller setup — for example, an RC-N-series remote connected to the Android pilot device — the mission screen presents two choices:

- **Controller Screen Capture — Recommended** keeps the flight app in control while AlphaRelay captures the visible controller screen.
- **Pilot mode** gives AlphaRelay the DJI SDK connection and direct aircraft controls. It stays locked until you confirm a listed aircraft and AlphaRelay verifies that aircraft's live connection.

For a DJI Avata with compatible DJI Goggles, first show the goggles live view in DJI Fly on the Android device. When Goggles Mode is active, opening AlphaRelay skips these mission-selection steps, starts a mission with no scenario, starts remote live, requests screen capture, and returns to DJI Fly.

## Remote live

- Works over validated cellular, Wi-Fi, Ethernet, or VPN internet on the pilot device
- Starts automatically with the mission when internet is available
- Lets Mission Overwatch users watch and log events without a LAN connection to the pilot device
- Can be started or retried from **Pilot console → Mission** if automatic setup is skipped or fails

The **Local Network** mission button is not presented in the current Pilot app. See Mission connectivity if your deployment still exposes the LAN relay workflow.

## Choose Controller Screen Capture or Pilot mode

Use **Controller Screen Capture — Recommended** when the native flight app should retain flight and camera operation, when the aircraft is not in the Pilot mode list, or when AlphaRelay cannot verify a live supported-aircraft connection. This path blocks AlphaRelay aircraft commands, records controller-screen footage in chunks, and queues upload after **Stop Mission**.

To use **Pilot mode** on an eligible setup:

1. Select **Pilot mode**.
2. Open **See all 12 compatible drones with photos** and check the aircraft family.
3. Tap **My drone is listed — Use Pilot**.
4. Keep the aircraft and controller powered on and connected while AlphaRelay checks the live DJI flight-controller connection.
5. Wait for **Supported aircraft confirmed. Pilot mode is ready.** before tapping **Start Mission**.

The Pilot app's DJI MSDK 5.17 catalog includes:

- DJI Mini 3
- DJI Mini 3 Pro
- DJI Mini 4 Pro
- DJI Mavic 3 Enterprise (3E / 3T)
- DJI Mavic 3M
- DJI Mavic 3TA
- DJI Matrice 30 Series (M30 / M30T)
- DJI Matrice 300 RTK
- DJI Matrice 350 RTK
- DJI Matrice 4 Series (4E / 4T)
- DJI Matrice 4D Series (4D / 4TD)
- DJI Matrice 400

If the aircraft is not listed, the SDK is unavailable, or the live check fails, keep **Controller Screen Capture** selected and fly from the native flight app. A catalog entry is not a substitute for a successful connection check or field validation with the installed controller, aircraft, payload, and firmware.

## DJI Avata with DJI Goggles

- Runs on a separate Android phone or tablet with DJI Fly
- Uses the DJI Fly goggles live view as the live and recorded source
- Starts the mission and remote live automatically with no scenario template
- Uses compatible DJI Goggles and their paired controller for aircraft operation
- Finalizes and queues captured DJI Fly footage after **Stop Mission**

## After start

- The mission appears in **Mission Dashboard** after cloud sync.
- Footage and events may upload during or after the mission depending on connectivity.
- Tap **Stop Mission** in the pilot app (or **Close Mission** in Mission Overwatch) when field work is done.

→ Watch in Mission Overwatch · Controller Screen Capture · DJI Avata with DJI Goggles · Connectivity

---

## View a Live Mission on Android

Use **View Live Mission** on a second Android phone, tablet, or controller when a team member needs a compact live view without opening the browser workspace. The viewer can watch remote video, follow the live timeline, and log events. It does not start the mission or control the aircraft.

## What you need

- **AlphaRelay Pilot** installed and activated on the viewing device
- A device license for the same organization as the mission
- Internet on the viewing device
- An active mission; remote **Live stream (WebRTC)** must be ready for video

## Steps

1. Open AlphaRelay Pilot on the viewing device.
2. Tap **View Live Mission** on the startup screen.
3. Choose an active mission. If only one is available, AlphaRelay opens it automatically.
4. Watch the live video and timeline. If remote video has not started yet, mission events continue updating.
5. Use a scenario quick-event button or enter an event under **Add mission event…**, then tap **Log event**.
6. Tap **Switch mission** to choose another active mission.

New AI live-watch alerts can appear as a highlighted alert in the viewer. Treat them as review prompts, not confirmed findings.

## When the mission ends

The viewer stops live playback, disables event logging, and leaves the timeline read-only. Use browser-based Mission Overwatch for footage review, AI Review, reporting, custody, and export.

## Limits

- The Android viewer is an internet workflow; it does not connect to the deployment-specific Local Network relay.
- Only active missions from the licensed organization appear.
- Timeline events can update before remote video is ready.
- The viewing device needs its own valid AlphaRelay Pilot installation and license seat.

→ Watch in Mission Overwatch · Log events · Devices and licenses

---

## Watch in Mission Overwatch

Mission Overwatch is the per-mission browser workspace. Open it from **Mission Dashboard** by selecting a mission (the dashboard may label this **Open Mission Console**).

Sign in at [alpha-relay.com](https://www.alpha-relay.com). The page shell can reopen after an online visit, but active Internet missions, remote live, cloud event logging, and synced review require connectivity.

Mission Overwatch adapts to phone and tablet browsers, including lifecycle status, closed-mission actions, metadata, and report controls. A desktop-sized screen is still easier for long footage and report reviews.

## Remote live — Live stream (WebRTC)

When the Pilot app starts a mission with validated internet, it starts remote live automatically. Open the active mission and select **Live stream (WebRTC)** to watch it.

If the mission began offline or remote-live setup failed, restore internet and use **Pilot console → Mission → Start remote live** to retry.

- In **Controller Screen Capture**, remote live publishes the controller screen.
- In **Goggles Mode**, remote live publishes the DJI Fly screen carrying the DJI Goggles live view. Keep the Android device online.

## Mission tools

**Mission tools** remain available for an active Internet mission even though the LAN relay panel is hidden.

- Use scenario quick-event buttons for common events.
- Type a note under **Manual Event (fast)** and click **Log Manual Event**.
- Or tap **Dictate**, allow microphone access, speak the event, review the transcript, and click **Log Manual Event**.

Dictation depends on browser speech-recognition support. If it is unavailable or blocked, manual typing still works.

## Deployment-specific Local Network relay

The current public Pilot app does not present a **Local Network** mission option. If an older or deployment-specific build exposes **Live Overwatch Screen**, connect it to the pilot device on the same reachable Wi-Fi by scan or LAN IP. That LAN path is separate from remote live and cloud sync.

## AI live watch

When configured and remote live is active, Mission Overwatch can show **AI live watch** next to the live feed controls. It defaults on unless a saved mission choice turns it off. It samples frames from **Live stream (WebRTC)** and logs mission timeline alerts only when AI flags a possible threat indicator for officer review.

The current default cadence can start a new sample as often as every two seconds. Network and analysis time can make the effective interval longer, and AlphaRelay does not overlap analysis requests.

AI live watch alerts can show:

- An **AI live alert** or **Urgent AI live alert** banner in Mission Overwatch
- A timeline event with the sampled frame attached when available
- A **LIVE AI ALERT - REVIEW NOW** badge and log entry in the pilot app while the same mission is active

When browser AI live watch is successfully analyzing the same mission, the Pilot app pauses on-device Local AI to avoid duplicate automatic alerts. The Local AI metrics line reports this handoff and the on-device detector resumes automatically if browser analysis stops or the handoff expires.

Before a Local AI or AI live-watch alert can trigger configured screenshot analysis or enter a report, an officer must choose **Approve alert**. Choose **Dismiss alert** when the alert should be excluded. If an approved screenshot returns an analysis finding, it remains pending until an officer selects **Accept as is** or **Review & edit**. Unapproved, dismissed, and unreviewed findings do not enter the AAR narrative.

Treat these alerts as prompts for human review. They do not replace pilot judgment, command staff review, or final report approval.

## Closed missions

After **Stop Mission**, Mission Overwatch switches to review tabs: timeline, media and **Play with Events**, **AI Review**, and report. The lifecycle tracker moves through **Mission Review**, **Draft AAR**, **Evidence Sealed**, **Supervisor Review**, and **Approved & Locked**, and its next-action prompt changes as review work is completed.

Follow the guided review sequence:

1. Resolve Timeline alerts and findings, then click **Done — continue**.
2. Review footage and photos under **Media**, then click **Done — continue**.
3. Analyze and decide AI findings when AI Review is available, then click **Done — continue**.
4. Continue to **Report**.

Completing Timeline review keeps human-created and approved AI events but permanently removes remaining unaccepted AI candidates after confirmation. Completing AI Review keeps accepted or edited findings and rejects remaining undecided findings after confirmation. A newly synced pending item reopens the affected review step.

AI Review includes post-mission media findings and **Ask AI** questions grounded in uploaded mission imagery. Findings accepted in AI Review move to the timeline for final officer review before report use.

Closed-mission timelines render chronologically, with the oldest event at the top and the latest at the bottom. Closed missions show historical content only; Mission Overwatch stops remote-live playback and background live-stream retries after the mission closes.

While Mission Overwatch remains open, the focused mission timeline refreshes with device alerts, Android Mission Viewer events, screenshot status, and mission-close state. New alert rows can appear before their screenshots finish syncing, and these focused refreshes do not restart footage that is already playing.

Mission creators and org admins can use **Rename** in Mission Overwatch to correct the mission name before the report is submitted. Submitted and approved missions are read-only and cannot be renamed.

## View from a licensed Android device

For a compact active-mission view, open AlphaRelay Pilot on a second licensed Android device and tap **View Live Mission**. It can watch remote live, follow timeline updates, and log quick or manual events. Closed-mission review stays in Mission Overwatch.

→ View a live mission on Android

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
- **Local AI** person, multiple-person, and possible-weapon auto-tags when on-device detection is enabled — review these before treating them as facts

In **Controller Screen Capture**, voice relay can save a controller-screen screenshot with the event when screen capture is active.

**Mission Overwatch**

- Use **Event Logging** quick buttons (match the scenario template labels)
- Use **Manual Event (fast)** for free-text notes
- Tap **Dictate**, speak the event, review the transcript, and click **Log Manual Event** when the browser supports speech recognition
- These Mission tools remain available for active Internet missions; they do not require a Local Network relay

**Android Mission Viewer**

- On a second licensed Android device, tap **View Live Mission** and choose the active mission
- Use scenario quick-event buttons or enter a note under **Add mission event…**
- Viewer events join the same mission timeline; logging turns off when the mission ends

Screenshots from the live feed are captured automatically when the workflow supports them. Local AI screenshots can include yellow detection boxes.

Mission Overwatch refreshes the focused shared timeline while the page is open. Events logged by the Pilot app or Android Mission Viewer and automatic device alerts can appear without a page reload; an alert can appear before its screenshot finishes syncing.

For a Local AI or AI live-watch alert, choose **Approve alert** in the timeline before configured screenshot analysis or report use can proceed. Choose **Dismiss alert** to exclude the event from the report. If approved analysis returns a finding, use **Accept as is** or **Review & edit** after checking the source image.

## Official event eligibility

- Human-created quick, typed, dictated, voice-relay, viewer, and footage-tag events are official mission events unless a user deletes them.
- Automatic Local AI and AI live-watch alerts become official only after **Approve alert**.
- Accepted AI Review findings become official only after **Accept as is** or **Review & edit** on the Timeline.
- Pending or dismissed automatic alerts and accepted AI Review findings without Timeline officer review stay out of official event counts, playback markers, reports, offline exports, and evidence-chain views.

Pending and dismissed alerts may remain visible in the Timeline and Command Center so a reviewer can understand what was evaluated. **Done — continue** on Timeline or sealing the mission permanently removes AI candidates that never became official; it does not remove human-created events.

**Note:** Browser dictation uses the browser's speech-recognition capability. Allow microphone access when prompted. If dictation is unavailable, blocked, or cannot reach the browser speech service, type the event instead.

## After the mission

1. Open **Play with Events**.
2. Scrub to the relevant frame.
3. Enter an **Event name** and click **Tag event**.

AlphaRelay adds the event to the mission log, stores a screenshot from that frame, and links it to the timeline.

Resolve event timing against footage before generating the final report. For any AI-derived image analysis on the timeline, choose **Accept as is** or **Review & edit** before report generation.

→ On-device Local AI · View a live mission on Android

---

## Use On-Device Local AI

**Local AI** samples the pilot app's relay frames and creates review-oriented mission alerts on the Android device. The current pilot app includes a person-and-visible-weapon model and enables on-device detection by default.

Local inference can work without internet. During Controller Screen Capture, the immediate Android notification also works without internet. The relay or capture session must be running, and cloud sync still needs connectivity.

## Current alert types

- **Person detected**
- **Multiple persons detected**
- **Possible weapon detected**

These are assistive detections, not operational conclusions. A possible-weapon alert does not establish that an object is a weapon, who possesses it, intent, legality, or threat level.

## Configure Local AI

1. Open **Pilot console → Flight → Local AI**.
2. Turn **Enable on-device detection** on or off.
3. Adjust the sample rate, minimum detection score, confirmation window, or cooldown only after testing the change.
4. Tap **Save local AI settings**.
5. Start the mission relay or Controller Screen Capture and watch the Local AI metrics line for inference and event activity.

During Controller Screen Capture, grant Android notification permission if the pilot should receive immediate on-controller alerts. A possible-weapon detection uses the urgent alert style.

Local AI and browser AI live watch coordinate alert ownership for the same online mission. After browser live watch completes a healthy analysis, the Pilot app pauses its local detector and shows **Local AI: paused while browser Live AI is active** in the metrics line. If browser analysis stops, the browser closes, or connectivity is lost, the short handoff expires and on-device Local AI resumes automatically.

## What happens after a detection

AlphaRelay can create a timeline event with an annotated screenshot. Yellow boxes mark the detected person or object when a usable box is available. Person, group, and possible-weapon alerts track screen regions so one continuously visible subject is not logged over and over; a new subject elsewhere can still create a new alert.

In Controller Screen Capture, AlphaRelay filters small person boxes inside fixed flight-app HUD rails and collapses overlapping boxes around the same person. These filters reduce repeated and HUD-driven alerts, but they do not eliminate false positives or missed detections.

When the full-frame pass does not already find a qualifying possible weapon, AlphaRelay can spend one additional high-detail pass around a weak weapon candidate or detected person before falling back to a frame region. This improves review coverage for smaller objects without making the detector conclusive.

AlphaRelay captures the evidence screenshot before posting the audible Android alert. The heads-up alert dismisses automatically after about three seconds, while the mission Timeline event remains available for review. On-device notifications also retain a 45-second cooldown for the same alert title.

## Review an alert in Mission Overwatch

1. Open the mission **Timeline**.
2. Compare the alert and screenshot with the live view or source footage.
3. Choose **Approve alert** to allow configured screenshot analysis and report eligibility, or **Dismiss alert** to exclude it from the report.
4. If approved screenshot analysis returns a finding, choose **Accept as is** or **Review & edit** before it can enter the after-action report narrative.

This is a two-stage review: approving the alert allows analysis and report consideration; reviewing the resulting image analysis makes the finding officer-owned.

## Limits

- Local AI runs only while the relay or capture session supplies frames.
- Healthy browser AI live watch temporarily owns automatic detection for the same mission; the on-device detector remains the fallback and resumes automatically.
- Internet is not required for inference, but synced timeline screenshots, cloud analysis, and reporting require connectivity.
- Small, blurred, distant, dark, partially hidden, or unusual objects may be missed. Tools, toys, sporting equipment, and silhouettes may be false positives.
- The bundled model has not been validated on real DJI Controller Screen Capture footage or broad field conditions. Do not treat held-out model tests as field performance.
- Local AI does not determine identity, intent, policy compliance, criminal activity, injury, or whether an area is clear.

→ Log events · Review footage · Known limitations

---

## End a Mission

## Steps

1. Tap **Land** on the pilot device when appropriate.
2. Follow normal landing and safety procedures.
3. Tap **Stop Mission** in the pilot app when field work is complete.
4. Optionally tap **Close Mission** from the **Mission** card in Mission Overwatch.
5. Check the upload or queue status before powering off the pilot device.

## What happens

- The relay session ends with the mission.
- SD recording stops after a successful land when supported.
- In **Controller Screen Capture**, AlphaRelay finalizes controller-screen recording chunks instead of pulling aircraft SD video.
- In **Goggles Mode**, AlphaRelay finalizes the captured DJI Fly live-view frames as an MP4 and queues it for upload. It does not pull the DJI Avata's internal-storage or microSD footage.
- Footage may upload immediately or queue for later sync.
- Queued Pilot-app video is stored durably and resumes automatically when validated connectivity returns, including after the app process restarts.
- Android Mission Viewer event logging stops and its selected timeline becomes read-only.
- Mission Overwatch stops remote-live playback and switches to historical review instead of retrying the closed live stream.
- Review should wait until footage status is clear.

**Warning:** Do not force-stop or uninstall the Pilot app while footage is queued. Browser-initiated uploads still require the browser tab to remain open.

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

After **Stop Mission**, the Pilot app attempts to upload recorded footage when online. Pending Pilot-app videos are stored in a durable Android queue and resume automatically when validated connectivity returns, including after the app process restarts.

Watch for upload banners, **Upload now**, or **Loading playback link** status in Mission Overwatch.

In **Controller Screen Capture**, AlphaRelay records the controller screen in chunks and queues those recordings for upload after **Stop Mission**. Keep the controller powered on; do not force-stop or uninstall AlphaRelay while queued controller-screen recordings remain.

In **Goggles Mode**, AlphaRelay finalizes an MP4 from the DJI Fly live-view frames captured during the mission and queues it after **Stop Mission**. The durable queue resumes when connectivity returns. Upload the original DJI Avata camera file manually if the mission needs the raw aircraft recording.

When the Pilot app opens with queued mission video, its startup panel shows the queue and upload progress. Let the upload finish when possible. Use **Skip for now and start new mission** only if field work must begin immediately; the queued work remains pending.

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

**Warning:** Do not force-stop or uninstall the Pilot app while its queue is pending. Keep a browser tab open for browser-initiated uploads; manual browser uploads do not use the Android background queue.

→ Import a mission · Review footage · Troubleshooting

---

## Review Footage

Open a closed mission from **Mission Dashboard**, then go to **Mission Footage**.

## Controller-screen recordings

Controller Screen Capture stores long recordings as adjacent chunks. Starting playback from a chunk in Mission Overwatch or a dashboard report continues through the neighboring chunks from the same recording and shows full-recording and clip progress. A separately started recording remains separate.

## Play with Events

1. Confirm the primary clip is loaded (wait for **Loading playback link** to finish).
2. Click **Play with Events**.
3. Scrub through footage and compare event markers, screenshots, and timeline photos.
4. Use angle tabs or **All angles** for multi-camera review.
5. For secondary clips, use **Adjust sync to primary** if timing is off.

**Play with Events** and ordinary Mission Footage playback both follow adjacent controller-screen chunks. Timeline updates that arrive while you review do not restart the current video.

## Tag from footage

After the mission is closed:

1. Open **Play with Events** on the clearest angle.
2. Scrub to the frame.
3. Enter an event name and click **Tag event**.

## Locks

Once a report is submitted for approval, timeline events, footage, photos, mission renaming, and AI Review actions are locked. A supervisor can return the report to draft to reopen work. Approval makes the record permanently read-only. Tag missing moments before submission.

## AI Review

For a closed synced mission, open **AI Review** and click **Analyze media** after footage, photos, or event screenshots are available. AlphaRelay may sample still frames from playable footage, analyze mission-relevant images, and show findings for human review.

- **Accept** adds a timeline event for the finding when timeline edits are still allowed. It does not complete officer review by itself.
- **Reject** keeps the finding out of the mission timeline.
- **Redo analysis** deletes the current AI Review runs and findings, then runs analysis again. Accepted timeline entries stay in the mission timeline.
- Accepted findings may also run detailed screenshot analysis when a source image is available.

## Review timeline findings

After accepting a finding in AI Review, open **Timeline** and review its image analysis:

- Choose **Accept as is** to record the displayed finding as officer-reviewed.
- Choose **Review & edit** to correct the observations before saving them as officer-reviewed.
- Use **Edit finding** to revise an already reviewed finding before the timeline locks.

AI live watch and on-device Local AI alerts use an additional approval gate. First choose **Approve alert** to allow configured screenshot analysis and report eligibility, or **Dismiss alert** to exclude the alert. Then use the same **Accept as is** or **Review & edit** controls for any resulting analysis. Only officer-reviewed findings are eligible for the after-action report, and the report presents them as neutral timeline observations without internal AI-review bookkeeping.

AI Review now collapses repeated video-frame findings from the same footage clip so reviewers are not asked to resolve the same routine person, object, or high-priority finding over and over. High-priority findings in different rough regions remain separately reviewable.

AI Review findings and alert screenshot analyses are suggestions. Verify the source media before accepting or editing them for report or evidence use.

## Complete the review steps

The closed-mission **Timeline** and **Media** tabs, plus **AI Review** when available, have **Done — continue**:

- **Timeline**: approves no items automatically. If unaccepted AI candidates remain, AlphaRelay shows the count and asks before permanently deleting them. Human-created and approved AI events remain.
- **Media**: records that footage and photos were reviewed.
- **AI Review**: keeps accepted or edited findings and asks before rejecting any undecided findings.

After completion, AlphaRelay opens the next unfinished step or **Report**. New pending AI material reopens the relevant step so it can be reviewed.

## Ask AI about the mission

Open **AI Review → Ask AI** for a closed, synced mission with uploaded photos, event screenshots, or playable footage.

1. Enter a question about visible mission details, such as **How many vehicles are visible?** or **Is a weapon visible?**
2. Click **Ask AI**.
3. Review the answer, confidence, supporting observations, limitations, and supporting evidence.
4. Open an item under **Previous answers** to revisit it, or click **Clear** to remove the saved question history for that mission.

If playable footage is available but supporting still frames have not been prepared, AlphaRelay prepares them before answering. Ask AI uses only the available mission imagery. It does not identify unknown people or infer intent, criminality, injuries, or that an area is clear.

An exact repeat question can load a saved answer when the mission's media set has not changed. If footage, photos, or screenshots change, ask again so the answer can use the current media.

Ask AI answers are suggestions. Check the listed evidence and original media before using an answer in a report, operational decision, or evidence workflow.

→ Generate a report

---

## Generate a Report

Configured AI can draft the after-action report from mission events, footage references, photos, and custody data. A human must verify everything before submission.

**Warning:** AI output is draft material — not final authority.

## Steps

1. Open the closed mission's **Timeline**. For each Local AI or AI live-watch alert, choose **Approve alert** or **Dismiss alert**. For each available image-analysis finding, choose **Accept as is** or **Review & edit** after checking the source image or footage. Click **Done — continue** when the Timeline is complete.
2. Review footage and photos under **Media**, then click **Done — continue**.
3. Use **AI Review** when available to analyze uploaded footage, photos, or event screenshots. Use **Ask AI** for mission-media questions, then verify each answer against its supporting evidence and the original media.
4. Accept only verified AI findings that should become timeline events and reject the rest, then click **Done — continue**. Confirming completion rejects any remaining undecided AI Review findings.
5. Return to **Timeline** for findings that were added by AI Review. Choose **Accept as is** or **Review & edit**, then complete the reopened Timeline step.
6. Open **Report** and click **Generate Report**.
7. Resolve report-readiness **Items Requiring Officer Review**.
8. Edit the narrative or use **Edit executive summary** for the dashboard header summary.
9. Click **Submit for supervisor approval** when ready.

All undeleted human-created events are eligible for AAR content. Automatic alerts require approval, and accepted AI Review findings require Timeline officer review. AlphaRelay presents reviewed findings in neutral, officer-owned language and omits AI confidence, automation labels, and internal review status from the report prose. The report's event list can still display pending image analysis with a review warning, but unreviewed analysis is excluded from generated narrative. If a timeline finding changes after a draft is generated, regenerate or update the report before submission.

## Supervisor actions

Submitting the report locks report edits, mission renaming, timeline events, footage, photos, and AI Review actions while the supervisor decides. Supervisors (often org admins) can **Approve** or **Return to draft**.

- **Return to draft** reopens the record for corrections and resubmission.
- **Approve** makes the record permanently read-only.

Once approved:

- The report cannot be regenerated or edited
- Mission name, timeline events, footage, photos, and AI Review actions stay locked

Supervisor and operator inboxes live on **Mission Dashboard** under Reports & Reviews.

## Email notifications

When configured, AlphaRelay sends email on report workflow events (submit, approve, return).

→ Review footage · Seal the mission record

---

## Seal the Mission Record

Sealing locks reviewed custody evidence and hashes. It is **separate** from supervisor report approval.

**Warning:** Sealing ≠ submitting or approving the report. Sealing preserves custody hashes. Submitting the report locks editing during supervisor review; approval makes the record permanently read-only.

## When to seal

After footage, events, photos, and the report draft have been reviewed, the Timeline, Media, and AI Review steps are complete, timeline findings are officer-reviewed, and report-readiness **Items Requiring Officer Review** are resolved.

## Steps

1. Open the closed mission.
2. Confirm footage plays and **Play with Events** markers look correct.
3. Confirm official event counts contain the expected human-created events, approved automatic alerts, and officer-reviewed AI findings.
4. Open **Mission chain of custody**.
5. Click **Seal entire mission (verify downloads)** when ready.
6. Optionally download **Download mission custody certificate (HTML)**.

Sealing verifies downloaded bytes against stored hashes and locks registered evidence rows in the custody ledger.

When the mission seals, AlphaRelay removes automatic alerts that were never approved and accepted AI Review findings that never received Timeline officer review. Dismissed alerts are included in that cleanup. Human-created events remain unless a user explicitly deleted them. The same official-event rule is used for event totals, playback markers, reports, offline exports, and evidence-chain views.

**Warning:** Cleanup of unapproved AI candidates is permanent. Resolve every alert and finding before sealing; sealing does not approve pending items.

Evidence sealing does not by itself lock the mission name, timeline, media review, or report draft. Finish those changes before **Submit for supervisor approval**, which applies the workflow lock.

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

The viewer adapts to desktop and phone screens. Its styles and runtime are embedded in `index.html`, so the main viewer can open without separate CSS or JavaScript files.

## Open on Android

1. Extract the ZIP with the device's Files app or another archive tool.
2. Open `index.html` in a current browser.
3. If **Reconnect exported files** appears, tap **Choose package files**.
4. Select the extracted footage, photos, custody certificate, and after-action report files. Choose again if Android separates them across folders.

Android may open a local HTML file in an isolated `content:` view that cannot see neighboring files automatically. Reconnecting creates temporary browser links to the selected files; it does not upload them.

## Contents

When available at export time:

- Mission record and timeline
- After-action report HTML
- Chain-of-custody data and frozen custody certificate
- Footage, event screenshots, and mission photos under `media/`
- Built-in offline viewer

The exported timeline uses the official mission-event set. It includes undeleted human-created events, approved automatic alerts, and officer-reviewed AI findings; pending or dismissed automatic alerts and accepted AI Review findings without Timeline officer review are omitted.

## Tips

- Export needs internet to download mission data and media at export time.
- Chrome or Edge is recommended for very large packages.
- Keep the extracted folder intact. Moving only `index.html` drops the package media and printable documents.
- The ZIP reflects mission state at export time — it is not a live sync replacement.

For JSON evidence export, use **Export evidence package (JSON)** in chain of custody instead.

---

## Accounts and Organizations

## Mission Dashboard

Command home at [alpha-relay.com/dashboard.html](https://www.alpha-relay.com/dashboard.html):

- **Command Center** connection and refresh status, active remote-live count, and mission KPIs
- Active mission rows with live state, operator and scenario context, event activity, elapsed time, and alerts awaiting review
- **Attention queue** for remote-live failures, unsynced mission data, automatic alerts awaiting review, and report follow-ups
- **Latest alerts** with review status, source mission, screenshot when available, and a link into Mission Overwatch
- Mission history with search and filters
- **Rename** from a Mission History row when you are the mission creator or an org admin and the mission has not been submitted or approved
- **Import mission** for creating a closed post-flight record from external footage and photos
- Intelligence search across missions, events, and footage
- Supervisor inbox (pending approval) and operator returned-to-draft inbox
- Analytics

Select a mission to open **Mission Overwatch** (dashboard link: **Open Mission Console**).

**Events logged** and event-based KPIs use the official mission-event set: human-created events that have not been deleted, approved automatic AI alerts, and officer-reviewed AI findings. Pending or dismissed automatic alerts can still appear under **Latest alerts** for operational awareness, but they are not included in official event totals.

→ Import a mission

## Account

Set full name, rank/title, password, and email change requests. Names appear on mission attribution.

## Organization

Owners and admins manage:

- Team members, roles, and status
- Organization time zone
- Storage visibility
- Pilot device license keys, QR codes, activation files, and controller pairing codes for the pilot app

If your account belongs to more than one organization, use the organization switcher in the app sidebar. Switching from Mission Overwatch returns you to the selected organization's **Command Center** so mission data from the previous organization is not left in focus.

After a successful cloud refresh, the selected organization's server roster is authoritative: missions deleted from that roster disappear from the dashboard, while local missions or event changes still waiting to sync are retained until AlphaRelay can upload them.

New controller pairing codes do not expire. A code still activates only one installation and remains subject to license seat, suspension, and revocation rules.

Only owners and admins can open **Organization**.

## Organization Documents

When signed pilot agreements are linked to your organization, **Organization Documents** lets signed-in users open completed agreement PDFs through short-lived signed links.

→ Devices and licenses
→ Pilot agreements and documents

---

## Pilot Agreements and Documents

Pilot agreement signing is used when AlphaRelay needs an agency or pilot representative to review and sign a prepared agreement before onboarding.

## Sign an agreement

1. Open the signing link from the AlphaRelay email.
2. Review the agreement PDF in the browser.
3. Confirm the agency, signer name, email, and title.
4. Type the signer full name exactly as shown.
5. Check the authorization statement.
6. Click **Sign and save PDF**.

After signing, AlphaRelay creates a completed signed PDF and sends the onboarding email. If the request was already signed, the page shows the completed signed copy.

## Organization documents

Signed pilot agreements are stored privately and can be opened from **Organization Documents** by signed-in users with access to the linked organization.

1. Sign in to AlphaRelay.
2. Open **Organization Documents** when it is available for your account.
3. Click **Open PDF** on the signed agreement row.

PDF links are short-lived signed URLs. Refresh the documents page if a link expires.

## Admin workflow

Internal AlphaRelay admins use **Admin → Pilot Documents** to:

- Upload immutable prepared PDF agreement versions
- Create signing requests
- Monitor viewed, signed, organization-created, invitation-sent, expired, or failed states
- Open original and signed PDFs
- Retry onboarding or resend the invite when needed

**Warning:** Do not treat a signing request as complete until the signed agreement PDF is saved and onboarding status is complete or intentionally retried.

→ Accounts and Organizations · Security, Privacy, and AI

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

## Android drone controller setup

Use this path when the pilot device is an Android-based drone controller rather than a separate tablet or phone.

You do not need to enable Android Developer mode to install AlphaRelay.

1. Connect the controller to internet.
2. Open the controller web browser.
3. Download **AlphaRelay Pilot** from the dashboard app download link. If needed, open [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html) directly.
4. When Android prompts for unknown-source installation, allow the browser or file manager to **install unknown apps** from that source.
5. Install and open **AlphaRelay Pilot**.
6. Grant requested permissions.
7. Activate with the short controller pairing code generated by an admin, or use another license method below.

## Device license

The pilot app uses an org license key — not the web app email/password sign-in.

Use one of these activation paths:

- Copy the full `ar-…` license key from **Organization**.
- Scan the QR code, which opens `alpharelay://license?key=…`.
- Import an activation file downloaded by an admin.
- Enter a short controller pairing code generated by an admin.

Controller pairing codes do not expire. Each code can activate one installation and can be retried on that same device, but it cannot be reused for a different installation. License seat limits, suspension, and revocation still apply. Store unused codes securely.

Update later from **Pilot console → System → AlphaRelay license**, or long-press **Choose Mission Mode**.

The app validates against AlphaRelay and keeps a **10-day offline grace** after the last successful check. Connect to the internet before starting if the grace window expired.

Keys are issued by org admins from **Organization** or internal admin tools.

## Pilot agreements

If your organization is onboarded through AlphaRelay pilot agreements, sign the agreement from the email link before relying on organization access. Completed signed PDFs are available from **Organization Documents** after onboarding.

→ Before you go to the field
→ Pilot agreements and documents

---

## Security, Privacy, and AI

## What runs locally

- **Pilot app**: flight controls, quick events, Local AI detection when enabled, Android Mission Viewer, voice relay, remote-live publishing, and durable sync queues
- **Mission Overwatch PWA shell**: page cache after first online visit (sign-in and sync still need network)

## What syncs to the cloud

When internet is available: mission metadata, events, screenshots, photos, footage references, reports, custody records, and org data — protected by sign-in and database access rules.

## AI

Configured AI can draft after-action report content from structured mission data, help review uploaded media, answer questions about available mission imagery, analyze selected event screenshots, and watch sampled remote-live frames when enabled. Always review:

- Timeline accuracy
- Footage and photo references
- Accepted AI Review findings and officer-reviewed timeline observations
- Ask AI answers, limitations, and supporting evidence
- Event screenshot or media image analysis
- AI live watch alerts and attached frame evidence
- **Items Requiring Officer Review**

Treat AI output as draft material. AI Review can sample frames from uploaded footage and analyze uploaded photos or event screenshots. Accepted findings are added to the timeline, where an officer must **Accept as is** or **Review & edit** before report use. Ask AI uses available mission imagery, reports confidence and limitations, and does not replace review of the original media.

Local AI and AI live-watch alerts are logged as review prompts, not final determinations. An officer must choose **Approve alert** before a synced alert screenshot can be analyzed or considered for the report, or **Dismiss alert** to exclude it. Any resulting image analysis still requires **Accept as is** or **Review & edit**.

AlphaRelay uses one official-event rule across counts, playback markers, reports, offline exports, and custody views: undeleted human-created events are included; automatic AI alerts require approval; accepted AI Review findings require Timeline officer review. Pending or dismissed automatic alerts and accepted AI Review findings without Timeline officer review remain outside the official evidence set and are permanently removed when Timeline review completes or the mission seals.

Mission Overwatch **Dictate** uses the browser's speech-recognition capability and microphone permission. Availability and speech processing depend on the browser and operating system; type the event when agency policy or browser support does not permit dictation.

## Pilot agreements

Pilot agreement PDFs and signed copies are stored in private storage. Signing links use tokens, and completed PDFs are opened through short-lived signed URLs. Completed signing records may include signer details, timestamp, IP address when available, user agent, agreement version, PDF hash, and audit metadata.

## Custody and approval

| Action | Effect |
| --- | --- |
| **Seal entire mission** | Locks custody evidence hashes |
| **Submit for supervisor approval** | Temporarily locks the report, mission name, timeline, media, and AI Review actions until a supervisor returns it to draft or approves it |
| **Supervisor approval** | Makes the submitted record permanently read-only |
| **Export offline package…** / **Export evidence package (JSON)** | Point-in-time copies for retention or handoff |

Do not share exports before sync and review are complete.

---

## Minimum Requirements

## Pilot device (Android tablet, phone, or controller)

- Supported Android version for the installed pilot app
- Usable internet for remote live and immediate cloud sync; offline capture can queue work
- Enough CPU, memory, battery, and storage for live video, telemetry, event logging, and on-device Local AI when enabled
- Supported aircraft-control workflow when using aircraft integration
- Conditional Matrice camera tools on supported Matrice aircraft or Matrice controllers
- Android drone controller capable of installing **AlphaRelay Pilot** and granting screen capture permission for **Controller Screen Capture**
- For **Pilot mode**: detected DJI SDK remote-controller setup, a listed DJI MSDK 5.17 aircraft, and a live flight-controller connection that AlphaRelay can verify
- For a DJI Avata with compatible DJI Goggles: separate Android phone or tablet with **DJI Fly**, **AlphaRelay Pilot**, screen capture permission, and internet
- For **View Live Mission**: a second AlphaRelay Pilot installation licensed to the mission's organization, plus internet

## Overwatch / review (browser)

- Current Chrome, Edge, or Safari on desktop or mobile for Mission Overwatch, dashboard, and export; a larger screen is recommended for long review sessions
- Internet for sync, upload, reports, and export media downloads
- Internet and AI configuration for report drafting, AI Review, Ask AI, event screenshot analysis, or AI live watch
- Browser microphone permission and speech-recognition support for **Dictate** in Mission Overwatch

## By workflow

| Workflow | Requirement |
| --- | --- |
| Start Mission | Android Pilot app; validated internet for automatic remote live, or offline capture with queued sync |
| Deployment-specific Local Network relay | Pilot device + Overwatch on same reachable Wi-Fi; not exposed by the current public Pilot app |
| Controller Screen Capture | Android drone controller; AlphaRelay Pilot installed; Android screen capture permission |
| Pilot mode | Detected DJI SDK-controller setup; aircraft in the Pilot app's DJI MSDK 5.17 list; successful live connection check |
| DJI Avata with DJI Goggles | Linked DJI Avata, compatible DJI Goggles, and compatible controller; Android device with DJI Fly and AlphaRelay Pilot; goggles live-view connection; Android screen capture permission; internet |
| **Live stream (WebRTC)** | Validated pilot-device internet; starts automatically with the mission and can be retried from the Pilot console |
| Android Mission Viewer | Second licensed AlphaRelay Pilot installation in the same organization; active mission; internet; remote live required for video |
| On-device Local AI | Pilot app relay or capture session running; compatible Android compute; notification permission for immediate Controller Screen Capture alerts; internet only for sync and cloud follow-up |
| AI Review | Closed, synced mission with uploaded photos, event screenshots, or playable footage; internet and AI configuration |
| Ask AI | Closed, synced mission with uploaded photos, event screenshots, or playable footage; internet and AI configuration |
| AI live watch | Active remote live stream; Mission Overwatch online; AI configuration enabled |
| Cloud sync / upload | Internet + signed-in session |
| Offline package export | Internet at export time to download media; extracted package can be reviewed later on desktop or mobile |

Permissions: grant camera, microphone (voice relay), storage, and location prompts from the Pilot app as requested. In Mission Overwatch, allow browser microphone access only when using **Dictate**.

Aircraft camera controls appear only when the pilot app detects supported aircraft or controller capability. Availability still depends on aircraft firmware, payload, SDK support, and field validation.

Controller Screen Capture appears on Android drone controllers that can run AlphaRelay Pilot and grant screen capture permission. The controller's native flight app remains responsible for aircraft operation in that mode.

Pilot mode is not enabled by controller detection alone. On an eligible DJI SDK-controller setup, confirm the aircraft in the in-app supported list and keep the aircraft and controller connected until AlphaRelay reports **Supported aircraft confirmed. Pilot mode is ready.** If that verification does not complete, use Controller Screen Capture.

The Goggles Mode workflow uses a separate Android device to display the DJI Goggles live view in DJI Fly. AlphaRelay records that screen and does not control the DJI Avata or retrieve the original aircraft camera file.

Run a training mission on the same device class before operational use.

---

## Troubleshooting

## Remote live is missing

1. Confirm the pilot device has validated internet and the mission is active.
2. Open **Pilot console → Mission** and check remote-live status.
3. Tap **Start remote live** if automatic setup was skipped or failed.
4. In Mission Overwatch, open the active mission and select **Live stream (WebRTC)**.

The current public Pilot app does not present a **Local Network** mission button. If your deployment exposes **Live Overwatch Screen**, keep both devices on the same reachable Wi-Fi, connect by scan or pilot-device IP, and trust the relay certificate if prompted.

## Android Mission Viewer cannot see the mission

1. Confirm the viewing device has internet.
2. Confirm AlphaRelay Pilot is activated with a valid license for the same organization as the mission.
3. Confirm the mission is still active. Closed missions do not appear in the viewer list.
4. Tap **Refresh** in the mission picker.

If timeline events appear but video does not, the pilot's remote **Live stream (WebRTC)** has not started or is not ready. Restore pilot-device internet and retry remote live from **Pilot console → Mission**.

## Cloud sync delayed

1. Confirm you are signed in.
2. Move to validated internet. Pilot-app video uploads resume through the durable Android queue; browser work still needs its tab open.
3. Do not refresh during pending sync.

## Footage queued or not playing

1. Keep the pilot device powered on and restore validated internet.
2. If the Pilot app opens with a queued-video panel, let it run or use **Skip for now and start new mission** only when field work cannot wait.
3. Tap **Upload now** if shown.
4. Wait for **Loading playback link** to clear in Mission Overwatch.
5. For manual upload: confirm signed in, online, correct MP4, no other upload running.

Manual browser uploads do **not** queue before starting — retry when online.

If one Controller Screen Capture recording is split into multiple adjacent chunks, ordinary Mission Footage playback should continue automatically and show clip progress. A separately started recording does not join the earlier one. If an adjacent chunk still does not continue, reload the current app version, confirm the next chunk has finished uploading, and reopen the first chunk.

## Controller Screen Capture did not start

1. Confirm the pilot device is an Android drone controller with **AlphaRelay Pilot** installed.
2. Start the mission from **Choose Mission Mode → Start Mission**. On an integrated Android drone controller, Controller Screen Capture is automatic; on a detected DJI SDK-controller setup, select **Controller Screen Capture — Recommended**.
3. Approve the Android screen capture prompt.
4. If voice relay is needed, grant microphone permission and confirm speech recognition is available.
5. If the app cannot be installed, allow the browser or file manager to **install unknown apps**. Android Developer mode is not required.

The controller's native flight app remains the flight control app. AlphaRelay aircraft command buttons are intentionally disabled in Controller Screen Capture.

## Pilot mode stays locked

1. Confirm AlphaRelay detected the DJI SDK remote-controller setup and displays the capture-mode chooser.
2. Select **Pilot mode**, open the 12-aircraft list, and confirm the exact aircraft family is listed.
3. Tap **My drone is listed — Use Pilot**.
4. Power on and connect the aircraft and controller, then wait for AlphaRelay's live flight-controller check.
5. Start only after AlphaRelay reports **Supported aircraft confirmed. Pilot mode is ready.**

If the aircraft is not listed, the DJI SDK is unavailable, or the connection check times out, select **Controller Screen Capture — Recommended** and use the native flight app. Do not rely on Pilot mode until the same aircraft, controller, payload, and firmware combination has been validated in training.

## DJI Avata Goggles Mode did not start

1. Confirm DJI Fly and AlphaRelay Pilot are installed on the same Android device.
2. Power on and link the DJI Avata, compatible DJI Goggles, and their compatible controller.
3. For automatic detection, connect the DJI Goggles to the Android device with a compatible USB data/OTG cable.
4. Open DJI Fly and confirm the goggles live view appears before opening AlphaRelay.
5. If you use wireless live-view sharing, open **Choose Mission Mode**, enable **Use DJI Fly / goggles video feed**, choose **No scenario template**, and tap **Start Mission**.
6. Approve the Android screen capture prompt.

If DJI Fly does not open automatically after approval, open it manually and confirm its live view is still active.

## DJI Avata remote live or upload is missing

1. Keep the Android device connected to internet. If DJI Fly uses Wi-Fi live-view sharing, keep cellular data available.
2. Keep DJI Fly in the foreground during the mission.
3. Stop through the **Controller Screen Capture** notification or AlphaRelay **Stop Mission** button; do not force-close the app.
4. Keep the Android device powered on while queued footage remains. AlphaRelay resumes it automatically when validated internet returns; do not force-stop or uninstall the app.

## Mission Overwatch dictation is unavailable

1. Use a browser with speech-recognition support.
2. Allow microphone access for the AlphaRelay site.
3. Check that the operating system can see a working microphone.
4. If the browser speech service needs network access, confirm the browser is online.

You can always type the event under **Manual Event (fast)**. Dictation only fills the note; review it and click **Log Manual Event** to save the event.

## Play with Events has no markers

- Confirm events exist and the correct primary clip is selected.
- Mission must be closed with footage linked.
- Secondary angles may need **Adjust sync to primary**.

## AI live watch is not showing

1. Confirm the pilot started **Live stream (WebRTC)** and the remote live feed is visible in Mission Overwatch.
2. Confirm Mission Overwatch is online and the mission is still active.
3. Confirm AI live watch is enabled for the deployment and this mission.
4. If the status says the request timed out or failed, leave the page open; Mission Overwatch retries bounded requests automatically.

AI live watch does not run from the LAN-only relay video source and does not run after the mission is closed.

## AI alert says approval is required

1. Open the mission **Timeline** in Mission Overwatch.
2. Compare the Local AI or AI live-watch alert with the source screenshot or footage.
3. Choose **Approve alert** to allow configured screenshot analysis and report consideration, or **Dismiss alert** to exclude it.
4. After approved analysis finishes, choose **Accept as is** or **Review & edit** for the resulting finding.

Approving the alert is not the same as accepting the image analysis. Both review steps are required before analyzed content can enter the report narrative.

## Event total is lower than the visible Timeline

The Timeline can show pending or dismissed automatic alerts so reviewers can resolve and audit them. Official totals, playback markers, reports, exports, and evidence views count only undeleted human-created events, approved automatic alerts, and officer-reviewed AI findings. Use **Approve alert**, **Dismiss alert**, **Accept as is**, or **Review & edit** to finish the decisions.

## Timeline says a finding needs review

1. Open the closed mission and select **Timeline**.
2. Compare the finding with its source screenshot or footage.
3. Choose **Accept as is** or **Review & edit**.

Accepting a finding in **AI Review** only moves it to the timeline. The timeline review is required before that finding can enter the AAR. Submitted or approved reports lock these controls.

## Done — continue does not advance

1. Read the status beside the button for unresolved Timeline or AI Review items.
2. Finish the decisions you want to keep.
3. Click **Done — continue** and review the confirmation count. Timeline completion deletes remaining unaccepted AI candidates; AI Review completion rejects remaining undecided findings.
4. Stay online for a synced mission. If the action is unavailable, sign in again and reload the page.

A newly synced pending alert or finding reopens the affected review step even if it was completed earlier.

## Ask AI is unavailable or cannot answer

1. Open a closed, synced mission and select **AI Review → Ask AI**.
2. Confirm footage, photos, or event screenshots are available and playable.
3. Keep Mission Overwatch online and confirm AI is configured for the deployment.
4. If AlphaRelay says it is preparing supporting evidence, keep the page open while it samples frames from playable footage.

Ask AI can answer only from available mission imagery. If the relevant moment is missing, obscured, low quality, or outside the sampled frames, it may report that the question cannot be answered.

## Local AI not tagging

1. Open **Pilot console → Flight → Local AI** and confirm **Enable on-device detection** is on.
2. Start the relay or Controller Screen Capture; Local AI does not sample frames while capture is stopped.
3. Check the Local AI metrics line for offered frames, inference activity, or dropped samples.
4. Confirm the pilot app is current; the person-and-visible-weapon model is bundled with the current build.
5. Grant Android notification permission if events are logged but direct alerts do not appear.

If the metrics line says **Local AI: paused while browser Live AI is active**, this is expected coordination for the same mission. Local AI resumes automatically after browser analysis stops or the short handoff expires.

Review every auto-tag before treating it as an operational fact. Small, distant, dark, blurred, or partially hidden objects may be missed.

## Report actions blocked

Check mission state and your role. Submitting for supervisor approval locks report editing, mission renaming, timeline and media changes, and AI Review actions. A supervisor can **Return to draft** to reopen work. Approved missions are permanently read-only and reports cannot be regenerated.

## Offline package video won't play

Open `index.html` from inside the extracted folder without moving files out. Use Chrome or Edge for large packages.

On Android, opening `index.html` can isolate it from sibling media files. If **Reconnect exported files** appears, tap **Choose package files** and select the extracted footage, photos, and printable HTML files. You can choose files more than once when Android presents different folders separately.

→ Connectivity · Known limitations

---

## Connectivity

AlphaRelay uses separate live and sync paths. Losing one does not always stop the mission.

```text
Pilot app
  |-- Live stream (WebRTC) → Mission Overwatch / Android Mission Viewer over internet
  `-- Cloud sync → Events, footage, reports, evidence
```

Some older or deployment-specific builds also expose a LAN relay to Mission Overwatch on the same Wi-Fi. The current public Pilot app does not show that mission-start option.

## Without internet

- Local mission capture and event logging
- On-device Local AI inference and Controller Screen Capture notifications
- Queued footage and deferred cloud sync
- Pilot license within the 10-day offline grace window

## Needs internet

- Sign-in and mission sync
- Footage and photo upload
- Playback links
- **Live stream (WebRTC)** setup and viewing
- **View Live Mission** mission list, timeline updates, event logging, and video
- Report generation and supervisor workflow
- Offline package and evidence JSON export downloads

## Remote live connection

1. Tap **Start Mission** in the Pilot app while the device has validated internet.
2. Open the active mission from Mission Dashboard.
3. Select **Live stream (WebRTC)** in Mission Overwatch.
4. If automatic live setup failed or the mission began offline, use **Pilot console → Mission → Start remote live** after connectivity returns.

A second licensed Android device can instead tap **View Live Mission**. The Android viewer requires internet for its active-mission list, timeline, event logging, and remote video.

## Deployment-specific Local Network connection

If your build exposes **Local Network**, run it on Wi-Fi, open **Live Overwatch Screen**, and connect by scanning or entering the pilot-device IP. Trust the self-signed relay certificate if prompted. This is not a selectable mission path in the current public Pilot app.

## Queued states

**Queued for cloud sync**, **Loading playback link**, or upload banners mean local data still needs to reach the cloud. Queued Pilot-app videos are stored durably and resume automatically when validated connectivity returns, including after the app process restarts. Keep the device powered on, do not force-stop or uninstall the app, and use **Upload now** when offered.

When AlphaRelay opens with queued mission video, the startup panel shows the queue and progress. Use **Skip for now and start new mission** only when field work must begin before the older upload finishes.

**Warning:** Remote live and cloud sync require internet. A deployment-specific LAN relay needs same-network reachability, not cloud access.

## PWA / offline shell

Mission Overwatch caches its shell after an online visit. Cloud sign-in, sync, uploads, and playback still require network access.

---

## Known Limitations

## Network

- The current public Pilot app does not present a **Local Network** mission button. Deployment-specific LAN relay builds require the pilot and Overwatch devices on the same reachable Wi-Fi.
- **Live stream (WebRTC)** requires internet on the pilot device.
- Cloud sync, upload, and export wait for internet.
- Losing relay, remote live, or cloud sync does not always end the mission — paths are independent.
- **View Live Mission** on Android requires internet and a valid licensed installation in the same organization. Timeline events can update even when remote video is not ready.

## Media

- Footage often uploads after the mission ends.
- **Controller Screen Capture** records the controller screen, including native flight-app overlays, not a raw camera file.
- **Goggles Mode** records the DJI Fly screen carrying the DJI Goggles live view, not the original DJI Avata camera file.
- Queued Pilot-app footage resumes automatically when validated connectivity returns, but the Android device must remain powered and the app must not be force-stopped or uninstalled.
- Queued footage must finish before final review.
- Manual browser MP4 upload requires internet before upload starts (no pre-queue).
- **Import mission** requires a signed-in, online browser and creates a closed post-flight record only.
- Offline packages only include media available at export time. Some Android file viewers isolate `index.html`; use the package's **Reconnect exported files** prompt when it appears.
- Adjacent Controller Screen Capture chunks play continuously when AlphaRelay can identify them as one recording. Separately started recordings remain separate.

## AI

- **Local AI** uses the bundled person-and-visible-weapon model by default, but performance still depends on the Android device, settings, image quality, and scene. It has not been field-validated on broad DJI Controller Screen Capture footage.
- Local AI can miss small, distant, blurred, dark, or partially hidden objects and can mistake tools, toys, equipment, or silhouettes for a possible weapon. It does not determine identity, possession, intent, legality, policy compliance, injury, or whether an area is clear.
- Spatial tracking and HUD filtering reduce repeated person/weapon alerts and controller-overlay false positives; they do not guarantee one alert per real subject or eliminate false alerts.
- AI report drafts require officer review; resolve **Items Requiring Officer Review** before finalization.
- **AI Review** requires a closed synced mission, available media, internet, AI configuration, and installed analysis tables.
- **Ask AI** runs only for a closed synced mission with available imagery. Its answers reflect sampled footage frames, photos, and event screenshots, so occlusion, image quality, repeated views, or missing moments can limit counts and conclusions.
- An exact repeat question may load a saved answer for the same mission-media set. Ask again after the media changes.
- **AI live watch** requires active **Live stream (WebRTC)**, internet, Mission Overwatch online, and AI configuration. The default cadence can start a sample as often as every two seconds, but network and analysis latency may make it slower.
- AI media findings are suggestions. Accepting one in AI Review moves it to the timeline; an officer must then use **Accept as is** or **Review & edit** before it is eligible for the AAR.
- Local AI and AI live-watch alerts require **Approve alert** before configured screenshot analysis or report eligibility. **Dismiss alert** excludes the alert. Approved analysis still waits for the event, review decision, and screenshot to sync and requires internet plus AI configuration.
- When healthy browser AI live watch owns detection for a mission, the Pilot app pauses Local AI to reduce duplicate alerts. The handoff is temporary and local detection resumes automatically, but there can be a brief transition after browser analysis or connectivity stops.

## Aircraft controls

- Aircraft camera tools appear only for supported aircraft/controllers and still depend on aircraft firmware, payload, and SDK behavior.
- **Controller Screen Capture** intentionally leaves flight and camera operation in the controller's native flight app; AlphaRelay aircraft command buttons are blocked.
- **Pilot mode** is offered only on a detected DJI SDK-controller setup. Selecting a listed DJI MSDK 5.17 aircraft does not unlock it by itself; AlphaRelay must also verify the live flight-controller connection.
- **Goggles Mode** does not control the DJI Avata. The DJI Goggles and their compatible controller remain responsible for aircraft operation.
- Validate aircraft-specific controls in training before operational use.

## Workflow locks

- **Done — continue** is a recorded review decision, not only navigation. Timeline completion permanently removes remaining unaccepted AI candidates; AI Review completion rejects remaining undecided findings. Review the confirmation count before continuing.
- Submitting a report for supervisor approval locks the report, mission name, timeline, footage, photos, and AI Review actions. Returning it to draft reopens work; approval makes the lock permanent.
- Evidence sealing preserves custody hashes — it is not report approval.

## Browser

- Large offline ZIP exports work best in Chrome or Edge. The viewer adapts to phones, but mobile file-provider rules may require reconnecting extracted package files.
- **Dictate** depends on browser speech-recognition support, microphone permission, and any browser speech-service connectivity.
- Self-signed relay certificates require a one-time browser trust step on HTTPS Mission Overwatch.

---

## Glossary

| Term | Meaning |
| --- | --- |
| **AI** | Configured assistance for report drafting, media review, mission-media questions, screenshot analysis, and live-watch alerts |
| **AI live watch** | Mission Overwatch control that samples remote-live frames and logs officer-review alerts when configured; it defaults on unless a saved mission choice disables it |
| **Approve alert** | Timeline decision that allows a Local AI or AI live-watch alert to proceed to configured screenshot analysis and report consideration; it does not complete officer review of the analysis |
| **AI Review** | Closed-mission tab for analyzing uploaded media and accepting or rejecting mission-relevant AI findings |
| **Ask AI** | AI Review view for asking questions grounded in available imagery from a closed synced mission |
| **Chain of custody** | Evidence history and hash verification for a mission |
| **Command Center** | Default Mission Dashboard view for operational status, active missions, attention items, automatic alerts, and report follow-ups |
| **Controller Screen Capture** | Recommended mode on Android drone controllers where the controller's native flight app keeps flight control and AlphaRelay captures the controller screen; formerly called Companion Capture Mode |
| **Goggles Mode** | DJI Avata and compatible DJI Goggles workflow where AlphaRelay on a separate Android device captures the DJI Fly live view and automatically starts an Internet mission |
| **Internet** | Cloud-backed mission mode used by the current Pilot app's **Start Mission** workflow |
| **Done — continue** | Closed-mission action that records completion of Timeline, Media, or AI Review and opens the next unfinished step; confirmation can remove or reject unresolved AI candidates |
| **Import mission** | Mission History flow that creates a closed post-flight record from external footage and photos |
| **Items Requiring Officer Review** | Report checklist items that need human resolution before submission |
| **Live Overwatch Screen** | Mission Overwatch panel for LAN relay connection |
| **Live stream (WebRTC)** | Remote live video over the internet |
| **Mission tools** | Active-mission quick events, manual event entry, and browser dictation in Mission Overwatch |
| **Organization Documents** | Signed pilot agreement PDFs linked to an organization |
| **Mission Console** | Dashboard link name for opening Mission Overwatch |
| **Mission Dashboard** | Command home — KPIs, history, search, AAR inboxes |
| **Mission Overwatch** | Per-mission browser workspace for live view, review, report, seal, export |
| **Mission Viewer** | **View Live Mission** workflow in a licensed Android Pilot app for active remote live, timeline updates, and event logging from a secondary device |
| **Offline package** | ZIP archive with viewer for point-in-time mission export |
| **Official mission event** | Undeleted human-created event, approved automatic AI alert, or accepted AI Review finding that received Timeline officer review; this set drives counts, reports, exports, playback markers, and evidence views |
| **Pilot agreement** | Prepared agreement PDF signed through AlphaRelay before or during agency onboarding |
| **Pilot app** | AlphaRelay Pilot Android app on tablet, phone, or Android drone controller |
| **Pilot mode** | Direct AlphaRelay aircraft-control mode available on detected DJI SDK-controller setups after supported-aircraft confirmation and a successful live connection check |
| **Local AI** | On-device person, multiple-person, and possible-weapon detection that samples pilot-app relay frames and creates review alerts |
| **Pilot console** | In-app settings (Mission, Flight, Events, System) |
| **Play with Events** | Footage player with synchronized event markers |
| **Quick events** | One-tap event buttons from scenario templates |
| **Local Network** | Deployment-specific LAN WebSocket relay mode; not presented by the current public Pilot app |
| **Scenario template** | Preloaded objectives, events, and report sections for a mission type |
| **Voice relay** | Voice logging with keyword `relay` before event details |

---
