import {
    describe,
    expect,
    test
} from "bun:test";
import {resolve} from "path";
import MaintenanceBuilder from "../src/builders/MaintenanceBuilder";
import PathBuilder from "../src/builders/PathBuilder";
import App from "../src/facades/App";

describe("App", async () => {
    test("App.Path returns PathBuilder instance", () => {
        const p = App.Path;

        expect(p).toBeDefined();
        expect(typeof p.storagePath).toBe("function");
    });

    test("App.Path returns same instance (cached)", () => {
        const a = App.Path;
        const b = App.Path;

        expect(a).toBe(b);
    });

    test("App.Maintenance returns MaintenanceBuilder instance", () => {
        const m = App.Maintenance;

        expect(m).toBeDefined();
        expect(typeof m.isMaintenanceMode).toBe("function");
    });

    test("App.Maintenance returns same instance (cached)", () => {
        const a = App.Maintenance;
        const b = App.Maintenance;

        expect(a).toBe(b);
    });
});

describe("MaintenanceBuilder", async () => {
    test("isMaintenanceMode returns boolean", async () => {
        const mb = new MaintenanceBuilder();
        const result = await mb.isMaintenanceMode();

        expect(typeof result).toBe("boolean");
    });

    test("isMaintenanceMode returns false when no maintenance file", async () => {
        const mb = new MaintenanceBuilder();
        const result = await mb.isMaintenanceMode();

        expect(result).toBe(false);
    });
});

describe("PathBuilder", async () => {
    const cwd = process.cwd();

    test("appPath returns absolute path to app/", () => {
        const pb = new PathBuilder();

        expect(pb.appPath()).toBe(resolve(cwd, "app/"));
    });

    test("appPath appends sub-path", () => {
        const pb = new PathBuilder();

        expect(pb.appPath("Controllers")).toBe(resolve(cwd, "app/Controllers"));
    });

    test("basePath returns cwd root", () => {
        const pb = new PathBuilder();

        expect(pb.basePath()).toBe(resolve(cwd, ""));
    });

    test("basePath appends sub-path", () => {
        const pb = new PathBuilder();

        expect(pb.basePath("package.json")).toBe(resolve(cwd, "package.json"));
    });

    test("commandsPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.commandsPath()).toBe(resolve(cwd, "commands/"));
    });

    test("configPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.configPath()).toBe(resolve(cwd, "config/"));
    });

    test("controllersPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.controllersPath()).toBe(resolve(cwd, "app/controllers/"));
    });

    test("databasePath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.databasePath()).toBe(resolve(cwd, "database/"));
    });

    test("jobsPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.jobsPath()).toBe(resolve(cwd, "app/jobs/"));
    });

    test("middlewaresPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.middlewaresPath()).toBe(resolve(cwd, "app/middlewares/"));
    });

    test("modelsPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.modelsPath()).toBe(resolve(cwd, "app/models/"));
    });

    test("publicPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.publicPath()).toBe(resolve(cwd, "public/"));
    });

    test("resourcesPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.resourcesPath()).toBe(resolve(cwd, "resources/"));
    });

    test("routesPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.routesPath()).toBe(resolve(cwd, "routes/"));
    });

    test("rootPath returns cwd", () => {
        const pb = new PathBuilder();

        expect(pb.rootPath()).toBe(resolve(cwd, ""));
    });

    test("storagePath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.storagePath()).toBe(resolve(cwd, "storage/"));
    });

    test("testsPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.testsPath()).toBe(resolve(cwd, "tests/"));
    });

    test("validatorsPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.validatorsPath()).toBe(resolve(cwd, "app/validators/"));
    });

    test("websocketsPath returns absolute path", () => {
        const pb = new PathBuilder();

        expect(pb.websocketsPath()).toBe(resolve(cwd, "app/websockets/"));
    });
});
