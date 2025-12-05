# Copilot Instructions for walking-navigation-backend

## Project Overview
Early-stage TypeScript/Node.js backend using ESM modules, esbuild for bundling, and Vitest for testing. This is a minimal setup designed for rapid prototyping.

## Build System & Module Configuration
- **Module System**: Pure ESM (`"type": "module"` in package.json)
- **Build**: `pnpm build` uses esbuild to bundle [src/index.ts](../src/index.ts) to `out/` directory
- **Testing**: `pnpm test` runs Vitest in watch mode
- **Package Manager**: pnpm@10.20.0 (specified in packageManager field)
- **Workspace Config**: [pnpm-workspace.yaml](../pnpm-workspace.yaml) specifies `onlyBuiltDependencies: [esbuild]` - esbuild is built natively, not installed as pre-built binary

## TypeScript Configuration
The [tsconfig.json](../tsconfig.json) uses strict, modern settings:
- **Module resolution**: `"bundler"` mode with `"moduleResolution": "bundler"`
- **Strict null checks**: Includes `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` for maximum type safety
- **ESNext target**: Uses latest JS features (`"target": "esnext"`, `"module": "esnext"`)
- **No emit**: `"noEmit": true` - TypeScript only type-checks; esbuild handles compilation
- **Import extensions**: `allowImportingTsExtensions: true` - can import `.ts` files directly

When writing TypeScript:
- Always account for array access potentially returning `undefined` (due to `noUncheckedIndexedAccess`)
- Use exact optional property types - `prop?: string` means the key can be absent, but if present must be `string | undefined`

## Testing Patterns
See [src/index.test.ts](../src/index.test.ts) for the established pattern:
- Use Vitest (`describe`, `it`, `expect`, `vi`, `beforeEach`, `afterEach`)
- Mock console/external calls with `vi.spyOn()` and `.mockImplementation()`
- Clear mocks in `beforeEach()` and restore in `afterEach()`
- For testing module execution, use dynamic `import()` to re-trigger top-level code:
  ```typescript
  await import("./index");
  ```

## Code Organization
- **Entry point**: [src/index.ts](../src/index.ts) - currently a minimal "Hello, World!" implementation
- **Test co-location**: Tests live alongside source files (`.test.ts` suffix)
- All source code in `src/` directory

## Development Workflow
1. Run tests: `pnpm test` (runs Vitest in watch mode)
2. Build for production: `pnpm build` (outputs to `out/`)
3. Files ignored: `out/`, `node_modules/`, `.env` files (see [.gitignore](../.gitignore))

## License & Author
- **License**: GPL-3.0-or-later (strong copyleft - derivatives must use compatible licenses)
- **Author**: Rahul Parkar
- New files should include GPL-3.0 license headers if they contain substantial code

## Current State
This is a minimal boilerplate project. The actual "walking-navigation-backend" functionality has not been implemented yet. When adding features:
- Maintain ESM module syntax (`import`/`export`, not `require`)
- Add tests alongside implementation files
- Use strict TypeScript - leverage `noUncheckedIndexedAccess` for safety
- Keep the minimal tooling approach (esbuild + Vitest, no complex frameworks)
