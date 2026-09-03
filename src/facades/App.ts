import MaintenanceBuilder from "@/builders/MaintenanceBuilder";
import PathBuilder from "@/builders/PathBuilder";

/** Lazily cached Path builder instance. */
let pathBuilder: PathBuilder | null = null;

/** Lazily cached Maintenance builder instance. */
let maintenanceBuilder: MaintenanceBuilder | null = null;

/**
 * Static facade exposing builders for the application's core services.
 */
export default class App {
    /** Provides the path builder instance. */
    public static get Path(): PathBuilder {
        if (!pathBuilder) pathBuilder = new PathBuilder();

        return pathBuilder as PathBuilder;
    }

    /** Provides the maintenance builder instance. */
    public static get Maintenance(): MaintenanceBuilder {
        if (!maintenanceBuilder) maintenanceBuilder = new MaintenanceBuilder();

        return maintenanceBuilder as MaintenanceBuilder;
    }
}
