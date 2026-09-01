/**
 * Builds and reads maintenance mode state from the maintenance configuration file.
 */
export default class MaintenanceBuilder {
    /** The maintenance mode configuration loaded from the app config. */
    protected config: Record<string, any>;
    /**
     * Initializes the builder with the maintenance configuration.
     */
    constructor();
    /**
     * Determines whether maintenance mode is currently enabled.
     *
     * @returns {boolean} true when the maintenance file exists, otherwise false.
     */
    isMaintenanceMode(): Promise<boolean>;
    /**
     * Reads the maintenance data stored in the maintenance file.
     *
     * @returns {any} the parsed JSON contents of the maintenance file.
     */
    getData(): Promise<any>;
}
