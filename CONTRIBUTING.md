# Contribute to AlphaRelay documentation

Operator docs for AlphaRelay live in this repo as Mintlify MDX pages. See [AGENTS.md](AGENTS.md) for terminology and style conventions.

## How to contribute

### Edit on GitHub

1. Open the page you want to edit
2. Click the pencil icon
3. Submit a pull request

### Local preview

```bash
npm i -g mint
mint dev
```

Use an LTS Node.js version if the Mintlify CLI warns about unsupported Node.

## Writing guidelines

- Match product UI labels (see AGENTS.md)
- Use active voice and address the reader as "you"
- Keep pages short — link to Troubleshooting or Connectivity instead of repeating fixes
- Do not document internal-only admin tools unless explicitly requested
