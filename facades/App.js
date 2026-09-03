import MaintenanceBuilder from "../builders/MaintenanceBuilder";
import PathBuilder from "../builders/PathBuilder";
/** Lazily cached Path builder instance. */
let pathBuilder = null;
/** Lazily cached Maintenance builder instance. */
let maintenanceBuilder = null;
/**
 * Static facade exposing builders for the application's core services.
 */
export default class App {
    /** Provides the path builder instance. */
    static get Path() {
        if (!pathBuilder)
            pathBuilder = new PathBuilder();
        return pathBuilder;
    }
    /** Provides the maintenance builder instance. */
    static get Maintenance() {
        if (!maintenanceBuilder)
            maintenanceBuilder = new MaintenanceBuilder();
        return maintenanceBuilder;
    }
}
