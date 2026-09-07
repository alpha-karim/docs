# AlphaRelay Operator Documentation — NotebookLM Export

Generated on 2026-09-07 by `scripts/generate-notebooklm-export.mjs`.

**Web app:** https://www.alpha-relay.com
**Pilot app (APK):** https://www.alpha-relay.com/download.html

---

## Terminology (match the product UI)

- **AlphaRelay** — product name
- **AlphaRelay Operator** / **Operator app** — licensed Android or iOS app used to start controller-screen missions, publish live video, log field events, and support active missions; the Android APK is available from `download.html`
- **Start Mission** — current Android and iOS Operator entry point. It first asks how the mission will receive video, then opens operator, mission name, scenario, mission-specific AI targets, and alert settings for the selected source; starting creates an Internet mission and automatically starts remote live when validated internet is available.
- **Local Network** — deployment-specific Android LAN relay path retained in the product but not presented as a mission-start button in the current public Operator workflow.
- **Controller Screen Capture** — recommended capture path on Android drone controllers where the controller's native flight app keeps flight control and AlphaRelay captures the controller screen
- **Controller Livestream** — Android/iOS Operator workflow that provides DJI RTMP values or Skydio RTSP External Server values for a controller or flight app to publish directly; it requires internet and does not control the flight controller
- **HDMI Capture Card** — UVC workflow available through Android Operator, USB-C iPad, or a laptop browser; recording stays associated with the mission while flight remains on the controller
- **Pilot mode** — direct AlphaRelay aircraft-control path offered on detected DJI SDK-controller setups only after the operator confirms a listed DJI MSDK 5.17 aircraft and AlphaRelay verifies its live connection
- **Goggles Mode** — DJI Avata and compatible DJI Goggles workflow on a separate Android phone or tablet; compatible USB hardware can enable the mode automatically, but the operator still taps **Start Mission** before AlphaRelay starts an Internet mission with no scenario and opens DJI Fly after screen-capture approval
- **Pilot console** — in-app settings panel (Mission, Flight, Events, System)
- **Mission Dashboard** — command home (`dashboard.html`)
- **Command Center** — default Mission Dashboard view with connection/refresh status, active missions, operational KPIs, attention queue, and latest automatic alerts
- **Mission Overwatch** / **Mission Console** — per-mission browser workspace (`mission-overwatch.html`; dashboard link says **Open Mission Console**); active missions use a full-screen command view with the live feed, event timeline in the right rail, and a compact **Events & input** row beneath the feed
- **Mission Viewer** / **View Live Mission** / **Watch Live Mission** — active-mission viewer in licensed Android and iOS Operator apps for remote live, timeline updates, and quick or manual event logging from a secondary device; Android viewer events use a received full-frame screenshot when video is available
- **Live Overwatch Screen** — relay connection panel in Mission Overwatch
- **Live stream (WebRTC)** — remote live viewing over the internet
- **AI live watch** — Mission Overwatch control that analyzes sampled remote-live frames and logs officer-review alerts when configured; it defaults on unless a saved mission choice disables it
- **Alert on people** — Operator mission setting for optional informational person and hand-to-hand-contact alerts; Mission Overwatch can configure each standard detection separately, and enabled weapon-related alerts receive highest priority
- **Scenario-specific AI targets** / **Mission-specific AI targets** — bounded visible details added to LiveAI's standard detections for an active mission
- **Device Live AI** — cloud-first live analysis from the Operator device when internet is healthy, with automatic on-device person and possible-weapon fallback when cloud analysis is unavailable; Android also exposes the fallback controls in **Pilot console → Flight → Local AI**
- **Person detection** — informational/yellow alert treatment; this is not identity or face recognition
- **Possible weapon / urgent threat** — red alert treatment that still requires human review
- **Automatic AI-alert review** — an officer must **Approve alert** or **Dismiss alert** before a Device Live AI or AI live-watch screenshot can be analyzed or used in a report
- **Mission tools** — Quick Events, typed manual events, browser **Dictate**, and laptop HDMI controls in the compact **Events & input** row beneath the Mission Overwatch feed for active Internet missions
- **Timeline finding review** — accepted AI Review findings and analyzed AI-alert screenshots require **Accept as is** or **Review & edit** in the timeline before AAR use
- **Done — continue** — closed-mission action on Timeline, Media, and AI Review that records completion and advances to the next unfinished review step; Timeline removes remaining unaccepted AI candidates and AI Review rejects remaining undecided findings after confirmation
- **Official mission event** — a human-created event that has not been deleted, an approved automatic AI alert, or an accepted AI Review finding whose timeline analysis is officer-reviewed; use this set for counts, playback markers, reports, exports, and evidence-chain views
- **Quick events** — one-tap event buttons; agency scenarios can define up to seven, with the standard buttons used when the list is empty
- **AI Review analysis coverage** — **Event-focused** reviews original-video intervals around accepted events by default; **Full mission — detailed** reviews the union of selected recording timelines, preferring higher-quality/original footage for overlapping time, then verifies candidate findings against evidence screenshots
- **Mission sharing** — mission-scoped collaborator access managed from **Share** in Mission Overwatch; eligible users are shown by name and email, and shared users can work on that mission without receiving organization-wide access or mission-start authority
- **Organization access** — **Admin/Owner** manages the organization, **Supervisor** oversees all missions and report approvals, and **Officer** works on assigned or self-created missions; **Mission operator** is a separate designation that controls field-app roster visibility and mission start
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

---

## AlphaRelay Training Guide

AlphaRelay turns a field mission into a reviewable record: events, footage, after-action report, custody evidence, and export.

## Five-step workflow

1. **Set up devices** — Install AlphaRelay Operator on the field devices, activate each device license, and sign in to the web app.
2. **Start a mission** — In Operator, tap **Start Mission**, choose how AlphaRelay will receive video, then complete the mission details. Use controller-screen capture, DJI RTMP or Skydio RTSP Controller Livestream, Android/iPad HDMI, or eligible Pilot mode. For laptop HDMI, use **New laptop HDMI mission** in the Dashboard, then connect the UVC card in Mission Overwatch. A compatible DJI Goggles connection can enable Goggles Mode automatically, but the operator still starts the mission from the Operator landing screen.
3. **Watch and log events** — Use Mission Overwatch's full-screen command view for remote live and focused AI live watch. The event timeline stays in the right rail while Quick Events, manual events, dictation, and applicable HDMI controls sit in **Events & input** beneath the feed. A second licensed Android or iOS device can use Mission Viewer for a compact live view and event logging. Controller Livestream can also run gateway-side Live AI independently of the setup phone. Device Live AI uses cloud analysis when available and automatically falls back to on-device detection when it is not.
4. **Review the mission** — Upload or sync footage, then follow Mission Overwatch through **Timeline**, **Media**, and **AI Review** when available. Choose what AI should look for and use **Event-focused** or **Full mission — detailed** coverage. AI Review uploads and reviews original video, verifies candidate findings with evidence screenshots, and shows the latest run plus earlier analysis history. You can leave while it runs and return after the completion email. **Ask AI** uses the selected primary uploaded footage and remains available read-only after approval.
5. **Finalize the record** — Generate the report, seal the evidence listed in the AAR Chain of Custody, submit for supervisor review, and export when ready. Submission locks review work; approval makes record mutations permanently read-only while Ask AI remains available for read-only questions.

## Start here

- **New users:** AlphaRelay in plain English.
- **Pilots:** Start a mission from AlphaRelay Operator.
- **Enterprise controllers:** Use AlphaRelay Operator beside an Android controller's flight app.
- **iPhone and iPad:** Capture an iOS flight app with ReplayKit, receive Controller Livestream, or use a UVC card on USB-C iPad.
- **DJI Avata and DJI Goggles:** Relay the goggles live view through DJI Fly.
- **Overwatch users:** Watch and log in Mission Overwatch.
- **Mission viewers:** Watch and support an active mission from a second licensed Android or iOS device.
- **Controller video inputs:** Use Controller Livestream or a USB HDMI capture card while the native controller keeps aircraft control.
- **Device Live AI:** Understand cloud-first live analysis and automatic on-device fallback.
- **Reviewers:** Import or review footage and generate a report.
- **Admins:** Accounts and organizations.
- **Troubleshooting:** Common fixes.
- **Ask the docs:** Chat with NotebookLM about AlphaRelay (Google sign-in required).

**Note:** **Ask the docs** opens AlphaRelay’s NotebookLM chat in a new tab. You need a Google account and access to the shared notebook. Answers are AI-generated from the documentation — verify against the guides here for operational use.

## Links

- **Web app:** [alpha-relay.com](https://www.alpha-relay.com)
- **AlphaRelay Operator for Android (APK):** [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html)
- **Ask the docs (NotebookLM):** [Chat with the documentation](https://notebooklm.google.com/notebook/d83a28f5-b26c-4908-8d5f-2c7fdfda2603)

---

## AlphaRelay in Plain English

AlphaRelay helps teams run drone or field missions and produce a defensible record afterward.

**AlphaRelay Operator** on Android, iPhone, or iPad runs missions, captures footage, and logs events while the flight app keeps aircraft control. Controller video can arrive through screen capture, DJI RTMP or Skydio RTSP Controller Livestream, Android or iPad UVC HDMI, or laptop/browser HDMI. A second licensed Operator device can use Mission Viewer to watch an active mission and add events without controlling the aircraft. **Mission Overwatch** in a browser is where command staff watch live video, capture laptop HDMI, add events, share a mission with another user, review footage, build after-action reports, seal evidence, and export packages.

## Basic flow

1. Start a live mission from AlphaRelay Operator.
2. Watch live and log command-side events in Mission Overwatch when the pilot device is online.
3. End the mission when field work is complete.
4. Upload and review footage.
5. Generate the after-action report, seal evidence, and export.

## Mission connectivity

| Pilot-device state | What happens |
| --- | --- |
| Online | **Start Mission** creates the mission, syncs it, and starts remote **Live stream (WebRTC)** automatically. |
| Offline | The mission still records locally. Events, footage, and closeout work queue until connectivity returns. |

The current public Operator workflow does not present a **Local Network** mission button. A LAN relay may still appear in older or deployment-specific Android builds, but it is separate from the normal public workflow.

On Android drone controllers, Operator uses **Controller Screen Capture** by default. The controller's native flight app keeps flight control while AlphaRelay captures the controller screen, streams it into the mission, and records one continuous mission video. On detected DJI SDK-controller setups, a listed and connected DJI aircraft can instead unlock **Pilot mode** for AlphaRelay flight controls.

When AlphaRelay cannot be installed on the controller, Android or iOS Operator can create **Controller Livestream** settings: RTMP for DJI or RTSP External Server for Skydio. A UVC card can instead send controller HDMI to Android, USB-C iPad, or a laptop browser. See Controller Livestream and HDMI Capture.

On iPhone and iPad, Operator offers **Controller Screen** through ReplayKit and **Controller Livestream** through RTMP or RTSP. USB-C iPad also supports **HDMI Capture Card**; iPhone does not support UVC capture.

With a DJI Avata and compatible DJI Goggles, AlphaRelay uses **Goggles Mode** on a separate Android device. DJI Fly displays the goggles live view, AlphaRelay starts a mission with no scenario, and the goggles with their compatible controller remain responsible for the aircraft.

Most live missions start from Operator. **Laptop HDMI Capture** is the exception: create it with **New laptop HDMI mission** in the Dashboard and continue in Mission Overwatch. For work that already happened outside AlphaRelay, **Import mission** creates a closed post-flight record.

Operator also includes **Device Live AI**. It uses licensed cloud analysis when internet is healthy and automatically falls back to on-device people and possible-weapon detection when cloud analysis is unavailable. Every alert still requires human review.

---

## The 5-Step Mission Workflow

Use this page as the full lifecycle map. Each step links to a deeper guide.

## 1. Set up devices

Install AlphaRelay Operator, activate each Android or iOS device license, sign in to the web app, and open Mission Overwatch once while online on each browser profile that will use it in the field. A device used for Mission Viewer needs its own licensed installation. If the flight controller cannot run AlphaRelay, prepare DJI RTMP or Skydio RTSP Controller Livestream, or a UVC card connected to Android, USB-C iPad, or a laptop.

→ Devices and licenses · Before you go to the field

## 2. Start a mission

Start most workflows in Operator. Tap **Start Mission**, choose the video source, then set the operator, mission name, scenario, AI targets, and alert options. Android supports controller-screen capture, Controller Livestream, UVC HDMI, and eligible Pilot mode. iPhone/iPad support ReplayKit and Controller Livestream; USB-C iPad also supports UVC HDMI. Controller Livestream shows DJI RTMP fields and, when deployed, Skydio RTSP External Server fields. For laptop HDMI, use **New laptop HDMI mission**, then **Connect & go live** in Mission Overwatch. Stop and upload that browser recording before ending the mission.

→ Start a mission · Mission connectivity · Android Controller Screen Capture · Controller Livestream and HDMI Capture · iPhone and iPad · DJI Avata with DJI Goggles

## 3. Watch and log events

Open the active mission in Mission Overwatch. Its full-screen command view protects the live feed, keeps the event timeline in the right rail, and places Quick Events, manual events, dictation, and applicable HDMI controls in the compact **Events & input** row below. When AI live watch is configured, Mission Overwatch can combine enabled standard detections with scenario-specific and mission-specific visible targets, sample the remote stream, and log alerts for officer review. A Controller Livestream also runs the same server-side Live AI from the gateway, independent of the phone that created the mission. A second licensed Android or iOS Operator device can open Mission Viewer to watch remote live, follow the timeline, and add quick or manual events. On Android, viewer events include a full live-frame screenshot when video is available. Device Live AI can also create alerts while capture is running; cloud analysis hands off automatically to the on-device fallback when needed.

The Command Center brings active mission state, remote-live or sync problems, automatic alerts awaiting review, and report follow-ups into one attention queue. Mission Overwatch refreshes the focused timeline as device and viewer events arrive.

→ View a live mission · Watch in Mission Overwatch · Log events · Device Live AI

## 4. Review the mission

End the mission, let its selected capture recording upload or queue, then follow **Timeline** → **Media** → **AI Review** when available and use **Done — continue** after each completed step. Open **Play with Events** to check markers against video. In AI Review, move at least one tag into **What should AI look for?**, then choose **Event-focused** or **Full mission — detailed**. AlphaRelay reviews original-video intervals, verifies candidate findings against evidence screenshots, and reports video coverage separately from screenshot checks. Analysis continues in the background and sends a completion email. Accept or reject suggested findings; an accepted finding moves to the timeline, where **Accept as is** or **Review & edit** makes it officer-reviewed before it can enter the AAR. **Redo analysis** removes the current AI Review runs and findings while preserving accepted timeline events. **Ask AI** answers from the selected primary uploaded footage rather than mixing in event screenshots or mission photos, and remains available read-only after approval. For work captured outside AlphaRelay, use **Import mission** from **Mission History** to create a closed post-flight record first. Mission History supports organization-shared flags and one-confirmation bulk moves to recoverable Trash. Restore trashed missions within 30 days or, when authorized, permanently delete them sooner with **Delete now**.

→ End a mission · Import a mission · Upload footage · Review footage · Delete or restore a mission

## 5. Finalize the record

Generate the after-action report with AI drafting when configured, resolve **Items Requiring Officer Review**, and use **Mark complete** after every listed item has been addressed. **Seal entire mission** verifies and seals only evidence included in the AAR Chain of Custody. Excluded screenshots remain retained but unsealed. Submit for supervisor approval and export when the record is complete.

→ Generate a report · Seal the mission record · Export offline package

**Warning:** Sealing evidence and supervisor approval are separate steps. Sealing preserves custody hashes. Submitting the report locks timeline, media, mission-name, and AI-review changes while a supervisor decides; approval makes that lock permanent.

## AI across the workflow

- During an active remote stream, **AI live watch** samples frames and logs possible threat indicators for officer review.
- On an Operator device, **Device Live AI** uses cloud analysis while it is healthy and automatically falls back to on-device people and possible-weapon detection when cloud analysis or internet is unavailable.
- For an AI live-watch or Device Live AI alert, choose **Approve alert** to allow configured screenshot analysis and report eligibility, or **Dismiss alert** to exclude it. Then review any resulting analysis with **Accept as is** or **Review & edit**.
- Mission Overwatch, device cloud analysis, and the on-device fallback coordinate ownership to reduce duplicate alerts. The fallback resumes automatically when a healthy cloud handoff ends.
- After a synced mission closes, **AI Review** analyzes operator-selected targets using **Event-focused** or **Full mission — detailed** coverage. Event-focused analysis reviews original-video intervals around accepted events without treating their existing screenshots as analysis input. Full mission reviews the union of selected recording timelines, preferring higher-quality or original footage where recordings overlap. Candidate findings are then checked against evidence screenshots before review.
- Inside AI Review, **Ask AI** answers mission-specific questions from the selected primary uploaded footage and shows its confidence, supporting observations, limitations, and supporting evidence. It remains read-only after approval while record mutations stay locked.

AI output is draft material. Verify every alert, finding, and answer against the live view or source media before using it in an operational decision, report, or evidence workflow.

Official event counts and evidence surfaces include every undeleted human-created event, approved automatic alerts, and officer-reviewed AI findings. Pending or dismissed automatic alerts and accepted AI Review findings without Timeline officer review remain review material only.

---

## Devices and Roles

| Role | Device | Responsibility |
| --- | --- | --- |
| Pilot | AlphaRelay Operator (Android, iPhone, or iPad) plus the flight app or supported Pilot-mode controls | Selects the current operator, starts missions, flies through the applicable flight interface, logs field events, ends mission, uploads footage |
| Controller-video operator | Android/iOS Operator device or laptop plus an RTMP-capable or HDMI-output flight controller | Creates a Controller Livestream destination or receives HDMI video while the flight controller retains aircraft control |
| Mission viewer | Operator on a second licensed Android or iOS device | Watches active remote live, follows timeline events and alerts, and logs quick or manual events |
| Overwatch user | Browser — Mission Overwatch | Relay viewing, remote live, command-side events, review, report, seal, export |
| Reviewer / officer | Browser — Mission Overwatch | Checks timeline, footage, report draft, and custody |
| Supervisor | Browser — Mission Dashboard / Overwatch | Approves or returns after-action reports |
| Org admin | Browser — Organization Settings | Members, roles, agency scenarios, licenses, time zone, storage, and read-only Activity Log |

Organization access uses four roles. **Admin/Owner** manages the organization and every mission. **Supervisor** oversees every mission and approves or returns reports. **Officer** works on missions they created, were assigned to, or received through mission sharing. **Mission operator** is a separate designation that can be applied to any member role; it controls whether the person appears in the AlphaRelay Operator field roster and can start missions.

## Android drone controllers

On Android drone controllers, the pilot device can run **Controller Screen Capture**. The controller's native flight app handles flight control while AlphaRelay captures the controller screen, streams it to the active mission, records controller-screen footage, and logs events.

On a detected DJI SDK-controller setup, AlphaRelay also presents **Pilot mode**. It remains locked until the operator confirms a listed DJI MSDK 5.17 aircraft and AlphaRelay verifies a live flight-controller connection. Pilot mode lets AlphaRelay own the DJI SDK connection and present direct flight and camera controls; availability still depends on the aircraft, controller, payload, firmware, and field validation.

For a DJI Avata with compatible DJI Goggles, the pilot operates through the goggles and their compatible controller. A separate Android phone or tablet runs DJI Fly and AlphaRelay **Goggles Mode** to relay and record the goggles live view.

## Controller video from a separate flight controller

Use **Controller Livestream** when a DJI controller can publish to RTMP or a Skydio controller supports RTSP External Server. A licensed Android, iPhone, or iPad creates the mission and shows the matching RTMP or RTSP values. Internet is required.

Use **HDMI Capture Card** when the controller exposes HDMI output. Connect it through a UVC card to Android Operator, a USB-C iPad, or a laptop browser. The laptop path starts from **New laptop HDMI mission** and requires no phone or tablet app. None of these workflows transfers aircraft control away from the flight controller.

## iPhone and iPad

On iOS 26, AlphaRelay Operator can use ReplayKit screen capture, Controller Livestream, or USB-C iPad UVC HDMI capture. iPhone does not expose UVC capture to AlphaRelay. The flight app or controller remains responsible for aircraft control.

## Secondary mission viewer

On a licensed Android device, tap **View Live Mission**. On iPhone or iPad, tap **Watch Live Mission**. The viewer shows remote video when available, refreshes the live timeline and alerts, and can log scenario quick events or manual events. It cannot start missions, control aircraft, or perform closed-mission review.

## Key rules

- Most missions start from Operator. **Laptop HDMI Capture** starts from **New laptop HDMI mission** in Mission Dashboard and continues in Mission Overwatch.
- The landing screen separates **Start a Mission** from **View a Live Mission**. Starting first opens **Choose video source**, then the operator, scenario, mission name, AI targets, and alert settings for that source.
- Open missions from **Mission Dashboard** (link may say **Open Mission Console**).
- Operator presents one **Start Mission** action and starts remote live automatically when validated internet is available.
- Mission Overwatch keeps the live **Event timeline** in the right rail. Quick Events, typed manual events, browser dictation, and applicable laptop HDMI controls stay in the compact **Events & input** row beneath the feed.
- **Local Network** is a deployment-specific Android LAN relay path and is not presented by the current public Operator workflow.
- **Controller Screen Capture** is automatic on integrated Android drone controllers and the recommended default on detected DJI SDK-controller setups; it is not a separate mission button.
- **HDMI Capture Card** works through Android USB host/OTG, USB-C iPad, or a laptop browser; iPhone is not a UVC input device.
- **Controller Livestream** works from Android or iOS Operator and supports DJI RTMP plus Skydio RTSP External Server.
- **Pilot mode** is an explicit alternative on eligible DJI SDK-controller setups and requires supported-aircraft confirmation plus a successful live connection check.
- Compatible DJI Goggles can enable **Goggles Mode** automatically over USB, but the operator still taps **Start Mission** before capture begins.
- Mission Viewer requires internet and a valid Operator license; only active missions in that license's organization appear. It normally runs on a second device, but the Android device that creates a Controller Livestream also opens that mission in Mission Viewer.

## Share one mission

Authorized members of a mission team can click **Share** in Mission Overwatch. The dialog lists eligible users by name and email; click **Share** beside a person, then confirm they appear under **People with access**. Shared collaborators can review and work on that mission, including custody and official exports, without receiving organization-wide mission access or permission to start new missions. Use **Remove** to revoke the mission share.

---

## Mission Connectivity

AlphaRelay Operator presents one **Start Mission** action. It creates an Internet mission and automatically starts **Live stream (WebRTC)** when the device has validated internet.

## Online mission

Use the normal **Start Mission** workflow on cellular, Wi-Fi, Ethernet, or VPN internet.

- Mission metadata and events sync to the cloud.
- Remote live starts automatically.
- Mission Overwatch can watch live and log quick, typed, or dictated events.
- Footage may upload during closeout or continue from the durable upload queue.

## Offline mission

If validated internet is unavailable, **Start Mission** still begins local capture and event logging. Remote live cannot start, and cloud work waits in the sync and footage queues. When connectivity returns, queued Android footage resumes automatically; mission metadata and events also retry through the normal sync path.

## Deployment-specific Local Network relay

The current public Operator workflow does not show a **Local Network** mission button. Some older or deployment-specific Android builds may expose **Local Network** and **Live Overwatch Screen** for same-Wi-Fi relay viewing. In those builds:

- The pilot and Mission Overwatch devices must share a reachable Wi-Fi network.
- **Live Overwatch Screen** connects to the pilot device by LAN IP.
- Remote live and cloud sync remain separate internet paths.

## Quick decision

| Situation | Workflow |
| --- | --- |
| Pilot device has internet | **Start Mission**; remote live starts automatically |
| No usable internet | **Start Mission**; capture locally and sync later |
| Remote viewers need live video | Keep the pilot device online and open **Live stream (WebRTC)** in Mission Overwatch |
| A second licensed Android or iOS device needs a compact live view | Open Mission Viewer; internet is required for the mission list, timeline, alerts, events, and video |
| Flight controller supports DJI RTMP or Skydio RTSP External Server but cannot install AlphaRelay | Create **Controller Livestream** from a licensed Android or iOS device; internet is required on both devices |
| Flight controller has HDMI output | Connect a UVC card to Android, USB-C iPad, or a laptop; the laptop path starts with **New laptop HDMI mission** |
| Your deployment exposes **Local Network** | Use its LAN relay instructions on the same reachable Wi-Fi |

**Note:** Remote live and cloud sync use internet. A deployment-specific LAN relay uses local Wi-Fi and is a separate connection path.

See Connectivity for what requires internet vs local Wi‑Fi.

## Controller Screen Capture

On integrated Android drone controllers, AlphaRelay enters **Controller Screen Capture** after **Start Mission**. On detected DJI SDK-controller setups, it is the recommended default beside the optional verified **Pilot mode**. Controller Screen Capture changes the live source and aircraft-control behavior, not the mission-start action.

In this mode, the controller's native flight app controls the aircraft while AlphaRelay captures the controller screen, streams it to the mission, records screen footage, and logs events.

→ Controller Screen Capture

## Controller Livestream and HDMI Capture

These workflows keep aircraft control on a separate flight controller. Controller Livestream is configured from Android or iOS Operator. HDMI can be received by Android, USB-C iPad, or directly in Mission Overwatch on a laptop. Laptop HDMI is the only live mission that starts from the browser rather than Operator.

→ Controller Livestream and HDMI Capture

## DJI Avata with DJI Goggles

Goggles Mode requires internet for remote live and sync. On a prepared Android device, a wired connection to compatible DJI Goggles turns on the mode automatically, bypasses mission and scenario selection, and starts remote live from the DJI Fly goggles view.

→ DJI Avata with DJI Goggles

---

## Controller Screen Capture

Controller Screen Capture lets AlphaRelay run beside the native flight app on Android drone controllers. The controller's native flight app remains responsible for aircraft operation; AlphaRelay captures the controller screen, streams it into the mission, records mission footage, and logs events.

This is the recommended capture path. On integrated Android drone controllers it turns on automatically after **Start Mission**. On a detected DJI SDK-controller setup, choose **Controller Screen Capture — Recommended** instead of **Pilot mode** when the native flight app should stay in control.

**Note:** Using a DJI Avata with compatible DJI Goggles and a separate Android phone or tablet? Follow the dedicated DJI Avata with DJI Goggles workflow instead.

## Where it is available

Controller Screen Capture is available on Android-based drone controllers that can install **AlphaRelay Operator** and grant Android screen capture permission. It is not limited to one controller manufacturer.

AlphaRelay detects known drone-controller identity strings, including DJI RC / RC Pro / RC Plus / RM / Matrice controller families, Autel smart controllers, Herelink / CubePilot controllers, and Inspired Flight GS-ONE controllers. Generic Android phones, tablets, and rugged tablets use the normal pilot workflow unless they are connected to compatible DJI Goggles or Goggles Mode is enabled manually.

When the Android pilot device is connected to a detected DJI SDK remote controller, the mission screen also offers **Pilot mode**. AlphaRelay does not select it automatically: the operator must confirm a listed DJI MSDK 5.17 aircraft, and AlphaRelay must verify a live flight-controller connection before **Start Mission** unlocks. See Start a mission for the current 12-aircraft catalog and verification steps.

## Install on a controller

You do not need to enable Android Developer mode to install AlphaRelay.

1. Connect the controller to internet.
2. Open the controller web browser.
3. Download **AlphaRelay Operator** from the dashboard app download link. If needed, open [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html) directly.
4. When Android asks about installing unknown apps, allow the browser or file manager to **install unknown apps** from that source.
5. Install and open **AlphaRelay Operator**.
6. Grant requested permissions.
7. Activate the app with the short controller pairing code generated by an admin, or use another device license method from Devices and Licenses.

## What changes

- The controller's native flight app remains responsible for flight, camera, and safety controls.
- AlphaRelay disables direct aircraft commands in Operator.
- The live source becomes the controller screen instead of an in-app aircraft camera preview.
- **Takeoff**, **Land**, camera controls, and other aircraft commands in AlphaRelay are blocked.
- AlphaRelay records one continuous controller-screen MP4 for the mission and queues it after closeout.
- Voice relay can still create timeline events when microphone permission is granted.
- **Device Live AI** uses licensed cloud analysis when internet is healthy and automatically falls back to on-device people and possible-weapon detection when it is not.

## Start a mission

1. Open AlphaRelay on the supported controller.
2. Tap **Start Mission**, then choose **Controller Screen**.
3. Select the operator when an agency roster is available, choose a scenario template, enter the mission name, and optionally add mission-specific AI targets.
4. If AlphaRelay shows DJI SDK capture-mode choices, keep **Controller Screen Capture — Recommended** selected.
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
- Return to Operator for the dedicated active-mission dashboard. It shows capture, live-stream, Device Live AI, Overwatch AI, alert-banner, queued-event, queued-footage, and mission-time status, plus quick events, manual screenshot-backed events, **Sync now**, and **Stop and complete mission**.
- Use **Update AI targets** to change mission-only visible targets without restarting. Offline edits remain queued until sync succeeds.
- Device Live AI uses cloud analysis when available. The on-device fallback and direct Android alerts continue without internet; timeline sync and cloud follow-up wait for connectivity.
- If you need AlphaRelay controls during the mission, return to AlphaRelay from recent apps or the notification, make the update, then return to the native flight app. The recording follows the visible screen.

## Stop and upload

After the flight, close the mission from AlphaRelay or from the notification:

1. Land and finish any required work in the native flight app.
2. Pull down the Android notification shade.
3. Find the **Controller Screen Capture** notification.
4. Tap **Stop Mission**.
5. Let AlphaRelay reopen and finish mission closeout.

The notification action uses the same closeout path as the in-app **Stop and complete mission** button. AlphaRelay finalizes the mission-long controller-screen recording, queues it for upload, closes the mission record, and removes the foreground capture notification when capture has stopped.

On a supported DJI SDK 5 setup that AlphaRelay confirmed during mission setup, closeout can also offer **Reconnect controller for SD footage**. The controller-screen recording is already safe, and the mission stays open while Android transfers USB ownership from DJI Fly to AlphaRelay:

1. Open DJI Fly app info and tap **Force stop**.
2. Open **Open by default** and clear DJI Fly's defaults.
3. Return to AlphaRelay, unplug and reconnect the controller cable, and choose **AlphaRelay → Just once** in Android's USB prompt.
4. Keep the aircraft and controller powered on while AlphaRelay copies the aircraft video that began during this mission.

The matching clip is queued as an optional **Aircraft original** behind the controller-screen evidence, then AlphaRelay closes the mission. If the USB handoff or SD pull fails, the mission remains open for retry and the controller-screen recording remains safe. Choose **Close without aircraft copy** only when you intend to finish with controller-screen footage alone. AlphaRelay will not attach a pre-mission SD clip as a fallback.

If you are already in AlphaRelay, tap **Stop Mission** there instead. Do not force-close AlphaRelay or stop Android screen capture as the normal closeout method.

Queued recordings are stored durably and resume uploading automatically when validated internet returns, including after the app process restarts. Keep the controller powered on, and do not force-stop or uninstall AlphaRelay while uploads are pending.

## Limits

- AlphaRelay does not fly the aircraft in Controller Screen Capture.
- The captured footage is the controller screen, including native flight-app overlays, not a raw camera file.
- Android screen capture permission is required every time capture starts.
- The optional DJI SDK 5 aircraft-original handoff depends on the exact controller, USB routing, aircraft, SD card, DJI Fly defaults, and firmware. Validate it in training; it is not available for every Controller Screen Capture setup.
- If microphone permission or speech recognition is unavailable, voice relay is disabled but screen capture can still run.
- Controller-screen overlays can affect Live AI. AlphaRelay instructs cloud analysis to ignore notification text and filters repeated detections, but every alert still requires human review.

→ Start a mission · Device Live AI · iPhone and iPad · Watch in Mission Overwatch · Upload footage

---

## Controller Livestream and HDMI Capture

Use these workflows when the flight controller should keep aircraft control but cannot run AlphaRelay Operator, or when you want a direct controller-video input instead of screen capture.

- **Controller Livestream:** A DJI controller publishes to AlphaRelay with RTMP, or a Skydio controller uses RTSP External Server. Set up the mission from AlphaRelay Operator on Android, iPhone, or iPad. Internet is required during capture.
- **Laptop HDMI Capture:** Connect the controller through a USB Video Class (UVC) capture card to a laptop and start the mission from the web app. No phone or tablet app is required. Local evidence recording can continue through a temporary internet interruption.
- **Operator HDMI Capture:** Connect a UVC card to a compatible Android device or USB-C iPad. The Operator app records the received video and can continue locally without internet. iPhone does not expose UVC capture to this workflow.

In every workflow, fly from the controller's native flight application. AlphaRelay does not take aircraft control.

## Controller Livestream

Controller Livestream creates a mission-scoped publishing destination from a licensed Operator device. AlphaRelay shows both DJI RTMP details and, when the deployed gateway supports it, Skydio RTSP External Server details. RTMP supports either one complete URL field or separate server and stream-key fields.

### Requirements

- A licensed Android, iPhone, or iPad running AlphaRelay Operator
- Validated internet on the Operator device and streaming controller
- A DJI controller or flight application that accepts custom RTMP, or a Skydio controller with RTSP External Server
- A separate flight controller; the setup device does not open or control its flight app

### Start and watch

1. Open AlphaRelay Operator and select **Controller Livestream** as the video source.
2. Select the operator and scenario, name the mission, and review the AI targets and people-alert setting.
3. Tap **Create Controller Livestream** on Android or **Set Up Controller Livestream** on iPhone or iPad.
4. Open the separate controller's livestream settings.
5. For DJI, use **RTMP URL — one-field screens**, or enter **Server URL — two-field screens** and **Stream key — two-field screens** separately. For Skydio, open **Global Settings → Sharing → RTSP**, choose the external-server option, then enter AlphaRelay's **Server address**, **Port**, and **Stream name**.
6. Start streaming from the controller.
7. Tap **View Live Mission** on Android or **View live mission** on iPhone or iPad and wait for video. Mission Overwatch can open the same active mission.

If the controller disconnects, restart its publisher with the same mission destination while the mission remains active. Reopen **Show Livestream Setup** when you need to see the values again. AlphaRelay uses a six-digit RTMP stream key and a separate six-digit RTSP stream name.

**Warning:** Treat the RTMP and RTSP addresses, keys, and stream names as publishing credentials. Enter them only on the intended controller and do not place them in reports, screenshots, or public messages.

The Controller Livestream gateway runs server-side Live AI while the mission is active, so analysis does not depend on the phone that created the mission remaining on the viewer. An Operator device viewing the stream can still show alerts and create screenshot-backed quick, manual, or `Relay` voice events from the received full video frame. AlphaRelay coordinates gateway, browser, and device analysis to reduce duplicate alerts.

When field work is complete, stop the controller's livestream first. Then close the mission in Mission Overwatch or Operator. AlphaRelay finalizes the received Controller Livestream recording into the mission record.

## Laptop HDMI Capture

Use this physical path:

```text
Controller HDMI out -> capture card HDMI in -> capture card USB -> laptop
```

1. In **Mission Dashboard**, click **New laptop HDMI mission**.
2. Name the mission, optionally select a scenario, and click **Create mission & set up HDMI**.
3. In Mission Overwatch, find **Laptop HDMI Capture** in the **Events & input** row beneath the live feed.
4. Grant browser camera permission and select the capture card.
5. Click **Connect & go live**. AlphaRelay starts the recoverable local evidence recording and remote live together.
6. Confirm the same full frame appears in the preview and supplies Live AI and event screenshots.
7. Keep the Mission Overwatch tab open. Before ending the mission, click **Stop & upload** and wait for the recording to be secured.

Laptop HDMI is video-only. AlphaRelay records MP4 when the browser supports it and WebM otherwise. If the tab or browser is interrupted, reopen the same mission and use **Recover interrupted recording**; do not clear browser data before recovery. A laptop HDMI output is not an input—a physical UVC capture card is required.

## Operator HDMI Capture

Use one of these paths:

- Controller HDMI out → UVC card → Android device with USB host/OTG
- Controller HDMI out → UVC card → USB-C iPad

A powered USB hub may be necessary when the card draws more power than the device can provide.

### Android

1. Connect the powered controller, card, and Android device before mission setup.
2. Open Operator, select the operator and scenario, and review the mission settings.
3. Select **HDMI Capture Card**. Operator may select it automatically when it detects a UVC input.
4. Tap **Start Mission** and grant the Android camera and USB-device prompts.
5. Confirm the preview changes from **Waiting for signal** to **Capturing** before flight.

### USB-C iPad

1. Connect the powered controller and UVC card to the iPad.
2. In mission setup, choose **HDMI Capture Card** and tap **Start HDMI Capture Mission**.
3. Grant camera permission and confirm the full-frame preview before flight.
4. If the card disconnects, reconnect it and tap **Connect or retry HDMI input**. The prior segment finalizes and a new segment begins.

Operator HDMI follows the normal local recording, remote-live, Device Live AI, event-screenshot, upload, review, and custody workflow. It is video-only; optional voice events use the Android device or iPad microphone, not capture-card USB/UAC audio.

## Before operational use

Test the exact controller, capture card, cable or hub, receiving device, browser when applicable, resolution, orientation, sustained recording, and disconnect/reconnect behavior in training. Confirm a stable 16:9 preview and playable closeout footage. For Controller Livestream, confirm the correct DJI RTMP or Skydio RTSP entry and verify that the publisher can reconnect.

→ Start a mission · Use Operator on iPhone or iPad · Watch in Mission Overwatch · Upload footage · Troubleshooting

---

## Use AlphaRelay Operator on iPhone or iPad

**AlphaRelay Operator** on iPhone and iPad can capture the controller screen with ReplayKit, set up a DJI RTMP or Skydio RTSP Controller Livestream, or—on USB-C iPad—receive HDMI video through a UVC capture card. Your flight app or controller keeps aircraft control.

## Requirements

- iPhone or iPad running iOS 26
- AlphaRelay Operator installed through TestFlight
- An Operator device license or one-installation pairing code
- Screen Recording permission; microphone and speech-recognition permission when voice events are needed
- Internet for remote live, immediate sync, cloud Live AI, Mission Viewer, and upload; saved events and footage can retry later

## Install the app

1. Install Apple's [**TestFlight**](https://apps.apple.com/us/app/testflight/id899247664) app from the App Store.
2. Open the [**AlphaRelay Operator TestFlight invitation**](https://testflight.apple.com/join/AdxfvTca).

## Activate the device

1. Open **AlphaRelay Operator**.
2. Scan the organization license QR code, enter the 8-character pairing code, or enter the full `ar-…` license key.
3. Select the operator when the organization roster contains more than one operator.

The license is stored on the device. Operator does not use the web-app email and password for device activation.

## Choose the video source

From **What do you want to do?**, tap **Start a Mission**, then choose **Controller Screen**, **Controller Livestream**, or, on supported iPads, **HDMI Capture Card**. The HDMI option is marked **IPAD ONLY** because iPhone does not expose UVC video capture to this workflow. Use **Watch Live Mission** from the landing screen to join a mission that is already active.

## Start Controller Screen capture

1. Open **AlphaRelay Operator** and choose a built-in or agency scenario, or **No scenario**.
2. Confirm the operator, enter the mission name, optionally add up to eight **Mission-specific AI targets**, and choose whether **Alert on people** should include routine person and hand-to-hand-contact alerts. Other enabled detections and mission-specific targets remain active when it is off.
3. Tap **Start Mission**.
4. In the iOS broadcast picker, choose **AlphaRelay Capture**. Enable the microphone when the recording needs microphone audio, then start the broadcast.
5. Open the flight app. Keep the iOS screen-recording indicator active while AlphaRelay captures in the background.

Operator publishes the captured display through **Live stream (WebRTC)** when internet is available. The active-mission screen shows capture, live-stream, Device Live AI, Overwatch AI, alert, queued-event, queued-footage, and mission-time status. If capture stops, return to Operator and tap **Choose display and start capture**.

## Start Controller Livestream

1. Choose **Controller Livestream**, complete mission setup, and tap **Set Up Controller Livestream**.
2. For DJI, enter **RTMP URL — one-field screens**, or enter **Server URL — two-field screens** and **Stream key — two-field screens** separately. For Skydio, use RTSP External Server and enter **Server address**, **Port**, and **Stream name**.
3. Start the controller publisher, then tap **View live mission** and confirm video arrives.

Internet is required on both devices. Stop the publisher before closing the mission so its recording can finalize.

## Start HDMI Capture on iPad

1. Connect the controller HDMI output through a UVC card to the USB-C iPad.
2. Choose **HDMI Capture Card**, complete setup, and tap **Start HDMI Capture Mission**.
3. Grant camera permission and verify the full video frame before flight.
4. After a disconnect, reconnect the card and tap **Connect or retry HDMI input**. Operator finalizes the prior segment and begins another.

This path is video-only. Voice events use the iPad microphone; capture-card USB/UAC audio is not added to the recording.

## Log and update the mission

- Use scenario quick events or **Log event with current frame**. Operator attaches a fresh controller-screen image when capture can provide one.
- Leave **Voice events** enabled to say `Relay` followed by the note. Operator saves the note with the latest captured frame.
- Use **Update AI targets** to change mission-only visible targets without restarting the mission. Offline edits remain queued for cloud sync.
- When Live Activities are enabled, Live AI alerts use a concise one-line Lock Screen or Dynamic Island presentation designed for the landscape flight-app view, then collapse back to monitoring after about one second. Urgent weapon-like alerts use red treatment; informational people alerts use yellow treatment.
- If a mission Live Activity is unavailable, Operator uses the **Screen Sharing** notification fallback. Allow time-sensitive notifications so alerts can appear over the flight app.
- Alert presentations are review prompts, not confirmed findings. The mission timeline remains the durable review surface after the brief on-screen alert clears.

With working internet, Device Live AI uses licensed server-side analysis without storing an OpenAI key in the app. If cloud analysis is unavailable, Operator automatically falls back to on-device people detection and possible-weapon verification. Every alert still requires human review.

## Complete the mission

1. Return to AlphaRelay Operator.
2. Tap **Sync now** when pending items remain and connectivity is available.
3. Tap **Stop and complete mission**.
4. Keep Operator open while the selected capture source finalizes and saved events and footage are handed off.

Operator hashes completed local recordings and uses the normal custody-aware upload flow. If ReplayKit finishes a playable file but its handoff is interrupted, Operator can recover the recording when it next processes the queue.

## Watch another active mission

From mission setup, tap **Watch Live Mission**. Choose an active mission in the same licensed organization to watch remote video, follow its live timeline and alerts, and add quick or manual events. Mission Viewer cannot start the mission or control the aircraft; event entry becomes read-only after the mission closes.

## iOS boundaries

- Operator captures the selected iOS display or app; it does not control the aircraft.
- USB-C iPad supports UVC HDMI capture; iPhone does not. Use RTMP or RTSP Controller Livestream when an iPhone must support a separate controller.
- iOS does not use Android's DJI Goggles USB/LogicLink auto-detection or the deployment-specific Android local-network relay.
- iOS uses its own on-device fallback rather than Android's full multi-object detector.
- Dynamic Island, Live Activity, notification-fallback timing, and landscape placement vary by iPhone model and iOS settings; verify them on the physical flight device before operational use.
- ReplayKit capture must be verified on a physical device; Simulator behavior does not prove field capture.

→ Controller Screen Capture on Android · View a live mission · Device Live AI · Upload footage

---

## DJI Avata with DJI Goggles

Use **Goggles Mode** to run an AlphaRelay mission with a DJI Avata, compatible DJI Goggles, and a compatible controller. The goggles and controller remain responsible for the aircraft. A separate Android phone or tablet receives the goggles live view in DJI Fly, and AlphaRelay captures that DJI Fly screen for remote live viewing, event screenshots, and mission footage.

**Note:** This workflow differs from Controller Screen Capture on an Android drone controller. The DJI Avata workflow uses DJI Fly on a separate Android device instead of a native flight app on an Android drone controller.

## What you need

- A DJI Avata, compatible DJI Goggles, and a compatible motion or FPV remote controller, powered on, activated, updated, and linked
- An Android phone or tablet with both **DJI Fly** and **AlphaRelay Operator** installed
- An active AlphaRelay device license
- Android screen capture permission
- Internet on the Android device for mission sync, remote live, and footage upload
- For the automatic wired workflow: a compatible USB data/OTG cable for the goggles and Android device

Run a complete test mission with the same phone, cables, and network before operational use.

## Install and activate the Android apps

1. Install **DJI Fly** on the Android device from DJI's official [DJI Fly download page](https://www.dji.com/downloads/djiapp/dji-fly).
2. Download **AlphaRelay Operator** from [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html).
3. If Android prompts for unknown-source installation, allow the browser or file manager to **install unknown apps** from that source.
4. Open AlphaRelay Operator, grant the requested permissions, and activate it with the device license or short controller pairing code.

Android Developer mode is not required. See Devices and Licenses for all AlphaRelay activation options.

## Show the goggles live view in DJI Fly

Live-view sharing options vary by goggles model. Confirm that DJI supports your exact aircraft, goggles, and controller combination in [DJI's compatibility guide](https://repair.dji.com/help/content?customId=01700010143&lang=en&paperDocType=ARTICLE&re=US&spaceId=17), then follow the manufacturer's instructions to show the goggles live view in DJI Fly on the Android device.

### Wired — recommended for automatic detection

1. Power on the DJI Avata, DJI Goggles, and paired controller. Confirm the aircraft and controls are linked.
2. Connect the goggles to the Android device using the compatible USB data/OTG cable for your hardware.
3. Open **DJI Fly** on the Android device.
4. Tap **GO FLY** and confirm that the goggles live view appears on the Android screen.

AlphaRelay can identify compatible DJI Goggles over the wired USB connection and turn on Goggles Mode automatically. It still waits for you to start the mission from the Operator landing screen.

### Wireless

1. In the DJI Goggles, start wireless live-view sharing using the option provided by your goggles model.
2. On the Android device, turn on Wi-Fi, Bluetooth, and Location.
3. Open DJI Fly, select the goggles from the connection prompt, and tap **Watch Liveview**.
4. The first time you connect, follow the DJI Fly prompt to confirm the goggles connection.

Wireless sharing uses the Android device's Wi-Fi connection. Keep cellular data available for AlphaRelay remote live, mission sync, and upload.

If Goggles Mode does not turn on automatically during a wireless connection, enable **Use DJI Fly / goggles video feed** in Operator before starting. The setting remains enabled for the next DJI Avata mission; turn it off when returning to the normal phone or tablet workflow.

## Start the AlphaRelay mission

With the DJI Fly live view working:

1. Open **AlphaRelay Operator** on the same Android device.
2. Complete any first-time permission or license prompts.
3. Tap **Start Mission**. AlphaRelay keeps the compatible Goggles Mode selection and skips ordinary scenario selection.
4. If Android asks to share or record the screen, approve the screen capture request.
5. Wait for AlphaRelay to start capture and return you to DJI Fly.
6. Confirm that the DJI Fly live view is visible again before takeoff.

After you tap **Start Mission** with compatible DJI Goggles detected, AlphaRelay skips ordinary mission and scenario setup. It then:

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
- Goggles Mode uses the cloud-backed mission workflow; the current Operator workflow does not present a Local Network mission option.
- Remote live, cloud sync, and upload require a usable internet connection on the Android device.
- Android screen capture permission is required each time capture starts.
- If DJI Fly is not installed, AlphaRelay cannot open it automatically.
- If you need the original aircraft recording, copy it from the DJI Avata after the flight. In the closed mission, open **Media → Mission footage**, choose **Aircraft original**, and use **Add optional recording**. MP4 and MOV are supported.
- AlphaRelay's DJI Fly capture remains the mission timeline. Use **Align with AlphaRelay capture…** to match the optional aircraft recording at a recognizable shared moment; the two recordings do not need to start together.

→ Watch in Mission Overwatch · End a mission · Upload footage

---

## First Training Mission

Run a short test mission to learn the workflow end to end.

## Steps

1. Open AlphaRelay Operator, tap **Start a Mission**, and choose how AlphaRelay will receive video.
2. Select the test operator when an agency roster is available, pick a scenario template or **No scenario template**, enter `Training mission` as the mission name, and add one harmless mission-specific AI target if testing Live AI.
3. Start the selected video path and confirm it is healthy: approve screen capture, confirm **Capturing** for HDMI, or create **Controller Livestream**, enter its DJI RTMP or Skydio RTSP values on the separate controller, and start that publisher. Confirm remote live when the workflow is online.
4. Open the mission from Mission Dashboard and select **Live stream (WebRTC)**.
5. If the team will use Mission Viewer, open Operator on the second licensed Android or iOS device, choose the active mission, and confirm video, timeline, and alert updates.
6. Add one event from Operator (quick event, manual event with current frame, or voice: `relay `).
7. Add one event from Mission Overwatch. Try **Dictate**, review the transcript, then click **Log Manual Event**.
8. If Device Live AI will be used, confirm it is enabled and perform a safe person-detection check with internet, then verify automatic on-device fallback in a controlled connectivity test. Confirm the informational/yellow treatment. Do not simulate a weapon alert with a real weapon.
9. Run a short, safe exercise.
10. Complete the normal closeout for the selected path. Stop a Controller Livestream publisher first; for HDMI, verify the last needed frame arrived; for a supported DJI SDK 5 aircraft-original handoff, practice the USB reconnect without risking operational footage. Then use **Stop and complete mission**, **Stop Mission**, **Close Active Mission**, or **End Mission** as the workflow presents it.
11. Confirm footage uploaded or is queued (see upload banner / status).
12. Review the Timeline. For each test Device Live AI or AI live-watch alert, practice **Approve alert** or **Dismiss alert**. Review any available image analysis with **Accept as is** or **Review & edit**, then click **Done — continue**.
13. Under **Media**, open **Play with Events**, confirm markers appear, and click **Done — continue** after checking footage and photos.
14. If AI Review is configured, confirm the status distinguishes original-video review from evidence-screenshot verification, expand any related-sighting group, accept one safe test finding, reject the rest, and click **Done — continue**. Return to Timeline if the accepted finding reopens it for officer review.
15. Generate the after-action report and walk through seal / approval / export if your workflow uses them.

## Debrief

- Did the mission and remote live start as expected for the available connectivity?
- Did events appear on the timeline?
- Did Mission Viewer show the active mission and stop event logging after close?
- On Android, did a viewer event attach the complete live frame and show its screenshot in the timeline?
- Did Device Live AI avoid repeated alerts for one continuously visible test subject?
- Did cloud analysis hand off cleanly to the on-device fallback and later resume without duplicate alerts?
- Did scenario-specific targets appear, and could you save one harmless mission-specific target?
- Was footage available or queued as expected?
- Did Controller Screen Capture produce one continuous playable mission recording?
- Did Controller Livestream or HDMI Capture, when tested, preserve the full 16:9 frame, recover from a controlled disconnect, and finalize playable footage?
- Did Controller Livestream Live AI continue from the gateway without depending on the setup phone's viewer?
- On a supported DJI SDK 5 setup, did the optional aircraft-original handoff select only mission-time SD footage and preserve the controller-screen recording if the pull failed?
- Were any AI-derived timeline findings reviewed before report generation?
- Did AI Review report actual video coverage separately from evidence screenshots checked?
- Was the report understandable before submission?

Repeat this exercise when devices, networks, or aircraft change.

---

## Before You Go to the Field

## Checklist

1. Charge the pilot tablet, phone, or drone controller and confirm aircraft/controller are ready.
2. Install or update **AlphaRelay Operator**. Download the Android APK from [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html); use the organization-provided iOS app on iPhone or iPad.
3. Confirm the **device license** is active (scan QR, enter an `ar-…` key, or use a non-expiring one-installation pairing code).
4. Sign in to the web app with the correct operator account. On shared Operator devices, refresh online and confirm the current pilot appears in the operator selector.
5. Open **Mission Overwatch** once while online on each browser that will use it in the field (installs the offline app shell).
6. Run a test **Start Mission** flow and confirm remote live starts automatically when the pilot device is online.
7. Confirm the Mission Overwatch browser can use its microphone if the team plans to use **Dictate** for manual events.
8. If a second Android or iOS device will use Mission Viewer, activate its own license and test that it can see an active mission, remote video, timeline events, and alerts.
9. If Device Live AI will be used, grant notification permission, confirm the intended Android settings under **Pilot console → Flight → Local AI**, review the per-detection choices in Mission Overwatch, and run a safe cloud-to-fallback detection test. Keep safety-critical detections enabled when your operating plan requires them.
10. For Android drone controllers: install AlphaRelay Operator, activate the device license, run a test **Controller Screen Capture** mission, and confirm Android screen capture permission works. If the crew will use **Pilot mode**, also confirm the aircraft appears in the supported list and passes AlphaRelay's live connection check.
11. For **Controller Livestream**, confirm the controller accepts the displayed DJI RTMP or Skydio RTSP External Server values, can reconnect, and produces playable closeout footage. RTMP stream keys and RTSP stream names are separate six-digit values.
12. For **HDMI Capture Card**, test the exact controller, UVC card, cable or powered hub, Android device, USB-C iPad, or laptop browser as applicable. Verify the 16:9 signal, sustained recording, and disconnect/recovery path.
13. For laptop HDMI, test **New laptop HDMI mission**, browser camera permission, **Connect & go live**, **Stop & upload**, and **Recover interrupted recording**. Do not clear browser data before recovery.
14. For iPhone or iPad: confirm iOS 26 and test the selected ReplayKit, Controller Livestream, or iPad HDMI source. Test microphone/speech permissions if needed, allow Live Activities or the **Screen Sharing** notification fallback, and verify landscape alert presentation and recording finalization on the physical device.
15. For a DJI Avata with compatible DJI Goggles: install DJI Fly and AlphaRelay Operator on the Android device, test the supported goggles live-view connection, and confirm remote live and post-mission upload.
16. Check for older queued video on the Operator startup screen and let it finish, or consciously choose **Skip for now and start new mission**.
17. Plan for internet when you need remote live, Controller Livestream, Mission Viewer, cloud Live AI, sync, upload, reports, or export.
18. If the mission uses an agency scenario, confirm it appears in mission setup and that its visible AI watch targets and Quick Events are current.
19. Assign pilot, overwatch user, reviewer, and supervisor roles.

## Connection quick reference

| Need | Requirement |
| --- | --- |
| Remote live (**Live stream (WebRTC)**) | Pilot device has validated internet; live starts automatically with the mission |
| Cloud sync / upload / reports | Internet on the active device |
| Field work with no internet | Supported; data queues until sync |
| Deployment-specific LAN relay | Same reachable Wi-Fi between pilot device and Overwatch |

**Warning:** The current public Operator workflow does not present a Local Network mission button. If your Android deployment exposes a LAN relay, it needs local Wi-Fi reachability and remains separate from internet sync.

Pilots can hide on-screen drone controls and use the physical controller while keeping quick events and relay status visible. See Minimum requirements for device specs.

---

## Start a Mission

Most live missions start from **AlphaRelay Operator**. The exception is **Laptop HDMI Capture**, which starts from **New laptop HDMI mission** in the Mission Dashboard and continues in Mission Overwatch.

## Steps

1. Open AlphaRelay Operator on the Android device, iPhone, or iPad.
2. From **What do you want to do?**, tap **Start a Mission**.
3. Under **Choose video source**, select **Controller Screen**, **Controller Livestream**, or **HDMI Capture Card** when supported. Eligible DJI SDK-controller setups can continue into Pilot mode from the controller-screen path.
4. Select the operating person when the agency roster is available.
5. Select a scenario category and template, or **No scenario template**.
6. Enter the mission name your team will recognize and optionally add up to eight **Mission-specific AI targets**, one visible item per line.
7. Leave **Alert on people** on for informational person and hand-to-hand-contact alerts, or turn it off to suppress those routine categories. Other enabled detections and mission-specific targets remain active.
8. Tap the matching start or setup action and complete the license check if prompted.
9. Approve Android screen capture, choose **AlphaRelay Capture** from the iOS broadcast picker, or complete the RTMP, RTSP, or HDMI setup for the selected source.
10. Open the native flight app when using screen capture. Use quick, manual, or `Relay` voice events and stop the mission when finished.

Operator prevents a new start while another mission or unfinished capture is active. Use the startup recovery action to close the existing mission through the normal finalization flow; do not discard it to force a new start.

When an online license refresh provides an agency operator roster, AlphaRelay requires a member with the separate **Mission operator** designation to be selected before start and records that person with the mission and field-created events. An officer, supervisor, admin, or owner can be designated as a mission operator. If the roster is unavailable, the app warns the crew and can continue without identified-operator attribution; reconnect and refresh before operational use when attribution is required.

Built-in and agency-created scenarios can provide scenario-specific AI targets. AlphaRelay copies those visible watch items into the mission for AI live watch and post-mission AI Review. The mission-only targets entered at setup supplement them and can be updated during the active mission without restarting. Offline target edits remain queued until cloud sync succeeds. Organization admins manage agency scenarios under **Organization Settings → Settings → Mission scenarios**.

Agency scenarios can also provide up to seven Quick Events. If an agency scenario has no custom Quick Events, Operator and Mission Overwatch use the standard event buttons.

Operator starts an Internet mission and automatically starts **Live stream (WebRTC)** when the device has validated internet. If the device is offline, the mission still starts and stores work for later sync. On Android, remote live can be retried from **Pilot console → Mission** if internet becomes available during the mission.

When supported Matrice aircraft or controllers are detected, Android Operator may show additional camera tools such as wide/zoom/thermal source selection, visible zoom presets, thermal zoom, laser rangefinder, linked zoom, thermal super-resolution, or laser fill light. Validate those controls with the actual aircraft, payload, controller, and firmware before operational use.

On integrated Android drone controllers, Operator uses **Controller Screen Capture** automatically. Approve the Android screen capture prompt, then operate the aircraft in the controller's native flight app. AlphaRelay records and streams the controller screen instead of taking over flight controls.

If a connected UVC HDMI capture card is detected, Android Operator adds **HDMI Capture Card** and can select it automatically. Grant the camera and USB prompts, then confirm the received preview says **Capturing** before flight. This path records the controller's HDMI output without screen-sharing permission.

On iPhone and iPad, choose **Controller Screen**, **Controller Livestream**, or—on USB-C iPad—**HDMI Capture Card**. Screen capture uses **AlphaRelay Capture** in the ReplayKit broadcast picker. See the iOS Operator guide.

On a detected DJI SDK-controller setup — for example, an RC-N-series remote connected to the Android pilot device — the mission screen presents two choices:

- **Controller Screen Capture — Recommended** keeps the flight app in control while AlphaRelay captures the visible controller screen.
- **Pilot mode** gives AlphaRelay the DJI SDK connection and direct aircraft controls. It stays locked until you confirm a listed aircraft and AlphaRelay verifies that aircraft's live connection.

For a DJI Avata with compatible DJI Goggles, first show the goggles live view in DJI Fly on the Android device. When Goggles Mode is active, opening AlphaRelay skips these mission-selection steps, starts a mission with no scenario, starts remote live, requests screen capture, and returns to DJI Fly.

For a separate controller, use **Controller Livestream** on a licensed Android, iPhone, or iPad. DJI workflows provide either one complete RTMP URL or separate server and stream-key values. Skydio workflows provide RTSP External Server values: server address, port, and stream name.

For laptop HDMI, click **New laptop HDMI mission** in Mission Dashboard, add any mission-specific **AI detections**, then use **Laptop HDMI Capture** in the **Events & input** row beneath the Mission Overwatch feed. **Connect & go live** starts remote live and recoverable local evidence recording together. Use **Stop & upload** before **End Mission**. Follow Controller Livestream and HDMI Capture.

## Remote live

- Works over validated cellular, Wi-Fi, Ethernet, or VPN internet on the pilot device
- Starts automatically with the mission when internet is available
- Lets Mission Overwatch users watch and log events without a LAN connection to the pilot device
- Can be started or retried from **Pilot console → Mission** if automatic setup is skipped or fails

The **Local Network** mission button is not presented in the current public Operator workflow. See Mission connectivity if your Android deployment still exposes the LAN relay workflow.

## Choose Controller Screen Capture or Pilot mode

Use **Controller Screen Capture — Recommended** when the native flight app should retain flight and camera operation, when the aircraft is not in the Pilot mode list, or when AlphaRelay cannot verify a live supported-aircraft connection. This path blocks AlphaRelay aircraft commands, records one continuous controller-screen MP4 for the mission, and queues it after **Stop Mission**.

To use **Pilot mode** on an eligible setup:

1. Select **Pilot mode**.
2. Open **See all 12 compatible drones with photos** and check the aircraft family.
3. Tap **My drone is listed — Use Pilot**.
4. Keep the aircraft and controller powered on and connected while AlphaRelay checks the live DJI flight-controller connection.
5. Wait for **Supported aircraft confirmed. Pilot mode is ready.** before tapping **Start Mission**.

In Pilot mode, use the persisted **High quality (4K)** switch when the mission needs that aircraft recording profile; otherwise AlphaRelay applies the 1080p profile when supported. AlphaRelay starts or recovers aircraft SD recording after it detects takeoff, stops Live AI after landing, and can automatically close a confirmed airborne mission after touchdown while the longer aircraft-footage transfer continues. Keep the aircraft, controller, and Operator powered until the transfer is secured. Some aircraft require physical-controller takeoff even in Pilot mode; AlphaRelay detects the airborne state and continues the mission.

Android Operator's DJI MSDK 5.17 catalog includes:

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
- Use the active-mission **Alert on people** control to change routine person alerts without restarting. In Mission Overwatch, each standard detection can be enabled or disabled separately; enabled weapon-related alerts receive the highest presentation priority.
- Tap **Stop and complete mission** or **Stop Mission** in Operator (or **End Mission** in Mission Overwatch) when field work is done.

→ Watch in Mission Overwatch · Android Controller Screen Capture · Controller Livestream and HDMI Capture · iPhone and iPad · DJI Avata with DJI Goggles · Connectivity

---

## View a Live Mission on Android or iOS

Use **View Live Mission** on Android or **Watch Live Mission** on iPhone and iPad when a team member needs a compact active-mission view without opening the browser workspace. Mission Viewer can watch remote video, follow the live timeline and AI alerts, and log events. It does not start the mission or control the aircraft.

## Requirements

- **AlphaRelay Operator** installed and activated on the viewing device
- A valid device license for the same organization as the mission; normally this is a separate device, while the Android device that created a Controller Livestream can view that mission itself
- Internet on the viewing device
- An active synced mission; remote live must be running for video

## Open Mission Viewer

1. Open AlphaRelay Operator on the viewing device.
2. On Android, tap **View Live Mission**. On iOS, tap **Watch Live Mission**.
3. Choose an active mission. Use **Refresh** if the mission started after the list opened.
4. Watch the live video and timeline. Timeline events can continue updating while video connects or retries.
5. Use a scenario quick-event button or enter a manual event, then tap **Log event**.
6. Use **Switch mission** to choose another active mission.

On Android, Mission Viewer waits for a complete received video frame and attaches that uncropped frame to quick, manual, and `Relay` voice events when live video is available. If the frame is not ready, wait for video and try the event again. The screenshot is registered with the mission record, appears as a timeline thumbnail, and can enter the configured screenshot-analysis queue; review any generated analysis before report use.

New AI alerts appear as highlighted banners and remain in the timeline. Person detections use informational/yellow treatment; possible weapons and other threat indicators use red review treatment. Treat every alert as a prompt for human review, not a confirmed finding.

## When the mission ends

Mission Viewer marks the timeline read-only and disables event entry after the mission closes. Use Mission Overwatch for closed-mission media review, AI Review, reporting, sealing, and export.

## Limits

- Mission Viewer requires internet; it has no offline active-mission list.
- Only active missions in the licensed organization appear.
- A mission can provide timeline updates even when remote video is unavailable.
- Android viewer events cannot attach current-frame evidence until a complete live frame has arrived.
- Mission Viewer does not expose aircraft controls or closed-mission review tools.

→ Use AlphaRelay Operator on iPhone or iPad · Watch in Mission Overwatch · Log events

---

## Watch in Mission Overwatch

Mission Overwatch is the per-mission browser workspace. Open it from **Mission Dashboard** by selecting a mission (the dashboard may label this **Open Mission Console**).

Sign in at [alpha-relay.com](https://www.alpha-relay.com). The page shell can reopen after an online visit, but active Internet missions, remote live, cloud event logging, and synced review require connectivity.

Active missions open in a full-screen command view. The header shows elapsed time, feed state, the mission-assigned operator, AI detection status, and a **Timeline** alert count. The live feed stays in the main workspace, the event timeline occupies the right rail, and a compact **Events & input** row sits beneath the feed. Mission Overwatch adapts to phone and tablet browsers; a desktop-sized screen is still easier for long footage and report reviews.

## Remote live — Live stream (WebRTC)

When AlphaRelay Operator starts a mission with validated internet, it starts remote live automatically. Open the active mission and select **Live stream (WebRTC)** to watch it.

If the mission began offline or remote-live setup failed, restore internet and use **Pilot console → Mission → Start remote live** to retry.

- In **Controller Screen Capture**, remote live publishes the controller screen.
- In **Goggles Mode**, remote live publishes the DJI Fly screen carrying the DJI Goggles live view. Keep the Android device online.
- In **Laptop HDMI Capture**, **Connect & go live** starts the browser's recoverable evidence recording and remote stream together.

## Laptop HDMI Capture

Create this mission from **Mission Dashboard → New laptop HDMI mission**, add any mission-specific **AI detections**, then find **Laptop HDMI Capture** in the **Events & input** row beneath the feed. Select the UVC card and click **Connect & go live**. The browser uses the same full frame for preview, Live AI, and event screenshots.

Keep the tab open. Click **Stop & upload** and wait for the recording to be secured before **End Mission**. If the browser was interrupted, reopen the same mission and use **Recover interrupted recording** without clearing browser data.

## Timeline and mission tools

The **Event timeline** stays beside the feed on wide screens and can be closed or restored with **Timeline** on narrower layouts. **Mission tools** remain available for an active Internet mission even though the LAN relay panel is hidden.

- In **Events & input**, use scenario Quick Events for common events. Agency-created scenarios can provide up to seven custom buttons; the standard buttons appear when none are configured.
- Type a note under **Manual Event (fast)** and click **Log Manual Event**.
- Or tap **Dictate**, allow microphone access, speak the event, review the transcript, and click **Log Manual Event**.

After a quick or manual event is appended, Mission Overwatch shows a confirmation in **Events & input**. Use its chevron to collapse or expand the bottom row. **End Mission** is the live command view's closeout action.

Dictation depends on browser speech-recognition support. If it is unavailable or blocked, manual typing still works.

## Deployment-specific Local Network relay

The current public Operator workflow does not present a **Local Network** mission option. If an older or deployment-specific Android build exposes **Live Overwatch Screen**, connect it to the field device on the same reachable Wi-Fi by scan or LAN IP. That LAN path is separate from remote live and cloud sync.

## AI live watch

When configured and remote live is active, Mission Overwatch can show **AI live watch** next to the live feed controls. It defaults on unless a saved mission choice turns it off. It samples frames from **Live stream (WebRTC)** and logs mission timeline alerts only when AI flags a possible threat indicator for officer review.

The current default cadence can start a new sample as often as every two seconds. Network and analysis time can make the effective interval longer, and AlphaRelay does not overlap analysis requests.

When AI live watch is enabled, select **Show details** or leave the expanded card open to review its focus:

- **Standard detections** provides individual controls for people, person holding a weapon, visible weapons, suspected narcotics, drug paraphernalia, hand-to-hand contact, reaching into clothing or bags, and safety hazards.
- **Include scenario targets** adds the scenario's saved visual targets.
- **Scenario-specific AI targets** come from the mission's built-in or agency scenario.
- **Mission-specific AI targets** let you add up to eight visible details for this mission, one per line. Click **Save targets** after editing.

**Warning:** Keep **Person holding a weapon** and **Visible weapons** enabled. Weapon-related alerts are safety-critical and receive priority over other detections and mission targets.

Use concrete visible descriptions such as `Red pickup truck` or `Person wearing an orange jacket`. Saved targets supplement standard detections; they do not turn AI output into a confirmed fact.

AI live watch alerts can show:

- An **AI live alert** or **Urgent AI live alert** banner in Mission Overwatch
- A timeline event with the sampled frame attached when available
- A Live AI alert badge, notification, and log entry in Operator while the same mission is active

Person detections use informational/yellow treatment. Possible weapons and other threat indicators use red review treatment, with **Urgent** reserved for the urgent-review level. Person-holding-a-weapon alerts rank ahead of other standard detections. The Mission Overwatch banner dismisses automatically after about three seconds, but the timeline event remains available for review.

When browser AI live watch is successfully analyzing the same mission, Operator pauses device-originated cloud requests and the on-device fallback to avoid duplicate automatic alerts. If browser analysis stops or the handoff expires, device analysis resumes automatically; cloud failure then falls back to on-device detection.

Before a Device Live AI or AI live-watch alert can trigger configured screenshot analysis or enter a report, an officer must choose **Approve alert**. Choose **Dismiss alert** when the alert should be excluded. If an approved screenshot returns an analysis finding, it remains pending until an officer selects **Accept as is** or **Review & edit**. Unapproved, dismissed, and unreviewed findings do not enter the AAR narrative.

Treat these alerts as prompts for human review. They do not replace pilot judgment, command staff review, or final report approval.

## Closed missions

After **Stop Mission** or **End Mission**, Mission Overwatch selects **Timeline** and switches to the closed-mission review tabs: timeline, media and **Play with Events**, **AI Review**, and report. The lifecycle tracker moves through **Mission Review**, **Draft AAR**, **Evidence Sealed**, **Supervisor Review**, and **Approved & Locked**, and its next-action prompt changes as review work is completed.

Follow the guided review sequence:

1. Resolve Timeline alerts and findings, then click **Done — continue**.
2. Review footage and photos under **Media**, then click **Done — continue**.
3. Analyze and decide AI findings when AI Review is available, then click **Done — continue**.
4. Continue to **Report**.

Completing Timeline review keeps human-created and approved AI events but permanently removes remaining unaccepted AI candidates after confirmation. Completing AI Review keeps accepted or edited findings and rejects remaining undecided findings after confirmation. A newly synced pending item reopens the affected review step.

AI Review requires at least one selected tag under **What should AI look for?**. **Event-focused** reviews original-video intervals around accepted events; **Full mission — detailed** reviews the union of selected recording timelines and prefers higher-quality/original footage where recordings overlap. The status reports original-video upload, video sections reviewed, and evidence screenshots verified. Candidate findings are checked against those screenshots before they appear for review. The latest run stays visible and earlier runs appear under **Previous analyses**. Analysis runs in the background and emails the requesting signed-in user when complete. Findings accepted in AI Review move to the timeline for final officer review before report use.

**Ask AI** is grounded only in the selected primary uploaded footage. It does not mix mission photos or event screenshots into the question. Source images remain unaltered without model bounding boxes over finding thumbnails or the full-screen viewer. Ask AI remains available after supervisor approval as a read-only question and saved-answer workflow; it does not unlock timeline, evidence, media, AI Review finding, or report changes.

Closed-mission timelines render chronologically, with the oldest event at the top and the latest at the bottom. Closed missions show historical content only; Mission Overwatch stops remote-live playback and background live-stream retries after the mission closes.

While Mission Overwatch remains open, the focused mission timeline refreshes with device alerts, Android and iOS Mission Viewer events, screenshot status, and mission-close state. New alert rows can appear before their screenshots finish syncing, and these focused refreshes do not restart footage that is already playing.

Authorized mission team members can use **Rename** in Mission Overwatch to correct the mission name before the report is submitted. Submitted and approved missions are read-only and cannot be renamed.

Use **Share** to give an eligible user mission-scoped collaborator access. Select the person by name and email under **Available users**; AlphaRelay lists current recipients under **People with access** and sends an email link when configured. A shared collaborator can work on this mission but cannot re-share it or start new missions without the separate **Mission operator** designation.

## View from a licensed device

For a compact active-mission view, open AlphaRelay Operator on a second licensed device. Tap **View Live Mission** on Android or **Watch Live Mission** on iOS. It can watch remote live, follow timeline updates and alerts, and log quick or manual events. Closed-mission review stays in Mission Overwatch.

→ View a live mission on Android or iOS

## Offline app shell

Mission Overwatch installs a service worker on first online visit. You can also use **Install app** for a PWA shell. The shell helps the page reopen offline, but sign-in, sync, uploads, and playback links still need network access.

---

## Log Events

Events are timestamped notes on the mission timeline. Keep them short and specific.

## During the mission

**AlphaRelay Operator**

- Tap **quick event** buttons or the quick event wheel (phone layouts). Agency scenarios can provide up to seven custom buttons; the standard set appears when none is configured.
- Enter manual event notes
- Voice relay: say `relay` followed by the event details (e.g. `relay suspect entered north door`)
- **Device Live AI** person and possible-weapon alerts from cloud analysis or automatic on-device fallback — review these before treating them as facts

In **Controller Screen Capture**, voice relay can save a controller-screen screenshot with the event when screen capture is active.

**Mission Overwatch**

- Use the **Events & input** row beneath the live feed in the full-screen command view
- Use **Event Logging** Quick Events (match the scenario template labels)
- Use **Manual Event (fast)** for free-text notes
- Tap **Dictate**, speak the event, review the transcript, and click **Log Manual Event** when the browser supports speech recognition
- These Mission tools remain available for active Internet missions; they do not require a Local Network relay
- A success message appears after the event is appended; verify it before repeating the action

**Android or iOS Mission Viewer**

- On a second licensed device, tap **View Live Mission** on Android or **Watch Live Mission** on iOS and choose the active mission
- Use scenario quick-event buttons or enter a note under **Add mission event…**
- Viewer events join the same mission timeline; logging turns off when the mission ends
- Android attaches the complete received live frame to quick, manual, and `Relay` voice events when video is available. If no full frame is ready, it asks you to wait rather than saving a partial or stale image.

Screenshots from the live feed are captured automatically when the workflow supports them. Local AI screenshots can include yellow detection boxes.

When configured AI and cloud sync are available, AlphaRelay automatically queues screenshot analysis for typed manual events and voice-relay events that have a synced screenshot. Standard Operator Quick Events do not use this automatic path; screenshot-backed Android Mission Viewer Quick Events do. The human-created event remains an official event, but any generated image analysis must still be checked with **Accept as is** or **Review & edit** before the analysis can enter the report narrative.

Mission Overwatch refreshes the focused shared timeline while the page is open. Events logged by Operator or Mission Viewer and automatic device alerts can appear without a page reload; an alert can appear before its screenshot finishes syncing.

For a Device Live AI or AI live-watch alert, choose **Approve alert** in the timeline before configured screenshot analysis or report use can proceed. Choose **Dismiss alert** to exclude the event from the report. If approved analysis returns a finding, use **Accept as is** or **Review & edit** after checking the source image. This approval gate applies to automatic alerts; human-created manual and voice events do not need **Approve alert**.

## Official event eligibility

- Human-created quick, typed, dictated, voice-relay, viewer, and footage-tag events are official mission events unless a user deletes them.
- Automatic Device Live AI and AI live-watch alerts become official only after **Approve alert**.
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

→ Device Live AI · View a live mission

---

## Use Device Live AI

**Device Live AI** analyzes mission video supplied by AlphaRelay Operator—including controller-screen, HDMI, supported Pilot camera, and locally viewed Controller Livestream frames—and creates review-oriented mission alerts. With working internet, the Operator device sends sampled images to AlphaRelay's licensed server-side analysis. The app does not contain an AI-provider credential. When cloud analysis or connectivity is unavailable, Operator automatically fails open to on-device people and possible-weapon detection.

The capture session must be running. On-device fallback and immediate alert notifications can work without internet, while timeline sync, cloud follow-up, and reporting wait for connectivity.

## Current alert controls and priority

- **Person detected** — informational/yellow treatment
- **Multiple persons detected** — informational/yellow treatment
- **Possible weapon detected** — urgent/red treatment

Operator uses **Alert on people** at mission setup or during an active mission to suppress routine person and hand-to-hand-contact alerts. In Mission Overwatch, **Standard detections** provides separate controls for people, person holding a weapon, visible weapons, suspected narcotics, drug paraphernalia, hand-to-hand contact, reaching into clothing or bags, and safety hazards. Keep both weapon-related categories enabled; weapon-holder alerts receive the highest presentation priority.

These are assistive detections, not operational conclusions. Person detection is not face recognition or identity matching. A possible-weapon alert does not establish that an object is a weapon, who possesses it, intent, legality, or threat level.

## Android controls

1. Open **Pilot console → Flight → Local AI**.
2. Turn **Enable automatic OpenAI + local detection** on or off.
3. Adjust the sample rate, minimum detection score, confirmation window, or cooldown only after testing the change.
4. Tap **Save local AI settings**.
5. Start the selected Android capture workflow and watch the **Device Live AI** status on the active-mission dashboard, Mission Viewer, or the Live AI metrics line.

During Controller Screen Capture, grant Android notification permission if the pilot should receive immediate on-controller alerts. Person notifications use the yellow informational style; possible-weapon detections use the red urgent style.

Mission Overwatch AI live watch, device cloud analysis, and the on-device fallback coordinate ownership for the same mission. Healthy Mission Overwatch analysis pauses device-originated cloud requests. Healthy device cloud analysis places the local fallback on standby. When the active cloud handoff stops or expires, the on-device detector resumes automatically.

In Pilot mode, AlphaRelay suppresses Live AI after a land command or confirmed touchdown so the closed or closing mission does not continue producing alerts. It resumes normally on a later mission.

## iPhone and iPad

iOS capture runs the same cloud-first path for ReplayKit, Controller Livestream viewing, and iPad HDMI frames. Its offline fallback uses iOS Vision people detection plus the same weapon-presence verifier validated for the Android fallback. iOS does not run Android's full multi-object detector. Allow time-sensitive notifications if alerts should appear over the flight app.

For Controller Livestream, the gateway also runs the licensed server-side Live AI service directly against the normalized RTMP or RTSP feed. This keeps analysis active independently of the setup phone and coordinates an expiring handoff with browser and device analysis to reduce duplicate alerts. If gateway analysis stops, device-local analysis can resume when a viewing device is supplying frames.

When Live Activities are available, iPhone presents a compact alert in the Dynamic Island or Lock Screen and then returns it to monitoring. If Live Activities are unavailable, **Screen Sharing** notifications provide the fallback alert path.

Mission-specific AI targets selected before start or updated during the mission apply to device cloud analysis. Use one concrete visible item per line, up to eight. Offline edits remain queued until mission metadata sync succeeds.

## What happens after a detection

AlphaRelay can create a timeline event with a screenshot. On-device fallback screenshots can include detection annotations. Person, group, and possible-weapon alerts use stable categories and cooldowns so one continuously visible subject is not logged over and over; a new subject elsewhere can still create a new alert.

In Controller Screen Capture, AlphaRelay filters small person boxes inside fixed flight-app HUD rails and collapses overlapping boxes around the same person. These filters reduce repeated and HUD-driven alerts, but they do not eliminate false positives or missed detections.

For cloud analysis of thermal or infrared video, AlphaRelay checks the full underlying camera scene rather than only the center, reticle, bright regions, or prior boxes. A partial human thermal signature can be reported when multiple human-consistent shape cues are visible, but the analysis also checks common hot-object and scene false targets such as warmed roofs or pavement, vents, furniture, vegetation, reflections, shadows, and image artifacts.

When the full-frame pass does not already find a qualifying possible weapon, AlphaRelay can spend one additional high-detail pass around a weak weapon candidate or detected person before falling back to a frame region. This improves review coverage for smaller objects without making the detector conclusive.

AlphaRelay captures evidence before posting the device alert. A banner can dismiss while the mission Timeline event remains available for review. Analysis sampling and user-visible alert frequency are separate: slow analysis, confidence thresholds, stable-target deduplication, and cooldowns can reduce visible alerts.

## Review an alert in Mission Overwatch

1. Open the mission **Timeline**.
2. Compare the alert and screenshot with the live view or source footage.
3. Choose **Approve alert** to allow configured screenshot analysis and report eligibility, or **Dismiss alert** to exclude it from the report.
4. If approved screenshot analysis returns a finding, choose **Accept as is** or **Review & edit** before it can enter the after-action report narrative.

This is a two-stage review: approving the alert allows analysis and report consideration; reviewing the resulting image analysis makes the finding officer-owned.

## Limits

- Device Live AI runs only while capture supplies images.
- Healthy Mission Overwatch or device cloud analysis temporarily owns detection for the same mission; the on-device detector remains the fallback and resumes automatically.
- Internet is required for cloud analysis, sync, and reporting, but not for on-device fallback inference.
- Small, blurred, distant, dark, partially hidden, or unusual objects may be missed. Tools, toys, sporting equipment, and silhouettes may be false positives.
- The bundled fallback has not been validated across broad real-world controller-screen and field conditions. Do not treat held-out model tests as field performance.
- Device Live AI does not determine identity, intent, policy compliance, criminal activity, injury, or whether an area is clear.

→ Log events · Review footage · Known limitations

---

## End a Mission

## Steps

1. Tap **Land** on the pilot device when appropriate.
2. Follow normal landing and safety procedures.
3. Tap **Stop and complete mission** or **Stop Mission** in AlphaRelay Operator when field work is complete.
4. For Laptop HDMI Capture, click **Stop & upload** and wait for the browser recording to be secured.
5. Optionally open **Operations** and tap **End Mission** in Mission Overwatch.
6. Check the upload or queue status before powering off the pilot device or closing its browser tab.

In a supported Pilot-mode mission, confirmed touchdown can trigger the same stop and closeout automatically. AlphaRelay stops Live AI and closes the mission before a longer aircraft-SD transfer continues. If automatic closeout does not occur, use **Stop Mission** and follow the on-screen retry state.

## What happens

- The relay session ends with the mission.
- SD recording stops after a successful land when supported.
- Pilot mode can start or recover mission-time SD recording after takeoff and closes only around footage that began during the current mission.
- In **Controller Screen Capture**, AlphaRelay finalizes the mission-long controller-screen recording instead of pulling aircraft SD video.
- On a confirmed supported DJI SDK 5 Controller Screen Capture setup, AlphaRelay can then guide a USB reconnect to copy the matching mission-time SD clip as an optional aircraft original. The mission remains open on failure so you can retry or choose **Close without aircraft copy**.
- In **Controller Livestream**, stop the separate controller publisher first; closing the mission finalizes the received stream recording.
- In **HDMI Capture Card**, AlphaRelay finalizes the received UVC recording. Reconnect a missing card before closeout if the mission needs additional video.
- In **Laptop HDMI Capture**, **Stop & upload** finalizes the recoverable browser recording before mission closeout. If interrupted, reopen the mission and use **Recover interrupted recording** without clearing browser data.
- In **Goggles Mode**, AlphaRelay finalizes the captured DJI Fly live-view frames as an MP4 and queues it for upload. It does not pull the DJI Avata's internal-storage or microSD footage.
- Footage may upload immediately or queue for later sync.
- Queued Operator video is stored durably and retries when validated connectivity returns, including after the app restarts.
- Android and iOS Mission Viewer event logging stops and the selected timeline becomes read-only.
- Mission Overwatch stops remote-live playback and switches to historical review instead of retrying the closed live stream.
- Mission Overwatch selects **Timeline** after web closeout so review starts with unresolved events and alerts.
- Review should wait until footage status is clear.

**Warning:** Do not force-stop or uninstall Operator while footage is queued. On iOS, keep Operator open while ReplayKit finalization and handoff complete. Browser-initiated uploads still require the browser tab to remain open.

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

- Use **Add optional recording** or **Upload Photos** on the **Media** tab if an upload was skipped or needs to be retried. Optional recordings can be MP4 or MOV.
- Open **Play with Events** to review the imported footage.
- Tag missing moments from the footage before submitting the report.
- Generate the after-action report, seal evidence, submit for approval, and export when the record is complete.

Imported photos are added as evidence-only mission photos. They are not automatically attached to timeline events.

## Large mission-data workflow preview

The **Media** tab can also show **Import mission data…**. This is a client-side workflow preview for inventorying large evidence folders and mapping deliverables such as source photos, orthomosaics, point clouds, 3D models, survey control, and project-support files.

The preview inspects filenames, paths, types, and sizes, then groups the package by planned evidence role. It does **not** read or upload file contents, create custody rows, or change the mission. A screen that says **Ingestion plan ready** is still only a local plan; production transfer is not connected.

**Warning:** If the import reports an upload issue after creating the mission, stay on the opened **Media** tab and finish the missing uploads there.

→ Upload footage · Review footage · Generate a report

---

## Upload Footage

Footage often uploads **after** the mission when the pilot device or Overwatch browser regains internet. Queued uploads are normal, not errors.

## Automatic upload

After mission closeout, AlphaRelay Operator attempts to upload recorded footage when online. Pending videos are stored in a durable device queue and retry when connectivity returns, including after the app restarts.

Watch for upload banners, **Upload now**, or **Loading playback link** status in Mission Overwatch.

In **Controller Screen Capture**, AlphaRelay records one continuous controller-screen MP4 for the mission and queues it after closeout. On iOS, ReplayKit likewise finalizes the capture recording before handoff. Keep the device powered on and Operator available while closeout finishes; do not force-stop or uninstall it while queued footage remains.

On a Controller Screen Capture setup where AlphaRelay confirmed a supported DJI SDK 5 aircraft, closeout can guide a USB handoff from DJI Fly to AlphaRelay and copy only aircraft video that began during the mission. The controller-screen MP4 stays primary; the copied SD clip is queued as an optional **Aircraft original**. Keep the aircraft/controller powered, follow the reconnect prompt, and retry while the mission remains open if the pull fails.

In **Pilot mode**, AlphaRelay can start or recover mission-time SD recording after takeoff and queue the matching aircraft clip at closeout. After confirmed touchdown, the mission can close before the longer transfer finishes; keep the device powered and watch the transfer status.

In **Goggles Mode**, AlphaRelay finalizes an MP4 from the DJI Fly live-view frames captured during the mission and queues it after **Stop Mission**. The durable queue resumes when connectivity returns. Add the original DJI Avata camera file as an optional recording if the mission needs the raw aircraft view.

In Operator **HDMI Capture Card**, AlphaRelay records the UVC video on Android or USB-C iPad and keeps it labeled as **HDMI Capture** through upload, playback, Ask AI selection, and custody. A disconnect does not close the mission; reconnect it to resume a new segment.

In **Laptop HDMI Capture**, click **Stop & upload** before ending the mission. The browser records MP4 when supported and WebM otherwise. If interrupted, reopen the same mission and use **Recover interrupted recording** without clearing browser data.

In **Controller Livestream**, the remote publisher records the received controller stream into the mission. Stop the controller publisher before closing the mission, then let AlphaRelay finalize the **Controller Livestream** recording.

When Android Operator opens with queued mission video, its startup panel shows the queue and upload progress. Let the upload finish when possible. Use **Skip for now and start new mission** only if field work must begin immediately; the queued work remains pending. On iOS, use **Sync pending items** or **Sync now** and keep Operator open during final handoff.

## Add an optional recording

Mission Overwatch accepts MP4 and MOV recordings from an aircraft, goggles screen, or another external source:

1. Copy the recording from the aircraft, goggles device, or computer.
2. Open the closed mission in Mission Overwatch.
3. Go to **Media → Mission footage**.
4. Under **Optional source**, choose **Aircraft original**, **Goggles screen recording**, or **Other external recording**.
5. Click **Add optional recording** and select the MP4 or MOV file.
6. After upload, use **Align with AlphaRelay capture…** or **Align with primary video…** to match a shared moment. **Suggest from recording times** can provide a starting offset when both files contain usable recording timestamps.

In Controller Screen Capture and Goggles Mode, AlphaRelay's captured screen remains the primary mission timeline even if an optional file uploads first. An aircraft or goggles recording can begin before or after the AlphaRelay mission; align the shared content rather than assuming both files started together.

Tap **Skip** during auto upload if you plan to upload manually later.

## Import external mission footage

If the mission did not start in AlphaRelay, use **Mission Dashboard** → **Mission History** → **Import mission**. The import flow creates a closed mission record, uploads selected MP4 footage and photos, then opens Mission Overwatch on the **Media** tab.

Use **Add optional recording** and **Upload Photos** afterward if any media needs to be added or retried. The initial **Import mission** form currently accepts MP4 footage; add a MOV after the mission opens in Mission Overwatch.

## Mission photos

Use **Mission photos** / **Upload Photos** to add timeline photos or evidence-only photos with caption, category, and notes.

AlphaRelay calculates and registers a SHA-256 hash for a manually added photo or video before reporting the upload as successful. Confirm the uploaded item appears in Mission Overwatch before closing the browser tab.

**Warning:** Do not force-stop or uninstall Operator while its queue is pending. Keep a browser tab open for browser-initiated uploads; manual browser uploads do not use the device background queue.

→ Controller Livestream and HDMI Capture · Import a mission · Review footage · Troubleshooting

---

## Review Footage

Open a closed mission from **Mission Dashboard**, then go to **Mission Footage**.

## Controller-screen recordings

Current Controller Screen Capture missions store one continuous controller-screen recording for the capture session. Older missions can still contain adjacent chunks; playback continues through recognized legacy chunks from the same recording. A separately restarted capture remains a separate recording.

## Play with Events

1. Confirm the primary clip is loaded (wait for **Loading playback link** to finish).
2. Click **Play with Events**.
3. Scrub through footage and compare event markers, screenshots, and timeline photos.
4. Use angle tabs or **All angles** for multi-camera review.
5. For secondary clips, use **Adjust sync to primary** if timing is off.

**Play with Events** and ordinary Mission Footage playback use the same primary timeline. Timeline updates that arrive while you review do not restart the current video.

## Optional aircraft and goggles recordings

An aircraft original, goggles-screen recording, or other external MP4/MOV can start before or after the AlphaRelay capture. In Controller Screen Capture and Goggles Mode, AlphaRelay capture remains the primary mission timeline.

For a secondary recording, choose **Align with AlphaRelay capture…**, scrub the primary view to a recognizable shared moment, then slide or nudge the optional recording until the frames match. Use **Suggest from recording times** as a starting point only when both recordings contain usable timestamps, then verify the visual match before saving.

## Tag from footage

After the mission is closed:

1. Open **Play with Events** on the clearest angle.
2. Scrub to the frame.
3. Enter an event name and click **Tag event**.

## Locks

Once a report is submitted for approval, timeline events, footage, photos, mission renaming, and AI Review mutations are locked. A supervisor can return the report to draft to reopen work. Approval makes those record changes permanently read-only. **Ask AI** remains available for read-only questions and saved answers after approval; it cannot change the timeline, evidence set, AI Review findings, or report.

## AI Review

For a closed synced mission, open **AI Review** after footage or photos are available.

1. Under **Available tags**, select at least one tag to move it into **What should AI look for?**. Add a concrete custom target when needed. Only selected tags are included in the run.
2. Choose **Event-focused** or **Full mission — detailed** under **Analysis coverage**.
3. Click **Analyze media**.

**Event-focused** reviews original-video intervals around accepted human events and approved alerts for observations live AI may have missed. Existing event screenshots serve as coverage boundaries rather than the video-analysis input. If the mission has no accepted event anchors, choose **Full mission — detailed**. Full-mission coverage reviews the union of selected recording timelines, preferring higher-quality or aircraft-original footage where recordings overlap; controller-only time gaps are still included. It can also include mission photos and takes longer.

Analysis runs in the background. The status can show the original recording upload, video sections reviewed, evidence screenshots verified, and completion. AlphaRelay first analyzes the actual video, then prepares and checks evidence screenshots for candidate findings before presenting them for human review. Video coverage and screenshot-check counts are reported separately in the completion email. You can leave the page and AlphaRelay emails when the run completes. Return to AI Review or click **Refresh** to see current progress and findings.

- **Accept** adds a timeline event for the finding when timeline edits are still allowed. It does not complete officer review by itself.
- **Reject** keeps the finding out of the mission timeline.
- **Redo analysis** deletes the current AI Review runs and findings, reopens the AI Review step, then runs analysis again with the current target and coverage choices. Accepted timeline entries stay in the mission timeline.
- Accepted findings may also run detailed screenshot analysis when a source image is available.
- AI Review preserves source imagery without drawing model bounding boxes over thumbnails or the full-screen viewer.

## Review timeline findings

After accepting a finding in AI Review, open **Timeline** and review its image analysis:

- Choose **Accept as is** to record the displayed finding as officer-reviewed.
- Choose **Review & edit** to correct the observations before saving them as officer-reviewed.
- Use **Edit finding** to revise an already reviewed finding before the timeline locks.

AI live watch and Device Live AI alerts use an additional approval gate. First choose **Approve alert** to allow configured screenshot analysis and report eligibility, or **Dismiss alert** to exclude the alert. Then use the same **Accept as is** or **Review & edit** controls for any resulting analysis. Only officer-reviewed findings are eligible for the after-action report, and the report presents them as neutral timeline observations without internal AI-review bookkeeping.

AI Review now collapses repeated video-frame findings from the same footage clip so reviewers are not asked to resolve the same routine person, object, or high-priority finding over and over. High-priority findings in different rough regions remain separately reviewable.

Related sightings can appear as one expandable group. Expand it to compare the source images and decide each sighting. The newest run remains visible; older completed runs appear under **Previous analyses**.

AI Review findings and alert screenshot analyses are suggestions. Verify the source media before accepting or editing them for report or evidence use.

## Complete the review steps

The closed-mission **Timeline** and **Media** tabs, plus **AI Review** when available, have **Done — continue**:

- **Timeline**: approves no items automatically. If unaccepted AI candidates remain, AlphaRelay shows the count and asks before permanently deleting them. Human-created and approved AI events remain.
- **Media**: records that footage and photos were reviewed.
- **AI Review**: keeps accepted or edited findings and asks before rejecting any undecided findings.

After completion, AlphaRelay opens the next unfinished step or **Report**. New pending AI material reopens the relevant step so it can be reviewed.

## Ask AI about the mission

Open **AI Review → Ask AI** for a closed, synced mission with playable uploaded footage. You can also use this read-only tool after the mission is approved.

1. Enter a question about visible mission details, such as **How many vehicles are visible?** or **Is a weapon visible?**
2. Click **Ask AI**.
3. Review the answer, confidence, supporting observations, limitations, and supporting evidence.
4. Open an item under **Previous answers** to revisit it, or click **Clear** to remove the saved question history for that mission.

If supporting still frames have not been prepared, AlphaRelay prepares them before answering. Ask AI uses only the primary uploaded footage selected for the mission question. It does not mix event screenshots or mission photos into the answer. When an aircraft-original recording is available, AlphaRelay prefers it over a duplicate controller-screen view; otherwise it uses the best available playable recording.

Ask AI does not identify unknown people or infer intent, criminality, injuries, or that an area is clear.

An exact repeat question can load a saved answer when the primary-footage selection has not changed. If that footage changes, ask again so the answer can use the current recording.

Ask AI answers are suggestions. Check the listed evidence and original media before using an answer in a report, operational decision, or evidence workflow.

→ Generate a report

---

## Generate a Report

Configured AI can draft the after-action report from mission events, footage references, photos, and custody data. A human must verify everything before submission.

**Warning:** AI output is draft material — not final authority.

## Steps

1. Open the closed mission's **Timeline**. For each Device Live AI or AI live-watch alert, choose **Approve alert** or **Dismiss alert**. For each available image-analysis finding, choose **Accept as is** or **Review & edit** after checking the source image or footage. Click **Done — continue** when the Timeline is complete.
2. Review footage and photos under **Media**, then click **Done — continue**.
3. In **AI Review**, choose at least one tag under **What should AI look for?**, select **Event-focused** or **Full mission — detailed**, and click **Analyze media**. AlphaRelay analyzes original-video intervals and then verifies candidate findings with evidence screenshots. You can leave while background analysis runs and return after the completion email.
4. Use **Ask AI** for questions about the primary uploaded footage, then verify each answer against its supporting evidence and the original recording. Ask AI excludes mission photos and event screenshots.
5. Accept only verified AI findings that should become timeline events and reject the rest, then click **Done — continue**. Confirming completion rejects any remaining undecided AI Review findings.
6. Return to **Timeline** for findings that were added by AI Review. Choose **Accept as is** or **Review & edit**, then complete the reopened Timeline step.
7. Open **Report** and click **Generate Report**.
8. Resolve report-readiness **Items Requiring Officer Review**, then click **Mark complete** and confirm only after every listed item has been addressed. This removes the section from the draft; it does not verify the underlying evidence for you.
9. Edit the narrative or use **Edit executive summary** for the dashboard header summary.
10. Confirm the AAR Chain of Custody contains the intended footage, photos, and official-event screenshots, then click **Submit for supervisor approval** when ready.

All undeleted human-created events are eligible for AAR content. Automatic alerts require approval, and accepted AI Review findings require Timeline officer review. AlphaRelay presents reviewed findings in neutral, officer-owned language and omits AI confidence, automation labels, and internal review status from the report prose. The report event list can show the source screenshot, observations, report relevance, uncertainty, and officer-review state. AI Review does not draw model bounding boxes over the source image. Pending image analysis can still appear with a review warning, but unreviewed analysis is excluded from generated narrative. If a timeline finding changes after a draft is generated, regenerate or update the report before submission.

## Supervisor actions

Submitting the report locks report edits, mission renaming, timeline events, footage, photos, and AI Review actions while the supervisor decides. Supervisors (often org admins) can **Approve** or **Return to draft**.

- **Return to draft** reopens the record for corrections and resubmission.
- **Approve** makes the record permanently read-only.

Once approved:

- The report cannot be regenerated or edited
- Mission name, timeline events, footage, photos, and AI Review actions stay locked
- **Ask AI** remains available as a read-only way to ask about the primary uploaded footage or reopen saved answers; it does not reopen any record mutation

Supervisor and operator inboxes live on **Mission Dashboard** under Reports & Reviews.

## Email notifications

When configured, AlphaRelay sends email when background AI Review analysis completes and on report workflow events (submit, approve, return).

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
4. Open **Mission chain of custody** and review the evidence listed in the AAR Chain of Custody, including any manual photos or videos.
5. Click **Seal entire mission (verify downloads)** when ready.
6. Optionally download **Download mission custody certificate (HTML)**.

Sealing verifies downloaded bytes against stored hashes and locks the evidence rows explicitly included in the AAR Chain of Custody. It does not bulk-seal every retained mission asset. Manual photos and videos are registered with a SHA-256 hash before their upload is reported as successful; items included in the AAR chain are then verified and sealed through the same workflow.

AlphaRelay keeps the stored evidence image separate from any bounded or resized copy used for AI analysis. Screenshot-to-alert matching uses the image's actual capture time, not only the later event-log or upload time, so delayed sync does not silently substitute a nearby screenshot. Verify the displayed source image and timestamp before sealing.

The mission-wide HTML certificate and exported/printed after-action report include a QR code and public certificate link. A recipient can open the current chain-of-custody certificate without signing in. The link is unguessable but works for anyone who has it, so share it only with intended recipients. The public page exposes certificate fields and current authoritative chain validation, not the signed-in mission workspace.

When the mission seals, AlphaRelay removes automatic alert events that were never approved and accepted AI Review findings that never received Timeline officer review. Dismissed alerts are included in that event cleanup. Their uploaded screenshots can remain registered for audit history, but they stay outside the AAR chain and remain unsealed. Human-created events remain unless a user explicitly deleted them. The same official-event rule is used for event totals, playback markers, reports, offline exports, and evidence-chain views.

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
- **New laptop HDMI mission** for naming an online mission, optionally selecting a scenario, and continuing directly to browser capture setup in Mission Overwatch
- **Attention queue** for remote-live failures, unsynced mission data, automatic alerts awaiting review, and report follow-ups
- **Latest alerts** with review status, source mission, screenshot when available, and a link into Mission Overwatch
- Mission history with search and filters
- Organization-shared **Flag** / **Unflag** actions and a newest-first **Flagged missions** quick-access section; flags organize follow-up without changing the mission evidence record
- Per-row and select-all-visible checkboxes for moving multiple authorized missions to Trash in one confirmation
- **Rename** from a Mission History row when you are authorized for the mission and it has not been submitted or approved
- **Share** in Mission Overwatch for giving an eligible user working access to one mission without changing their organization role
- **Trash** for restoring deleted missions during their 30-day recovery window
- **Import mission** for creating a closed post-flight record from external footage and photos
- Intelligence search across missions, events, and footage
- Supervisor inbox (pending approval) and operator returned-to-draft inbox
- Analytics

Select a mission to open **Mission Overwatch** (dashboard link: **Open Mission Console**).

**Events logged** and event-based KPIs use the official mission-event set: human-created events that have not been deleted, approved automatic AI alerts, and officer-reviewed AI findings. Pending or dismissed automatic alerts can still appear under **Latest alerts** for operational awareness, but they are not included in official event totals.

→ Import a mission

### Delete or restore a mission

Mission creators and organization admins can move a closed mission to **Trash** from the **After-Action Report** tab in Mission Overwatch. The mission disappears from Mission History, but AlphaRelay keeps its events, evidence, reports, and linked media recoverable for 30 days.

To move several missions at once, select their checkboxes in Mission History and click **Move selected to Trash**. Confirm the mission count once. If one move fails, AlphaRelay leaves that mission selected so you can correct the permission or connection problem and retry; successful moves remain recoverable in Trash.

To recover it:

1. Open **Mission Dashboard → Mission History** while connected.
2. Click **Trash**.
3. Find the mission and check the time remaining.
4. Click **Restore** and confirm. The mission returns to Mission History with its linked record intact.

Authorized organization admins can instead choose **Delete now** in Trash. This starts permanent removal of the mission and linked stored evidence before the 30-day deadline and cannot be undone.

When several eligible Trash rows need irreversible deletion, organization owners and admins can select them and use the bulk delete action. This is distinct from recoverable **Move selected to Trash** and requires its own permanent-deletion confirmation.

**Warning:** AlphaRelay permanently removes a mission after it has been in Trash for 30 days, or sooner when an authorized admin confirms **Delete now**. Restore it before deletion begins.

## Account

Set full name, rank/title, password, and email change requests. Names and ranks appear in the AlphaRelay Operator picker and on mission attribution when an admin has enabled the separate **Mission operator** designation for that membership.

## Organization

Owners and admins manage:

- Team members, role, **Mission operator** designation, and status
- Agency-specific mission scenarios with a name, category, summary, up to eight visible AI watch targets, and up to seven Quick Events
- Organization time zone
- Storage visibility
- Operator device license keys, QR codes, activation files, and controller pairing codes

Agency scenarios appear in the web and Operator mission pickers after refresh. Their AI watch items and Quick Events are copied into each mission so live detection, field logging, and post-mission review keep the mission-specific setup even if the scenario changes later.

### Roles and mission operators

- **Admin/Owner** manages organization settings, members, and all missions.
- **Supervisor** can oversee every mission and approve or return reports.
- **Officer** can work on missions they created, were assigned to, or received through mission sharing.
- **Mission operator** is a separate checkbox, not a role. Enable it for any member who should appear in Operator and start field or laptop HDMI missions.

### Share a mission

Open the mission in Mission Overwatch and click **Share**. Under **Available users**, AlphaRelay shows eligible organization users by name and email. Click **Share** beside the intended person; they receive mission-scoped collaborator access and an email link when mail delivery is configured. To revoke access, find the person under **People with access**, click **Remove**, and confirm.

Mission sharing does not promote the person to Supervisor or Admin/Owner, expose every organization mission, or designate them as a mission operator. The mission creator, assigned mission team, supervisors, and admins/owners can manage sharing; a shared collaborator cannot re-share the mission.

### Create or edit an agency scenario

1. Open **Organization Settings → Settings → Mission scenarios**.
2. Enter the scenario name, category, and a short summary.
3. Under **What should AI look for?**, enter one concrete visible item per line, up to eight.
4. Under **Quick Events**, enter one pilot event button per line, up to seven. Leave it empty to use the standard Quick Events.
5. Click **Create scenario**. Use **Edit** on an existing agency scenario to update it.
6. Reopen **Start Mission** on an online Operator device before the mission starts so it refreshes the scenario list.

On desktop, the AI-target and Quick Event fields appear side by side, and agency scenario cards use two columns. Narrow screens stack them.

Use observable descriptions rather than conclusions about identity, intent, legality, injury, or whether an area is clear.

## Activity Log

Open **Organization Settings → Activity Log** for a read-only record of material organization, mission, media, AI-review, report, and account actions. The server records the acting person's identity, role, and time. Filter by person, mission, action, or date, and use **Load older activity** to page backward. Mission-related rows link back to Mission Overwatch when a mission is available.

The Activity Log is an accountability view, not a control for editing or deleting the recorded actions.

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

## Android Operator setup

1. Download the APK from [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html).
2. Install and open **AlphaRelay Operator**.
3. Grant requested permissions.
4. Use the startup screen to choose **Start a Mission** for a new mission or **View a Live Mission** to support an active mission.

## Android drone controller setup

Use this path when the pilot device is an Android-based drone controller rather than a separate tablet or phone.

You do not need to enable Android Developer mode to install AlphaRelay.

1. Connect the controller to internet.
2. Open the controller web browser.
3. Download **AlphaRelay Operator** from the dashboard app download link. If needed, open [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html) directly.
4. When Android prompts for unknown-source installation, allow the browser or file manager to **install unknown apps** from that source.
5. Install and open **AlphaRelay Operator**.
6. Grant requested permissions.
7. Activate with the short controller pairing code generated by an admin, or use another license method below.

## iPhone and iPad setup

1. On a device running iOS 26, install Apple's [**TestFlight**](https://apps.apple.com/us/app/testflight/id899247664) app from the App Store.
2. Open the [**AlphaRelay Operator TestFlight invitation**](https://testflight.apple.com/join/AdxfvTca).
3. Open Operator and scan the license QR code, enter the 8-character pairing code, or enter the full `ar-…` key.
4. Allow Screen Recording when starting capture. Grant microphone and speech-recognition permission only when voice events or microphone audio are needed.
5. Use **Start Mission** for a new controller-screen mission or **Watch Live Mission** to support an active mission.

→ Use AlphaRelay Operator on iPhone or iPad

## Device license

The Operator app uses an organization license key — not the web-app email/password sign-in.

Use one of these activation paths:

- Copy the full `ar-…` license key from **Organization**.
- Scan the QR code, which opens `alpharelay://license?key=…`.
- Import an activation file downloaded by an admin.
- Enter a short controller pairing code generated by an admin.

Controller pairing codes do not expire. Each code can activate one installation and can be retried on that same device, but it cannot be reused for a different installation. License seat limits, suspension, and revocation still apply. Store unused codes securely.

Update later from **Pilot console → System → AlphaRelay license**, or long-press **Start Mission**.

The app validates against AlphaRelay and keeps a **10-day offline grace** after the last successful check. Connect to the internet before starting if the grace window expired.

Keys are issued by org admins from **Organization** or internal admin tools.

## Pilot agreements

If your organization is onboarded through AlphaRelay pilot agreements, sign the agreement from the email link before relying on organization access. Completed signed PDFs are available from **Organization Documents** after onboarding.

→ Before you go to the field
→ Pilot agreements and documents

---

## Security, Privacy, and AI

## What runs locally

- **AlphaRelay Operator**: mission setup, quick and voice events, on-device Live AI fallback, Mission Viewer, remote-live publishing, recording, and durable sync queues
- **Mission Overwatch PWA shell**: page cache after first online visit (sign-in and sync still need network)

## What syncs to the cloud

When internet is available: mission metadata, events, screenshots, photos, footage references, reports, custody records, and org data — protected by sign-in and database access rules.

High-resolution evidence remains distinct from bounded imagery prepared for AI analysis. AlphaRelay records the screenshot's capture time for evidence matching even when event logging or upload finishes later, and manual photo/video uploads are registered with a SHA-256 hash before success is reported.

Read the public [AlphaRelay Privacy Policy](https://www.alpha-relay.com/privacy.html) for the current service-level privacy notice.

## AI

Configured AI can draft after-action report content from structured mission data, help review uploaded media, answer questions about primary uploaded footage, analyze selected or automatically queued manual/voice event screenshots, and watch sampled remote-live frames when enabled. AI live watch can combine standard detections with bounded scenario-specific and mission-specific visible targets. Always review:

- Timeline accuracy
- Footage and photo references
- Accepted AI Review findings and officer-reviewed timeline observations
- Ask AI answers, limitations, and supporting evidence
- Event screenshot or media image analysis
- AI live watch alerts and attached frame evidence
- **Items Requiring Officer Review**

Treat AI output as draft material. AI Review analyzes only the tags placed under **What should AI look for?**. **Event-focused** reviews original-video intervals around accepted events while using their existing screenshots as coverage boundaries. **Full mission — detailed** reviews the union of selected recording timelines, preferring higher-quality or original footage where recordings overlap, and can include mission photos. After actual-video analysis, AlphaRelay checks candidate findings against evidence screenshots before showing them for human review. Accepted findings are added to the timeline, where an officer must **Accept as is** or **Review & edit** before report use. Ask AI uses only the selected primary uploaded footage, excluding mission photos and event screenshots, and does not replace review of the original recording. It remains available as a read-only question and saved-answer workflow after approval while record mutations stay locked.

AI Review can retain region metadata for matching and deduplication, but it does not draw model bounding boxes over thumbnails or the full-screen source viewer.

Device Live AI and AI live-watch alerts are logged as review prompts, not final determinations. An officer must choose **Approve alert** before a synced alert screenshot can be analyzed or considered for the report, or **Dismiss alert** to exclude it. Any resulting image analysis still requires **Accept as is** or **Review & edit**.

Device Live AI uses licensed server-side analysis when connectivity is healthy and automatically falls back to on-device people and possible-weapon detection when it is not. Provider credentials remain server-side. Mission Overwatch, device cloud analysis, and local fallback coordinate temporary ownership to reduce duplicate alerts.

Person detections use informational/yellow treatment and do not identify people. Operator can disable routine person and hand-to-hand-contact alerts for a mission. Mission Overwatch provides separate controls for every standard detection. When weapon-related detections are enabled, AlphaRelay gives their alerts the highest priority; every alert remains subject to human review.

AlphaRelay uses one official-event rule across counts, playback markers, reports, offline exports, and custody views: undeleted human-created events are included; automatic AI alerts require approval; accepted AI Review findings require Timeline officer review. Pending or dismissed automatic alerts and accepted AI Review findings without Timeline officer review remain outside the official evidence set and are permanently removed when Timeline review completes or the mission seals.

Mission Overwatch **Dictate** uses the browser's speech-recognition capability and microphone permission. Availability and speech processing depend on the browser and operating system; type the event when agency policy or browser support does not permit dictation.

## Pilot agreements

Pilot agreement PDFs and signed copies are stored in private storage. Signing links use tokens, and completed PDFs are opened through short-lived signed URLs. Completed signing records may include signer details, timestamp, IP address when available, user agent, agreement version, PDF hash, and audit metadata.

## Custody and approval

| Action | Effect |
| --- | --- |
| **Seal entire mission** | Verifies and locks hashes for evidence explicitly included in the AAR Chain of Custody; retained excluded screenshots remain unsealed |
| **Submit for supervisor approval** | Temporarily locks the report, mission name, timeline, media, and AI Review actions until a supervisor returns it to draft or approves it |
| **Supervisor approval** | Makes the submitted record mutations permanently read-only; read-only Ask AI remains available |
| **Export offline package…** / **Export evidence package (JSON)** | Point-in-time copies for retention or handoff |

Do not share exports before sync and review are complete.

---

## Minimum Requirements

## AlphaRelay Operator device

- Supported Android version for the installed APK, or iPhone/iPad running iOS 26 for the iOS app
- Usable internet for remote live and immediate cloud sync; offline capture can queue work
- Enough CPU, memory, battery, and storage for live video, event logging, recording, and Device Live AI
- Supported aircraft-control workflow when using aircraft integration
- Conditional Matrice camera tools on supported Matrice aircraft or Matrice controllers
- Android drone controller capable of installing **AlphaRelay Operator** and granting screen capture permission for **Controller Screen Capture**
- For **Controller Livestream**: a licensed Android or iOS Operator device, validated internet, and either a DJI controller/flight app that accepts a complete RTMP URL or separate server/key fields, or a Skydio controller with RTSP External Server
- For **Operator HDMI Capture**: Android with USB host/OTG or a USB-C iPad, a compatible UVC capture card, controller HDMI output, and camera/USB permission; a powered hub may be required
- For **Pilot mode**: detected DJI SDK remote-controller setup, a listed DJI MSDK 5.17 aircraft, and a live flight-controller connection that AlphaRelay can verify
- For a DJI Avata with compatible DJI Goggles: separate Android phone or tablet with **DJI Fly**, **AlphaRelay Operator**, screen capture permission, and internet
- For iOS capture: iOS 26, AlphaRelay Operator installed through TestFlight, ReplayKit Screen Recording permission, and optional microphone/speech permissions
- For Mission Viewer: a second Operator installation licensed to the mission's organization, plus internet

## Overwatch / review (browser)

- Current Chrome, Edge, or Safari on desktop or mobile for Mission Overwatch, dashboard, and export; a larger screen is recommended for long review sessions
- Internet for sync, upload, reports, and export media downloads
- Internet and AI configuration for report drafting, AI Review, Ask AI, event screenshot analysis, or AI live watch
- Browser microphone permission and speech-recognition support for **Dictate** in Mission Overwatch
- For **Laptop HDMI Capture**: a physical UVC capture card, browser camera permission, enough local browser storage, and a tab that remains open through **Stop & upload**

## By workflow

| Workflow | Requirement |
| --- | --- |
| Start Mission | Android or iOS Operator app; validated internet for automatic remote live, or offline capture with queued sync |
| Deployment-specific Local Network relay | Android device + Overwatch on same reachable Wi-Fi; not exposed by the current public Operator workflow |
| Controller Screen Capture | Android drone controller; AlphaRelay Operator installed; Android screen capture permission |
| Controller Livestream | Licensed Android or iOS Operator device; validated internet on it and the separate flight controller; DJI one-field/two-field RTMP or Skydio RTSP External Server support |
| Operator HDMI Capture | Controller HDMI output; UVC card; USB host/OTG Android or USB-C iPad; camera/USB permission; internet only for live/sync |
| Laptop HDMI Capture | Online web-app session; physical UVC card; browser camera permission and local storage; tab kept open through stop and upload |
| Pilot mode | Detected DJI SDK-controller setup; aircraft in the Pilot app's DJI MSDK 5.17 list; successful live connection check |
| Optional DJI SDK 5 aircraft-original handoff after Controller Screen Capture | Aircraft confirmed during setup; Android USB accessory routing; powered aircraft/controller; usable aircraft SD card; ability to force-stop DJI Fly, clear its USB default, reconnect, and choose AlphaRelay |
| iPhone/iPad Operator capture | iOS 26; AlphaRelay Operator installed through TestFlight; device license; ReplayKit, Controller Livestream, or USB-C iPad HDMI source; internet for live/sync |
| DJI Avata with DJI Goggles | Linked DJI Avata, compatible DJI Goggles, and compatible controller; Android device with DJI Fly and AlphaRelay Operator; goggles live-view connection; Android screen capture permission; internet |
| **Live stream (WebRTC)** | Validated pilot-device internet; starts automatically with the mission and can be retried from the Pilot console |
| Mission Viewer | Second licensed Operator installation in the same organization; active mission; internet; remote live required for video |
| Device Live AI | Operator capture running; internet for cloud analysis; compatible device compute for automatic offline fallback; notification permission for immediate alert banners |
| AI Review | Closed, synced mission with playable footage or mission photos, at least one selected analysis tag, internet, AI configuration, and accepted event anchors for **Event-focused** coverage |
| Ask AI | Closed, synced mission with playable primary uploaded footage; internet and AI configuration |
| AI live watch | Active remote live stream; Mission Overwatch online; AI configuration enabled |
| Cloud sync / upload | Internet + signed-in session |
| Optional aircraft/goggles recording | Signed-in online browser; MP4 or MOV; visual alignment to the AlphaRelay or primary timeline |
| Offline package export | Internet at export time to download media; extracted package can be reviewed later on desktop or mobile |

Permissions: grant camera, USB-device access, microphone, speech recognition, screen capture/Screen Recording, storage, notifications, and location only as requested for the selected workflow. HDMI Capture uses Android camera permission for the external UVC device, not the phone or tablet camera. In Mission Overwatch, allow browser microphone access only when using **Dictate**.

Aircraft camera controls appear only when the pilot app detects supported aircraft or controller capability. Availability still depends on aircraft firmware, payload, SDK support, and field validation.

Controller Screen Capture appears on Android drone controllers that can run AlphaRelay Operator and grant screen capture permission. The controller's native flight app remains responsible for aircraft operation in that mode.

Pilot mode is not enabled by controller detection alone. On an eligible DJI SDK-controller setup, confirm the aircraft in the in-app supported list and keep the aircraft and controller connected until AlphaRelay reports **Supported aircraft confirmed. Pilot mode is ready.** If that verification does not complete, use Controller Screen Capture.

The Goggles Mode workflow uses a separate Android device to display the DJI Goggles live view in DJI Fly. AlphaRelay records that screen and does not control the DJI Avata or retrieve the original aircraft camera file.

The iOS workflow captures the selected display or app through ReplayKit. It does not expose Android's DJI Goggles USB auto-detection, Android local-network relay, or full Android local detector.

Run a training mission on the same device class before operational use.

---

## Troubleshooting

## Remote live is missing

1. Confirm the pilot device has validated internet and the mission is active.
2. Open **Pilot console → Mission** and check remote-live status.
3. Tap **Start remote live** if automatic setup was skipped or failed.
4. In Mission Overwatch, open the active mission and select **Live stream (WebRTC)**.

The current public Operator workflow does not present a **Local Network** mission button. If your Android deployment exposes **Live Overwatch Screen**, keep both devices on the same reachable Wi-Fi, connect by scan or device IP, and trust the relay certificate if prompted.

## Mission Viewer cannot see the mission

1. Confirm the viewing device has internet.
2. Confirm AlphaRelay Operator is activated with a valid license for the same organization as the mission.
3. Confirm the mission is still active. Closed missions do not appear in the viewer list.
4. Tap **Refresh** in the mission picker.

If timeline events appear but video does not, the pilot's remote **Live stream (WebRTC)** has not started or is not ready. Restore pilot-device internet and retry remote live from **Pilot console → Mission**.

For Controller Livestream, an active mission can appear before the separate controller starts publishing. Reopen the setup and match the controller's protocol: use the complete **RTMP URL — one-field screens** or separate **Server URL** and **Stream key** for DJI; use **Server address**, **Port**, and **Stream name** under RTSP External Server for Skydio. Then restart the publisher.

## Controller Livestream is waiting for video

1. Confirm both the Android or iOS Operator device and the separate flight controller have usable internet.
2. On the AlphaRelay device, tap **Show Livestream Setup** and compare the displayed values character for character.
3. For DJI two-field RTMP, include the final `/` in the server field and put only the six-digit code in the stream-key field. For Skydio, choose RTSP External Server and enter the displayed server address, port, and separate six-digit stream name.
4. Start or restart the controller's native livestream, then return to **View Live Mission**.
5. If the mission is no longer active, create a new Controller Livestream instead of publishing into the closed record.

Stop the controller publisher before closing the mission. Use **End Mission** in Mission Overwatch or the matching close action in Operator so AlphaRelay can finalize the received recording.

## HDMI Capture Card has no video

1. Confirm the controller's HDMI output is enabled and the card is connected through a USB data/OTG path, not a charge-only adapter.
2. Grant both Android camera and USB-device access. Camera permission is for the external UVC input.
3. Check capture-card power; use a powered USB hub if the Android device cannot supply enough power.
4. In the active mission, wait for the preview to change from **Waiting for signal** to **Capturing**.
5. If the card disconnected, reconnect it without closing the mission and verify the preview returns.

The HDMI workflow ingests UVC video, not embedded USB/UAC audio. Use the receiving Android device or iPad microphone for optional voice events. If the image is stretched or double-height, update Operator and reload Mission Overwatch; current capture and playback preserve 16:9, while legacy correction changes presentation without rewriting the evidence file.

## Laptop HDMI does not connect or upload

1. Confirm the card is a physical UVC input and the controller's HDMI output is enabled; a laptop HDMI port is normally output-only.
2. Grant browser camera permission and select the card under **Laptop HDMI Capture** in the **Events & input** row beneath the feed.
3. Click **Connect & go live** and keep the tab open.
4. Before **End Mission**, click **Stop & upload** and wait for secured status.
5. After an interruption, reopen the same mission and use **Recover interrupted recording**. Do not clear browser data first.

## Cloud sync delayed

1. Confirm you are signed in.
2. Move to validated internet. Operator video uploads resume through the durable device queue; browser work still needs its tab open.
3. Do not refresh during pending sync.

## A new mission will not start

Operator blocks a new start while an active mission, capture service, or unfinished recording still needs closeout. On Android, use **Close Active Mission** on the startup screen. On iOS, reopen the active mission and use **Stop and complete mission**. Keep the app open while capture finalizes and pending evidence is handed off, then start the next mission.

Do not force-stop or reinstall the app to bypass this guard; doing so can delay recovery of the existing mission recording.

## Footage queued or not playing

1. Keep the pilot device powered on and restore validated internet.
2. If Android Operator opens with a queued-video panel, let it run or use **Skip for now and start new mission** only when field work cannot wait. On iOS, use **Sync pending items** or **Sync now** and keep Operator open during handoff.
3. Tap **Upload now** if shown.
4. Wait for **Loading playback link** to clear in Mission Overwatch.
5. For an optional recording: confirm you are signed in and online, the file is MP4 or MOV, the correct source is selected, and no other upload is running.

Manual browser uploads do **not** queue before starting — retry when online.

Current Controller Screen Capture missions produce one continuous recording. If a legacy mission contains adjacent chunks, ordinary Mission Footage playback should continue through recognized neighbors. A separately restarted capture remains separate. If a legacy chunk does not continue, reload the current app version, confirm the next chunk uploaded, and reopen the first chunk.

If an optional aircraft or goggles recording is out of sync, choose **Align with AlphaRelay capture…**, match a recognizable moment in both videos, and save the offset. **Suggest from recording times** is only a starting point; transferred files can have misleading modification dates.

## Controller Screen Capture did not start

1. Confirm the pilot device is an Android drone controller with **AlphaRelay Operator** installed.
2. Tap **Start Mission**, choose **Controller Screen**, and complete mission setup. On a detected DJI SDK-controller setup, select **Controller Screen Capture — Recommended**.
3. Approve the Android screen capture prompt.
4. If voice relay is needed, grant microphone permission and confirm speech recognition is available.
5. If the app cannot be installed, allow the browser or file manager to **install unknown apps**. Android Developer mode is not required.

The controller's native flight app remains the flight control app. AlphaRelay aircraft command buttons are intentionally disabled in Controller Screen Capture.

## Reconnect controller for SD footage is waiting

This conditional closeout appears only when AlphaRelay confirmed a supported DJI SDK 5 setup and can add a mission-time aircraft original after Controller Screen Capture.

1. Keep the aircraft and controller powered on. The finalized controller-screen recording remains safe and the mission remains open.
2. Open DJI Fly app info and tap **Force stop**.
3. Open **Open by default** and clear its defaults.
4. Return to AlphaRelay, physically unplug and reconnect the controller cable, and choose **AlphaRelay → Just once**.
5. If the SD pull fails, verify the aircraft connection and SD card, reconnect, and tap **Retry after reconnect**.

Use **Close without aircraft copy** only when you intentionally want to close with the controller-screen recording alone. AlphaRelay selects aircraft footage by its mission-time recording timestamp and does not substitute an older pre-mission clip.

## Pilot-mode aircraft footage is still transferring

After a confirmed touchdown, AlphaRelay can close the mission before the aircraft-SD transfer finishes. Keep Operator, the aircraft, and controller powered on and watch the footage banner. A queued clip counts as secured and can continue through the durable upload path. If AlphaRelay says the footage was not secured and keeps the mission open, fix the connection or SD problem and retry closeout.

## iPhone or iPad capture did not start

1. Confirm the device runs iOS 26 and the TestFlight version of AlphaRelay Operator is current.
2. Start the mission, open the ReplayKit broadcast picker, and choose **AlphaRelay Capture**.
3. Start the broadcast, then open the flight app. If capture stops, return to Operator and tap **Choose display and start capture**.
4. Check iOS Screen Recording restrictions and available storage. Grant microphone permission only when microphone audio or voice events are needed.

ReplayKit must be verified on a physical device. A Simulator test does not prove controller-screen capture or background handoff.

## Pilot mode stays locked

1. Confirm AlphaRelay detected the DJI SDK remote-controller setup and displays the capture-mode chooser.
2. Select **Pilot mode**, open the 12-aircraft list, and confirm the exact aircraft family is listed.
3. Tap **My drone is listed — Use Pilot**.
4. Power on and connect the aircraft and controller, then wait for AlphaRelay's live flight-controller check.
5. Start only after AlphaRelay reports **Supported aircraft confirmed. Pilot mode is ready.**

If the aircraft is not listed, the DJI SDK is unavailable, or the connection check times out, select **Controller Screen Capture — Recommended** and use the native flight app. Do not rely on Pilot mode until the same aircraft, controller, payload, and firmware combination has been validated in training.

## DJI Avata Goggles Mode did not start

1. Confirm DJI Fly and AlphaRelay Operator are installed on the same Android device.
2. Power on and link the DJI Avata, compatible DJI Goggles, and their compatible controller.
3. For automatic detection, connect the DJI Goggles to the Android device with a compatible USB data/OTG cable.
4. Open DJI Fly and confirm the goggles live view appears before opening AlphaRelay.
5. If you use wireless live-view sharing, enable **Use DJI Fly / goggles video feed**, return to the landing screen, and tap **Start Mission**.
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

If scenario or mission targets are missing, turn AI live watch on and expand **Show details**. Scenario targets come from the scenario saved with the mission. Enter mission-only targets one visible item per line and click **Save targets**; these supplement rather than replace standard detections.

AI live alert banners dismiss after about three seconds. Open the Timeline if the banner disappeared before you finished reading it; the event remains there for review.

## AI alert says approval is required

1. Open the mission **Timeline** in Mission Overwatch.
2. Compare the Device Live AI or AI live-watch alert with the source screenshot or footage.
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

## AI Review will not start or appears stuck

1. Open a closed, synced mission and select **AI Review**.
2. Move at least one tag from **Available tags** into **What should AI look for?**.
3. For **Event-focused**, confirm the mission has an accepted human event or approved alert. If not, choose **Full mission — detailed**.
4. Confirm the selected recordings are playable. Full-mission coverage can use multiple aligned recordings and can also include uploaded mission photos.
5. Keep the deployment online and confirm AI is configured. Click **Refresh** to reload the background job state.

The status can show the original recording upload, video sections reviewed, evidence screenshots verified, or completion. A queued or uploading job has not completed actual-video analysis. You can leave the page while it runs; AlphaRelay sends a completion email when configured delivery succeeds. The email reports video reviewed separately from evidence screenshots checked.

## Ask AI is unavailable or cannot answer

1. Open a closed, synced mission and select **AI Review → Ask AI**.
2. Confirm the primary uploaded footage is available and playable. Ask AI does not use mission photos or event screenshots.
3. Keep Mission Overwatch online and confirm AI is configured for the deployment.
4. If AlphaRelay says it is preparing supporting evidence, keep the page open while it samples frames from playable footage.

Ask AI can answer only from the selected primary uploaded recording. If the relevant moment is missing, obscured, low quality, or outside the sampled frames, it may report that the question cannot be answered. Ask AI remains available after supervisor approval as a read-only tool; if it is missing on an approved mission, reload the current Mission Overwatch assets. Approval still blocks timeline, evidence, media, AI Review finding, and report mutations.

## Device Live AI is not tagging

1. Confirm **Enable automatic OpenAI + local detection** is on in Android **Pilot console → Flight → Local AI**, or confirm iOS capture and notification permission are active.
2. Start Controller Screen Capture; Device Live AI does not sample while capture is stopped.
3. Check **Device Live AI** status. With internet it should report cloud analysis; after a cloud or connectivity failure it should move to the on-device fallback.
4. Confirm Operator is current and that the offline fallback model is available.
5. Grant notification permission if events are logged but direct alerts do not appear.

If the status says browser or cloud Live AI is active, this is expected coordination for the same mission. The on-device fallback resumes automatically after healthy cloud analysis stops or the short handoff expires.

Review every auto-tag before treating it as an operational fact. Small, distant, dark, blurred, or partially hidden objects may be missed.

## Report actions blocked

Check mission state and your role. Submitting for supervisor approval locks report editing, mission renaming, timeline and media changes, and AI Review mutations. A supervisor can **Return to draft** to reopen work. Approved records cannot be changed and reports cannot be regenerated; read-only Ask AI remains available.

## Mission operator is missing from AlphaRelay Operator

1. Connect the Operator device to internet and refresh its license or reopen mission setup so the agency roster can update.
2. In **Organization Settings**, confirm the person has a full name, an active membership, and **Mission operator** enabled. Role and operator designation are separate.
3. Tap **Operator — Select before starting** and choose the person.

If no roster is available, AlphaRelay warns and can start without identified-operator attribution. Resolve the roster before operational use when your policy requires named attribution.

## Import mission data did not upload files

**Import mission data…** is intentionally a workflow preview. It inventories filenames, paths, types, and sizes locally and ends with an ingestion plan; it does not upload file contents or change custody. Use **Import mission**, **Add optional recording**, or **Upload Photos** for the currently connected production workflows.

## Offline package video won't play

Open `index.html` from inside the extracted folder without moving files out. Use Chrome or Edge for large packages.

On Android, opening `index.html` can isolate it from sibling media files. If **Reconnect exported files** appears, tap **Choose package files** and select the extracted footage, photos, and printable HTML files. You can choose files more than once when Android presents different folders separately.

→ Connectivity · Known limitations

---

## Connectivity

AlphaRelay uses separate live and sync paths. Losing one does not always stop the mission.

```text
AlphaRelay Operator
  |-- Live stream (WebRTC) → Mission Overwatch / Android or iOS Mission Viewer over internet
  |-- Controller Livestream (DJI RTMP or Skydio RTSP) ← Separate flight controller over internet
  |-- HDMI Capture Card (UVC) ← Controller HDMI output over USB
  `-- Cloud sync → Events, footage, reports, evidence

Laptop browser
  |-- HDMI Capture Card (UVC) ← Controller HDMI output over USB
  `-- Live stream (WebRTC) + recoverable local evidence recording
```

Some older or deployment-specific Android builds also expose a LAN relay to Mission Overwatch on the same Wi-Fi. The current public Operator workflow does not show that mission-start option.

## Without internet

- Local mission capture and event logging
- On-device Live AI fallback and Controller Screen Capture notifications
- HDMI Capture Card recording, preview, Device Live AI, and event screenshots
- Queued footage and deferred cloud sync
- Pilot license within the 10-day offline grace window

## Needs internet

- Sign-in and mission sync
- Footage and photo upload
- Playback links
- **Live stream (WebRTC)** setup and viewing
- Controller Livestream publishing, playback, and finalization
- Mission Viewer mission list, timeline updates, event logging, alerts, and video
- Report generation and supervisor workflow
- Offline package and evidence JSON export downloads

## Remote live connection

1. Tap **Start Mission** in AlphaRelay Operator while the device has validated internet.
2. Open the active mission from Mission Dashboard.
3. Select **Live stream (WebRTC)** in Mission Overwatch.
4. If automatic live setup failed or the mission began offline, use **Pilot console → Mission → Start remote live** after connectivity returns.

A second licensed Android or iOS device can open Mission Viewer. It requires internet for its active-mission list, timeline, event logging, alerts, and remote video.

## Controller video inputs

**Controller Livestream** requires validated internet on both the licensed Android or iOS Operator device and the separate flight controller. For DJI, Operator provides a complete RTMP URL and separate server/key values. For Skydio RTSP External Server, it provides a server address, port, and stream name. Restart the publisher with the same mission destination after a connection loss while the mission is active.

**Operator HDMI Capture** receives video locally on Android or USB-C iPad and can keep recording when internet is unavailable. **Laptop HDMI Capture** starts online from the Dashboard and records recoverable evidence in the browser while publishing remote live. Keep the tab open and use **Stop & upload** before closeout.

## Deployment-specific Local Network connection

If your Android build exposes **Local Network**, run it on Wi-Fi, open **Live Overwatch Screen**, and connect by scanning or entering the device IP. Trust the self-signed relay certificate if prompted. This is not a selectable mission path in the current public Operator workflow.

## Queued states

**Queued for cloud sync**, **Loading playback link**, or upload banners mean local data still needs to reach the cloud. Queued Operator videos are stored durably and retry when validated connectivity returns, including after the app restarts. Keep the device powered on, do not force-stop or uninstall the app, and use **Upload now**, **Sync now**, or **Sync pending items** when offered.

When AlphaRelay opens with queued mission video, the startup panel shows the queue and progress. Use **Skip for now and start new mission** only when field work must begin before the older upload finishes.

**Warning:** Remote live, Controller Livestream, and cloud sync require internet. HDMI capture can record locally without it. A deployment-specific LAN relay needs same-network reachability, not cloud access.

## PWA / offline shell

Mission Overwatch caches its shell after an online visit. Cloud sign-in, sync, uploads, and playback still require network access.

---

## Known Limitations

## Network

- The current public Operator workflow does not present a **Local Network** mission button. Deployment-specific Android LAN relay builds require the field and Overwatch devices on the same reachable Wi-Fi.
- **Live stream (WebRTC)** requires internet on the pilot device.
- Cloud sync, upload, and export wait for internet.
- Losing relay, remote live, or cloud sync does not always end the mission — paths are independent.
- **View Live Mission** on Android and **Watch Live Mission** on iOS require internet and a valid licensed installation in the same organization. Timeline events can update even when remote video is not ready.
- **Controller Livestream** requires internet on the Android or iOS setup/viewer device and the separate publishing controller. DJI requires either a complete RTMP URL or separate server/key fields. Skydio requires a deployed, reachable RTSP gateway and RTSP External Server support.
- Operator **HDMI Capture Card** can record locally without internet on Android or USB-C iPad; iPhone does not expose UVC capture. Remote viewing, cloud AI, sync, and upload still require connectivity.
- **Laptop HDMI Capture** requires an online mission start, browser camera permission, a physical UVC card, available local browser storage, and an open tab. Use **Stop & upload** before ending the mission; do not clear browser data before recovering an interrupted recording.

## Media

- Footage often uploads after the mission ends.
- **Controller Screen Capture** records the controller screen, including native flight-app overlays, not a raw camera file.
- **Controller Livestream** records the video published by the controller, not an aircraft-original camera file. Stop the publisher before normal mission closeout so the recording can finalize.
- **HDMI Capture Card** ingests UVC video only. USB/UAC audio embedded by the card is not currently recorded; voice events use the receiving device microphone. Hardware power, USB support, negotiated resolution, browser compatibility, and reconnect behavior vary, so validate the exact stack.
- **Goggles Mode** records the DJI Fly screen carrying the DJI Goggles live view, not the original DJI Avata camera file.
- Queued Operator footage retries when validated connectivity returns, but the device must remain powered and the app must not be force-stopped or uninstalled. iOS closeout also needs Operator open while ReplayKit handoff completes.
- Queued footage must finish before final review.
- Browser upload of an optional MP4 or MOV recording requires internet before upload starts (no pre-queue).
- In Controller Screen Capture and Goggles Mode, optional aircraft or goggles recordings do not replace AlphaRelay's capture clock. Verify their visual alignment before relying on shared event timing.
- **Import mission** requires a signed-in, online browser and creates a closed post-flight record only.
- **Import mission data…** is an inventory and custody-planning preview. It does not upload file contents or create production custody records.
- Offline packages only include media available at export time. Some Android file viewers isolate `index.html`; use the package's **Reconnect exported files** prompt when it appears.
- Current Controller Screen Capture missions record one mission-long MP4. Older missions can retain adjacent legacy chunks, and a separately restarted capture remains a separate recording.
- A supported DJI SDK 5 Controller Screen Capture setup may offer a post-capture USB handoff for the mission-time aircraft original. It requires stopping DJI Fly, clearing its USB default, reconnecting the controller, choosing AlphaRelay, and keeping the aircraft/controller powered. Failure leaves the mission open for retry; **Close without aircraft copy** intentionally omits that optional angle.
- Pilot-mode aircraft-SD capture and its 1080p/4K preset depend on the aircraft, payload, firmware, card, and available space. AlphaRelay rejects a clip that began before the mission rather than attaching the wrong recording.
- A single mission-long file makes playback and custody handoff simpler, but a hard device or app failure before finalization can place more of the recording at risk than periodic chunks. AlphaRelay attempts interrupted-recording recovery; still verify long missions on the actual device class and complete the normal closeout flow.

## AI

- **Device Live AI** uses cloud analysis when available and an on-device people/possible-weapon fallback when it is not. Performance still depends on the device, settings, image quality, scene, network, and provider response time. It has not been field-validated across broad controller-screen footage.
- Device Live AI can miss small, distant, blurred, dark, or partially hidden objects and can mistake tools, toys, equipment, overlays, or silhouettes for a possible weapon. It does not determine identity, possession, intent, legality, policy compliance, injury, or whether an area is clear.
- Spatial tracking and HUD filtering reduce repeated person/weapon alerts and controller-overlay false positives; they do not guarantee one alert per real subject or eliminate false alerts.
- AI report drafts require officer review; resolve **Items Requiring Officer Review** before finalization.
- **AI Review** requires a closed synced mission, available media, internet, AI configuration, installed analysis tables, and at least one selected tag under **What should AI look for?**.
- **Event-focused** AI Review requires accepted human events or approved alerts to anchor its search. It reviews original-video intervals around those moments and uses existing event screenshots as coverage boundaries. **Full mission — detailed** reviews the union of selected recording timelines, prioritizing higher-quality/original footage for overlapping time and retaining controller-only gaps. Neither mode proves that every visible moment or object was detected.
- Native-video review depends on the provider accepting and processing the selected original recording. Large uploads and HEVC processing can take time; use the visible upload, video-section, screenshot-verification, and completion states rather than treating a queued job as finished.
- Background AI Review can continue after you leave the page, but the completion email and refreshed progress depend on the configured worker, mail delivery, and connectivity.
- **Ask AI** runs only for a closed synced mission with playable uploaded footage. It uses the primary uploaded recording and excludes mission photos and event screenshots. It remains available read-only after approval, but cannot alter the approved record. Occlusion, image quality, repeated views, sampling, or missing moments can limit counts and conclusions.
- An exact repeat question may load a saved answer for the same primary-footage selection. Ask again after that recording changes.
- **AI live watch** requires active **Live stream (WebRTC)**, internet, Mission Overwatch online, and AI configuration. The default cadence can start a sample as often as every two seconds, but network and analysis latency may make it slower.
- Scenario-specific and mission-specific AI targets are bounded visual search cues, not guaranteed detections. Use concrete visible details and verify every match against the live view or source media.
- Person detections use informational/yellow treatment and do not perform identity or face recognition. Possible weapons and other urgent threat indicators use red treatment but remain unconfirmed until human review.
- Mission Overwatch exposes individual standard-detection controls, including weapon-related detections. Enabled weapon-related alerts receive priority, but every alert remains an unconfirmed review prompt. Review the saved choices before each operational mission.
- Thermal and infrared people analysis accepts incomplete signatures only when multiple human-consistent cues are visible and checks common warm-object, furniture, vegetation, reflection, shadow, and image-artifact alternatives. It can still miss people or produce false positives.
- AI media findings are suggestions. Accepting one in AI Review moves it to the timeline; an officer must then use **Accept as is** or **Review & edit** before it is eligible for the AAR.
- AI Review does not draw model bounding boxes over finding thumbnails or the full-screen source image.
- Device Live AI and AI live-watch alerts require **Approve alert** before configured screenshot analysis or report eligibility. **Dismiss alert** excludes the alert. Approved analysis still waits for the event, review decision, and screenshot to sync and requires internet plus AI configuration.
- When healthy Mission Overwatch or device cloud analysis owns detection for a mission, the on-device fallback pauses to reduce duplicate alerts. The handoff is temporary and local detection resumes automatically, but there can be a brief transition after cloud analysis or connectivity stops.
- iOS Operator requires iOS 26 and physical-device ReplayKit validation. It does not include Android's DJI Goggles USB auto-detection, local-network relay, or full Android local detector.

## Aircraft controls

- Aircraft camera tools appear only for supported aircraft/controllers and still depend on aircraft firmware, payload, and SDK behavior.
- **Controller Screen Capture** intentionally leaves flight and camera operation in the controller's native flight app; AlphaRelay aircraft command buttons are blocked.
- **Pilot mode** is offered only on a detected DJI SDK-controller setup. Selecting a listed DJI MSDK 5.17 aircraft does not unlock it by itself; AlphaRelay must also verify the live flight-controller connection.
- **Goggles Mode** does not control the DJI Avata. The DJI Goggles and their compatible controller remain responsible for aircraft operation.
- Validate aircraft-specific controls in training before operational use.

## Workflow locks

- **Done — continue** is a recorded review decision, not only navigation. Timeline completion permanently removes remaining unaccepted AI candidates; AI Review completion rejects remaining undecided findings. Review the confirmation count before continuing.
- Submitting a report for supervisor approval locks the report, mission name, timeline, footage, photos, and AI Review mutations. Returning it to draft reopens work; approval makes the mutation lock permanent. Read-only Ask AI remains available after approval.
- Evidence sealing preserves custody hashes — it is not report approval.
- **Seal entire mission** seals only evidence included in the AAR Chain of Custody. Excluded alert screenshots can remain retained and registered but unsealed.

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
| **AlphaRelay Operator** | Licensed Android or iOS app for controller-screen mission capture, remote live, field events, Device Live AI, and Mission Viewer |
| **Approve alert** | Timeline decision that allows a Device Live AI or AI live-watch alert to proceed to configured screenshot analysis and report consideration; it does not complete officer review of the analysis |
| **AI Review** | Closed-mission tab for reviewing actual video against selected targets, verifying candidate findings with evidence screenshots, and accepting or rejecting mission-relevant findings |
| **Ask AI** | AI Review view for asking questions grounded only in the primary uploaded footage from a closed synced mission; it remains read-only and available after approval |
| **Alert on people** | Operator mission setting that controls routine person and hand-to-hand-contact alerts; Mission Overwatch separately controls each standard detection |
| **Activity Log** | Read-only Organization Settings tab showing server-attributed material actions with person, mission, action, and date filters |
| **Add optional recording** | Media action for attaching an MP4/MOV aircraft, goggles-screen, or other external recording and aligning it to the mission timeline |
| **AAR Chain of Custody** | Explicit report evidence set verified by **Seal entire mission**; included manual media is sealable while retained excluded screenshots remain unsealed |
| **Chain of custody** | Evidence history and hash verification for a mission |
| **Command Center** | Default Mission Dashboard view for operational status, active missions, attention items, automatic alerts, and report follow-ups |
| **Controller Screen Capture** | Workflow where the native flight app keeps flight control while Operator captures the visible screen; Android uses system screen capture and iOS uses ReplayKit |
| **Controller Livestream** | Android/iOS Operator workflow that provides DJI RTMP or Skydio RTSP External Server values for a separate controller to publish into a mission |
| **HDMI Capture Card** | UVC controller-video input supported by Android Operator, USB-C iPad, or laptop/browser capture; iPhone is not supported |
| **Laptop HDMI Capture** | Browser workflow created from the Dashboard; **Connect & go live** records recoverable evidence and publishes remote live from a physical UVC card |
| **Goggles Mode** | DJI Avata and compatible DJI Goggles workflow where AlphaRelay on a separate Android device captures the DJI Fly live view; compatible hardware enables the mode, then the operator taps **Start Mission** |
| **Device Live AI** | Cloud-first live analysis from an Operator device with automatic on-device people and possible-weapon fallback when cloud analysis is unavailable |
| **Internet** | Cloud-backed mission mode used by the current Operator **Start Mission** workflow |
| **Done — continue** | Closed-mission action that records completion of Timeline, Media, or AI Review and opens the next unfinished step; confirmation can remove or reject unresolved AI candidates |
| **Import mission** | Mission History flow that creates a closed post-flight record from external footage and photos |
| **Import mission data…** | Client-side workflow preview that inventories a large evidence or mapping package without uploading file contents or creating custody records |
| **Items Requiring Officer Review** | Report checklist items that need human resolution before submission |
| **Live Overwatch Screen** | Mission Overwatch panel for LAN relay connection |
| **Live stream (WebRTC)** | Remote live video over the internet |
| **Mission tools** | Active-mission Quick Events, manual event entry, browser dictation, and applicable laptop HDMI controls in the **Events & input** row beneath the Mission Overwatch feed |
| **Organization Documents** | Signed pilot agreement PDFs linked to an organization |
| **Mission Console** | Dashboard link name for opening Mission Overwatch |
| **Mission Dashboard** | Command home — KPIs, history, search, AAR inboxes |
| **Mission Overwatch** | Per-mission browser workspace; active missions use a full-screen live command view with a right-rail event timeline and bottom **Events & input** row, while closed missions use the review workflow |
| **Mission operator** | Separate organization-membership designation that makes a person available in the AlphaRelay Operator roster and permits mission start; it is not an organization role |
| **Mission sharing** | **Share** workflow that gives an eligible user working access to one mission without granting organization-wide access or mission-start authority |
| **Mission Viewer** | **View Live Mission** on Android or **Watch Live Mission** on iOS for active remote live, timeline updates and alerts, and event logging from a secondary licensed device |
| **Mission-specific AI targets** | Up to eight visible details saved for AI live watch on one mission in addition to standard and scenario targets |
| **Offline package** | ZIP archive with viewer for point-in-time mission export |
| **Official mission event** | Undeleted human-created event, approved automatic AI alert, or accepted AI Review finding that received Timeline officer review; this set drives counts, reports, exports, playback markers, and evidence views |
| **Pilot agreement** | Prepared agreement PDF signed through AlphaRelay before or during agency onboarding |
| **Pilot app** | Older documentation term for the Android app now named AlphaRelay Operator |
| **Pilot mode** | Direct AlphaRelay aircraft-control mode available on detected DJI SDK-controller setups after supported-aircraft confirmation and a successful live connection check |
| **Local AI** | Android settings label and fallback component within Device Live AI; it runs on-device when healthy cloud analysis does not own the mission |
| **Pilot console** | In-app settings (Mission, Flight, Events, System) |
| **Play with Events** | Footage player with synchronized event markers |
| **Quick events** | One-tap event buttons; agency scenarios can define up to seven, with the standard set used when none is configured |
| **Local Network** | Deployment-specific Android LAN WebSocket relay mode; not presented by the current public Operator workflow |
| **Scenario template** | Built-in or agency-created mission setup that can provide quick events, report focus, and visible AI watch targets |
| **Trash** | Mission History recovery area that keeps a deleted mission and its linked record recoverable for up to 30 days; authorized admins can permanently **Delete now** sooner |
| **Start a Mission** | Operator landing-screen action that opens **Choose video source** before operator, scenario, mission name, AI targets, and alert setup |
| **Voice relay** | Voice logging with keyword `relay` before event details |
| **What should AI look for?** | Operator-selected tags that define a post-mission AI Review run; at least one is required before **Analyze media** |

---
