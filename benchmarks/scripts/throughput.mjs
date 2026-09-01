/**
 * Throughput benchmark.
 *
 * Measures raw call speed for all PathBuilder methods on both baseline (npm 0.1.24) and
 * optimized local version. Logging output is silenced.
 *
 * Run: bun run scripts/throughput.mjs
 */
import {printTable} from "./table-format.mjs";
import {updateReadmeSection} from "./readme-writer.mjs";

const ITERATIONS = 200_000;
const WARMUP = 5_000;

const {default: BaselineApp} = await import("@bejibun-baseline/app");
const {default: OptimizedApp} = await import("../../src/facades/App");

function benchFn(label, fn) {
    for (let i = 0; i < WARMUP; i++) fn(i);
    const t0 = performance.now();
    for (let i = 0; i < ITERATIONS; i++) fn(i);
    const t1 = performance.now();
    return t1 - t0;
}

function fmt(ms) {
    return ms < 1 ? `${(ms * 1000).toFixed(0)}\u00B5s` : `${ms.toFixed(1)}ms`;
}

function sp(b, o) {
    const r = b / o;
    return r >= 1.05 ? `${r.toFixed(2)}x` : r <= 0.95 ? `${r.toFixed(2)}x` : "~1.0x";
}

function ops(ms) {
    return Math.round(ITERATIONS / (ms / 1000)).toLocaleString() + "/s";
}

function fmtOpsNum(ms) {
    return Math.round(ITERATIONS / (ms / 1000)).toLocaleString() + "/s";
}

const bp = BaselineApp.Path;
const op = OptimizedApp.Path;

const data = [
    ["`App.Path.appPath(sub)`", () => bp.appPath("Controllers"), () => op.appPath("Controllers")],
    [
        "`App.Path.basePath(sub)`",
        () => bp.basePath("package.json"),
        () => op.basePath("package.json")
    ],
    [
        "`App.Path.commandsPath(sub)`",
        () => bp.commandsPath("Kernel"),
        () => op.commandsPath("Kernel")
    ],
    ["`App.Path.configPath(sub)`", () => bp.configPath("app"), () => op.configPath("app")],
    [
        "`App.Path.controllersPath(sub)`",
        () => bp.controllersPath("Auth"),
        () => op.controllersPath("Auth")
    ],
    [
        "`App.Path.databasePath(sub)`",
        () => bp.databasePath("migrations"),
        () => op.databasePath("migrations")
    ],
    ["`App.Path.jobsPath(sub)`", () => bp.jobsPath("SendEmail"), () => op.jobsPath("SendEmail")],
    [
        "`App.Path.middlewaresPath(sub)`",
        () => bp.middlewaresPath("Auth"),
        () => op.middlewaresPath("Auth")
    ],
    ["`App.Path.modelsPath(sub)`", () => bp.modelsPath("User"), () => op.modelsPath("User")],
    [
        "`App.Path.publicPath(sub)`",
        () => bp.publicPath("index.html"),
        () => op.publicPath("index.html")
    ],
    [
        "`App.Path.resourcesPath(sub)`",
        () => bp.resourcesPath("views"),
        () => op.resourcesPath("views")
    ],
    ["`App.Path.routesPath(sub)`", () => bp.routesPath("api"), () => op.routesPath("api")],
    [
        "`App.Path.rootPath(sub)`",
        () => bp.rootPath("package.json"),
        () => op.rootPath("package.json")
    ],
    ["`App.Path.storagePath(sub)`", () => bp.storagePath("logs"), () => op.storagePath("logs")],
    ["`App.Path.testsPath(sub)`", () => bp.testsPath("unit"), () => op.testsPath("unit")],
    [
        "`App.Path.validatorsPath(sub)`",
        () => bp.validatorsPath("User"),
        () => op.validatorsPath("User")
    ],
    [
        "`App.Path.websocketsPath(sub)`",
        () => bp.websocketsPath("chat"),
        () => op.websocketsPath("chat")
    ],
    ["`App.Path.appPath()`", () => bp.appPath(), () => op.appPath()],
    ["`App.Path.basePath()`", () => bp.basePath(), () => op.basePath()],
    ["`App.Path.storagePath()`", () => bp.storagePath(), () => op.storagePath()],
    ["`App.Path.rootPath()`", () => bp.rootPath(), () => op.rootPath()]
];

const rows = data.map(([name, bFn, oFn]) => {
    const bMs = benchFn("b", bFn);
    const oMs = benchFn("o", oFn);
    const bpms = bMs.toFixed(1);
    const opms = oMs.toFixed(1);
    return {
        cells: [name.replace(/`/g, ""), fmt(bMs), fmt(oMs), sp(bMs, oMs), ops(oMs)],
        md: [name, bpms, opms, (bMs / oMs).toFixed(2), fmtOpsNum(bMs), fmtOpsNum(oMs)]
    };
});

printTable({
    title: "THROUGHPUT BENCHMARK",
    subtitle: `${ITERATIONS.toLocaleString()} calls each, ${WARMUP.toLocaleString()} warmup calls`,
    headers: ["Method", "Baseline (0.1.24)", "Optimized", "Speedup", "Optimized ops/s"],
    rows: rows.map(({cells}) => ({cells}))
});

const table = [
    "| Method | baseline (0.1.24) | optimized | speedup | baseline ops/s | optimized ops/s |",
    "|---|---|---|---|---|---|",
    ...rows.map(({md}) => `| ${md[0]} | ${md[1]} | ${md[2]} | **${md[3]}** | ${md[4]} | ${md[5]} |`)
].join("\n");

updateReadmeSection("THROUGHPUT", table);
