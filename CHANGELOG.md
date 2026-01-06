# Changelog
All notable changes to this project will be documented in this file.

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