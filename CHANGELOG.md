# Changelog
All notable changes to this project will be documented in this file.

---

## [v0.1.26](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.25...v0.1.26) - 2026-09-01

### 🩹 Fixes

### 📖 Changes
- `App.Path` and `App.Maintenance` now return cached singleton instances instead of allocating a new builder on every access
- `PathBuilder` caches the working directory at module level instead of calling `process.cwd()` per instance
- Replaced `defineValue()` calls with native nullish coalescing (`?? ""`)

### 🧪 Tests
- Added test suite (25 tests across 3 files) covering `PathBuilder`, `App` facade caching, and `MaintenanceBuilder`

### ⚡ Benchmarks
- Added benchmark suite comparing baseline (`@bejibun/app@0.1.24`) vs optimized build
- Cold start: **1.37x** faster full process, **4.67x** faster import + first call
- Path methods: **1.08–1.44x** faster (5–6M ops/s)

### 📦 Dependencies

- Removed `@bejibun/utils` `^0.1.29`
- Bumped `@types/bun` from `^3.7.1` to `^3.7.4`
- Bumped `tsc-alias` (devDependency) from `^1.8.16` to `^1.9.3`
- Added `@eslint/js` (devDependency) `^10.0.1`
- Added `eslint` (devDependency) `^10.8.1`
- Added `eslint-config-prettier` (devDependency) `^10.1.8`
- Added `globals` (devDependency) `^17.11.0`
- Added `prettier` (devDependency) `^3.9.6`
- Added `typescript` (devDependency) `^6.0.3`
- Added `typescript-eslint` (devDependency) `^8.69.0`

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.25](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.24...v0.1.25) - 2026-08-20

### 🩹 Fixes

### 📖 Changes
#### Tooling
- Added `prettier` + `.prettierrc.json` / `.prettierignore` and an `eslint.config.js` (flat config, `typescript-eslint`) for consistent formatting/linting across `src`
- Added `bun run format`, `bun run eslint`, and `bun run lint` scripts; `bun run build` now runs `lint` before compiling
- `alias` script now runs `tsc-alias` directly instead of via `bunx`

### 📦 Dependencies

- Bumped `@types/luxon` from `^3.7.1` to `^3.7.4`
- Bumped `tsc-alias` (devDependency) from `^1.8.16` to `^1.9.2`
- Added `@eslint/js` (devDependency) `^10.0.1`
- Added `eslint` (devDependency) `^10.8.1`
- Added `eslint-config-prettier` (devDependency) `^10.1.8`
- Added `globals` (devDependency) `^17.11.0`
- Added `prettier` (devDependency) `^3.9.6`
- Added `typescript` (devDependency) `^6.0.3`
- Added `typescript-eslint` (devDependency) `^8.67.0`

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.24](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.23...v0.1.24) - 2026-05-31

### 🩹 Fixes

### 📖 Changes
- Added `.testsPath(path?: string)` path to `tests` directory
- Added `.websocketsPath(path?: string)` path to `app/websockets` directory

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.23](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.20...v0.1.23) - 2026-01-12

### 🩹 Fixes

### 📖 Changes
What's New :
- Added new path

New Paths :
- `.jobsPath(path?: string)` Path to jobs directory.

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.20](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.18...v0.1.20) - 2025-10-26

### 🩹 Fixes

### 📖 Changes
What's New :
- Adding new paths

New Paths :
- `.controllersPath(path?: string)`
- `.middlewaresPath(path?: string)`
- `.modelsPath(path?: string)`
- `.validatorsPath(path?: string)`

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.18](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.17...v0.1.18) - 2025-10-21

### 🩹 Fixes

### 📖 Changes
What's New :
- Adding `.getData()` on Maintenance for get maintenance data

Breaking Changes :
- Restructure and separating class

```ts
// v0.1.17
App.appPath(...);
App.isMaintenanceMode();

// v0.1.18
App.Path.appPath(...);
App.Maintenance.isMaintenanceMode();
```

Please upgrade to this version carefully.

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.17](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.15...v0.1.17) - 2025-10-21

### 🩹 Fixes

### 📖 Changes
What's New :
- `.isMaintenanceMode()` Maintenance mode status

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.15](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.13...v0.1.15) - 2025-10-21

### 🩹 Fixes
- Fix root path params

### 📖 Changes
What's New :
- `.rootPath()` Path to root of bejibun framework

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.13](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.12...v0.1.13) - 2025-10-20

### 🩹 Fixes

### 📖 Changes
What's New :
- `.routesPath()` Path to root of routes directory

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.12](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.11...v0.1.12) - 2025-10-20

### 🩹 Fixes

### 📖 Changes
What's New :
- `.commandsPath()` Path to root of commands directory

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.11](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.1...v0.1.11) - 2025-10-19

### 🩹 Fixes

### 📖 Changes
What's New :
- `.commandsPath()` Path to root of commands directory

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md

---

## [v0.1.1](https://github.com/Bejibun-Framework/bejibun-app/compare/v0.1.1...v0.1.1) - 2025-10-19

### 🩹 Fixes

### 📖 Changes
What's New :
- Path

Available Paths :
- `.appPath()` Path to root of app directory
- `.basePath()` Path to root of framework
- `.configPath()` Path to root of config directory
- `.databasePath()` Path to root of database directory
- `.publicPath()` Path to root of public directory
- `.resourcesPath()` Path to root of resources directory
- `.storagePath()` Path to root of storage directory

### ❤️Contributors
- Havea Crenata ([@crenata](https://github.com/crenata))
- Ghulje ([@ghulje](https://github.com/ghulje))

**Full Changelog**: https://github.com/Bejibun-Framework/bejibun-app/blob/master/CHANGELOG.md