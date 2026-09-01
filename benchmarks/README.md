# Benchmarks

Speed comparison: baseline (previously published npm release) vs the optimized `@bejibun/app` in this repo.

## Running

```bash
# Run all benchmarks (installs baseline from npm first)
bun run bench

# Or run individually (after install-deps)
bun run install-deps
bun run coldstart
bun run throughput
```

## Cold Start

Measures import time by spawning fresh OS processes. Two metrics:

- **Full process time** — spawn → exit (includes Bun boot time)
- **Import + first call** — measured inside the process, isolates the package's own cost

<!-- BENCHMARK:COLDSTART:START -->

|                             | baseline | optimized | speedup   |
| --------------------------- | -------- | --------- | --------- |
| Full process (spawn → exit) | 22.1ms   | 16.2ms    | **1.37x** |
| Import → first call         | 14.9ms   | 3.2ms     | **4.67x** |

<!-- BENCHMARK:COLDSTART:END -->

## Throughput

Raw call speed for all `App.Path` methods. 200,000 iterations each, output silenced.

<!-- BENCHMARK:THROUGHPUT:START -->

| Method                          | baseline (0.1.24) | optimized | speedup  | baseline ops/s | optimized ops/s |
| ------------------------------- | ----------------- | --------- | -------- | -------------- | --------------- |
| `App.Path.appPath(sub)`         | 54.6              | 38.0      | **1.44** | 3,663,535/s    | 5,263,238/s     |
| `App.Path.basePath(sub)`        | 42.6              | 37.4      | **1.14** | 4,694,858/s    | 5,340,697/s     |
| `App.Path.commandsPath(sub)`    | 39.0              | 33.7      | **1.16** | 5,126,157/s    | 5,937,663/s     |
| `App.Path.configPath(sub)`      | 38.2              | 31.8      | **1.20** | 5,242,156/s    | 6,284,316/s     |
| `App.Path.controllersPath(sub)` | 42.2              | 34.5      | **1.22** | 4,739,615/s    | 5,794,325/s     |
| `App.Path.databasePath(sub)`    | 37.2              | 31.2      | **1.19** | 5,383,020/s    | 6,407,518/s     |
| `App.Path.jobsPath(sub)`        | 39.5              | 33.6      | **1.18** | 5,058,027/s    | 5,950,365/s     |
| `App.Path.middlewaresPath(sub)` | 38.6              | 32.7      | **1.18** | 5,184,507/s    | 6,109,865/s     |
| `App.Path.modelsPath(sub)`      | 39.3              | 31.1      | **1.26** | 5,084,196/s    | 6,422,396/s     |
| `App.Path.publicPath(sub)`      | 41.4              | 34.6      | **1.19** | 4,835,221/s    | 5,777,091/s     |
| `App.Path.resourcesPath(sub)`   | 40.3              | 34.1      | **1.18** | 4,959,797/s    | 5,857,348/s     |
| `App.Path.routesPath(sub)`      | 37.2              | 32.0      | **1.16** | 5,372,784/s    | 6,256,988/s     |
| `App.Path.rootPath(sub)`        | 33.0              | 43.6      | **0.76** | 6,066,004/s    | 4,584,453/s     |
| `App.Path.storagePath(sub)`     | 36.7              | 30.8      | **1.19** | 5,445,564/s    | 6,494,195/s     |
| `App.Path.testsPath(sub)`       | 36.5              | 33.9      | **1.08** | 5,482,928/s    | 5,899,120/s     |
| `App.Path.validatorsPath(sub)`  | 47.8              | 34.9      | **1.37** | 4,184,065/s    | 5,737,939/s     |
| `App.Path.websocketsPath(sub)`  | 42.6              | 32.2      | **1.32** | 4,697,640/s    | 6,208,378/s     |
| `App.Path.appPath()`            | 31.2              | 35.0      | **0.89** | 6,407,468/s    | 5,707,341/s     |
| `App.Path.basePath()`           | 26.6              | 28.8      | **0.92** | 7,532,616/s    | 6,942,175/s     |
| `App.Path.storagePath()`        | 30.6              | 30.5      | **1.00** | 6,538,911/s    | 6,558,334/s     |
| `App.Path.rootPath()`           | 26.1              | 23.9      | **1.09** | 7,664,945/s    | 8,377,951/s     |

<!-- BENCHMARK:THROUGHPUT:END -->
