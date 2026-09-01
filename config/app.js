import PathBuilder from "../builders/PathBuilder";
/**
 * Application configuration values.
 */
const config = {
    /** Settings for the maintenance mode feature. */
    maintenance: {
        file: new PathBuilder().storagePath("framework/maintenance.down.json")
    }
};
export default config;
