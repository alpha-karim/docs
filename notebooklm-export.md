# AlphaRelay Operator Documentation — NotebookLM Export

Generated on 2026-09-20 by `scripts/generate-notebooklm-export.mjs`.

**Web app:** https://www.alpha-relay.com
**Pilot app (APK):** https://www.alpha-relay.com/download.html

---

## Terminology (match the product UI)

- **AlphaRelay** — product name
- **AlphaRelay Operator** / **Operator app** — licensed Android or iOS app used to start controller-screen missions, publish live video, log field events, and support active missions; the Android APK is available from `download.html`
- **Start Mission** — current Android and iOS Operator entry point. It first asks how the mission will receive video, then opens operator, mission name, scenario, mission-specific AI targets, and alert settings for the selected source; starting creates an Internet mission and automatically starts remote live when validated internet is available.
- **Local Network** — deployment-specific Android LAN relay path retained in the product but not presented as a mission-start button in the current public Operator workflow.
- **Controller Screen Capture** — recommended capture path on Android drone controllers where the controller's native flight app keeps flight control and AlphaRelay captures the controller screen
- **Controller Livestream** — Browser or Android/iOS Operator workflow that provides DJI RTMP values or Skydio RTSP External Server values for a controller or flight app to publish directly; it requires internet and does not control the flight controller
- **Video Link** — Android/iOS Operator workflow that scans or accepts a public HTTP/HTTPS video or video-page URL; an isolated AlphaRelay backend opens and relays it into Mission Viewer, recording, Live AI, screenshots, custody, and review without device screen capture
- **HDMI Capture Card** — UVC workflow available through Android Operator, USB-C iPad, or a laptop browser; recording stays associated with the mission while flight remains on the controller
- **Pilot mode** — direct AlphaRelay aircraft-control path offered on detected DJI SDK-controller setups only after the operator confirms a listed DJI MSDK 5.17 aircraft and AlphaRelay verifies its live connection
- **Goggles Mode** — DJI Avata and compatible DJI Goggles workflow on a separate Android phone or tablet; compatible USB hardware can enable the mode automatically, but the operator still taps **Start Mission** before AlphaRelay starts an Internet mission with no scenario and opens DJI Fly after screen-capture approval
- **Pilot console** — in-app settings panel (Mission, Flight, Events, System)
- **Mission Dashboard** — command home (`dashboard.html`)
- **Command Center** — default Mission Dashboard view with connection/refresh status, active missions, operational KPIs, attention queue, and latest automatic alerts
- **Mission Overwatch** / **Mission Console** — per-mission browser workspace (`mission-overwatch.html`; dashboard link says **Open Mission Console**); active missions use a full-screen command view with the live feed and a tabbed right-rail Mission sidebar
- **Mission Viewer** / **View Live Mission** / **Watch Live Mission** — active-mission viewer in licensed Android and iOS Operator apps for remote live, timeline updates, and quick or manual event logging from a secondary device; Android viewer events use a received full-frame screenshot when video is available
- **Live Overwatch Screen** — relay connection panel in Mission Overwatch
- **Live stream (WebRTC)** — remote live viewing over the internet
- **AI live watch** — Mission Overwatch control that analyzes sampled remote-live frames and logs officer-review alerts when configured; it defaults on unless a saved mission choice disables it
- **Alert on people** — Operator mission setting for optional informational person alerts; Mission Overwatch can configure each standard detection separately, and enabled weapon-related alerts receive highest priority
- **Scenario-specific AI targets** / **Mission-specific AI targets** — bounded visible details added to LiveAI's standard detections for an active mission
- **Device Live AI** — cloud-first live analysis from the Operator device when internet is healthy, with automatic on-device person and possible-weapon fallback when cloud analysis is unavailable; Android also exposes the fallback controls in **Pilot console → Flight → Local AI**
- **Person detection** — informational/yellow alert treatment; this is not identity or face recognition
- **Possible weapon / urgent threat** — red alert treatment that still requires human review
- **Automatic AI-alert review** — an officer must **Approve alert** or **Dismiss alert** before a Device Live AI or AI live-watch screenshot can be analyzed or used in a report
- **Mission sidebar** — right-rail active-mission tabs for **Timeline**, **Events**, **Ask AI**, an optional **Map**, and a conditional **Livestream** or **HDMI Input** tab
- **Live Ask AI** — active-mission question workflow in Mission Overwatch and Android/iOS Operator that freezes one fresh current frame at submission time, returns a shared saved answer for that frame, and requires verification against the live feed
- **Public live view** — revocable, read-only active-mission link and QR code that lets anyone with the link watch live video and see events and alerts without signing in; viewers cannot log or review events
- **Location Sharing** / **Nearby map** / **Map** — optional mission-scoped sharing of a selected person's licensed-device location; live positions are advisory, and recorded mission tracks finalize as custody-aware GeoJSON evidence
- **Timeline finding review** — accepted AI Review findings and analyzed AI-alert screenshots require **Accept as is** or **Review & edit** in the timeline before AAR use
- **Done — continue** — closed-mission action on Timeline, Media, and AI Review that records completion and advances to the next unfinished review step; Timeline moves remaining unaccepted AI candidates to **Dismissed**, while AI Review rejects remaining undecided findings after confirmation
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
2. **Start a mission** — In Operator, tap **Start Mission**, choose where the video will come from, then enter the mission details. AlphaRelay can capture the controller screen, open a video QR code or web link, receive a DJI or Skydio controller livestream, receive controller HDMI through a capture card, or use Pilot mode on supported DJI equipment. Command staff can also start **New Livestream** or **New HDMI mission** from the Dashboard.
3. **Watch and log events** — Use Mission Overwatch to watch live video, follow the timeline, add events, ask about the current picture, and open the mission map. A second licensed phone or tablet can use Mission Viewer for the same basic live support. Authorized team members can create a read-only public QR code for viewers who do not sign in. AI can flag possible concerns, but every alert and answer must be checked by a person.
4. **Review the mission** — Let saved events and footage finish uploading, then work through **Timeline**, **Media**, **AI Review**, and **Report**. Review or dismiss AI suggestions before they can enter the official record. You can choose a faster review around known events or a longer review of the full mission. AlphaRelay emails you when the review finishes.
5. **Complete the record** — Generate the report, seal the evidence listed in the AAR Chain of Custody, submit for supervisor review, and export when ready. Submission prevents further review changes. Approval makes the record permanently view-only, while Ask AI remains available for view-only questions.

## Start here

- **New users:** AlphaRelay in plain English.
- **Pilots:** Start a mission from AlphaRelay Operator.
- **Enterprise controllers:** Use AlphaRelay Operator beside an Android controller's flight app.
- **iPhone and iPad:** Record an iPhone/iPad flight-app screen, open a Video Link, receive Controller Livestream, or use a USB HDMI capture card on iPad.
- **DJI Avata and DJI Goggles:** Relay the goggles live view through DJI Fly.
- **Overwatch users:** Watch and log in Mission Overwatch.
- **Mission viewers:** Watch and support an active mission from a second licensed Android or iOS device.
- **Controller video inputs:** Use Controller Livestream or a USB HDMI capture card while the native controller keeps aircraft control.
- **Video Link:** Scan or paste an authorized video link and bring it into the mission.
- **Device Live AI:** Understand live AI alerts, internet use, and the basic on-device backup.
- **Reviewers:** Import or review footage and generate a report.
- **Admins:** Accounts and organizations.
- **Troubleshooting:** Common fixes.
- **Ask the docs:** Chat with NotebookLM about AlphaRelay (Google sign-in required).

**Note:** **Ask the docs** opens AlphaRelay’s NotebookLM chat in a new tab. You need a Google account and access to the shared notebook. Answers are AI-generated from the documentation — verify against the guides here for operational use.

## Links

- **Web app:** [alpha-relay.com](https://www.alpha-relay.com)
- **AlphaRelay Operator for Android:** [Download the Android app installer](https://www.alpha-relay.com/download.html)
- **Ask the docs (NotebookLM):** [Chat with the documentation](https://notebooklm.google.com/notebook/d83a28f5-b26c-4908-8d5f-2c7fdfda2603)

---

## AlphaRelay in Plain English

AlphaRelay helps teams run drone or field missions and produce a defensible record afterward.

**AlphaRelay Operator** runs on Android phones and controllers, iPhones, and iPads. It starts missions, records video, and logs events while the DJI, Skydio, or other flight app continues to fly the aircraft. Video can come from the controller screen, a video QR code or web link, the controller's built-in livestream feature, or an HDMI capture card. A second licensed phone or tablet can watch the mission and add events. **Mission Overwatch** is the browser workspace where command staff watch live video, add events, review footage, prepare after-action reports, preserve evidence, and export mission packages.

## Basic flow

1. Start a live mission from AlphaRelay Operator.
2. Watch live and log command-side events in Mission Overwatch when the pilot device is online.
3. End the mission when field work is complete.
4. Upload and review footage.
5. Generate the after-action report, seal evidence, and export.

## Mission connectivity

| Pilot-device state | What happens |
| --- | --- |
| Online | **Start Mission** creates the mission in the agency account and starts remote live video automatically. The app labels it **Live stream (WebRTC)**. |
| Offline | Supported workflows still record on the device. Events and footage wait there until internet returns. |

The current public Operator workflow does not show a **Local Network** mission button. A same-Wi-Fi viewing option may still appear in older or agency-specific Android builds, but it is separate from the normal public workflow.

On Android drone controllers, Operator uses **Controller Screen Capture** by default. The controller's normal flight app keeps flight control while AlphaRelay captures the screen, sends it into the mission, and records one continuous video. On supported DJI equipment, a listed and connected aircraft can instead unlock **Pilot mode** for direct AlphaRelay flight controls.

When AlphaRelay cannot be installed on the controller, scan or paste its authorized **Video Link**. You can also use the controller's livestream settings—**Custom RTMP** on DJI or **RTSP External Server** on Skydio—or connect its HDMI port through a standard USB capture card. You do not need to understand those abbreviations; AlphaRelay shows the exact fields to copy. See Video Link and Controller Livestream and HDMI Capture.

On iPhone and iPad, Operator can use Apple's Screen Recording picker for **Controller Screen**, open a **Video Link**, or receive a controller livestream. A USB-C iPad can also use an **HDMI Capture Card**. An iPhone cannot receive video from a USB HDMI capture card.

With a DJI Avata and compatible DJI Goggles, AlphaRelay uses **Goggles Mode** on a separate Android device. DJI Fly displays the goggles live view, AlphaRelay starts a mission with no scenario, and the goggles with their compatible controller remain responsible for the aircraft.

Most live missions start from Operator. Command Center can also create **Controller Livestream** with **New Livestream** or browser HDMI capture with **New HDMI mission**, then continue setup in Mission Overwatch. For work that already happened outside AlphaRelay, **Import mission** creates a closed post-flight record.

Operator also includes **Device Live AI**. With internet, it uses AlphaRelay's protected online AI service. Without internet, it can use the device for basic people and possible-weapon checks. Every alert still requires human review.

---

## The 5-Step Mission Workflow

Use this page as the full lifecycle map. Each step links to a deeper guide.

## 1. Set up devices

Install AlphaRelay Operator and activate it on each Android device, iPhone, or iPad that your team will use. Sign in to the web app and open Mission Overwatch once on each field laptop or tablet while it has internet. If AlphaRelay cannot run on the flight controller, prepare its video QR code or web link, its built-in livestream setting, or an HDMI capture card.

→ Devices and licenses · Before you go to the field

## 2. Start a mission

Start most missions in Operator. Tap **Start Mission**, choose where the video will come from, then select the operator and enter the mission name, scenario, AI watch items, and alert choices. Android can capture the controller screen, open a Video Link, receive a controller livestream or HDMI capture card, and use Pilot mode on supported DJI equipment. iPhone and iPad can capture the screen, open a Video Link, or receive a controller livestream; a USB-C iPad can also receive HDMI. The browser Dashboard can start **New Livestream** or **New HDMI mission**. AlphaRelay shows the exact fields to copy into a DJI or Skydio controller.

→ Start a mission · Mission connectivity · Android Controller Screen Capture · Video Link · Controller Livestream and HDMI Capture · iPhone and iPad · DJI Avata with DJI Goggles

## 3. Watch and log events

Open the active mission in Mission Overwatch. The live video stays on screen while the **Mission sidebar** gives you **Timeline**, **Events**, **Ask AI**, an optional **Map**, and setup for livestream or HDMI missions. **Ask AI** checks one current picture—not the entire live feed—so verify every answer against the video. A second licensed phone or tablet can watch, add quick or manual events, ask about its current picture, and share the officer's location when enabled. Authorized team members can also create a read-only public QR code. AI alerts are review prompts, not confirmed facts.

The Command Center places active missions, remote-viewing or upload problems, automatic alerts awaiting review, and report follow-ups in one **Attention queue**. Mission Overwatch updates the open timeline as events arrive from Operator and Mission Viewer.

→ View a live mission · Share personnel location · Watch in Mission Overwatch · Log events · Device Live AI

## 4. Review the mission

End the mission and let footage finish uploading. Then work through **Timeline** → **Media** → **AI Review** → **Report**, using **Done — continue** after each step. Review each alert and AI suggestion against the original video. Accept only findings that belong in the official record; dismiss the rest. Use **Event-focused** to check video around known events, or **Full mission — detailed** for a longer review of the available mission video. AlphaRelay emails you when the review finishes. For work recorded outside AlphaRelay, use **Import mission**. Deleted missions stay in **Trash** for up to 30 days unless an authorized admin permanently deletes them.

→ End a mission · Import a mission · Upload footage · Review footage · Delete or restore a mission

## 5. Complete the record

Generate the after-action report with AI drafting when configured, resolve **Items Requiring Officer Review**, and use **Mark complete** after every listed item has been addressed. **Seal entire mission** verifies and seals only evidence included in the AAR Chain of Custody. Excluded screenshots remain retained but unsealed. Submit for supervisor approval and export when the record is complete.

→ Generate a report · Seal the mission record · Export offline package

**Warning:** Sealing evidence and supervisor approval are separate steps. Sealing preserves custody hashes. Submitting the report locks timeline, media, mission-name, and AI-review changes while a supervisor decides; approval makes that lock permanent.

## AI across the workflow

- During an active remote stream, **AI live watch** samples frames and logs possible threat indicators for officer review.
- On an Operator device, **Device Live AI** uses AlphaRelay's online AI review when internet is working. Without it, the device automatically continues basic checks for people and possible weapons.
- For an AI live-watch or Device Live AI alert, choose **Approve alert** to allow configured screenshot analysis and report eligibility, or **Dismiss alert** to exclude it. Then review any resulting analysis with **Accept as is** or **Review & edit**.
- Mission Overwatch, online review from the Operator device, and basic checks on the device coordinate their work to reduce duplicate alerts. Basic on-device checks resume automatically when online review ends.
- After a closed mission reaches the agency account, **AI Review** looks for the items selected by the officer using **Event-focused** or **Full mission — detailed** coverage. Event-focused review checks sections of the original video around accepted events; it does not use the event screenshots as a substitute for video. Full-mission review checks the combined time covered by the selected recordings and favors the clearest or original recording when videos overlap. AlphaRelay then compares possible findings with evidence screenshots before presenting them for officer review.
- Inside AI Review, **Ask AI** answers mission-specific questions from the selected main uploaded recording and shows its confidence, supporting observations, limitations, and supporting evidence. It remains view-only after approval while the approved record remains locked against changes.

AI output is draft material. Verify every alert, finding, and answer against the live view or source media before using it in an operational decision, report, or evidence workflow.

Official event counts and evidence surfaces include every undeleted human-created event, approved automatic alerts, and officer-reviewed AI findings. Pending or dismissed automatic alerts and accepted AI Review findings without Timeline officer review remain review material only.

---

## Devices and Roles

| Role | Device | Responsibility |
| --- | --- | --- |
| Pilot | AlphaRelay Operator (Android, iPhone, or iPad) plus the flight app or supported Pilot-mode controls | Selects the current operator, starts missions, flies through the applicable flight interface, logs field events, ends mission, uploads footage |
| Controller-video operator | Android/iOS Operator device or signed-in browser plus a video link, livestream-capable controller, or HDMI-output controller | Brings controller video into AlphaRelay while the original device keeps control |
| Mission viewer | Operator on a second licensed Android or iOS device | Watches active remote live, follows timeline events and alerts, logs events, asks AI about a fresh current frame, and shares the selected person's mission-scoped location when enabled |
| Overwatch user | Browser — Mission Overwatch | Relay viewing, remote live, command-side events, review, report, seal, export |
| Reviewer / officer | Browser — Mission Overwatch | Checks timeline, footage, report draft, and custody |
| Supervisor | Browser — Mission Dashboard / Overwatch | Approves or returns after-action reports |
| Org admin | Browser — Organization Settings | Members, roles, agency scenarios, licenses, time zone, storage, and read-only Activity Log |

Organization access uses four roles. **Admin/Owner** manages the organization and every mission. **Supervisor** oversees every mission and approves or returns reports. **Officer** works on missions they created, were assigned to, or received through mission sharing. **Mission operator** is a separate designation that can be applied to any member role; it controls whether the person appears in the AlphaRelay Operator field roster and can start missions.

## Android drone controllers

On Android drone controllers, the pilot device can run **Controller Screen Capture**. The controller's native flight app handles flight control while AlphaRelay captures the controller screen, streams it to the active mission, records controller-screen footage, and logs events.

On a supported DJI controller and aircraft combination, AlphaRelay may also present **Pilot mode**. It remains locked until the operator confirms a listed aircraft and AlphaRelay verifies the live connection. Pilot mode provides direct flight and camera controls. Availability still depends on the exact aircraft, controller, installed camera or sensor, firmware, and a successful field test.

For a DJI Avata with compatible DJI Goggles, the pilot operates through the goggles and their compatible controller. A separate Android phone or tablet runs DJI Fly and AlphaRelay **Goggles Mode** to relay and record the goggles live view.

## Controller video from a separate flight controller

Use **Video Link** when the controller or camera provides an authorized video QR code or web link. Operator scans or accepts the link, and AlphaRelay brings in that video without recording the phone or tablet screen. Internet is required, and the link must open without joining a private Wi-Fi network.

Use **Controller Livestream** when a DJI controller has **Custom RTMP** or a Skydio controller has **RTSP External Server**. A licensed phone/tablet—or an authorized officer using **New Livestream** in Command Center—creates the mission and shows the exact values to copy into the controller. Internet is required.

Use **HDMI Capture Card** when the controller has an HDMI output. Connect a standard USB HDMI capture card to Android Operator, a USB-C iPad, or a laptop. The laptop path starts from **New HDMI mission** and does not need the phone/tablet app. The flight controller keeps aircraft control.

## iPhone and iPad

On iOS 26, AlphaRelay Operator can use Apple's Screen Recording, Video Link, Controller Livestream, or a USB HDMI capture card on USB-C iPad. iPhone cannot receive video from that capture card. The flight app or controller remains responsible for aircraft control.

## Secondary mission viewer

On a licensed Android device, tap **View Live Mission**. On iPhone or iPad, tap **Watch Live Mission**. The viewer shows remote video when available, refreshes the live timeline and alerts, and can log scenario quick events or manual events. When Operational Map is enabled and precise location is allowed, joining also shares the selected person's position with that mission and exposes **Nearby map** / **Map**. It cannot start missions, control aircraft, or perform closed-mission review.

## Key rules

- Most missions start from Operator. Command Center can also start **Controller Livestream** with **New Livestream** or laptop capture with **New HDMI mission**.
- The landing screen separates **Start a Mission** from **View a Live Mission**. Starting first opens **Choose video source**, then the operator, scenario, mission name, AI targets, and alert settings for that source.
- Open missions from **Mission Dashboard** (link may say **Open Mission Console**).
- Operator presents one **Start Mission** action and starts remote live automatically when validated internet is available.
- Mission Overwatch keeps **Timeline**, **Events**, **Ask AI**, an optional **Map**, and a conditional **Livestream** or **HDMI Input** tab in the right-rail **Mission sidebar**.
- **Local Network** is an Android-only same-Wi-Fi option in certain agency deployments. It is not shown in the current public Operator workflow.
- **Controller Screen Capture** starts automatically on many Android drone controllers and remains the recommended default when optional Pilot mode is available.
- **HDMI Capture Card** works with a compatible Android device, USB-C iPad, or laptop; iPhone cannot receive this USB video.
- **Controller Livestream** works from Android/iOS Operator or Command Center **New Livestream** and supports DJI RTMP plus Skydio RTSP External Server.
- **Video Link** works from Android/iOS Operator, requires internet and an authorized web link, and lets AlphaRelay's online video service handle recording and evidence capture rather than the device.
- **Pilot mode** is an optional alternative on supported DJI equipment and requires aircraft confirmation plus a successful live connection check.
- Compatible DJI Goggles can enable **Goggles Mode** automatically over USB, but the operator still taps **Start Mission** before capture begins.
- Mission Viewer requires internet and a valid Operator license; only active missions in that license's organization appear. It normally runs on a second device, but the Android device that creates a Controller Livestream also opens that mission in Mission Viewer.

## Share one mission

Authorized members of a mission team can click **Share** in Mission Overwatch. The dialog lists eligible users by name and email; click **Share** beside a person, then confirm they appear under **People with access**. Shared collaborators can review and work on that mission, including custody and official exports, without receiving organization-wide mission access or permission to start new missions. Use **Remove** to revoke the mission share.

The same **Share** dialog can create a **Public live view** for an active mission. Anyone with its QR code or link can watch the livestream and see events and alerts without signing in, but cannot log or review them. Use **End public viewing** to revoke the link; it also stops working when the mission ends. Android and iOS Operator expose the same public-live QR from an active mission or Mission Viewer.

---

## Mission Connectivity

AlphaRelay Operator presents one **Start Mission** action. When the device has working internet, it creates the mission online and automatically starts remote live video. The app labels this **Live stream (WebRTC)**; officers do not need to configure WebRTC.

## Online mission

Use the normal **Start Mission** workflow on cellular, Wi-Fi, Ethernet, or VPN internet.

- Mission details and events upload to the agency's AlphaRelay account.
- Remote live starts automatically.
- Mission Overwatch can watch live and log quick, typed, or dictated events.
- Footage may upload during closeout or remain safely on the device and continue later.

## Offline mission

If internet is unavailable, **Start Mission** still begins supported local recording and event logging. Remote live cannot start, and saved items wait on the device. When internet returns, Android footage, mission details, and events retry automatically.

## Agency-specific Local Network connection

The standard public Operator app does not show a **Local Network** mission button. Some older or agency-specific Android versions may show **Local Network** and **Live Overwatch Screen** for viewing over the same Wi-Fi. In those versions:

- The pilot and Mission Overwatch devices must share a reachable Wi-Fi network.
- **Live Overwatch Screen** connects to the pilot device using the address shown on the same Wi-Fi network.
- Remote viewing and sending saved mission information use separate internet connections inside AlphaRelay. One may continue if the other has a problem.

## Quick decision

| Situation | Workflow |
| --- | --- |
| Pilot device has internet | **Start Mission**; remote live starts automatically |
| No usable internet | **Start Mission**; save supported work on the device and send it later |
| Remote viewers need live video | Keep the pilot device online and open **Live stream (WebRTC)** in Mission Overwatch |
| A second licensed Android or iOS device needs a compact live view | Open Mission Viewer; internet is required for the mission list, timeline, alerts, events, and video |
| Flight controller supports DJI RTMP or Skydio RTSP External Server but cannot install AlphaRelay | Create **Controller Livestream** from a licensed Android/iOS device or Command Center **New Livestream**; internet is required on the setup surface and controller |
| Flight controller has HDMI output | Connect a USB HDMI capture card to Android, USB-C iPad, or a laptop; the laptop path starts with **New HDMI mission** |
| Your agency's build shows **Local Network** | Follow its same-Wi-Fi connection instructions |

**Note:** Remote live and upload use internet. An agency-specific **Local Network** option uses the same Wi-Fi and is a separate connection path.

See Connectivity for what requires internet vs local Wi‑Fi.

## Controller Screen Capture

On supported Android drone controllers, AlphaRelay enters **Controller Screen Capture** after **Start Mission**. When a compatible direct DJI connection is available, Controller Screen Capture remains the recommended choice beside optional **Pilot mode**. It lets the normal flight app keep control.

In this mode, the controller's native flight app controls the aircraft while AlphaRelay captures the controller screen, streams it to the mission, records screen footage, and logs events.

→ Controller Screen Capture

## Controller Livestream and HDMI Capture

These workflows keep aircraft control on a separate flight controller. Controller Livestream can be configured from Android/iOS Operator or **New Livestream** in the browser Command Center. HDMI can be received by Android, USB-C iPad, or directly in Mission Overwatch on a laptop. Browser HDMI begins with **New HDMI mission**.

→ Controller Livestream and HDMI Capture

## Video Link

Video Link leaves aircraft or camera control on the original device. Operator scans or accepts an authorized video QR code or web link, and AlphaRelay brings that video into the mission without recording the phone or tablet screen. This requires internet and a link AlphaRelay can open from outside the controller's private network.

→ Use a Video Link

## DJI Avata with DJI Goggles

Goggles Mode requires internet for remote viewing and sending mission information to the agency account. On a prepared Android device, a wired connection to compatible DJI Goggles turns on the mode automatically, but the operator still taps **Start Mission**. AlphaRelay then skips ordinary scenario selection and starts remote viewing from the DJI Fly goggles view.

→ DJI Avata with DJI Goggles

---

## Controller Screen Capture

Controller Screen Capture lets AlphaRelay run beside the native flight app on Android drone controllers. The controller's native flight app remains responsible for aircraft operation; AlphaRelay captures the controller screen, streams it into the mission, records mission footage, and logs events.

This is the recommended capture path. On many Android drone controllers it turns on automatically after **Start Mission**. When AlphaRelay detects a supported direct DJI connection, choose **Controller Screen Capture — Recommended** instead of **Pilot mode** when the normal DJI flight app should stay in control.

**Note:** Using a DJI Avata with compatible DJI Goggles and a separate Android phone or tablet? Follow the dedicated DJI Avata with DJI Goggles workflow instead.

## Where it is available

Controller Screen Capture is available on Android-based drone controllers that can install **AlphaRelay Operator** and grant Android screen capture permission. It is not limited to one controller manufacturer.

AlphaRelay detects known drone-controller identity strings, including DJI RC / RC Pro / RC Plus / RM / Matrice controller families, Autel smart controllers, Herelink / CubePilot controllers, and Inspired Flight GS-ONE controllers. Generic Android phones, tablets, and rugged tablets use the normal pilot workflow unless they are connected to compatible DJI Goggles or Goggles Mode is enabled manually.

When the Android device is connected to a supported DJI remote controller, the mission screen may also offer **Pilot mode**. AlphaRelay never selects it automatically. You must confirm a listed aircraft, and AlphaRelay must confirm the live connection before **Start Mission** unlocks. See Start a mission for the current aircraft list and verification steps.

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
- AlphaRelay records one continuous controller-screen video for the mission and prepares it for upload after closeout.
- Voice relay can still create timeline events when microphone permission is granted.
- **Device Live AI** uses AlphaRelay's online AI review when internet is working. Without internet, it automatically continues basic checks for people and possible weapons on the device.

## Start a mission

1. Open AlphaRelay on the supported controller.
2. Tap **Start Mission**, then choose **Controller Screen**.
3. Select the operator when an agency roster is available, choose a scenario template, enter the mission name, and optionally add mission-specific AI targets.
4. If AlphaRelay shows a choice between controller-screen capture and Pilot mode, keep **Controller Screen Capture — Recommended** selected.
5. Tap **Start Mission**.
6. Approve the Android screen capture prompt.
7. Wait for AlphaRelay to move out of the way, then return to the flight app.
8. Open or return to the controller's native flight app and fly from there.

If the controller has working internet, AlphaRelay starts remote live video automatically before it asks for screen-capture permission. The app labels this **Live stream (WebRTC)**; no WebRTC setup is required. If the controller is offline, recording still starts, and events and footage wait to upload until internet returns.

Before leaving the screen, AlphaRelay starts the Android recording process and shows a continuing notification. Recording begins after AlphaRelay is no longer the visible app, so return to the controller's flight app before takeoff or before the part of the operation you want to capture.

Use the controller's native flight app for flight operation. Use AlphaRelay for mission start, event logging, relay / remote live setup, and mission closeout.

## What to expect on the controller

- Android shows a persistent **Controller Screen Capture** notification while screen capture is running.
- The notification status may say **Starting controller screen capture**, **Waiting for AlphaRelay to close**, **Recording controller screen**, or the current mission-capture state.
- AlphaRelay captures whatever is visible on the controller screen. If you open Android settings, the notification shade, or AlphaRelay itself, that screen is part of the recording until you return to the native flight app.
- If the controller shows a screen-recording or screen-casting indicator, leave it enabled for the mission. Turning it off stops screen capture.

## During the mission

- **Live stream (WebRTC)** is the on-screen name for sending the controller screen to remote Mission Overwatch users over the internet.
- Say `relay` followed by event details to create a voice relay event. AlphaRelay saves a current controller-screen screenshot with the event when available.
- Return to Operator for the active-mission screen. It shows recording, live video, Device Live AI, Mission Overwatch AI, alerts, events or footage waiting to upload, and elapsed mission time. It also provides quick events, manually entered events with screenshots, **Sync now**, and **Stop and complete mission**.
- Use **Ask Live AI** to type or dictate a question about one fresh controller-screen frame. Review the transcript before asking and verify the saved answer against the live screen.
- Use **Update AI targets** to change mission-only watch items without restarting. Changes made without internet stay saved on the device until AlphaRelay can upload them.
- Device Live AI uses online review when available. Basic on-device checks and direct Android alerts continue without internet; timeline updates and additional online review wait for internet to return.
- If you need AlphaRelay controls during the mission, return to AlphaRelay from recent apps or the notification, make the update, then return to the native flight app. The recording follows the visible screen.

## Stop and upload

After the flight, close the mission from AlphaRelay or from the notification:

1. Land and finish any required work in the native flight app.
2. Pull down the Android notification shade.
3. Find the **Controller Screen Capture** notification.
4. Tap **Stop Mission**.
5. Let AlphaRelay reopen and finish mission closeout.

The notification action works the same way as the in-app **Stop and complete mission** button. AlphaRelay finishes the mission-long controller-screen recording, saves it for upload, closes the mission record, and removes the recording notification when capture has stopped.

On some supported DJI setups confirmed during mission setup, closeout can also offer **Reconnect controller for SD footage**. The controller-screen recording is already safe. The mission stays open while Android lets AlphaRelay—not DJI Fly—use the USB connection long enough to copy the matching aircraft video:

1. Open DJI Fly app info and tap **Force stop**.
2. Open **Open by default** and clear DJI Fly's defaults.
3. Return to AlphaRelay, unplug and reconnect the controller cable, and choose **AlphaRelay → Just once** in Android's USB prompt.
4. Keep the aircraft and controller powered on while AlphaRelay copies the aircraft video that began during this mission.

AlphaRelay saves the matching clip for upload as an optional **Aircraft original** in addition to the controller-screen evidence, then closes the mission. If copying from the aircraft's memory card fails, the mission remains open for another attempt and the controller-screen recording remains safe. Choose **Close without aircraft copy** only when you intend to finish with controller-screen footage alone. AlphaRelay will not attach a memory-card clip that began before the mission.

If you are already in AlphaRelay, tap **Stop Mission** there instead. Do not force-close AlphaRelay or stop Android screen capture as the normal closeout method.

Recordings waiting to upload remain saved on the device. Upload resumes automatically when working internet returns, including after the app restarts. Keep the controller powered on, and do not force-stop or uninstall AlphaRelay while uploads are pending.

## Limits

- AlphaRelay does not fly the aircraft in Controller Screen Capture.
- The captured footage is the controller screen, including native flight-app overlays, not a raw camera file.
- Android screen capture permission is required every time capture starts.
- The optional aircraft-video copy depends on the exact DJI controller, USB connection, aircraft, SD card, DJI Fly settings, and firmware. Test it in training; it is not available on every Controller Screen Capture setup.
- If microphone permission or speech recognition is unavailable, voice relay is disabled but screen capture can still run.
- Messages shown over the controller screen can affect Live AI. AlphaRelay's online review is told to ignore notification text and AlphaRelay removes repeated alerts, but every alert still requires officer review.

→ Start a mission · Device Live AI · iPhone and iPad · Watch in Mission Overwatch · Upload footage

---

## Use a Video Link

Use **Video Link** when a controller, camera, or video service gives you a QR code or web link for live video. AlphaRelay opens that link on its secure video service and sends the video into the mission. Your phone or tablet does not open or record the webpage.

You still get the normal Mission Viewer and Mission Overwatch video, recording, Live AI, event screenshots, evidence history, and post-mission review. AlphaRelay does not take control of the aircraft or camera.

## Requirements

- Current AlphaRelay Operator on a licensed Android device, iPhone, or iPad
- Working internet on the Operator device and a video link that can be opened without joining the controller's private Wi-Fi network
- An authorized web link that starts with `http://` or `https://` and does not include a username or password
- Camera permission only when scanning a QR code; you can paste the URL instead

**Warning:** Use only video your agency is authorized to view. Treat any private-looking video link like a password: do not place it in a report or public message, and turn it off after the mission when the video service allows that.

## Start the mission

1. In AlphaRelay Operator, tap **Start a Mission**.
2. Under **Choose video source**, select **Video Link**.
3. Tap **Scan QR** / **Scan video QR code**, or paste the complete public HTTP/HTTPS URL.
4. Complete the operator, scenario, mission name, AI-target, and alert settings.
5. Tap **Start Video Link Mission**.
6. Wait for **Backend relay prepared**. This means AlphaRelay has started opening the link. Open Mission Viewer or Mission Overwatch and confirm that the picture is moving before relying on it.

**Backend relay prepared** does not guarantee that the video itself will play. A normal webpage with a video player can take longer to start than a link that points directly to video.

## During and after the mission

- Keep the original video available and the mission active. If the link points to a short video file, AlphaRelay repeats it until the mission ends. A true live feed continues from the camera or controller.
- Use Mission Viewer or Mission Overwatch for video, events, Live Ask AI, Live AI, and screenshots. Operator shows the linked-video status, but it is not capturing the device screen.
- End the mission through Operator or Mission Overwatch. AlphaRelay stops opening the link and finishes the mission recording for normal review, reporting, evidence history, and export.

## Supported boundaries

AlphaRelay can open direct video links and many public webpages that contain video. A link can still fail if it expired, requires sign-in, asks the viewer to accept a popup, blocks playback by location, protects the video from copying, checks whether the viewer is human, uses an unsupported player, or is offline. For security, AlphaRelay rejects links that contain a username/password or point to a private home or agency network.

If a DJI controller has a **Custom RTMP** livestream setting or a Skydio controller has **RTSP External Server**, use **Controller Livestream**. If the controller has an HDMI port, use **HDMI Capture Card**. These direct connections are usually more dependable than opening a third-party webpage.

→ Start a mission · Controller Livestream and HDMI Capture · Troubleshooting

---

## Connect Controller Video

Use these options when the flight controller should keep flying the aircraft but cannot run AlphaRelay Operator, or when you want the controller's video without recording its screen.

- **Controller Livestream:** Use the controller's built-in livestream setting. DJI calls it **Custom RTMP**. Skydio calls it **RTSP External Server**. AlphaRelay shows the exact values to enter. Internet is required.
- **Laptop HDMI Capture:** Connect the controller's HDMI port to a laptop through a standard USB HDMI capture card. Start the mission from the web app; no phone or tablet app is required. Recording can continue during a short internet interruption.
- **Operator HDMI Capture:** Connect the same type of capture card to a compatible Android device or USB-C iPad. Operator records the video and can continue recording without internet. iPhone does not support this USB video input.

In every workflow, fly from the controller's native flight application. AlphaRelay does not take aircraft control.

## Controller Livestream

Controller Livestream creates a private destination for one active mission. AlphaRelay shows fields for DJI **Custom RTMP** and, when available, Skydio **RTSP External Server**. Some DJI screens use one **RTMP URL** field; others use separate **Server URL** and **Stream key** fields.

**Note:** RTMP and RTSP are simply the names DJI and Skydio use for their livestream settings. You only need to copy the values AlphaRelay displays into the matching controller fields.

### Requirements

- A licensed Android, iPhone, or iPad running AlphaRelay Operator, or an authorized signed-in browser session with the **Mission operator** designation
- Validated internet on the setup device and streaming controller
- A DJI controller or flight application that accepts custom RTMP, or a Skydio controller with RTSP External Server
- A separate flight controller; the setup device does not open or control its flight app

### Start from Operator

1. Open AlphaRelay Operator and select **Controller Livestream** as the video source.
2. Select the operator and scenario, name the mission, and review the AI targets, people-alert setting, **Controller audio in stream & recording**, and **Voice event logging**.
3. Tap **Create Controller Livestream** on Android or **Set Up Controller Livestream** on iPhone or iPad.
4. Open the separate controller's livestream settings.
5. For DJI, use **RTMP URL — one-field screens**, or enter **Server URL — two-field screens** and **Stream key — two-field screens** separately. For Skydio, open **Global Settings → Sharing → RTSP**, choose the external-server option, then enter AlphaRelay's **Server address**, **Port**, and **Stream name**.
6. Start streaming from the controller.
7. Tap **View Live Mission** on Android or **View live mission** on iPhone or iPad and wait for video. Mission Overwatch can open the same active mission.

If video disconnects, restart livestreaming on the controller with the same values while the mission is still active. Reopen **Show Livestream Setup** to see them again. DJI and Skydio each use their own six-digit mission code; copy the code shown for that brand.

### Start from Command Center

1. In the active-missions panel, click **New Livestream**. This action appears only while you are online and designated as a mission operator.
2. Enter the mission name, choose a scenario, and optionally add one visible **AI detection** per line.
3. Click **Create mission & set up livestream**.
4. In the main live-video area, copy the displayed values into DJI **Custom RTMP** or Skydio **RTSP External Server**, then start livestreaming on the controller.
5. Wait for the live feed. The setup panel closes when playback begins; open **Mission sidebar → Livestream** to show it again, or click **Refresh setup** for fresh details.

Opening AI detection settings closes the livestream setup panel so the two feed overlays do not cover each other.

**Warning:** Treat the displayed livestream address and six-digit code like a password. Enter them only on the intended controller. Do not place them in reports, screenshots, or public messages.

AlphaRelay can continue Live AI on the incoming controller video even if the phone that created the mission leaves the viewer screen. A viewing phone or tablet can still show alerts, ask about the current picture, and save events with a screenshot. AlphaRelay reduces duplicate alerts when more than one device is watching.

Use the active Operator or Mission Viewer settings to change **Controller audio** and **Voice event logging** for the mission. Controller audio affects the live stream and new recording segments. Voice event logging listens for `Relay` followed by the event and transcribes only the triggered utterance. A viewing Android device can use its own microphone for this even when the incoming controller stream has no audio track.

When field work is complete, stop the controller's livestream first. Then close the mission in Mission Overwatch or Operator. AlphaRelay finishes the received recording and adds it to the mission record.

## Laptop HDMI Capture

Use this physical path:

```text
Controller HDMI out -> capture card HDMI in -> capture card USB -> laptop
```

1. In **Mission Dashboard**, click **New HDMI mission**.
2. Name the mission, optionally select a scenario, and click **Create mission & set up HDMI**.
3. In Mission Overwatch, open **Mission sidebar → HDMI Input**.
4. Grant browser camera permission and select the capture card.
5. Click **Connect & go live**. AlphaRelay starts the recoverable local evidence recording and remote live together.
6. Confirm the same full frame appears in the preview and supplies Live AI and event screenshots.
7. Keep the Mission Overwatch tab open. Before ending the mission, click **Stop & upload** and wait for the recording to be secured.

Laptop HDMI is video-only. AlphaRelay saves the recording in a standard browser-supported video format. If the tab or browser closes unexpectedly, reopen the same mission and use **Recover interrupted recording**. Do not clear browser data first. A laptop's own HDMI port normally sends video out; it does not receive controller video. You need a physical USB HDMI capture card.

## Operator HDMI Capture

Use one of these paths:

- Controller HDMI out → USB HDMI capture card → compatible Android device
- Controller HDMI out → USB HDMI capture card → USB-C iPad

A powered USB hub may be necessary when the card draws more power than the device can provide.

### Android

1. Connect the powered controller, card, and Android device before mission setup.
2. Open Operator, select the operator and scenario, and review the mission settings.
3. Select **HDMI Capture Card**. Operator may select it automatically when it detects the USB video card.
4. Tap **Start Mission** and grant the Android camera and USB-device prompts.
5. Confirm the preview changes from **Waiting for signal** to **Capturing** before flight.

### USB-C iPad

1. Connect the powered controller and USB HDMI capture card to the iPad.
2. In mission setup, choose **HDMI Capture Card** and tap **Start HDMI Capture Mission**.
3. Grant camera permission and confirm the full-frame preview before flight.
4. If the card disconnects, reconnect it and tap **Connect or retry HDMI input**. AlphaRelay saves the earlier section and begins a new one.

Operator HDMI follows the normal recording, remote viewing, Device Live AI, event screenshot, upload, review, and evidence workflow. It is video-only. Voice events use the Android device or iPad microphone; AlphaRelay does not record audio carried through the capture card.

## Before operational use

Test the exact controller, capture card, cable or hub, receiving device, and browser during training. Confirm a stable full-width picture, a usable recording, and recovery after unplugging and reconnecting once. For Controller Livestream, confirm that the DJI or Skydio controller can reconnect with the same displayed values.

→ Start a mission · Use Operator on iPhone or iPad · Watch in Mission Overwatch · Upload footage · Troubleshooting

---

## Use AlphaRelay Operator on iPhone or iPad

**AlphaRelay Operator** on iPhone and iPad can record the visible flight-app screen with Apple's Screen Recording feature, open an authorized Video Link, receive a DJI or Skydio controller livestream, or—on USB-C iPad—receive HDMI through a standard USB capture card. Your flight app or controller keeps aircraft control.

## Requirements

- iPhone or iPad running iOS 26
- AlphaRelay Operator installed through TestFlight
- An Operator device license or one-installation pairing code
- Screen Recording permission; microphone and speech-recognition permission only when voice events are needed
- Internet for remote viewing, immediate upload to the agency account, online Live AI, Mission Viewer, live map updates, and footage upload. Saved events, footage, and valid location points can be sent later if internet is lost.
- Precise foreground/background location permission when the organization uses mission personnel mapping

## Install the app

1. Install Apple's [**TestFlight**](https://apps.apple.com/us/app/testflight/id899247664) app from the App Store.
2. Open the [**AlphaRelay Operator TestFlight invitation**](https://testflight.apple.com/join/AdxfvTca).

## Activate the device

1. Open **AlphaRelay Operator**.
2. Scan the organization license QR code, enter the 8-character pairing code, or enter the full `ar-…` license key.
3. Select the operator when the organization roster contains more than one operator.

The license is stored on the device. Operator does not use the web-app email and password for device activation.

Select who is using the device before starting or viewing a mission. That selection supplies mission attribution and, when Operational Map is enabled, the advisory identity shown for this device's shared location.

## Choose the video source

From **What do you want to do?**, tap **Start a Mission**, then choose **Controller Screen**, **Video Link**, **Controller Livestream**, or, on supported iPads, **HDMI Capture Card**. The HDMI option is marked **IPAD ONLY** because iPhone cannot receive this USB video. Use **Watch Live Mission** from the landing screen to join a mission that is already active.

## Start a Video Link mission

1. Choose **Video Link**, then scan the source's public video QR code or paste its complete HTTP/HTTPS URL.
2. Complete mission setup and tap **Start Video Link Mission**.
3. Wait for **Backend relay prepared**, then open Mission Viewer or Mission Overwatch and confirm video arrives.

Video Link requires internet. It does not record the iPhone/iPad screen or open the webpage on the device. AlphaRelay's online video service handles the live picture, recording, Live AI, screenshots, and evidence history. See Use a Video Link for supported boundaries.

## Start Controller Screen capture

1. Open **AlphaRelay Operator** and choose a built-in or agency scenario, or **No scenario**.
2. Confirm the operator, enter the mission name, optionally add up to eight **Mission-specific AI targets**, and choose whether **Alert on people** should include routine person alerts. Other enabled detections and mission-specific targets remain active when it is off.
3. Tap **Start Mission**.
4. In Apple's Screen Recording picker, choose **AlphaRelay Capture**. Turn on the microphone only when the recording needs microphone audio, then start recording.
5. Open the flight app. Keep the iOS screen-recording indicator active while AlphaRelay captures in the background.

When internet is available, Operator sends the captured screen to Mission Overwatch and Mission Viewer. The app calls this **Live stream (WebRTC)**; you do not need to configure WebRTC. The active-mission screen shows capture, live video, AI, alerts, saved items waiting to upload, and mission time. If capture stops, return to Operator and tap **Choose display and start capture**.

## Start Controller Livestream

1. Choose **Controller Livestream**, complete mission setup, and tap **Set Up Controller Livestream**.
2. For DJI, open **Custom RTMP** and copy either the single **RTMP URL** or the separate **Server URL** and **Stream key** shown by AlphaRelay. For Skydio, open **RTSP External Server** and copy **Server address**, **Port**, and **Stream name**.
3. Start livestreaming on the controller, then tap **View live mission** and confirm video arrives.

Internet is required on both devices. Stop livestreaming on the controller before closing the mission so AlphaRelay can finish the recording.

## Start HDMI Capture on iPad

1. Connect the controller's HDMI output to the USB-C iPad through a standard USB HDMI capture card.
2. Choose **HDMI Capture Card**, complete setup, and tap **Start HDMI Capture Mission**.
3. Grant camera permission and verify the full video frame before flight.
4. After a disconnect, reconnect the card and tap **Connect or retry HDMI input**. Operator saves the earlier section and begins another.

This path is video-only. Voice events use the iPad microphone. AlphaRelay does not record audio carried through the HDMI capture card.

## Log and update the mission

- Use scenario quick events or **Log event with current frame**. Operator attaches a fresh controller-screen image when capture can provide one.
- Leave **Voice events** enabled to say `Relay` followed by the note. Operator saves the note with the latest captured frame.
- Use **Update AI targets** to change mission-only watch items without restarting the mission. Changes made without internet stay saved on the device until AlphaRelay can upload them.
- Use **Ask Live AI** to type or dictate a question about one fresh current capture frame. Review the transcript before submitting, then verify the saved answer against the live video. Saved answers are shared with Mission Viewer and Mission Overwatch.
- **Live Alerts** shows whether the mission can use the iPhone's Dynamic Island or must use regular notifications. When Live Activities are available, alerts appear as a short line on the Lock Screen or Dynamic Island, including while the flight app is sideways, then return to **ALPHARELAY MONITORING**. Urgent possible-weapon alerts are red; informational people alerts are yellow.
- During Controller Screen capture, Operator uses **Screen Sharing** notifications when the Dynamic Island is unavailable. Allow time-sensitive notifications so alerts can appear over the flight app. For HDMI capture, the Operator app can show the alerts itself.
- Alert presentations are review prompts, not confirmed findings. The mission timeline remains the durable review surface after the brief on-screen alert clears.

With working internet, AlphaRelay analyzes selected live pictures through its online service. If that service or the connection is unavailable, Operator automatically uses the device for basic people and possible-weapon checks. Every alert still requires human review.

## Complete the mission

1. Return to AlphaRelay Operator.
2. Tap **Sync now** when pending items remain and connectivity is available.
3. Tap **Stop and complete mission**.
4. Keep Operator open while it finishes the selected recording and sends saved events and footage.

Operator records a digital fingerprint for each completed local video and uploads it through the normal evidence process. If Apple's Screen Recording finishes the video but the handoff is interrupted, Operator can recover it the next time it processes saved items.

## Watch another active mission

From mission setup, tap **Watch Live Mission**. Choose an active mission in the same licensed organization to watch remote video, follow its live timeline and alerts, add quick or manual events, and use **Ask AI** on a fresh received frame. When Operational Map is enabled, joining starts mission-scoped location sharing for the selected person and the viewer's **Map** panel shows pilot and officer positions. Mission Viewer cannot start the mission or control the aircraft; event entry becomes read-only after the mission closes.

Use **Share live** to show or share a read-only public QR/link. Anyone with the link can watch the active livestream and see events and alerts without signing in, but cannot log or review them. The link stops working when the mission ends.

## Share location without joining

Tap **Share Location**, choose a live mission, and confirm the selected person. AlphaRelay requests precise foreground and background location and can share for up to 12 hours; tap **Stop Sharing** sooner when the person leaves the operation. Mission starts also begin sharing automatically for the selected pilot when the feature and permissions are available.

## iOS boundaries

- Operator captures the selected iOS display or app; it does not control the aircraft.
- USB-C iPad supports a USB HDMI capture card; iPhone does not. On iPhone, use Video Link or the controller's built-in livestream setting.
- iPhone/iPad does not use Android's automatic wired DJI Goggles detection or Android-only same-Wi-Fi relay.
- Without internet, iPhone and iPad continue simpler on-device checks than Android.
- Dynamic Island, Live Activities, the timing of regular notifications, and alert placement in the sideways flight-app view vary by iPhone model and iOS settings. Test them on the actual flight device before operational use.
- Apple's Screen Recording must be tested on the physical iPhone or iPad; a computer simulation does not prove field capture.
- Personnel-map positions are advisory and reflect the person selected on the licensed device. They do not independently verify who carries the device and do not show the aircraft's location.

→ Controller Screen Capture on Android · View a live mission · Share personnel location · Device Live AI · Upload footage

---

## DJI Avata with DJI Goggles

Use **Goggles Mode** to run an AlphaRelay mission with a DJI Avata, compatible DJI Goggles, and a compatible controller. The goggles and controller remain responsible for the aircraft. A separate Android phone or tablet receives the goggles live view in DJI Fly, and AlphaRelay captures that DJI Fly screen for remote live viewing, event screenshots, and mission footage.

**Note:** This workflow differs from Controller Screen Capture on an Android drone controller. The DJI Avata workflow uses DJI Fly on a separate Android device instead of a native flight app on an Android drone controller.

## What you need

- A DJI Avata, compatible DJI Goggles, and a compatible motion or FPV remote controller, powered on, activated, updated, and linked
- An Android phone or tablet with both **DJI Fly** and **AlphaRelay Operator** installed
- An active AlphaRelay device license
- Android screen capture permission
- Internet on the Android device to send mission information to the agency account, provide remote viewing, and upload footage
- For the automatic wired workflow: a compatible USB cable that carries data, not a charge-only cable

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
2. Connect the goggles to the Android device using the compatible USB data cable for your hardware.
3. Open **DJI Fly** on the Android device.
4. Tap **GO FLY** and confirm that the goggles live view appears on the Android screen.

AlphaRelay can identify compatible DJI Goggles over the wired USB connection and turn on Goggles Mode automatically. It still waits for you to start the mission from the Operator landing screen.

### Wireless

1. In the DJI Goggles, start wireless live-view sharing using the option provided by your goggles model.
2. On the Android device, turn on Wi-Fi, Bluetooth, and Location.
3. Open DJI Fly, select the goggles from the connection prompt, and tap **Watch Liveview**.
4. The first time you connect, follow the DJI Fly prompt to confirm the goggles connection.

Wireless sharing uses the Android device's Wi-Fi connection. Keep cellular data available for AlphaRelay remote viewing and for sending mission information and footage to the agency account.

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

- Starts an online mission with no scenario template
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
6. Keep the Android device powered on while footage is waiting to upload. Upload resumes automatically when working internet returns.

The notification uses the shared capture-service name **Controller Screen Capture**, even during a DJI Avata Goggles Mode mission.

When you stop the mission, AlphaRelay creates an MP4 video from the DJI Fly view it captured and saves that footage for upload. It does not copy video from the DJI Avata's internal storage or microSD card.

## Limits

- This workflow records the DJI Fly screen, including overlays, not the original aircraft camera file.
- Goggles Mode creates an online mission; Operator does not offer **Local Network** mission mode in this workflow.
- Remote viewing and sending mission information or footage to the agency account require usable internet on the Android device.
- Android screen capture permission is required each time capture starts.
- If DJI Fly is not installed, AlphaRelay cannot open it automatically.
- If you need the original aircraft recording, copy it from the DJI Avata after the flight. In the closed mission, open **Media → Mission footage**, choose **Aircraft original**, and use **Add optional recording**. MP4 and MOV are supported.
- AlphaRelay's DJI Fly capture remains the mission timeline. Use **Align with AlphaRelay capture…** to match the optional aircraft recording at a recognizable shared moment; the two recordings do not need to start together.

→ Watch in Mission Overwatch · End a mission · Upload footage

---

## First Training Mission

Run a short test mission to learn the workflow end to end.

## Steps

1. Open AlphaRelay Operator, tap **Start a Mission**, and choose how AlphaRelay will receive video. To train on the browser setup path instead, use Command Center **New Livestream** or **New HDMI mission**.
2. Select the test operator when an agency roster is available, pick a scenario template or **No scenario template**, enter `Training mission` as the mission name, and add one harmless mission-specific AI target if testing Live AI.
3. Start the selected video option and confirm it works: approve screen capture, confirm **Capturing** for HDMI, or create **Controller Livestream**, copy the displayed values into DJI **Custom RTMP** or Skydio **RTSP External Server**, and start livestreaming on the controller. Confirm remote live when internet is available.
4. Open the mission from Mission Dashboard and select **Live stream (WebRTC)**.
5. If the team will use Mission Viewer, open Operator on the second licensed Android or iOS device, choose the active mission, and confirm video, timeline, and alert updates. Ask one harmless typed or dictated question about a fresh frame and verify the answer appears in shared mission history. When Operational Map is enabled, verify the selected person's location starts sharing and appears under **Nearby map** / **Map**.
6. Add one event from Operator (quick event, manual event with current frame, or voice: `relay `).
7. Open **Mission sidebar → Events** and add one event. Try **Dictate**, review the transcript, then click **Log Manual Event**.
8. Open **Mission sidebar → Ask AI**, ask a harmless question about the current frame, and verify the saved answer against the live feed.
9. Open **Share** or the mobile QR control, scan the **Public live view** code in a signed-out browser, and confirm it can only watch video, events, and alerts. Revoke the link with **End public viewing**.
10. If Device Live AI will be used, confirm it is enabled and perform a safe person-detection check with internet. Then turn off internet in a controlled test and confirm the device continues basic checks. Confirm the informational yellow alert. Do not simulate a weapon alert with a real weapon.
11. Run a short, safe exercise.
12. Complete normal closeout for the selected option. For Video Link, verify the AlphaRelay recording appears in **Media**. For Controller Livestream, stop livestreaming on the controller first. For HDMI, verify the last needed picture arrived. If supported DJI equipment offers an aircraft-video copy, practice reconnecting USB without risking operational footage. Then use the close action shown by the app.
13. Confirm footage uploaded or is safely waiting to upload (see the upload message). If location sharing was enabled, confirm the saved route finished processing and the post-mission map appears only when the device recorded valid locations.
14. Review the Timeline. Use **Needs Review**, **Dismissed**, and **All Events**. For each test Device Live AI or AI live-watch alert, practice **Approve alert**, **Dismiss alert**, and recovery to pending where appropriate. Review any available image analysis with **Accept as is** or **Review & edit**, then click **Done — continue**.
15. Under **Media**, open **Play with Events**, confirm markers appear, and click **Done — continue** after checking footage and photos.
16. If AI Review is configured, confirm the status distinguishes original-video review from evidence-screenshot verification, expand any related-sighting group, accept one safe test finding, reject the rest, and click **Done — continue**. Return to Timeline if the accepted finding reopens it for officer review.
17. Generate the after-action report and walk through seal / approval / export if your workflow uses them.

## Debrief

- Did the mission and remote live start as expected for the available connectivity?
- Did events appear on the timeline?
- Did Mission Viewer show the active mission and stop event logging after close?
- Did mission location sharing identify the correct person, show a live position, and save the completed route after stop?
- Did the public live QR work without sign-in, remain read-only, and stop working after revocation?
- On Android, did a viewer event attach the complete live frame and show its screenshot in the timeline?
- Did Device Live AI avoid repeated alerts for one continuously visible test subject?
- Did online AI review stop cleanly when internet was removed, did basic checks continue on the device, and did online review later resume without duplicate alerts?
- Did scenario-specific targets appear, and could you save one harmless mission-specific target?
- Was footage available or safely waiting to upload as expected?
- Did Controller Screen Capture produce one continuous playable mission recording?
- Did Video Link, Controller Livestream, or HDMI Capture, when tested, preserve the full picture, recover from a controlled disconnect, and produce playable footage?
- Did Controller Livestream Live AI continue after the setup phone left the viewer screen?
- On supported DJI equipment, did the optional aircraft-video copy select only mission-time SD footage and preserve the controller-screen recording if copying failed?
- Were any AI-derived timeline findings reviewed before report generation?
- Did unresolved AI candidates move to **Dismissed** rather than disappear when Timeline review completed?
- Did AI Review report actual video coverage separately from evidence screenshots checked?
- Was the report understandable before submission?

Repeat this exercise when devices, networks, or aircraft change.

---

## Before You Go to the Field

## Checklist

1. Charge the pilot tablet, phone, or drone controller and confirm aircraft/controller are ready.
2. Install or update **AlphaRelay Operator**. Download the Android APK from [alpha-relay.com/download.html](https://www.alpha-relay.com/download.html); install the iOS app through the organization TestFlight invitation.
3. Confirm the **device license** is active (scan QR, enter an `ar-…` key, or use a non-expiring one-installation pairing code).
4. Sign in to the web app with the correct operator account. On shared Operator devices, refresh online and confirm the current pilot appears in the operator selector.
5. Open **Mission Overwatch** once while online in each browser the team will use in the field. This saves the basic page so it can reopen during a connection problem; current mission information still needs internet.
6. Run a test **Start Mission** flow and confirm remote live starts automatically when the pilot device is online.
7. Confirm the Mission Overwatch browser can use its microphone if the team plans to use **Dictate** for manual events or Live Ask AI questions.
8. If a second Android or iOS device will use Mission Viewer, activate its own license and test that it can see an active mission, remote video, timeline events, and alerts.
9. If Operational Map will be used, select the correct person on every sharing device, allow precise location and background location when asked, test **Share Location** or Mission Viewer automatic sharing, and confirm the mission **Map** shows the correct person. Verify that the route finishes saving after stop.
10. If Device Live AI will be used, allow notifications, confirm the intended Android settings under **Pilot console → Flight → Local AI**, review the alert choices in Mission Overwatch, and safely test both online AI review and basic on-device checks. Keep safety-related alerts enabled when your operating plan requires them.
11. For Android drone controllers: install AlphaRelay Operator, activate the device license, run a test **Controller Screen Capture** mission, and confirm Android screen capture permission works. If the crew will use **Pilot mode**, also confirm the aircraft appears in the supported list and passes AlphaRelay's live connection check.
12. For **Video Link**, test the exact authorized QR code or web link, confirm video reaches Mission Viewer, and verify that closeout produces a playable recording. Keep the link available to paste if camera scanning fails.
13. For **Controller Livestream**, test the intended Operator or Command Center **New Livestream** setup path. Confirm the controller accepts the displayed DJI RTMP or Skydio RTSP External Server values, can reconnect, and produces playable closeout footage. RTMP stream keys and RTSP stream names are separate six-digit values.
14. For **HDMI Capture Card**, test the exact controller, USB HDMI capture card, cable or powered hub, Android device, USB-C iPad, or laptop. Verify the full picture, a sustained recording, and recovery after unplugging and reconnecting once.
15. For laptop HDMI, test **New HDMI mission**, **Mission sidebar → HDMI Input**, browser camera permission, **Connect & go live**, **Stop & upload**, and **Recover interrupted recording**. Do not clear browser data before recovery.
16. For iPhone or iPad: confirm iOS 26 and test Screen Recording, Video Link, Controller Livestream, or iPad HDMI as applicable. Allow microphone or speech access if needed. Allow Live Activities or **Screen Sharing** notifications, and verify alerts in the sideways flight-app view and completed recordings on the actual device.
17. For a DJI Avata with compatible DJI Goggles: install DJI Fly and AlphaRelay Operator on the Android device, test the supported goggles live-view connection, and confirm remote live and post-mission upload.
18. Check the Operator startup screen for older video waiting to upload and let it finish, or consciously choose **Skip for now and start new mission**.
19. Plan for internet when you need remote viewing, Video Link, Controller Livestream, Mission Viewer, live map updates, online Live AI, uploads to the agency account, reports, or exports.
20. If the mission uses an agency scenario, confirm it appears in mission setup and that its visible AI watch targets and Quick Events are current.
21. Assign pilot, overwatch user, reviewer, and supervisor roles.

## Connection quick reference

| Need | Requirement |
| --- | --- |
| Remote live (**Live stream (WebRTC)** in the app) | Pilot device has working internet; live starts automatically with the mission |
| Send saved work, upload footage, or create reports | Internet on the active device |
| Field work with no internet | Supported; AlphaRelay saves supported work on the device and sends it later |
| Agency-specific same-Wi-Fi relay | Pilot device and Mission Overwatch are on the same reachable Wi-Fi |

**Warning:** The current public Operator workflow does not show a **Local Network** mission button. If your agency's Android build includes it, both devices must be on the same Wi-Fi. It remains separate from internet upload.

Pilots can hide on-screen drone controls and use the physical controller while keeping quick events and relay status visible. See Minimum requirements for device specs.

---

## Start a Mission

Most live missions start from **AlphaRelay Operator**. Authorized mission operators can also start **Controller Livestream** with **New Livestream** or laptop capture with **New HDMI mission** in the Mission Dashboard, then continue in Mission Overwatch.

## Steps

1. Open AlphaRelay Operator on the Android device, iPhone, or iPad.
2. From **What do you want to do?**, tap **Start a Mission**.
3. Under **Choose video source**, select **Controller Screen**, **Video Link**, **Controller Livestream**, or **HDMI Capture Card** when supported. Supported DJI controller and aircraft combinations can continue into Pilot mode from the controller-screen path.
4. Select the operating person when the agency roster is available.
5. Select a scenario category and template, or **No scenario template**.
6. Enter the mission name your team will recognize and optionally add up to eight **Mission-specific AI targets**, one visible item per line.
7. Leave **Alert on people** on for informational person alerts, or turn it off to suppress that routine category. Other enabled detections and mission-specific targets remain active.
8. Tap the matching start or setup action and complete the license check if prompted.
9. Approve Android screen capture, choose **AlphaRelay Capture** from the iPhone/iPad Screen Recording picker, scan or paste the authorized link for **Video Link**, copy the displayed livestream values into the DJI or Skydio controller, or connect the HDMI capture card.
10. Open the native flight app when using screen capture. Use quick, manual, or `Relay` voice events and stop the mission when finished.

Operator prevents a new start while another mission or unfinished recording is active. Use the startup recovery action to complete the existing mission normally; do not discard it to force a new start.

When an online license refresh provides an agency operator roster, AlphaRelay requires a member with the separate **Mission operator** designation to be selected before start and records that person with the mission and field-created events. An officer, supervisor, admin, or owner can be designated as a mission operator. If the roster is unavailable, the app warns the crew and can continue without identified-operator attribution; reconnect and refresh before operational use when attribution is required.

Built-in and agency-created scenarios can list specific items for AI to watch for. AlphaRelay adds those visible items to the mission for live alerts and post-mission AI Review. Officers can add mission-only items during setup and update them during the mission without restarting. Changes made without internet remain saved on the device until AlphaRelay can upload them. Organization admins manage agency scenarios under **Organization Settings → Settings → Mission scenarios**.

Agency scenarios can also provide up to seven Quick Events. If an agency scenario has no custom Quick Events, Operator and Mission Overwatch use the standard event buttons.

When the device has working internet, Operator starts remote live video automatically. The on-screen label is **Live stream (WebRTC)**; WebRTC is only the underlying video technology. If the device is offline, screen and HDMI capture can still save work for later upload. **Video Link** and **Controller Livestream** require internet. On Android, use **Pilot console → Mission → Start remote live** if internet returns during a locally recorded mission.

When Operational Map is enabled, Operator also starts location sharing for the selected pilot after the device has precise location access. The active mission shows whether sharing is working and lets you grant missing permission. The position is advisory, comes from the licensed device, and is not the aircraft's location.

When AlphaRelay detects a supported DJI Matrice aircraft or controller, Android Operator may show additional camera controls for wide, zoom, or thermal views; preset zoom levels; the laser rangefinder; linked zoom; enhanced thermal detail; or the laser fill light. Test every needed control with the actual aircraft, camera, controller, and installed DJI software before operational use.

On integrated Android drone controllers, Operator shows a simplified centered startup and goes directly from **Start Mission** to Controller Screen setup. Mission name appears above scenario in both orientations. Approve the Android screen capture prompt, then operate the aircraft in the controller's native flight app. AlphaRelay records and streams the controller screen instead of taking over flight controls. Standard Android phones and tablets keep the video-source picker and Mission Viewer option.

If Android detects a USB HDMI capture card, Operator adds **HDMI Capture Card** and may select it automatically. Grant the camera and USB prompts, then confirm the preview says **Capturing** before flight. This records the controller's HDMI picture without recording the Android screen.

On iPhone and iPad, choose **Controller Screen**, **Video Link**, **Controller Livestream**, or—on USB-C iPad—**HDMI Capture Card**. For screen capture, choose **AlphaRelay Capture** in Apple's Screen Recording picker. See the iOS Operator guide.

When AlphaRelay detects a supported DJI controller connection—for example, an RC-N-series remote connected to the Android device—the mission screen presents two choices:

- **Controller Screen Capture — Recommended** keeps the flight app in control while AlphaRelay captures the visible controller screen.
- **Pilot mode** gives AlphaRelay a direct connection to supported DJI aircraft controls. It stays locked until you confirm a listed aircraft and AlphaRelay verifies the live connection.

For a DJI Avata with compatible DJI Goggles, first show the goggles live view in DJI Fly on the Android device. Compatible hardware can enable Goggles Mode automatically, but AlphaRelay waits for you to tap **Start Mission**. It then skips ordinary scenario selection, starts a mission with no scenario and remote live, requests screen capture, and returns to DJI Fly.

For a separate controller, use **Controller Livestream** on a licensed Android device, iPhone, or iPad, or click **New Livestream** in Command Center. For DJI, copy the values into **Custom RTMP**. For Skydio, copy them into **RTSP External Server**. AlphaRelay shows the exact field names, and the setup panel closes when video starts.

For laptop HDMI, click **New HDMI mission** in Mission Dashboard, add any mission-specific **AI detections**, then open **Mission sidebar → HDMI Input**. **Connect & go live** starts remote live and recoverable local evidence recording together. Use **Stop & upload** before **End Mission**. Follow Controller Livestream and HDMI Capture.

## Remote live

- Works over validated cellular, Wi-Fi, Ethernet, or VPN internet on the pilot device
- Starts automatically with the mission when internet is available
- Lets Mission Overwatch users watch and log events without being on the same Wi-Fi as the pilot device
- Can be started or retried from **Pilot console → Mission** if automatic setup is skipped or fails

The **Local Network** mission button is not shown in the current public Operator workflow. See Mission connectivity if your agency's Android build still includes same-Wi-Fi viewing.

## Choose Controller Screen Capture or Pilot mode

Use **Controller Screen Capture — Recommended** when the normal DJI flight app should keep flight and camera control, when the aircraft is not in the Pilot mode list, or when AlphaRelay cannot confirm the connection. AlphaRelay records one continuous controller-screen video and prepares it for upload after **Stop Mission**.

To use **Pilot mode** on an eligible setup:

1. Select **Pilot mode**.
2. Open **See all 12 compatible drones with photos** and check the aircraft family.
3. Tap **My drone is listed — Use Pilot**.
4. Keep the aircraft and controller powered on and connected while AlphaRelay checks the live DJI flight-controller connection.
5. Wait for **Supported aircraft confirmed. Pilot mode is ready.** before tapping **Start Mission**.

In Pilot mode, use the persisted **High quality (4K)** switch when the mission needs that aircraft recording profile; otherwise AlphaRelay applies the 1080p profile when supported. AlphaRelay starts or recovers aircraft SD recording after it detects takeoff, stops Live AI after landing, and can automatically close a confirmed airborne mission after touchdown while the longer aircraft-footage transfer continues. Keep the aircraft, controller, and Operator powered until the transfer is secured. Some aircraft require physical-controller takeoff even in Pilot mode; AlphaRelay detects the airborne state and continues the mission.

The current Pilot mode list includes:

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

If the aircraft is not listed or the live connection check fails, keep **Controller Screen Capture** selected and fly from the normal DJI flight app. A model appearing in the list does not replace a successful connection check and a training test with the same controller, aircraft, camera, and firmware.

## DJI Avata with DJI Goggles

- Runs on a separate Android phone or tablet with DJI Fly
- Uses the DJI Fly goggles live view as the live and recorded source
- Starts the mission and remote live automatically with no scenario template
- Uses compatible DJI Goggles and their paired controller for aircraft operation
- Finishes the captured DJI Fly video and saves it for upload after **Stop Mission**

## After start

- The mission appears in **Mission Dashboard** after AlphaRelay sends its saved information to the agency account.
- Footage and events may upload during or after the mission depending on connectivity.
- Use the active-mission **Alert on people** control to change routine person alerts without restarting. In Mission Overwatch, each standard detection can be enabled or disabled separately; enabled weapon-related alerts receive the highest presentation priority.
- Use **Ask Live AI** in Android/iOS Operator or **Ask AI** in Mission Viewer to ask a typed or dictated question about one fresh current frame. Saved answers are shared with Mission Overwatch; verify each answer against the live video.
- Tap **Stop and complete mission** or **Stop Mission** in Operator (or **End Mission** in Mission Overwatch) when field work is done.
- If location sharing is enabled, confirm the person's saved route finishes processing before sealing the evidence record.

→ Watch in Mission Overwatch · Android Controller Screen Capture · Video Link · Controller Livestream and HDMI Capture · iPhone and iPad · DJI Avata with DJI Goggles · Connectivity

---

## View a Live Mission on Android or iOS

Use **View Live Mission** on Android or **Watch Live Mission** on iPhone and iPad when a team member needs a compact active-mission view without opening the browser workspace. Mission Viewer can watch remote video, follow the live timeline and AI alerts, log events, ask AI about a fresh current frame, open the mission map, and create a read-only public live QR. It does not start the mission or control the aircraft.

## Requirements

- **AlphaRelay Operator** installed and activated on the viewing device
- A valid device license for the same organization as the mission; normally this is a separate device, while the Android device that created a Controller Livestream can view that mission itself
- Internet on the viewing device
- An active mission whose saved information has reached the agency account; remote viewing must be running for video
- A selected device person and precise location permission when Operational Map is enabled

## Open Mission Viewer

1. Open AlphaRelay Operator on the viewing device.
2. On Android, tap **View Live Mission**. On iOS, tap **Watch Live Mission**.
3. Choose an active mission. Use **Refresh** if the mission started after the list opened.
4. Watch the live video and timeline. Timeline events can continue updating while video connects or retries.
5. Use a scenario quick-event button or enter a manual event, then tap **Log event**.
6. Open **Ask AI**, type or dictate a question, review it, and submit it after a current live frame is available. Verify the saved answer against the video.
7. Open **Nearby map** / **Map** to see mission-scoped pilot and officer positions when available.
8. Use **Share live** or the QR control to show a read-only public live-view link.
9. Use **Switch mission** to choose another active mission.

On Android, Mission Viewer waits for one complete picture from the live video. It attaches that full, uncropped picture to quick events, manually entered events, and events created with the `Relay` voice command. If the picture is not ready, wait for video and try the event again. The screenshot becomes part of the mission record, appears as a small image in the timeline, and may be reviewed by AI if the agency enabled that option. Review every AI description before using it in a report.

New AI alerts appear as highlighted banners and remain in the timeline. Person detections use informational/yellow treatment; possible weapons and other threat indicators use red review treatment. Treat every alert as a prompt for human review, not a confirmed finding.

When Operational Map is enabled, selecting a mission starts location sharing for the person selected on the viewing device. The map labels that device as a **Remote viewer**. Tap **Stop Sharing** in Operator when the viewer leaves the operation. Ending the mission or choosing another mission also updates sharing. Treat every position as advisory: it does not independently verify who carries the device and it is not the aircraft's location.

The public live QR opens a browser view without requiring AlphaRelay sign-in. Anyone with the link can watch the active video and see events and alerts, but cannot log or review them. Share it only with intended viewers.

Live Ask AI captures a fresh received frame after you submit the question and saves the answer into the same mission history used by Mission Overwatch and the active Operator screen. Dictation fills the question; review the transcript before submitting. The answer covers only that frame and does not follow later scene changes.

For Controller Livestream missions, Mission Viewer settings can update **Controller audio** for new stream/recording segments and **Voice event logging** for `Relay` utterances. On an Android viewing device, voice-event logging can use that device's microphone even when the incoming stream has no audio track.

## When the mission ends

Mission Viewer marks the timeline read-only and disables event entry after the mission closes. Use Mission Overwatch for closed-mission media review, AI Review, reporting, sealing, and export.

## Limits

- Mission Viewer requires internet; it has no offline active-mission list.
- Only active missions in the licensed organization appear.
- A mission can provide timeline updates even when remote video is unavailable.
- Android viewer events cannot attach current-frame evidence until a complete live frame has arrived.
- Mission Viewer does not expose aircraft controls or closed-mission review tools.
- Live Ask AI needs internet, AI configuration, and a complete current frame. Dictation also needs microphone and speech-recognition permission.
- Anyone who receives a public live link can view the active read-only mission without signing in until an authorized user turns it off or the mission ends. Treat the link like a password.

→ Use AlphaRelay Operator on iPhone or iPad · Share personnel location · Watch in Mission Overwatch · Log events

---

## Share Personnel Location

When Operational Map is enabled for your organization, AlphaRelay can show the mission pilot, remote viewers, and other selected personnel on the mission map. These positions come from licensed Android or iOS devices. They do not identify a person by face, fingerprint, or other physical trait, and they do not show the aircraft's location.

**Warning:** Treat every map position as advisory. The displayed identity is the person selected on the licensed device, not an independently verified identity. Confirm identity and location through normal operational channels.

## Before sharing

- Select the person using the Operator device.
- Allow **Precise Location**. Allow background location when the operating system requests it so sharing can continue while the flight app is in front.
- Keep internet available for live map updates. AlphaRelay can hold eligible points securely during a temporary interruption and retry when connectivity returns.
- Confirm the live mission that should receive the location.

## Start and stop sharing

Location sharing starts automatically for the selected pilot when that device starts a mission. It also starts for the selected person when a licensed Android or iOS device joins through **View Live Mission**.

To share without opening Mission Viewer, tap **Share Location** on a supported Android phone/tablet or iPhone/iPad, choose the live mission, and confirm the selected person. Tap **Stop Sharing** at any time. Android drone-controller layouts keep the status inside the active mission instead of showing the standalone home-screen action.

If location access is off during an active Android mission, tap the **Location sharing · Precise Location required** status to grant access. On iOS, follow the system prompts for precise foreground and background access. A sharing session can remain active for up to 12 hours, but ending the mission or tapping **Stop Sharing** ends that device's session sooner.

## View the live map

- In Mission Overwatch, open **Mission sidebar → Map** when the tab is available. Browser access is limited to authorized supervisory roles.
- In Android or iOS Mission Viewer, open **Nearby map** / **Map** for the selected mission.
- Use **People on map** to hide or show individual people. Selecting a roster entry focuses that person and their matching trail; select it again to return to the full mission view.

The mission pilot uses a distinct marker. Other devices can appear as selected personnel or **Remote viewer**. Stale or unavailable fixes remain visually distinct from a current live position. If map tiles are unavailable, AlphaRelay keeps the roster/list view when possible.

## After the mission

AlphaRelay saves the location trail with the mission. When sharing stops, it creates a standard map file and records a digital fingerprint so later changes can be detected. The saved trail appears beneath the closed-mission Timeline. If no valid locations were recorded, AlphaRelay does not show an empty post-mission map.

An active route, or a route that has not finished saving, blocks **Seal entire mission**. Wait for it to finish or use the available retry action before sealing. If the device recorded no usable locations, AlphaRelay reports that fact and does not invent a route.

→ View a live mission · Watch in Mission Overwatch · Seal the mission record

---

## Watch in Mission Overwatch

Mission Overwatch is the per-mission browser workspace. Open it from **Mission Dashboard** by selecting a mission (the dashboard may label this **Open Mission Console**).

Sign in at [alpha-relay.com](https://www.alpha-relay.com). A previously opened page may reopen without internet, but active **Internet** missions, remote viewing, sending events to the agency account, and shared review require a connection.

Active missions open in a full-screen command view. The header shows elapsed time, feed state, the mission-assigned operator, AI detection status, and a **Sidebar** alert count. The live feed stays in the main workspace. The right-rail **Mission sidebar** switches among **Timeline**, **Events**, **Ask AI**, an optional **Map**, and a mission-scoped tab labeled **Livestream** for browser-created Controller Livestream or **HDMI Input** for laptop capture. Mission Overwatch adapts to phone and tablet browsers; a desktop-sized screen is still easier for long footage and report reviews.

## Watch remote live video

When AlphaRelay Operator starts a mission with working internet, it starts remote live automatically. Open the active mission and select **Live stream (WebRTC)**. WebRTC is simply the technology AlphaRelay uses to deliver the video; there is nothing for the officer to configure.

If the mission began offline or remote-live setup failed, restore internet and use **Pilot console → Mission → Start remote live** to retry.

- In **Controller Screen Capture**, remote live publishes the controller screen.
- In **Goggles Mode**, remote live publishes the DJI Fly screen carrying the DJI Goggles live view. Keep the Android device online.
- In **Laptop HDMI Capture**, **Connect & go live** starts the browser's recoverable evidence recording and remote stream together.

## Laptop HDMI Capture

Create this mission from **Mission Dashboard → New HDMI mission**, add any mission-specific **AI detections**, then open **Mission sidebar → HDMI Input**. Select the USB HDMI capture card and click **Connect & go live**. The browser uses the same full picture for preview, Live AI, and event screenshots.

Keep the tab open. Click **Stop & upload** and wait for the recording to be secured before **End Mission**. If the browser was interrupted, reopen the same mission and use **Recover interrupted recording** without clearing browser data.

## Mission sidebar

Use the right-rail tabs while an Internet mission is active:

- **Timeline** follows incoming events and alerts.
- **Events** contains scenario Quick Events and **Manual event**. Agency-created scenarios can provide up to seven custom buttons; the standard buttons appear when none are configured.
- In **Events**, type a note or tap **Dictate**, review the transcript, and click **Log Manual Event**.
- **Ask AI** asks about one current frame. It is separate from automatic AI live-watch alerts and post-mission Ask AI.
- **Map** shows advisory pilot, remote-viewer, and selected-personnel positions when Operational Map is enabled and location is being shared.
- **Livestream** reopens setup for a browser-created Controller Livestream; **HDMI Input** appears for laptop HDMI missions.

After a quick or manual event is appended, Mission Overwatch shows a confirmation in **Events**. **End Mission** is the live command view's closeout action.

Dictation depends on browser speech-recognition support. If it is unavailable or blocked, manual typing still works.

## Ask AI live

Open **Mission sidebar → Ask AI**, type a question about what is visible, and click **Ask AI**. You can also tap **Dictate**, speak the question, review the transcript, and submit it normally. AlphaRelay freezes one current live frame at submission time, answers only from that frame, and saves the timestamped question and answer under **Saved questions**.

Wait until a live frame is available. The answer does not update as the scene changes and does not identify people, perform face recognition, or infer intent, criminality, injury, or that an area is clear. Verify the answer against the live feed before acting on it.

## Share a read-only public live view

Click **Share** and use **Public live view** to display the QR code or copy the link. Anyone with the link can watch the active livestream and see events and alerts without signing in. The public view is read-only: it cannot log events, review alerts, or open the private mission workspace.

Anyone who has the public link can view without signing in, so treat it like a password and share it only with intended viewers. Click **End public viewing** to turn it off immediately. Reopen **Share** to create a new link. The current link also stops when the mission ends. Android and iOS Operator can show the same QR code from an active mission or Mission Viewer.

## View personnel on the mission map

When Operational Map is enabled, open **Mission sidebar → Map**. Use **People on map** to show or hide individuals, and select a roster entry to focus that person's live position and saved route. Only authorized supervisors can open this map in a browser. Positions are advisory. They show the person selected on each licensed device; they do not independently verify who carries the device and do not show the aircraft's location.

After the mission, a saved map appears below Timeline only when the device recorded at least one valid location. A route that is still saving, or failed to save, blocks sealing until it finishes or an officer retries it.

## Agency-specific Local Network connection

The current public Operator workflow does not show a **Local Network** mission option. If your agency's Android build includes **Live Overwatch Screen**, connect Mission Overwatch to the field device while both are on the same Wi-Fi. You can scan the code or enter the device's local network address. This same-Wi-Fi path is separate from internet live viewing and upload.

## AI live watch

When the agency has enabled the feature and remote video is active, Mission Overwatch can show **AI live watch** next to the live-video controls. It is on by default unless a saved mission choice turns it off. AlphaRelay checks selected pictures from **Live stream (WebRTC)** and adds a timeline alert only when AI identifies a possible threat indicator for officer review.

AlphaRelay can start checking a new live picture as often as every two seconds. Internet and review time can make the interval longer. It finishes one check before starting another.

When AI live watch is enabled, select **Show details** or leave the expanded card open to review its focus:

- **Standard detections** provides individual controls for people, person holding a weapon, visible weapons, suspected narcotics, drug paraphernalia, and safety hazards.
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

When Mission Overwatch is already running Live AI for the mission, Operator pauses its own checks to reduce duplicate alerts. If Mission Overwatch stops checking, Operator resumes automatically and can use its basic on-device backup if the online service is unavailable.

Before a Device Live AI or AI live-watch alert can trigger configured screenshot analysis or enter a report, an officer must choose **Approve alert**. Choose **Dismiss alert** when the alert should be excluded. If an approved screenshot returns an analysis finding, it remains pending until an officer selects **Accept as is** or **Review & edit**. Unapproved, dismissed, and unreviewed findings do not enter the AAR narrative.

Treat these alerts as prompts for human review. They do not replace pilot judgment, command staff review, or final report approval.

## Closed missions

After **Stop Mission** or **End Mission**, Mission Overwatch opens the closed-mission review in this order: **Timeline**, **Media**, **AI Review**, and **Report**. **Play with Events** is available under Media. A mission that already has a generated report opens directly on **Report**. The progress tracker shows the current stage and the next action.

Follow the guided review sequence:

1. Resolve Timeline alerts and findings, then click **Done — continue**.
2. Review footage and photos under **Media**, then click **Done — continue**.
3. Analyze and decide AI findings when AI Review is available, then click **Done — continue**.
4. Continue to **Report**.

Use **Needs Review**, **Dismissed**, and **All Events** to filter the Timeline. When you finish Timeline review, unresolved AI suggestions move to **Dismissed** after confirmation. They remain visible until evidence is sealed, but they stay outside official counts, video markers, reports, exports, and the evidence record. Finishing AI Review rejects any finding you did not decide. If a new item uploads later, AlphaRelay reopens the affected review step.

AI Review requires at least one item under **What should AI look for?**

- **Event-focused** checks video around accepted events.
- **Full mission — detailed** checks the available mission timeline and prefers higher-quality or original video where recordings overlap.

The status shows upload, video review, screenshot checks, and completion. AlphaRelay checks possible findings against evidence screenshots before showing them. Earlier runs remain under **Previous analyses**. You can leave the page; AlphaRelay emails you when the review finishes. Any accepted finding moves to the Timeline for final officer review before report use.

**Ask AI** uses only the selected main uploaded video. It does not mix in mission photos or event screenshots. Saved Live Ask AI answers show the exact still image used for the answer so you can inspect it. AlphaRelay does not draw AI boxes over the original evidence image. Ask AI remains available after supervisor approval for read-only questions, but it does not unlock the Timeline, evidence, Media, AI Review findings, or Report.

Closed-mission timelines show the oldest event at the top and the latest at the bottom. Closed missions show recorded information only; Mission Overwatch stops remote viewing and attempts to restore the livestream after the mission closes.

While Mission Overwatch remains open, the selected mission timeline updates with device alerts, Android and iOS Mission Viewer events, screenshot status, and mission-close status. A new alert may appear before its screenshot finishes uploading. These updates do not restart footage that is already playing.

Authorized mission team members can use **Rename** in Mission Overwatch to correct the mission name before the report is submitted. Submitted and approved missions are read-only and cannot be renamed.

Use **Share** to give an eligible user mission-scoped collaborator access. Select the person by name and email under **Available users**; AlphaRelay lists current recipients under **People with access** and sends an email link when configured. A shared collaborator can work on this mission but cannot re-share it or start new missions without the separate **Mission operator** designation.

## View from a licensed device

For a compact active-mission view, open AlphaRelay Operator on a second licensed device. Tap **View Live Mission** on Android or **Watch Live Mission** on iOS. It can watch remote live, follow timeline updates and alerts, and log quick or manual events. Closed-mission review stays in Mission Overwatch.

→ View a live mission on Android or iOS

## Offline app shell

After the first online visit, the browser saves the basic Mission Overwatch page. You can also choose **Install app** to place it on the device like an app. This helps the page reopen during a connection problem, but sign-in, current mission information, uploads, and video playback still need internet.

---

## Log Events

Events are timestamped notes on the mission timeline. Keep them short and specific.

## During the mission

**AlphaRelay Operator**

- Tap **quick event** buttons or the quick event wheel (phone layouts). Agency scenarios can provide up to seven custom buttons; the standard set appears when none is configured.
- Enter manual event notes
- Voice relay: say `relay` followed by the event details (e.g. `relay suspect entered north door`)
- **Device Live AI** people and possible-weapon alerts from AlphaRelay's online service or the device's basic backup — review these before treating them as facts

In **Controller Screen Capture**, voice relay can save a controller-screen screenshot with the event when screen capture is active.

**Mission Overwatch**

- Open **Mission sidebar → Events** in the full-screen command view
- Use **Quick events** that match the scenario template labels
- Use **Manual event** for free-text notes
- Tap **Dictate**, speak the event, review the transcript, and click **Log Manual Event** when the browser supports speech recognition
- These event tools remain available for active Internet missions; they do not require a Local Network relay
- A success message appears in the **Events** tab after the event is appended; verify it before repeating the action

**Android or iOS Mission Viewer**

- On a second licensed device, tap **View Live Mission** on Android or **Watch Live Mission** on iOS and choose the active mission
- Use scenario quick-event buttons or enter a note under **Add mission event…**
- Viewer events join the same mission timeline; logging turns off when the mission ends
- Android attaches the complete received live frame to quick, manual, and `Relay` voice events when video is available. If no full frame is ready, it asks you to wait rather than saving a partial or stale image.

Screenshots from the live feed are captured automatically when the workflow supports them. Local AI screenshots can include yellow detection boxes.

When AI is available and the screenshot has uploaded, AlphaRelay can automatically analyze screenshots attached to typed or voice events. Standard Operator Quick Events do not use this automatic analysis; Android Mission Viewer Quick Events with screenshots do. The officer-created event remains official, but any AI description of its image must still be checked with **Accept as is** or **Review & edit** before it can enter the report.

Mission Overwatch updates the open mission timeline while the page is open. Events entered in Operator or Mission Viewer and automatic device alerts can appear without reloading the page. An alert may appear before its screenshot finishes uploading.

For a Device Live AI or AI live-watch alert, choose **Approve alert** in the timeline before configured screenshot analysis or report use can proceed. Choose **Dismiss alert** to exclude the event from the report. If approved analysis returns a finding, use **Accept as is** or **Review & edit** after checking the source image. This approval gate applies to automatic alerts; human-created manual and voice events do not need **Approve alert**.

## Official event eligibility

- Human-created quick, typed, dictated, voice-relay, viewer, and footage-tag events are official mission events unless a user deletes them.
- Automatic Device Live AI and AI live-watch alerts become official only after **Approve alert**.
- Accepted AI Review findings become official only after **Accept as is** or **Review & edit** on the Timeline.
- Pending or dismissed automatic alerts and accepted AI Review findings without Timeline officer review stay out of official event counts, playback markers, reports, offline exports, and evidence-chain views.

Pending and dismissed alerts may remain visible in the Timeline and Command Center so a reviewer can understand what was evaluated. **Done — continue** on Timeline moves unresolved AI candidates to the visible **Dismissed** filter; sealing the mission permanently removes AI candidates that never became official. Neither action removes human-created events.

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

**Device Live AI** checks selected pictures from the live mission video and creates alerts for officer review. It can work with controller-screen video, HDMI, supported Pilot cameras, and Controller Livestream. With internet, AlphaRelay uses its protected online AI service. If that service or the connection is unavailable, Operator automatically uses the device for basic people and possible-weapon checks.

Recording must be running. Basic on-device checks and immediate alerts can work without internet. The timeline, more detailed online checks, and reporting update after internet returns.

## Current alert controls and priority

- **Person detected** — informational/yellow treatment
- **Multiple persons detected** — informational/yellow treatment
- **Possible weapon detected** — urgent/red treatment

Operator uses **Alert on people** at mission setup or during an active mission to suppress routine person alerts. In Mission Overwatch, **Standard detections** provides separate controls for people, person holding a weapon, visible weapons, suspected narcotics, drug paraphernalia, and safety hazards. Keep both weapon-related categories enabled; weapon-holder alerts receive the highest presentation priority. Hand-to-hand contact and reaching into clothing or bags are no longer standard detections; an agency can still add a concrete visible behavior as a scenario-specific or mission-specific target.

These are assistive detections, not operational conclusions. Person detection is not face recognition or identity matching. A possible-weapon alert does not establish that an object is a weapon, who possesses it, intent, legality, or threat level.

## Android controls

1. Open **Pilot console → Flight → Local AI**.
2. Turn **Enable automatic OpenAI + local detection** on or off.
3. Adjust the sample rate, minimum detection score, confirmation window, or cooldown only after testing the change.
4. Tap **Save local AI settings**.
5. Start the selected Android capture workflow and watch the **Device Live AI** status on the active-mission dashboard, Mission Viewer, or the Live AI metrics line.

During Controller Screen Capture, grant Android notification permission if the pilot should receive immediate on-controller alerts. Person notifications use the yellow informational style; possible-weapon detections use the red urgent style.

Mission Overwatch and Operator coordinate so they do not create the same automatic alert twice. When Mission Overwatch is checking the live video, Operator pauses its own checks. If Mission Overwatch stops, Operator resumes automatically. If the online service is unavailable, the device's basic checks can take over.

In Pilot mode, AlphaRelay suppresses Live AI after a land command or confirmed touchdown so the closed or closing mission does not continue producing alerts. It resumes normally on a later mission.

## iPhone and iPad

iPhone/iPad uses the same online-first process for Screen Recording, Controller Livestream, and iPad HDMI. Without internet, it can perform basic people and possible-weapon checks on the device. Its on-device backup is more limited than Android's. Allow time-sensitive notifications if alerts should appear over the flight app.

For Controller Livestream, AlphaRelay's online video service can run Live AI directly on the incoming controller video. This lets checks continue even when the setup phone leaves the viewer screen. AlphaRelay coordinates the browser and viewing devices to reduce duplicate alerts. If the online check stops, a viewing device can resume its own checks.

When Live Activities are available, iPhone presents a compact alert in the Dynamic Island or Lock Screen and then returns to the monitoring message. If Live Activities are unavailable, **Screen Sharing** notifications show the alert instead.

Mission-specific AI targets selected before start or updated during the mission apply to online analysis. Enter one visible item per line, up to eight. Changes made without internet wait until mission information uploads.

## What happens after a detection

AlphaRelay can create a timeline event with a screenshot. Screenshots from the on-device backup can include detection boxes. AlphaRelay limits repeated alerts for the same continuously visible subject, while allowing a new subject elsewhere to create a new alert.

In Controller Screen Capture, AlphaRelay tries to ignore small detections inside fixed flight-app displays and combine overlapping boxes around the same person. This reduces repeated or screen-overlay alerts, but it does not eliminate false alerts or missed detections.

For thermal or infrared video, AlphaRelay checks the full picture, not only the center or brightest area. It recognizes common white-hot, black-hot, and color palettes. Bright or red areas show apparent heat; they do not automatically mean a person or threat. Roofs, pavement, vents, furniture, vegetation, reflections, shadows, and camera effects can all resemble a person, so every thermal alert requires careful human review.

If the first check does not confirm a possible-weapon concern, AlphaRelay may inspect one smaller area around a person or unclear object in more detail. This may help with small objects, but it does not make the result conclusive.

AlphaRelay saves the evidence image before showing the device alert. The banner can disappear while the Timeline event remains available for review. The service may check a picture as often as every two seconds, but it normally waits longer before logging the same continuing concern again. Internet speed, image clarity, and repeated-subject filtering can make alerts less frequent.

## Review an alert in Mission Overwatch

1. Open the mission **Timeline**.
2. Compare the alert and screenshot with the live view or source footage.
3. Choose **Approve alert** to allow configured screenshot analysis and report eligibility, or **Dismiss alert** to exclude it from the report.
4. If approved screenshot analysis returns a finding, choose **Accept as is** or **Review & edit** before it can enter the after-action report narrative.

This is a two-stage review: approving the alert allows analysis and report consideration; reviewing the resulting image analysis makes the finding officer-owned.

## Limits

- Device Live AI runs only while capture supplies images.
- Mission Overwatch or Operator performs the main live checks for a mission; the device's basic backup resumes automatically when needed.
- Internet is required for online AI, uploading mission information, and reporting, but not for basic on-device checks.
- Small, blurred, distant, dark, partially hidden, or unusual objects may be missed. Tools, toys, sporting equipment, and silhouettes may be false positives.
- The built-in backup has not been proven across every real controller screen and field condition. Training tests are not a guarantee of field performance.
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
6. Check whether footage has uploaded or is safely waiting on the device before powering it off or closing its browser tab.

In a supported Pilot-mode mission, confirmed touchdown can trigger the same stop and closeout automatically. AlphaRelay stops Live AI and closes the mission before a longer aircraft-SD transfer continues. If automatic closeout does not occur, use **Stop Mission** and follow the on-screen retry state.

## What happens

- The relay session ends with the mission.
- SD recording stops after a successful land when supported.
- Pilot mode can start or recover mission-time SD recording after takeoff and closes only around footage that began during the current mission.
- In **Controller Screen Capture**, AlphaRelay finishes the mission-long controller-screen recording instead of automatically copying aircraft SD-card video.
- On a supported DJI Controller Screen Capture setup that AlphaRelay confirmed at mission start, AlphaRelay can guide you through reconnecting the controller to copy the matching aircraft video from its SD card. If copying fails, the mission stays open so you can retry or choose **Close without aircraft copy**.
- In **Controller Livestream**, stop livestreaming on the controller first; closing the mission finishes the received recording.
- In **Video Link**, closing the mission stops opening the link and finishes the AlphaRelay recording. Confirm the recording appears in **Media** before treating closeout as complete.
- In **HDMI Capture Card**, AlphaRelay finishes the video received from the capture card. Reconnect a missing card before closeout if the mission still needs more video.
- In **Laptop HDMI Capture**, **Stop & upload** finishes the browser recording before mission closeout. If interrupted, reopen the mission and use **Recover interrupted recording** without clearing browser data.
- In **Goggles Mode**, AlphaRelay finishes the video captured from DJI Fly and prepares it for upload. It does not copy footage from the DJI Avata's internal storage or microSD card.
- Footage may upload immediately or wait until internet service returns.
- Video marked as waiting to upload stays saved on the device and retries when internet returns, including after Operator restarts.
- Android and iOS Mission Viewer event logging stops and the selected timeline becomes read-only.
- Personnel location sharing stops, and each recorded trail becomes a map evidence file with a digital fingerprint and evidence-history record.
- Mission Overwatch stops remote-live playback and switches to historical review instead of retrying the closed live stream.
- Mission Overwatch selects **Timeline** after web closeout so review starts with unresolved events and alerts.
- Review should wait until footage status is clear.
- Evidence sealing must also wait until every location-sharing session has stopped and each saved track export is complete.

**Warning:** Do not force-stop or uninstall Operator while footage is waiting to upload. On iPhone/iPad, keep Operator open while Screen Recording finishes and hands off the video. Uploads started in a browser still require that browser tab to remain open.

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

The **Media** tab can also show **Import mission data…**. This preview lists large evidence and mapping folders on your computer without uploading or changing them. It can recognize source photos, stitched map images, 3D mapping files, survey reference files, and related project files.

The preview lists file names, locations, types, and sizes, then shows how AlphaRelay plans to group them. It does **not** read or upload file contents, create an official custody record, or change the mission. **Ingestion plan ready** is the exact on-screen message for a plan created on that computer; it does not mean the files were transferred.

**Warning:** If the import reports an upload issue after creating the mission, stay on the opened **Media** tab and finish the missing uploads there.

→ Upload footage · Review footage · Generate a report

---

## Upload Footage

Footage often uploads **after** the mission when the pilot device or Mission Overwatch regains internet. If AlphaRelay uses the word **queued**, it means the footage is saved on the device and waiting to upload; this is not automatically an error.

## Automatic upload

After mission closeout, AlphaRelay Operator uploads recorded footage when internet is available. Videos that have not uploaded remain saved on the device and retry when internet returns, including after Operator restarts.

Watch for upload banners, **Upload now**, or **Loading playback link** status in Mission Overwatch.

In **Controller Screen Capture**, AlphaRelay records one continuous controller-screen video and prepares it for upload after closeout. On iPhone/iPad, Apple's Screen Recording system also finishes the video before handing it to Operator. Keep the device powered on and Operator available; do not force-stop or uninstall it while footage is waiting to upload.

On certain supported DJI setups confirmed at mission start, closeout can guide you through reconnecting the controller so AlphaRelay can copy the matching mission-time video from the aircraft's SD card. The controller-screen recording remains the main timeline; the copied file becomes an optional **Aircraft original**. Keep the aircraft and controller powered, follow the prompts, and retry while the mission remains open if copying fails.

In **Pilot mode**, AlphaRelay can start or recover the aircraft's memory-card recording after takeoff and save the matching clip for upload at closeout. After confirmed touchdown, the mission can close before the longer transfer finishes; keep the device powered and watch the transfer status.

In **Goggles Mode**, AlphaRelay finishes an MP4 video from the DJI Fly view captured during the mission and saves it for upload after **Stop Mission**. Upload resumes when internet returns. Add the original DJI Avata camera file as an optional recording if the mission needs the aircraft's original view.

In Operator **HDMI Capture Card**, AlphaRelay records the USB capture-card video on Android or USB-C iPad and keeps it labeled **HDMI Capture** through upload, playback, Ask AI, and evidence history. Unplugging the card does not close the mission; reconnect it to begin another segment.

In **Laptop HDMI Capture**, click **Stop & upload** before ending the mission. The browser records MP4 when supported and WebM otherwise. If interrupted, reopen the same mission and use **Recover interrupted recording** without clearing browser data.

In **Controller Livestream**, AlphaRelay records the video sent by the controller. Stop livestreaming on the controller before closing the mission, then let AlphaRelay finish the **Controller Livestream** recording.

In **Video Link**, AlphaRelay's online video service records the linked video; the phone or tablet has no local video to upload. End the mission normally, let AlphaRelay finish the **Video Link Recording**, and confirm it appears in **Media**.

When Android Operator opens with mission video waiting to upload, its startup panel shows the video and upload progress. Let the upload finish when possible. Use **Skip for now and start new mission** only if field work must begin immediately; the saved video will remain on the device. On iOS, use **Sync pending items** or **Sync now** and keep Operator open while it sends the remaining work.

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

AlphaRelay records a digital fingerprint for every manually added photo or video before reporting a successful upload. Confirm the item appears in Mission Overwatch before closing the browser tab.

**Warning:** Do not force-stop or uninstall Operator while footage is waiting to upload. Keep a browser tab open for uploads started in a browser; those uploads cannot continue after the tab closes.

→ Controller Livestream and HDMI Capture · Import a mission · Review footage · Troubleshooting

---

## Review Footage

Open a closed mission from **Mission Dashboard**, then go to **Mission Footage**.

Mission Overwatch orders closed-mission work as **Timeline**, **Media**, **AI Review**, and **Report**. It opens the next unfinished review step automatically; a mission with an existing generated AAR opens on **Report**.

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

Once a report is submitted for approval, no one can change timeline events, footage, photos, the mission name, or AI Review findings. A supervisor can return the report to draft to reopen work. Approval permanently prevents those changes. **Ask AI** remains available for view-only questions and saved answers after approval; it cannot change the timeline, evidence set, AI Review findings, or report.

## AI Review

For a closed mission whose saved information has reached the agency account, open **AI Review** after footage or photos are available.

1. Under **Available tags**, select at least one tag to move it into **What should AI look for?**. Add a concrete custom target when needed. Only selected tags are included in the run.
2. Choose **Event-focused** or **Full mission — detailed** under **Analysis coverage**.
3. Click **Analyze media**.

**Event-focused** reviews original-video intervals around accepted human events and approved alerts for observations live AI may have missed. Existing event screenshots serve as coverage boundaries rather than the video-analysis input. If the mission has no accepted event anchors, choose **Full mission — detailed**. Full-mission coverage reviews the union of selected recording timelines, preferring higher-quality or aircraft-original footage where recordings overlap; controller-only time gaps are still included. It can also include mission photos and takes longer.

AI Review can continue after you leave the page. Its status can show the original recording upload, video sections reviewed, evidence screenshots checked, and completion. AlphaRelay first reviews the actual video, then prepares and checks evidence screenshots for possible findings before presenting them to an officer. The completion email lists video reviewed separately from screenshots checked. While AI Review remains open, it updates progress and findings automatically. You can leave the page and return after the completion email; use **Refresh** if the page was offline or the displayed information appears old.

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

Use **Needs Review** to focus unresolved AI alerts or screenshot analyses, **Dismissed** to inspect excluded AI items, and **All Events** for the complete visible timeline. Dismissed items remain outside the official record and can be recovered until the evidence is sealed.

## Complete the review steps

The closed-mission **Timeline** and **Media** tabs, plus **AI Review** when available, have **Done — continue**:

- **Timeline**: approves no items automatically. If unaccepted AI candidates remain, AlphaRelay shows the count and asks before moving them to **Dismissed**. Human-created and approved AI events remain.
- **Media**: records that footage and photos were reviewed.
- **AI Review**: keeps accepted or edited findings and asks before rejecting any undecided findings.

After completion, AlphaRelay opens the next unfinished step or **Report**. New pending AI material reopens the relevant step so it can be reviewed.

## Ask AI about the mission

Open **AI Review → Ask AI** for a closed mission whose saved information and playable footage have reached the agency account. You can also use this view-only tool after the mission is approved.

1. Enter a question about visible mission details, such as **How many vehicles are visible?** or **Is a weapon visible?**
2. Click **Ask AI**.
3. Review the answer, confidence, supporting observations, limitations, and supporting evidence.
4. Open an item under **Previous answers** to revisit it, or click **Clear** to remove the saved question history for that mission. Saved Live Ask AI answers include the exact frozen source frame for side-by-side review and larger inspection.

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

The report uses these rules:

- Officer-created events can be used unless they were deleted.
- Automatic alerts must be approved first.
- AI Review findings must receive final officer review on the Timeline.
- Pending or unreviewed AI descriptions stay out of the generated narrative.

AlphaRelay writes reviewed findings in neutral language and leaves internal AI scores and labels out of the report narrative. The event list can still show the source screenshot, visible observations, why the item may matter, uncertainty, and review status. If a Timeline finding changes after the draft was generated, update or regenerate the report before submission.

## Supervisor actions

Submitting the report locks report edits, mission renaming, timeline events, footage, photos, and AI Review actions while the supervisor decides. Supervisors (often org admins) can **Approve** or **Return to draft**.

- **Return to draft** reopens the record for corrections and resubmission.
- **Approve** makes the record permanently read-only.

Once approved:

- The report cannot be regenerated or edited
- Mission name, timeline events, footage, photos, and AI Review actions stay locked
- **Ask AI** remains available for read-only questions about the primary uploaded footage; it does not unlock the approved record

Supervisor and operator inboxes live on **Mission Dashboard** under Reports & Reviews.

## Email notifications

When configured, AlphaRelay sends email when background AI Review analysis completes and on report workflow events (submit, approve, return).

→ Review footage · Seal the mission record

---

## Seal the Mission Record

Sealing locks reviewed evidence and verifies each file's digital fingerprint. It is **separate** from supervisor report approval.

**Warning:** Sealing ≠ submitting or approving the report. Sealing preserves custody hashes. Submitting the report locks editing during supervisor review; approval makes the record permanently read-only.

## When to seal

Seal only after footage, events, photos, and the report draft have been reviewed; the Timeline, Media, and AI Review steps are complete; an officer has reviewed all timeline findings; all mission location routes have finished saving; and every **Item Requiring Officer Review** has been resolved.

## Steps

1. Open the closed mission.
2. Confirm footage plays and **Play with Events** markers look correct.
3. Confirm official event counts contain the expected human-created events, approved automatic alerts, and officer-reviewed AI findings.
4. Open **Mission chain of custody** and review the evidence listed in the AAR Chain of Custody, including any manual photos or videos.
5. If the mission used Location Sharing, confirm nobody is still sharing and every recorded trail shows a completed map-file export and digital fingerprint. Retry a failed export before continuing.
6. Click **Seal entire mission (verify downloads)** when ready.
7. Optionally download **Download mission custody certificate (HTML)**.

Sealing checks each included file against its saved digital fingerprint and locks the evidence listed in the **AAR Chain of Custody**. It does not automatically seal every file kept with the mission. AlphaRelay records a digital fingerprint when a manually added photo or video uploads, then checks it again when that item is included and sealed.

AlphaRelay keeps the original evidence image separate from any smaller copy prepared for AI. It matches screenshots by the time the image was captured, not only the later time it uploaded. This helps prevent a delayed upload from being mistaken for a nearby screenshot. Always verify the displayed image and time before sealing.

While location sharing is active, new points can be added but earlier points are not rewritten. When sharing ends, AlphaRelay creates the saved map evidence file. Sealing is blocked if someone is still sharing or if that file has not finished. A session with no valid locations is marked empty instead of creating a false route.

The mission-wide HTML certificate and exported/printed after-action report include a QR code and public certificate link. A recipient can open the current chain-of-custody certificate without signing in. The link is unguessable but works for anyone who has it, so share it only with intended recipients. The public page exposes certificate fields and current authoritative chain validation, not the signed-in mission workspace.

When the mission seals, AlphaRelay removes automatic alert events that were never approved and accepted AI Review findings that never received Timeline officer review. Dismissed alerts are included in that event cleanup. Their uploaded screenshots can remain registered for audit history, but they stay outside the AAR chain and remain unsealed. Human-created events remain unless a user explicitly deleted them. The same official-event rule is used for event totals, playback markers, reports, offline exports, and evidence-chain views.

**Warning:** Cleanup of unapproved AI candidates is permanent. Resolve every alert and finding before sealing; sealing does not approve pending items.

Evidence sealing does not by itself lock the mission name, timeline, media review, or report draft. Finish those changes before **Submit for supervisor approval**, which applies the workflow lock.

## Export the evidence verification file

For a machine-readable, court-ready bundle with cryptographic chain verification:

1. Open **Mission chain of custody**.
2. Click **Export evidence package (JSON)** on an evidence item.

The button name includes **JSON**, a standard data-file format used by records and evidence systems. Use it when your agency needs a machine-readable verification file in addition to the human-readable custody certificate or offline ZIP package.

→ Export offline package · Generate a report

---

## Export the Offline Package

The offline package is one downloadable `.zip` file containing the mission record as it existed when exported. Use it for handoff, command review, or records retention.

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
- The ZIP shows the mission as it existed when exported. It does not continue updating afterward.

For JSON evidence export, use **Export evidence package (JSON)** in chain of custody instead.

---

## Accounts and Organizations

## Mission Dashboard

Command home at [alpha-relay.com/dashboard.html](https://www.alpha-relay.com/dashboard.html):

- **Command Center** connection and refresh status, active remote-live count, and mission KPIs
- Active mission rows with live state, operator and scenario context, event activity, elapsed time, and alerts awaiting review
- **New Livestream** and **New HDMI mission** for authorized mission operators to name an online mission, optionally select a scenario and AI detections, and continue directly to controller or browser capture setup in Mission Overwatch
- **Attention queue** for remote-viewing failures, mission information still waiting to upload, automatic alerts awaiting review, and report follow-ups
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
- **Analytics** for active missions, seven-day mission and official-event totals, evidence coverage, lifetime totals, close rate, median duration, event rate, storage, operational insights, mission throughput, scenario mix, capture channels, and highest event load

Select a mission to open **Mission Overwatch** (dashboard link: **Open Mission Console**).

**Events logged** and event-based KPIs use the official mission-event set: human-created events that have not been deleted, approved automatic AI alerts, and officer-reviewed AI findings. Pending or dismissed automatic alerts can still appear under **Latest alerts** for operational awareness, but they are not included in official event totals.

Long **Attention queue** and **Latest alerts** lists show more items as you scroll. Click or tap inside the list before using a keyboard to scroll. Dashboard summaries use the organization's mission records and local calendar dates. Use them for operational awareness, not as an official evidence export.

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

For an active mission, the same **Share** window prepares a **Public live view** QR code and link. Anyone with the link can view without signing in, so share it only with intended viewers. Recipients can watch and see events and alerts, but cannot add or review events. Click **End public viewing** to turn off the link; ending the mission also disables it.

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

Open **Organization Settings → Activity Log** for a view-only record of important organization, mission, media, AI-review, report, and account actions. AlphaRelay records who took the action, that person's role, and the time. Filter by person, mission, action, or date, and use **Load older activity** to see earlier entries. Mission entries link back to Mission Overwatch when the mission is available.

The Activity Log is an accountability view, not a control for editing or deleting the recorded actions.

If your account belongs to more than one organization, use the organization switcher in the app sidebar. Switching from Mission Overwatch returns you to the selected organization's **Command Center** so mission data from the previous organization is not left in focus.

After AlphaRelay refreshes the selected organization's online records, missions deleted from the organization disappear from the dashboard. Missions or event changes still saved only on the device remain visible until AlphaRelay can upload them.

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

- Upload prepared PDF agreement versions that cannot be changed after signing
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
2. Open **Mission Overwatch** once while online in each browser your team will use in the field. If several officers use separate browser sign-ins on the same computer, open it once under each sign-in.

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

## Video Link handling

For a **Video Link** mission, Operator sends the submitted web link to AlphaRelay's online video service. The phone or tablet does not browse or record that page. For security, AlphaRelay rejects links that include a username/password or point to a private home or agency network. A private-looking or single-use video link can still act like a password, so treat it as sensitive mission information and turn it off when practical.

## What runs locally

- **AlphaRelay Operator**: mission setup, quick and voice events, basic on-device AI backup, Mission Viewer, live video, recording, and saved items waiting for internet
- **Mission Overwatch browser app**: basic page files saved after the first online visit; sign-in, uploads, and current mission information still need internet

## What uploads to AlphaRelay

When internet is available, AlphaRelay sends mission details, events, screenshots, photos, footage information, optional personnel locations, reports, evidence history, and agency information to the organization's protected AlphaRelay account.

Full-quality evidence stays separate from any smaller image prepared for AI review. AlphaRelay records when a screenshot was actually taken even if it uploads later. It also records a digital fingerprint for manually uploaded photos and videos so later changes can be detected.

Read the public [AlphaRelay Privacy Policy](https://www.alpha-relay.com/privacy.html) for the current service-level privacy notice.

## AI

When enabled, AI can help draft reports, review uploaded media, answer questions about the main mission video, describe selected event screenshots, and check occasional pictures from live video. It can also look for the visible items selected for the scenario or mission. Always review:

- Timeline accuracy
- Footage and photo references
- Accepted AI Review findings and officer-reviewed timeline observations
- Ask AI answers, limitations, and supporting evidence
- Event screenshot or media image analysis
- AI live watch alerts and attached frame evidence
- **Items Requiring Officer Review**

Treat every AI result as a draft.

- **Event-focused** checks video around accepted events.
- **Full mission — detailed** checks the available mission timeline and prefers higher-quality or original video where recordings overlap.
- AlphaRelay verifies possible findings against evidence screenshots before showing them for review.
- An officer must use **Accept as is** or **Review & edit** before an accepted finding can enter a report.
- **Ask AI** uses only the selected main uploaded video. It does not use mission photos or event screenshots.

After approval, Ask AI remains available for read-only questions, but it does not unlock the record.

AI Review can remember the area of the picture connected to a finding so it can match repeated results. It does not draw AI boxes over evidence thumbnails or the full-screen original image.

Device Live AI and AI live-watch alerts are prompts for officer review, not final findings. An officer must choose **Approve alert** before AlphaRelay can review the alert screenshot or consider it for the report. Choose **Dismiss alert** to exclude it. Any AI description of the image still requires **Accept as is** or **Review & edit**.

Device Live AI uses AlphaRelay's protected online AI review when internet is working. Without internet, it automatically continues basic checks for people and possible weapons on the device. Private access codes for the online service are not stored in the app. Mission Overwatch and Operator coordinate their checks to reduce duplicate alerts.

Person detections use informational/yellow treatment and do not identify people. Operator can disable routine person alerts for a mission. Mission Overwatch provides separate controls for people, person holding a weapon, visible weapons, suspected narcotics, drug paraphernalia, and safety hazards. Hand-to-hand contact and reaching into clothing or bags are not standard detections; agencies may add concrete visible behaviors as scenario or mission targets. When weapon-related detections are enabled, AlphaRelay gives their alerts the highest priority; every alert remains subject to human review.

AlphaRelay uses the same rule everywhere an official event appears:

- Include officer-created events unless they were deleted.
- Include an automatic alert only after **Approve alert**.
- Include an AI Review finding only after final officer review on the Timeline.

Pending, dismissed, or unreviewed AI items stay outside official counts, playback markers, reports, exports, and evidence views. Finishing Timeline review moves unresolved suggestions to **Dismissed**. Sealing permanently removes suggestions that never became official.

When Operational Map is enabled, location sharing uses the person selected on the licensed device. This is a reported identity, not independent proof of who carries the device. Precise location can continue in the background while sharing is active. When sharing ends, AlphaRelay creates a map evidence file and records its digital fingerprint. AlphaRelay does not place precise location in product-usage measurements, crash reports, application logs, or mission event text.

Mission Overwatch **Dictate** uses the browser's speech-recognition capability and microphone permission for manual events and Live Ask AI questions. Availability and speech processing depend on the browser and operating system; type the event or question when agency policy or browser support does not permit dictation. A Live Ask AI answer is saved against one frozen current frame and must be verified against the live feed.

## Pilot agreements

Pilot agreement PDFs and signed copies are stored privately. Signing links contain a private code and completed files open through links that expire. The signing record may include the signer's details, date and time, network address when available, browser/device information, agreement version, document fingerprint, and audit history.

## Custody and approval

| Action | Effect |
| --- | --- |
| **Seal entire mission** | Verifies and locks hashes for evidence explicitly included in the AAR Chain of Custody; retained excluded screenshots remain unsealed |
| **Submit for supervisor approval** | Temporarily locks the report, mission name, timeline, media, and AI Review actions until a supervisor returns it to draft or approves it |
| **Supervisor approval** | Permanently prevents changes to the submitted record; Ask AI remains available for view-only questions |
| **Export offline package…** / **Export evidence package (JSON)** | Point-in-time copies for retention or handoff |

Do not share exports until all saved mission information has reached the agency account and officer review is complete.

---

## Minimum Requirements

## AlphaRelay Operator device

- Supported Android version for the installed APK, or iPhone/iPad running iOS 26 for the iOS app
- Usable internet for remote viewing and immediate upload to the agency account; without internet, AlphaRelay can save supported work on the device for later
- Enough CPU, memory, battery, and storage for live video, event logging, recording, and Device Live AI
- Supported aircraft-control workflow when using aircraft integration
- Conditional Matrice camera tools on supported Matrice aircraft or Matrice controllers
- Android drone controller capable of installing **AlphaRelay Operator** and granting screen capture permission for **Controller Screen Capture**
- For **Video Link**: licensed Android/iOS Operator, working internet, and an authorized video QR code or web link; camera permission is optional when pasting instead of scanning
- For **Controller Livestream**: licensed Android/iOS Operator or an authorized signed-in browser, working internet, and a DJI controller with **Custom RTMP** or a Skydio controller with **RTSP External Server**
- For **Operator HDMI Capture**: a compatible Android device or USB-C iPad, a standard USB HDMI capture card, controller HDMI output, and camera/USB permission; some setups need a powered USB hub
- For **Pilot mode**: a supported DJI controller connection, an aircraft shown in AlphaRelay's Pilot mode list, and a live connection AlphaRelay can verify
- For a DJI Avata with compatible DJI Goggles: separate Android phone or tablet with **DJI Fly**, **AlphaRelay Operator**, screen capture permission, and internet
- For iPhone/iPad screen capture: iOS 26, AlphaRelay Operator installed through TestFlight, Screen Recording permission, and optional microphone/speech permissions
- For Mission Viewer: a second Operator installation licensed to the mission's organization, plus internet
- For Operational Map: the feature enabled for the organization, the correct person selected on each licensed sharing device, permission to use precise location while the app is open and while another app is in front, and internet for live updates

## Overwatch / review (browser)

- Current Chrome, Edge, or Safari on desktop or mobile for Mission Overwatch, dashboard, and export; a larger screen is recommended for long review sessions
- Internet to send saved mission information and footage to the agency account, create reports, and download exported media
- Internet and the agency's AI features enabled for report drafting, AI Review, post-mission Ask AI, Live Ask AI, event screenshot review, or AI live watch
- Browser microphone permission and speech-recognition support for **Dictate** in Mission Overwatch
- For **Laptop HDMI Capture**: a physical USB HDMI capture card, browser camera permission, enough storage, and a tab that remains open through **Stop & upload**

## By workflow

| Workflow | Requirement |
| --- | --- |
| Start Mission | Android or iOS Operator app; working internet for automatic remote viewing, or offline capture that sends saved work later |
| Agency-specific **Local Network** connection | Android device and Mission Overwatch on the same reachable Wi-Fi; this option does not appear in the standard public Operator app |
| Controller Screen Capture | Android drone controller; AlphaRelay Operator installed; Android screen capture permission |
| Video Link | Licensed Android/iOS Operator; working internet; authorized video QR code or web link; optional camera permission for QR scanning |
| Controller Livestream | Licensed Android/iOS Operator or authorized signed-in browser; internet on both devices; DJI **Custom RTMP** or Skydio **RTSP External Server** support |
| Operator HDMI Capture | Controller HDMI output; USB HDMI capture card; compatible Android device or USB-C iPad; camera/USB permission; internet needed only for remote viewing and upload |
| Laptop HDMI Capture | Signed-in web app; USB HDMI capture card; browser camera permission and storage; tab kept open through stop and upload |
| Pilot mode | Supported DJI controller and aircraft; successful live connection check in AlphaRelay |
| Optional aircraft-video copy after Controller Screen Capture | Supported aircraft confirmed during setup; powered aircraft/controller; usable aircraft SD card; ability to stop DJI Fly, clear its USB default, reconnect, and choose AlphaRelay |
| iPhone/iPad Operator capture | iOS 26; AlphaRelay Operator installed through TestFlight; device license; Screen Recording, Video Link, Controller Livestream, or USB-C iPad HDMI; internet for remote viewing and upload |
| DJI Avata with DJI Goggles | Linked DJI Avata, compatible DJI Goggles, and compatible controller; Android device with DJI Fly and AlphaRelay Operator; goggles live-view connection; Android screen capture permission; internet |
| **Live stream (WebRTC)** | Validated pilot-device internet; starts automatically with the mission and can be retried from the Pilot console |
| Mission Viewer | Second licensed Operator installation in the same organization; active mission; internet; remote live required for video |
| Operational Map | Feature enabled for the agency; correct person selected on the device; active mission; precise device location; internet for live updates; supervisor-level permission to open the map in Mission Overwatch |
| Public live view | Active uploaded mission; internet; authorized mission-team member to create the link; no sign-in required for the read-only recipient |
| Device Live AI | Operator capture running; internet for AlphaRelay's online AI review; a compatible device for basic checks when offline; notification permission for immediate alert banners |
| AI Review | Closed mission whose saved information has reached the agency account, with playable footage or mission photos, at least one selected item under **What should AI look for?**, internet, and accepted events for **Event-focused** coverage |
| Ask AI | Closed mission whose saved information and main recording have reached the agency account; internet required |
| Live Ask AI | Active mission with a current live picture in Mission Overwatch or Android/iOS Operator; internet and Ask AI enabled for the agency; microphone and speech permission only for optional dictation |
| AI live watch | Active remote video; Mission Overwatch online; AI live watch enabled for the agency |
| Send saved work to the agency account | Internet and a signed-in AlphaRelay account |
| Optional aircraft/goggles recording | Signed-in online browser; MP4 or MOV; visual alignment to the AlphaRelay or primary timeline |
| Offline package export | Internet at export time to download media; extracted package can be reviewed later on desktop or mobile |

Grant camera, USB-device access, microphone, speech recognition, Screen Recording, storage, notifications, and location only when the selected workflow asks for them. Operational Map needs precise location and may ask to continue location sharing in the background. HDMI Capture uses Android's camera permission for the USB capture card, not the phone or tablet camera. In Mission Overwatch, allow browser microphone access only when using **Dictate**.

Aircraft camera controls appear only when AlphaRelay detects supported aircraft and controller features. Availability still depends on aircraft firmware, installed camera or sensor, DJI support, and a successful field test.

Controller Screen Capture appears on Android drone controllers that can run AlphaRelay Operator and grant screen capture permission. The controller's native flight app remains responsible for aircraft operation in that mode.

Pilot mode is not enabled just because a DJI controller is connected. Confirm the aircraft in AlphaRelay's supported list and keep the aircraft and controller connected until AlphaRelay reports **Supported aircraft confirmed. Pilot mode is ready.** If that check does not finish, use Controller Screen Capture.

The Goggles Mode workflow uses a separate Android device to display the DJI Goggles live view in DJI Fly. AlphaRelay records that screen and does not control the DJI Avata or retrieve the original aircraft camera file.

The iPhone/iPad workflow captures the selected display or app through Apple's Screen Recording system. It does not include Android's automatic wired DJI Goggles detection, Android-only same-Wi-Fi relay, or Android's broader on-device AI backup.

Run a training mission on the same device class before operational use.

---

## Troubleshooting

## Video Link is prepared but video is missing

1. Confirm the Operator device has internet and the mission is still active.
2. Open the URL outside AlphaRelay only when agency policy allows it, and confirm it is still public, unexpired, and actively playing.
3. Confirm the URL begins with `http://` or `https://`, contains no embedded username/password, and does not point to a private or local-network address.
4. Return to Mission Viewer or Mission Overwatch and allow time for AlphaRelay to open the page and receive video. A direct video link usually starts faster than a webpage that contains a player.
5. If the page requires sign-in, a popup, copy protection, a supported location, or a human-verification check, use the controller's built-in livestream setting or HDMI output instead.

If QR scanning is unavailable or camera permission is denied, paste the complete URL manually. **Backend relay prepared** confirms setup, not playable video; verify motion before operational use.

## Remote live is missing

1. Confirm the pilot device has validated internet and the mission is active.
2. Open **Pilot console → Mission** and check remote-live status.
3. Tap **Start remote live** if automatic setup was skipped or failed.
4. In Mission Overwatch, open the active mission and select **Live stream (WebRTC)**.

The standard public Operator app does not show a **Local Network** mission button. If your agency's Android version shows **Live Overwatch Screen**, keep both devices on the same reachable Wi-Fi, connect by scanning the code or entering the displayed device address, and accept the one-time browser trust prompt if it appears.

## Mission Viewer cannot see the mission

1. Confirm the viewing device has internet.
2. Confirm AlphaRelay Operator is activated with a valid license for the same organization as the mission.
3. Confirm the mission is still active. Closed missions do not appear in the viewer list.
4. Tap **Refresh** in the mission picker.

If timeline events appear but video does not, the pilot's remote **Live stream (WebRTC)** has not started or is not ready. Restore pilot-device internet and retry remote live from **Pilot console → Mission**.

For Controller Livestream, the mission can appear before the controller starts sending video. Reopen setup. On DJI, copy either the complete **RTMP URL** or the separate **Server URL** and **Stream key** into **Custom RTMP**. On Skydio, copy **Server address**, **Port**, and **Stream name** into **RTSP External Server**. Then restart livestreaming on the controller.

## Controller Livestream is waiting for video

1. Confirm both the Android or iOS Operator device and the separate flight controller have usable internet.
2. On the AlphaRelay device, tap **Show Livestream Setup** and compare the displayed values character for character.
3. On a DJI screen with two fields, include the final `/` in **Server URL** and put only the six-digit code in **Stream key**. On Skydio, choose **RTSP External Server** and enter the displayed address, port, and separate six-digit stream name.
4. Start or restart the controller's native livestream, then return to **View Live Mission**.
5. If the mission is no longer active, create a new Controller Livestream instead of publishing into the closed record.

Stop livestreaming on the controller before closing the mission. Use **End Mission** in Mission Overwatch or the matching close action in Operator so AlphaRelay can finish the recording.

## HDMI Capture Card has no video

1. Confirm the controller's HDMI output is enabled and the capture card is connected with a USB cable or adapter that carries data, not a charge-only adapter.
2. Grant both Android camera and USB-device access. Android calls this a camera permission even though the picture comes from the capture card.
3. Check capture-card power; use a powered USB hub if the Android device cannot supply enough power.
4. In the active mission, wait for the preview to change from **Waiting for signal** to **Capturing**.
5. If the card disconnected, reconnect it without closing the mission and verify the preview returns.

The HDMI workflow receives video but does not record audio carried through the capture card. Use the Android device or iPad microphone for optional voice events. If the image looks stretched or twice as tall as it should, update Operator and reload Mission Overwatch. The correction changes how older evidence is displayed; it does not rewrite the evidence file.

## Laptop HDMI does not connect or upload

1. Confirm a physical USB HDMI capture card is connected and the controller's HDMI output is enabled. A laptop's own HDMI port normally sends video out and cannot receive controller video.
2. Grant browser camera permission and select the card under **Mission sidebar → HDMI Input**.
3. Click **Connect & go live** and keep the tab open.
4. Before **End Mission**, click **Stop & upload** and wait for secured status.
5. After an interruption, reopen the same mission and use **Recover interrupted recording**. Do not clear browser data first.

## Saved mission information is not uploading

1. Confirm you are signed in.
2. Move to a tested internet connection. Operator resumes video uploads from saved files on the device; work started in a browser still needs its tab open.
3. Do not refresh while saved information is still uploading.

## A new mission will not start

Operator blocks a new start while an active mission or unfinished recording still needs closeout. On Android, use **Close Active Mission** on the startup screen. On iOS, reopen the active mission and use **Stop and complete mission**. Keep the app open while it finishes the recording and sends the remaining evidence, then start the next mission.

Do not force-stop or reinstall the app to bypass this guard; doing so can delay recovery of the existing mission recording.

## Footage is waiting to upload or will not play

1. Keep the pilot device powered on and restore validated internet.
2. If Android Operator opens with a panel showing video waiting to upload, let it run. Use **Skip for now and start new mission** only when field work cannot wait. On iOS, use **Sync pending items** or **Sync now** and keep Operator open while it sends the files.
3. Tap **Upload now** if shown.
4. Wait for **Loading playback link** to clear in Mission Overwatch.
5. For an optional recording: confirm you are signed in and online, the file is MP4 or MOV, the correct source is selected, and no other upload is running.

The browser does **not** save a manual upload for later before it starts. Retry when online.

Current Controller Screen Capture missions produce one continuous recording. If a legacy mission contains adjacent chunks, ordinary Mission Footage playback should continue through recognized neighbors. A separately restarted capture remains separate. If a legacy chunk does not continue, reload the current app version, confirm the next chunk uploaded, and reopen the first chunk.

If an optional aircraft or goggles recording is out of sync, choose **Align with AlphaRelay capture…**, match a recognizable moment in both videos, and save the offset. **Suggest from recording times** is only a starting point; transferred files can have misleading modification dates.

## Controller Screen Capture did not start

1. Confirm the pilot device is an Android drone controller with **AlphaRelay Operator** installed.
2. Tap **Start Mission**, choose **Controller Screen**, and complete mission setup. If AlphaRelay also offers Pilot mode, select **Controller Screen Capture — Recommended**.
3. Approve the Android screen capture prompt.
4. If voice relay is needed, grant microphone permission and confirm speech recognition is available.
5. If the app cannot be installed, allow the browser or file manager to **install unknown apps**. Android Developer mode is not required.

The controller's native flight app remains the flight control app. AlphaRelay aircraft command buttons are intentionally disabled in Controller Screen Capture.

## Reconnect controller for SD footage is waiting

This optional closeout appears only when AlphaRelay confirmed supported DJI equipment and can copy the matching aircraft video after Controller Screen Capture.

1. Keep the aircraft and controller powered on. The completed controller-screen recording remains safe and the mission remains open.
2. Open DJI Fly app info and tap **Force stop**.
3. Open **Open by default** and clear its defaults.
4. Return to AlphaRelay, physically unplug and reconnect the controller cable, and choose **AlphaRelay → Just once**.
5. If the SD pull fails, verify the aircraft connection and SD card, reconnect, and tap **Retry after reconnect**.

Use **Close without aircraft copy** only when you intentionally want to close with the controller-screen recording alone. AlphaRelay selects aircraft footage by its mission-time recording timestamp and does not substitute an older pre-mission clip.

## Pilot-mode aircraft footage is still transferring

After a confirmed touchdown, AlphaRelay can close the mission before it finishes copying video from the aircraft's memory card. Keep Operator, the aircraft, and controller powered on and watch the footage message. A clip marked as waiting to upload is secured on the device and can continue later. If AlphaRelay says the footage was not secured and keeps the mission open, fix the connection or memory-card problem and retry closeout.

## iPhone or iPad capture did not start

1. Confirm the device runs iOS 26 and the TestFlight version of AlphaRelay Operator is current.
2. Start the mission, open Apple's Screen Recording picker, and choose **AlphaRelay Capture**.
3. Start the broadcast, then open the flight app. If capture stops, return to Operator and tap **Choose display and start capture**.
4. Check iOS Screen Recording restrictions and available storage. Grant microphone permission only when microphone audio or voice events are needed.

Screen Recording must be tested on the physical iPhone or iPad. A computer simulation does not prove screen capture or the completed-video handoff.

## Pilot mode stays locked

1. Confirm AlphaRelay detected the supported DJI controller connection and displays the choice between Controller Screen Capture and Pilot mode.
2. Select **Pilot mode**, open the 12-aircraft list, and confirm the exact aircraft family is listed.
3. Tap **My drone is listed — Use Pilot**.
4. Power on and connect the aircraft and controller, then wait for AlphaRelay's live flight-controller check.
5. Start only after AlphaRelay reports **Supported aircraft confirmed. Pilot mode is ready.**

If the aircraft is not listed or the connection check times out, select **Controller Screen Capture — Recommended** and use the normal DJI flight app. Do not rely on Pilot mode until the same aircraft, controller, installed camera or sensor, and firmware have passed a training mission.

## DJI Avata Goggles Mode did not start

1. Confirm DJI Fly and AlphaRelay Operator are installed on the same Android device.
2. Power on and link the DJI Avata, compatible DJI Goggles, and their compatible controller.
3. For automatic detection, connect the DJI Goggles to the Android device with a compatible USB data cable.
4. Open DJI Fly and confirm the goggles live view appears before opening AlphaRelay.
5. If you use wireless live-view sharing, enable **Use DJI Fly / goggles video feed**, return to the landing screen, and tap **Start Mission**.
6. Approve the Android screen capture prompt.

If DJI Fly does not open automatically after approval, open it manually and confirm its live view is still active.

## DJI Avata remote live or upload is missing

1. Keep the Android device connected to internet. If DJI Fly uses Wi-Fi live-view sharing, keep cellular data available.
2. Keep DJI Fly in the foreground during the mission.
3. Stop through the **Controller Screen Capture** notification or AlphaRelay **Stop Mission** button; do not force-close the app.
4. Keep the Android device powered on while footage is waiting to upload. AlphaRelay resumes automatically when working internet returns; do not force-stop or uninstall the app.

## Mission Overwatch dictation is unavailable

1. Use a browser with speech-recognition support.
2. Allow microphone access for the AlphaRelay site.
3. Check that the operating system can see a working microphone.
4. If the browser speech service needs network access, confirm the browser is online.

You can always type the event under **Mission sidebar → Events → Manual event**. Dictation only fills the note; review it and click **Log Manual Event** to save the event. For a Live Ask AI question in Mission Overwatch or Android/iOS Operator, dictation fills the question field; review it before clicking **Ask AI**.

## Play with Events has no markers

- Confirm events exist and the correct primary clip is selected.
- Mission must be closed with footage linked.
- Secondary angles may need **Adjust sync to primary**.

## AI live watch is not showing

1. Confirm the pilot started **Live stream (WebRTC)** and the remote live feed is visible in Mission Overwatch.
2. Confirm Mission Overwatch is online and the mission is still active.
3. Confirm the agency has AI live watch enabled and that it is on for this mission.
4. If the status says a check took too long or failed, leave the page open; Mission Overwatch automatically tries again without starting overlapping checks.

AI live watch does not run from an agency-specific same-Wi-Fi-only video connection and does not run after the mission closes.

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
3. Click **Done — continue** and review the confirmation count. Timeline completion moves remaining unaccepted AI candidates to **Dismissed**; AI Review completion rejects remaining undecided findings.

Dismissed Timeline items remain available under the **Dismissed** filter until the mission is sealed. They stay outside official counts, playback markers, reports, exports, and evidence-chain views.

## Public live link should no longer be available

1. Open the active mission in Mission Overwatch and click **Share**.
2. Under **Public live view**, click **End public viewing** and confirm.
3. If a new link is needed later, reopen **Share** to create one.

The link also stops when the mission ends. Anyone who has it can view the active read-only mission without signing in, so treat it like a password.

## Mission map is empty or missing

1. Confirm Operational Map is enabled for the organization and the mission is active.
2. On each sharing device, select the correct person and allow precise location. On iOS, allow background location if the operating system requests it.
3. Confirm the device says location sharing is active for the intended mission and has internet.
4. In Mission Viewer, make sure the correct active mission is selected. In Mission Overwatch, use **Mission sidebar → Map** with an authorized supervisory account.
5. After closeout, wait for the saved route to finish processing. The post-mission map stays hidden when the device recorded no valid locations.

If sealing reports an active location route or one that has not saved successfully, stop the sharing session, wait for it to finish, or use the available retry action. Do not treat an old map marker or a route with no recorded locations as verified personnel movement.
4. Stay online and wait for the mission's saved information to reach the agency account. If the action is unavailable, sign in again and reload the page.

A new alert or finding that reaches the agency account reopens the affected review step even if it was completed earlier.

## AI Review will not start or appears stuck

1. Open a closed mission whose saved information has reached the agency account and select **AI Review**.
2. Move at least one tag from **Available tags** into **What should AI look for?**.
3. For **Event-focused**, confirm the mission has an accepted human event or approved alert. If not, choose **Full mission — detailed**.
4. Confirm the selected recordings are playable. Full-mission coverage can use multiple aligned recordings and can also include uploaded mission photos.
5. Keep Mission Overwatch online and confirm the agency has AI Review enabled. Click **Refresh** to check progress again.

The status can show the original recording upload, video sections reviewed, evidence screenshots checked, or completion. If the work is waiting or uploading, AlphaRelay has not finished reviewing the actual video. You can leave the page while it runs. AlphaRelay sends a completion email when the agency has email delivery enabled. The email lists video reviewed separately from evidence screenshots checked.

## Ask AI is unavailable or cannot answer

1. Open a closed mission whose saved information has reached the agency account and select **AI Review → Ask AI**.
2. Confirm the primary uploaded footage is available and playable. Ask AI does not use mission photos or event screenshots.
3. Keep Mission Overwatch online and confirm the agency has Ask AI enabled.
4. If AlphaRelay says it is preparing supporting evidence, keep the page open while it checks selected pictures from the playable footage.

Ask AI can answer only from the selected main uploaded recording. If the relevant moment is missing, blocked, low quality, or outside the portions it checked, it may report that the question cannot be answered. Ask AI remains available after supervisor approval as a view-only tool. If it is missing on an approved mission, reload Mission Overwatch. Approval still prevents changes to the timeline, evidence, media, AI Review findings, and report.

## Device Live AI is not tagging

1. Confirm **Enable automatic OpenAI + local detection** is on in Android **Pilot console → Flight → Local AI**, or confirm iOS capture and notification permission are active.
2. Start Controller Screen Capture; Device Live AI does not sample while capture is stopped.
3. Check **Device Live AI** status. With internet it should report online review. After an internet or online-service failure, it should report basic checks on the device.
4. Confirm Operator is current and that offline checks are available on the device.
5. Grant notification permission if events are logged but direct alerts do not appear.

If the status says browser or online Live AI is active, AlphaRelay is coordinating checks for the same mission. Basic on-device checks resume automatically after online review stops or the short changeover period ends.

Review every auto-tag before treating it as an operational fact. Small, distant, dark, blurred, or partially hidden objects may be missed.

## Report actions blocked

Check the mission status and your role. Submitting for supervisor approval prevents report edits, mission renaming, timeline and media changes, and changes to AI Review findings. A supervisor can **Return to draft** to reopen work. Approved records cannot be changed and reports cannot be created again; Ask AI remains available for view-only questions.

## Mission operator is missing from AlphaRelay Operator

1. Connect the Operator device to internet and refresh its license or reopen mission setup so the agency roster can update.
2. In **Organization Settings**, confirm the person has a full name, an active membership, and **Mission operator** enabled. Role and operator designation are separate.
3. Tap **Operator — Select before starting** and choose the person.

If no roster is available, AlphaRelay warns and can start without identified-operator attribution. Resolve the roster before operational use when your policy requires named attribution.

## Import mission data did not upload files

**Import mission data…** is only a preview. It lists file names, locations, types, and sizes on the computer, then shows how AlphaRelay plans to group them. The exact message **Ingestion plan ready** means the plan is ready; it does not mean files were uploaded or custody changed. Use **Import mission**, **Add optional recording**, or **Upload Photos** for the available upload options.

## Offline package video won't play

Open `index.html` from inside the extracted folder without moving files out. Use Chrome or Edge for large packages.

On Android, opening `index.html` can isolate it from sibling media files. If **Reconnect exported files** appears, tap **Choose package files** and select the extracted footage, photos, and printable HTML files. You can choose files more than once when Android presents different folders separately.

→ Connectivity · Known limitations

---

## Connectivity

AlphaRelay can keep recording even when internet service is interrupted. Live viewing, saved mission information, and footage upload are separate; one may continue while another is waiting.

```text
AlphaRelay Operator
  |-- Remote live video → Mission Overwatch or Mission Viewer over internet
  |-- Video Link ← A video QR code or web link opened by AlphaRelay
  |-- Controller Livestream ← DJI or Skydio controller streaming over internet
  |-- HDMI Capture Card ← Controller HDMI connected through USB
  `-- Saved mission information → Events, footage, reports, and evidence

Laptop browser
  |-- HDMI Capture Card ← Controller HDMI connected through USB
  `-- Remote live video + a recording stored in the browser until upload
```

Some older or agency-specific Android builds also let Mission Overwatch view the field device over the same Wi-Fi. The current public Operator workflow does not show that mission-start option.

## Without internet

- Local mission capture and event logging
- Basic on-device Live AI backup and Controller Screen Capture notifications
- HDMI Capture Card recording, preview, Device Live AI, and event screenshots
- Footage and mission information saved on the device until internet returns
- Pilot license within the 10-day offline grace window

## Needs internet

- Sign-in and sending current mission information to the agency account
- Footage and photo upload
- Playback links
- **Live stream (WebRTC)** setup and viewing
- Video Link setup, access to the source, playback, recording, and completion
- Controller Livestream sending, playback, and recording completion
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

**Video Link** requires working internet and a video link AlphaRelay can open without joining a private Wi-Fi network. AlphaRelay—not the phone or tablet—opens the link and creates the mission video and recording. **Backend relay prepared** can still mean the service is waiting for the first usable picture.

**Controller Livestream** requires internet on the AlphaRelay device and the flight controller. For DJI, copy the displayed values into the controller's **Custom RTMP** setting. For Skydio, copy them into **RTSP External Server**. You do not need to understand those abbreviations. If video drops while the mission is active, restart streaming on the controller with the same values.

**Operator HDMI Capture** receives video locally on Android or USB-C iPad and can keep recording when internet is unavailable. **Laptop HDMI Capture** starts online from the Dashboard and records recoverable evidence in the browser while publishing remote live. Keep the tab open and use **Stop & upload** before closeout.

## Agency-specific Local Network connection

If your Android build exposes **Local Network**, run it on Wi-Fi, open **Live Overwatch Screen**, and connect by scanning or entering the device IP. Trust the self-signed relay certificate if prompted. This is not a selectable mission path in the current public Operator workflow.

## When the app says work is waiting

**Queued for cloud sync**, **Loading playback link**, or an upload message means some saved mission information or footage has not reached the agency's AlphaRelay account yet. These are exact messages shown by the app. Operator keeps the videos on the device and tries again when internet returns, including after the app restarts. Keep the device powered on, do not force-stop or uninstall Operator, and use **Upload now**, **Sync now**, or **Sync pending items** when offered.

When AlphaRelay opens with video waiting to upload, the startup panel shows its progress. Use **Skip for now and start new mission** only when field work must begin before the older upload finishes.

**Warning:** Remote live, Video Link, Controller Livestream, and upload require internet. HDMI capture can record locally without it. An agency-specific **Local Network** option needs both devices on the same Wi-Fi, not internet access.

## Reopening the browser app during an outage

Mission Overwatch saves its basic page after an online visit. Sign-in, current mission information, uploads, and video playback still require internet.

---

## Known Limitations

## Network

- The current public Operator workflow does not show a **Local Network** mission button. Agency-specific Android builds that include it require the field device and Mission Overwatch to be on the same Wi-Fi.
- **Live stream (WebRTC)**—the app's name for remote live video—requires internet on the pilot device.
- **Video Link** requires internet and a link AlphaRelay can open without joining a private Wi-Fi network. **Backend relay prepared** means AlphaRelay started opening the link; it does not guarantee video. Sign-in screens, popups, copy protection, location blocks, human-verification checks, expired links, and unsupported players can prevent playback.
- Sending saved mission information, uploading footage, and exporting media wait for internet.
- Losing the controller connection, remote viewing, or upload to the agency account does not always end the mission. These parts operate separately.
- **View Live Mission** on Android and **Watch Live Mission** on iOS require internet and a valid licensed installation in the same organization. Timeline events can update even when remote video is not ready.
- **Controller Livestream** requires internet on both the AlphaRelay device and the separate controller. DJI must support **Custom RTMP**; Skydio must support **RTSP External Server**.
- Operator **HDMI Capture Card** can record locally without internet on Android or USB-C iPad; iPhone cannot receive this USB video. Remote viewing, online AI, and upload still require internet.
- **Laptop HDMI Capture** requires internet to start, browser camera permission, a physical USB HDMI capture card, available storage, and an open tab. Use **Stop & upload** before ending the mission; do not clear browser data before recovering an interrupted recording.

## Media

- Footage often uploads after the mission ends.
- **Controller Screen Capture** records the controller screen, including native flight-app overlays, not a raw camera file.
- **Controller Livestream** records the video sent by the controller, not the original aircraft camera file. Stop livestreaming on the controller before mission closeout so AlphaRelay can finish the recording.
- **Video Link** records the picture AlphaRelay receives from the link, not the original aircraft camera file. Overlays, picture quality, sound, and availability depend on the outside video service.
- **HDMI Capture Card** records video only. AlphaRelay does not currently record sound carried through the capture card; voice events use the Android device or iPad microphone. Power, cables, picture quality, browser support, and reconnection vary, so test the exact equipment.
- **Goggles Mode** records the DJI Fly screen carrying the DJI Goggles live view, not the original DJI Avata camera file.
- Footage waiting to upload retries when internet returns, but the device must stay powered and Operator must not be force-stopped or uninstalled. On iPhone/iPad, keep Operator open while Screen Recording hands off the completed video.
- Footage waiting to upload must finish before final review.
- Uploading an optional MP4 or MOV video in a browser requires internet before the upload begins. The browser does not save it for later automatically.
- In Controller Screen Capture and Goggles Mode, optional aircraft or goggles recordings do not replace AlphaRelay's capture clock. Verify their visual alignment before relying on shared event timing.
- **Import mission** requires a signed-in, online browser and creates a closed post-flight record only.
- **Import mission data…** previews the files found and how AlphaRelay plans to group them. It does not upload file contents or create an official custody record.
- Offline packages only include media available at export time. Some Android file viewers isolate `index.html`; use the package's **Reconnect exported files** prompt when it appears.
- Current Controller Screen Capture missions record one mission-long MP4. Older missions can retain adjacent legacy chunks, and a separately restarted capture remains a separate recording.
- Certain supported DJI Controller Screen Capture setups may offer to copy the matching aircraft video after capture. This requires stopping DJI Fly, clearing its USB default, reconnecting the controller, choosing AlphaRelay, and keeping the aircraft and controller powered. A failure leaves the mission open for retry; **Close without aircraft copy** intentionally skips that optional view.
- Pilot-mode recording to the aircraft's memory card, including its 1080p or 4K choice, depends on the aircraft, installed camera, DJI software, card, and available space. AlphaRelay rejects a clip that began before the mission rather than attaching the wrong recording.
- One mission-long file makes playback and evidence transfer simpler. However, a serious device or app failure before the file finishes saving can put more of the recording at risk than several shorter files. AlphaRelay tries to recover interrupted recordings. Test long missions on the actual device type and always complete the normal closeout steps.

## AI

- **Device Live AI** uses AlphaRelay's online AI review when available and continues basic on-device checks for people and possible weapons when it is not. Results still depend on the device, settings, image quality, scene, internet connection, and response time. It has not been broadly field-tested with controller-screen footage.
- Device Live AI can miss small, distant, blurred, dark, or partially hidden objects and can mistake tools, toys, equipment, overlays, or silhouettes for a possible weapon. It does not determine identity, possession, intent, legality, policy compliance, injury, or whether an area is clear.
- Spatial tracking and HUD filtering reduce repeated person/weapon alerts and controller-overlay false positives; they do not guarantee one alert per real subject or eliminate false alerts.
- AI report drafts require officer review. Resolve every **Item Requiring Officer Review** before completing the report.
- **AI Review** requires a closed mission whose saved information has reached the agency account, available media, internet, and at least one selection under **What should AI look for?**.
- **Event-focused** AI Review requires accepted human events or approved alerts to anchor its search. It reviews original-video intervals around those moments and uses existing event screenshots as coverage boundaries. **Full mission — detailed** reviews the union of selected recording timelines, prioritizing higher-quality/original footage for overlapping time and retaining controller-only gaps. Neither mode proves that every visible moment or object was detected.
- Full-video AI Review depends on the AI service accepting and processing the selected original recording. Large files and certain iPhone/iPad video formats can take longer. Use the visible upload, video review, screenshot check, and completion states instead of assuming a waiting job is finished.
- AI Review can continue after you leave the page, but progress updates and the completion email depend on working AlphaRelay online services, email delivery, and internet.
- **Ask AI** works only for a closed mission whose saved information and playable main recording have reached the agency account. It uses the main uploaded recording, not mission photos or event screenshots. It remains view-only after approval and cannot change the approved record. Blocked views, poor image quality, repeated views, moments the camera missed, or the portions reviewed by AI can limit counts and conclusions.
- An exact repeat question may load a saved answer for the same primary-footage selection. Ask again after that recording changes.
- **AI live watch** requires active **Live stream (WebRTC)**, internet, Mission Overwatch online, and the feature enabled for the agency. AlphaRelay can start checking a live picture as often as every two seconds, but internet and review time may make it slower.
- Scenario and mission AI watch items guide the visual search but do not guarantee an alert. Use concrete, visible details and verify every match against the live view or original media.
- Person detections use informational/yellow treatment and do not perform identity or face recognition. Possible weapons and other urgent threat indicators use red treatment but remain unconfirmed until human review.
- Mission Overwatch exposes individual standard-detection controls for people, person holding a weapon, visible weapons, suspected narcotics, drug paraphernalia, and safety hazards. Enabled weapon-related alerts receive priority, but every alert remains an unconfirmed review prompt. Hand-to-hand contact and reaching into clothing or bags require an agency or mission target rather than a standard-detection switch.
- Thermal and infrared people analysis supports white-hot, black-hot, pseudo-color palettes, and isotherm overlays, and accounts for compact overhead views. Palette colors and red highlights represent apparent temperature rather than object classes. The analysis requires multiple human-consistent structural cues and checks warm objects, rigid surfaces, furniture, vegetation, reflections, shadows, and image artifacts, but it can still miss people or produce false positives.
- AI media findings are suggestions. Accepting one in AI Review moves it to the timeline; an officer must then use **Accept as is** or **Review & edit** before it is eligible for the AAR.
- AI Review does not draw model bounding boxes over finding thumbnails or the full-screen source image.
- Device Live AI and AI live-watch alerts require **Approve alert** before AlphaRelay can review the screenshot or consider it for a report. **Dismiss alert** excludes the alert. After approval, AlphaRelay still waits for the event, decision, and screenshot to reach the agency account, and internet is required.
- When Mission Overwatch or online review from the Operator device is checking a mission, basic on-device checks pause to reduce duplicate alerts. On-device checks resume automatically after online review or internet stops, but there can be a short delay.
- iPhone/iPad Operator requires iOS 26 and a real-device Screen Recording test. It does not include Android's automatic wired DJI Goggles detection, Android-only same-Wi-Fi relay, or Android's broader on-device AI backup.

## Aircraft controls

- Aircraft camera tools appear only on supported aircraft and controllers and still depend on firmware, the installed camera or sensor, and DJI support.
- **Controller Screen Capture** intentionally leaves flight and camera operation in the controller's native flight app; AlphaRelay aircraft command buttons are blocked.
- **Pilot mode** is offered only on supported DJI equipment. Selecting an aircraft from the list does not unlock it by itself; AlphaRelay must also verify the live connection.
- **Goggles Mode** does not control the DJI Avata. The DJI Goggles and their compatible controller remain responsible for aircraft operation.
- Validate aircraft-specific controls in training before operational use.

## Workflow locks

- **Done — continue** is a recorded review decision, not only navigation. Timeline completion moves remaining unaccepted AI candidates to **Dismissed**; AI Review completion rejects remaining undecided findings. Dismissed timeline items remain inspectable until sealing, but stay outside the official record. Review the confirmation count before continuing.
- Submitting a report for supervisor approval prevents changes to the report, mission name, timeline, footage, photos, and AI Review findings. Returning it to draft reopens work. Approval makes the record permanently view-only. Ask AI remains available for view-only questions after approval.
- Evidence sealing preserves each file's digital fingerprint so later changes can be detected. It is not report approval.
- **Seal entire mission** seals only evidence included in the AAR Chain of Custody. Excluded alert screenshots can remain retained and registered but unsealed.

## Browser

- Large offline ZIP exports work best in Chrome or Edge. The viewer adapts to phones, but mobile file-provider rules may require reconnecting extracted package files.
- **Dictate** depends on browser speech-recognition support, microphone permission, and any browser speech-service connectivity.
- Live Ask AI in Mission Overwatch or Android/iOS Operator requires a fresh current frame, internet, and AI configuration. It answers only from the frame captured for that request; it does not track later scene changes. Verify shared saved answers against the live feed.
- Public live links require an active mission and internet. Anyone who receives the link can watch live video and see events and alerts until an authorized user turns it off or the mission ends. The view is read-only, but it does not require sign-in.
- Operational Map must be enabled for the agency and requires the correct person selected on the device, precise location permission, and internet for live updates. Positions are advisory, may be old or unavailable, do not independently verify who carries the device, and do not show the aircraft's location. A mission cannot be sealed while someone is still sharing location or while the saved route has not finished successfully.
- An agency-specific same-Wi-Fi connection may show a one-time browser trust prompt before Mission Overwatch can open it securely.

---

## Glossary

| Term | Meaning |
| --- | --- |
| **AI** | Configured assistance for report drafting, media review, mission-media questions, screenshot analysis, and live-watch alerts |
| **AI live watch** | Mission Overwatch control that samples remote-live frames and logs officer-review alerts when configured; it defaults on unless a saved mission choice disables it |
| **AlphaRelay Operator** | Licensed Android or iOS app for controller-screen mission capture, remote live, field events, Device Live AI, and Mission Viewer |
| **Approve alert** | Timeline decision that allows a Device Live AI or AI live-watch alert to proceed to configured screenshot analysis and report consideration; it does not complete officer review of the analysis |
| **AI Review** | Closed-mission tab for reviewing actual video against selected targets, verifying candidate findings with evidence screenshots, and accepting or rejecting mission-relevant findings |
| **Ask AI** | AI Review area for asking questions about the main uploaded recording from a closed mission; it cannot change the record and remains available after approval |
| **Alert on people** | Operator mission setting that controls routine person alerts; Mission Overwatch separately controls each standard detection |
| **Activity Log** | View-only area under Organization Settings that shows important actions and who took them; officers can filter by person, mission, action, or date |
| **Add optional recording** | **Media** action for adding an aircraft, goggles-screen, or other video file and lining it up with the mission timeline |
| **AAR Chain of Custody** | Explicit report evidence set verified by **Seal entire mission**; included manual media is sealable while retained excluded screenshots remain unsealed |
| **Chain of custody** | The history showing where mission evidence came from, who handled it, and whether its digital fingerprint still matches |
| **Command Center** | Default Mission Dashboard view for operational status, active missions, attention items, automatic alerts, and report follow-ups |
| **Controller Screen Capture** | Workflow where the normal flight app keeps control while Operator records the visible controller, iPhone, or iPad screen |
| **Controller Livestream** | Workflow that copies AlphaRelay's displayed values into DJI **Custom RTMP** or Skydio **RTSP External Server** so the controller sends video directly into the mission |
| **Video Link** | Workflow that scans or pastes an authorized video web link so AlphaRelay can bring it into the mission without recording the phone or tablet screen |
| **HDMI Capture Card** | Small adapter that turns a controller's HDMI output into USB video for Android, USB-C iPad, or a laptop; iPhone is not supported |
| **Laptop HDMI Capture** | Browser workflow created from the Dashboard; **Connect & go live** records controller video received through a USB HDMI capture card |
| **Goggles Mode** | DJI Avata and compatible DJI Goggles workflow where AlphaRelay on a separate Android device captures the DJI Fly live view; compatible hardware enables the mode, then the operator taps **Start Mission** |
| **Device Live AI** | Live-video checks that use AlphaRelay's online service when available and basic on-device people/possible-weapon checks when it is not |
| **Internet** | The normal mission type used by **Start Mission**; internet enables remote viewing and immediate upload, while supported local recording can continue through an outage |
| **Done — continue** | Closed-mission action that records completion of Timeline, Media, or AI Review and opens the next unfinished step; Timeline moves unresolved candidates to **Dismissed**, while AI Review rejects undecided findings |
| **Import mission** | Mission History flow that creates a closed post-flight record from external footage and photos |
| **Import mission data…** | Preview that lists a large evidence or mapping package on your computer without uploading or changing the files |
| **Items Requiring Officer Review** | Report checklist items that need human resolution before submission |
| **Live Overwatch Screen** | Connection panel used by certain Android deployments to view video over the same Wi-Fi network |
| **Live stream (WebRTC)** | The app's label for remote live video over the internet; officers do not need to configure WebRTC |
| **Live Ask AI** | Active-mission workflow in Mission Overwatch and Android/iOS Operator that answers a typed or dictated question from one fresh current frame and shares the saved answer across mission views |
| **Mission sidebar** | Right-rail active-mission tabs for **Timeline**, **Events**, **Ask AI**, optional **Map**, and a conditional **Livestream** or **HDMI Input** tab |
| **Organization Documents** | Signed pilot agreement PDFs linked to an organization |
| **Mission Console** | Dashboard link name for opening Mission Overwatch |
| **Mission Dashboard** | Command home — KPIs, history, search, AAR inboxes |
| **Mission Overwatch** | Per-mission browser workspace; active missions use a full-screen live command view with a tabbed right-rail Mission sidebar, while closed missions use the review workflow |
| **Mission operator** | Separate organization-membership designation that makes a person available in the AlphaRelay Operator roster and permits mission start; it is not an organization role |
| **Mission sharing** | **Share** workflow that gives an eligible user working access to one mission without granting organization-wide access or mission-start authority |
| **Mission Viewer** | **View Live Mission** on Android or **Watch Live Mission** on iOS for active remote live, timeline updates and alerts, event logging, and optional mission-scoped location sharing from a secondary licensed device |
| **Operational Map** | Optional mission map showing the reported positions of selected people carrying licensed Android or iOS devices; saved trails become map evidence files |
| **Mission-specific AI targets** | Up to eight visible details saved for AI live watch on one mission in addition to standard and scenario targets |
| **Offline package** | ZIP archive with viewer for point-in-time mission export |
| **Official mission event** | Undeleted human-created event, approved automatic AI alert, or accepted AI Review finding that received Timeline officer review; this set drives counts, reports, exports, playback markers, and evidence views |
| **Pilot agreement** | Prepared agreement PDF signed through AlphaRelay before or during agency onboarding |
| **Pilot app** | Older documentation term for the Android app now named AlphaRelay Operator |
| **Pilot mode** | Optional direct AlphaRelay aircraft-control mode for supported DJI controller and aircraft combinations after AlphaRelay confirms the live connection |
| **Local AI** | Android settings label for the basic checks that run on the device when AlphaRelay's online AI review is unavailable |
| **Pilot console** | In-app settings (Mission, Flight, Events, System) |
| **Play with Events** | Footage player with synchronized event markers |
| **Public live view** | Read-only link and QR code for an active mission's video, events, and alerts; anyone with the link can view without signing in until an authorized user ends it or the mission closes |
| **Quick events** | One-tap event buttons; agency scenarios can define up to seven, with the standard set used when none is configured |
| **Local Network** | Android-only option in certain deployments for viewing over the same Wi-Fi network; it is not shown in the current public Operator workflow |
| **Scenario template** | Built-in or agency-created mission setup that can provide quick events, report focus, and visible AI watch targets |
| **Trash** | Mission History recovery area that keeps a deleted mission and its linked record recoverable for up to 30 days; authorized admins can permanently **Delete now** sooner |
| **Start a Mission** | Operator landing-screen action that opens **Choose video source** before operator, scenario, mission name, AI targets, and alert setup |
| **Voice relay** | Voice logging with keyword `relay` before event details |
| **What should AI look for?** | Operator-selected tags that define a post-mission AI Review run; at least one is required before **Analyze media** |

---
