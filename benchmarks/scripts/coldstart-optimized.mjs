const realLog = console.log;
console.log = () => {};

const t0 = performance.now();
const {default: App} = await import("../../src/facades/App");
App.Path.storagePath("framework/maintenance.down.json");

const t1 = performance.now();
console.log = realLog;
process.stderr.write(String(t1 - t0));
