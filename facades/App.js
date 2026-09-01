import MaintenanceBuilder from "../builders/MaintenanceBuilder";
import PathBuilder from "../builders/PathBuilder";
/** Cached PathBuilder instance. */
const pathBuilder = new PathBuilder();
/** Cached MaintenanceBuilder instance. */
const maintenanceBuilder = new MaintenanceBuilder();
/**
 * Static facade exposing builders for the application's core services.
 */
export default class App {
    /** Provides the path builder instance. */
    static get Path() {
        return pathBuilder;
    }
    /** Provides the maintenance builder instance. */
    static get Maintenance() {
        return maintenanceBuilder;
    }
}
