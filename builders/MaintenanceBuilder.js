import AppConfig from "../config/app";
/**
 * Builds and reads maintenance mode state from the maintenance configuration file.
 */
export default class MaintenanceBuilder {
    /** The maintenance mode configuration loaded from the app config. */
    config;
    /**
     * Initializes the builder with the maintenance configuration.
     */
    constructor() {
        this.config = AppConfig.maintenance;
    }
    /**
     * Determines whether maintenance mode is currently enabled.
     *
     * @returns {boolean} true when the maintenance file exists, otherwise false.
     */
    async isMaintenanceMode() {
        return await Bun.file(this.config.file).exists();
    }
    /**
     * Reads the maintenance data stored in the maintenance file.
     *
     * @returns {any} the parsed JSON contents of the maintenance file.
     */
    async getData() {
        return await Bun.file(this.config.file).json();
    }
}
