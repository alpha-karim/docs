# AlphaRelay documentation

Operator documentation for [AlphaRelay](https://www.alpha-relay.com), built with [Mintlify](https://mintlify.com).

## Content

- **Home** — `index.mdx`
- **Start Here** — plain English intro, workflow overview, roles, mission types, Controller Screen Capture and Pilot mode, DJI Avata with DJI Goggles, training exercise
- **Run a Mission** — field prep, start mission, Android Mission Viewer, Mission Overwatch, events, on-device Local AI, closeout
- **Review and Report** — import, upload, playback, report, sealing, offline export
- **Admin Setup** — dashboard, accounts, pilot agreements, org licenses, security, requirements
- **Help** — troubleshooting, connectivity, limitations, glossary

## Local preview

```bash
npm i -g mint
mint dev
```

Open the URL shown in the terminal (often `http://localhost:3000`).

## Publishing

Connect the repo to your Mintlify project in the [dashboard](https://dashboard.mintlify.com) so pushes to the default branch deploy the site.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Editor conventions are in [AGENTS.md](AGENTS.md).

## NotebookLM export

Regenerate the consolidated export after doc changes:

```bash
node scripts/generate-notebooklm-export.mjs
```

Output: `notebooklm-export.md`

Upload that file to the [AlphaRelay NotebookLM notebook](https://notebooklm.google.com/notebook/d83a28f5-b26c-4908-8d5f-2c7fdfda2603) when sources change, then regenerate NotebookLM artifacts if needed. The docs site links to this notebook as **Ask the docs**.
