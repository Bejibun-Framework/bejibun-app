<div align="center">

<img src="https://github.com/Bejibun-Framework/bejibun/blob/master/public/images/bejibun.png?raw=true" width="150" alt="Bejibun" />

![GitHub top language](https://img.shields.io/github/languages/top/Bejibun-Framework/bejibun-app)
![GitHub all releases](https://img.shields.io/github/downloads/Bejibun-Framework/bejibun-app/total)
![GitHub issues](https://img.shields.io/github/issues/Bejibun-Framework/bejibun-app)
![GitHub](https://img.shields.io/github/license/Bejibun-Framework/bejibun-app)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/Bejibun-Framework/bejibun-app?display_name=tag&include_prereleases)

</div>

# App of Bejibun
App of Bejibun Framework.

## Usage

### Installation
Install the package.

```bash
# Using Bun
bun add @bejibun/app

# Using Bejibun
bun ace install @bejibun/app
```

### How to Use
How to use tha package.

```ts
import App from "@bejibun/app";

App.Path.appPath("controllers/TestController.ts"); // .../app/controllers/TestController.ts
App.Path.basePath("package.json"); // .../package.json
App.Path.commandsPath("HelloWorldCommand.ts"); // .../commands/HelloWorldCommand.ts
App.Path.configPath("database.ts"); // .../config/database.ts
App.Path.databasePath("migrations/20251019_000001_tests.ts"); // .../database/migrations/20251019_000001_tests.ts
App.Path.publicPath("images/logo.png"); // .../public/images/logo.png
App.Path.resourcesPath("views/index.ts"); // .../resources/views/index.ts
App.Path.routesPath("api.ts"); // .../routes/api.ts
App.Path.rootPath(); // .../ root of bejibun framework
App.Path.storagePath("app/public/file.txt"); // .../storage/app/public/file.txt

App.Maintenance.isMaintenanceMode(); // boolean
App.Maintenance.getData(); // json
```

## Contributors
- [Havea Crenata](mailto:havea.crenata@gmail.com)

## ☕ Support / Donate

If you find this project helpful and want to support it, you can donate via crypto :

| EVM                                                                                                     | Solana                                                                                                  |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/Bejibun-Framework/bejibun/blob/master/public/images/EVM.png?raw=true" width="150" /> | <img src="https://github.com/Bejibun-Framework/bejibun/blob/master/public/images/SOL.png?raw=true" width="150" /> |
| 0xdABe8750061410D35cE52EB2a418c8cB004788B3                                                              | GAnoyvy9p3QFyxikWDh9hA3fmSk2uiPLNWyQ579cckMn                                                            |

Or you can buy this `$BJBN (Bejibun)` tokens [here](https://pump.fun/coin/CQhbNnCGKfDaKXt8uE61i5DrBYJV7NPsCDD9vQgypump), beware of bots.