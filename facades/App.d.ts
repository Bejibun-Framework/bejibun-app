import MaintenanceBuilder from "../builders/MaintenanceBuilder";
import PathBuilder from "../builders/PathBuilder";
/**
 * Static facade exposing builders for the application's core services.
 */
export default class App {
    /** Provides the path builder instance. */
    static get Path(): PathBuilder;
    /** Provides the maintenance builder instance. */
    static get Maintenance(): MaintenanceBuilder;
}
