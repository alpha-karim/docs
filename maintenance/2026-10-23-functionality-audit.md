# Public documentation audit: October 23, 2026

Internal maintenance record; not a public navigation page.

Compared docs commit `158e126` from September 19 with application `origin/main` through `56e39a8e7154864c4f086323cd00c8a347d4fdf8`. Reviewed the 163 non-merge commits dated September 19 onward, including a conservative overlap on the previous update day. Both repositories were clean at the start. The application checkout was behind origin/main; latest AI Review and saved-answer behavior was inspected directly from origin/main without changing the app checkout.

## Changes carried into officer guides

| Topic | Source evidence | Documentation decision |
| --- | --- | --- |
| Combined incident records | `94f0e5f0`, `6fc2b4e1`, `4fb0cd5b`, `1191c196`; dashboard.js; tests/mission-merge.test.mjs | Add Combine missions guide; explain hidden originals, retained evidence, attribution, and separate combined-record review. |
| Public live viewing | October 2 video-only changes; mission-live.js; tests/public-mission-live-view.test.mjs | Remove all promises that public recipients can see events or alerts. |
| Agency-controlled on-device AI and optional online assistance | `68f7cfb0`, `46f99066`, `df5c853f`, `6d19214c`, `fdbe017d`, `fe371f5b`; native active-mission views and tests/radar-hybrid-live.test.mjs | Describe available modes conditionally and in plain language. Respect organization-gated branding; do not advertise that internal feature name publicly. Do not equate on-device AI with offline video delivery or no evidence upload. |
| Flight alerts and screen capture | September/October native capture fixes; Android strings and active-mission UI; iOS ActiveMissionView.swift | Explain Android banners over flight apps, iPhone alert surfaces, supported source choices, and keeping the viewer open for received-video on-device checks. Do not claim universal physical-device validation. |
| Verified upload cleanup | `594061ab`, `2556422b`, `f78cd721`; `6be88079` | Explain verified online recording, automatic local-file cleanup, pending-file retention, and late-arriving Media updates. |
| AI Review freshness and history | `5be01bdc`, `5997220b`; origin/main mvp.js and tests/mission-ai-latest-review.test.mjs | Opening the tab loads current results; Refresh is for active work; earlier analyses remain; remove stale Redo and continuous-update claims. |
| Evidence-backed questions and counts | `cb653bb1`, `d72c521b`, `a7587ab8`, `211915b3`; api/openai/_question-evidence.js; latest count tests and browser UI | Explain picture versus recording-wide scope, timestamped sightings, unresolved counts, Resume recording review, withdrawn answers, and camera-relative positions. |
| Review completion and report printing | `7eef0a09`, `a62012be`; current mvp.js | Explain the next-step button and automatic dismissal; document Print / Save PDF and review the printed status. |
| Organization context and activation | `fdbe017d`, `e9d8b495`; app sidebar and Android strings | Check organization name; use Operator's QR scanner. Internal super-admin entry and notification changes are not presented as ordinary officer functions. |

## Scope and verification

Public instructions are written for officers using recognizable devices, brands, controls, and outcomes. Exact technical button labels remain only where needed to locate a control, with plain explanations. The consolidated export is regenerated from navigation after changes.

This audit verifies committed app behavior and documentation consistency. It does not independently prove production deployment, App Store/TestFlight availability for every build, or physical mission behavior. Agency-enabled capabilities remain explicitly conditional. Internal billing, telemetry, admin-only maps, experimental camera work removed from operational choices, and test-only changes are not advertised as new officer features.
