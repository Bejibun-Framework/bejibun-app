/**
 * Builds absolute filesystem paths relative to the current working directory.
 */
export default class PathBuilder {
    /** The current working directory used as the root for all resolved paths. */
    protected cwd: string;
    /**
     * Initializes the builder with the cached working directory.
     */
    constructor();
    /**
     * Resolves a path within the app directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the app directory.
     */
    appPath(_path?: string): string;
    /**
     * Resolves a path at the project root.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path at the project root.
     */
    basePath(_path?: string): string;
    /**
     * Resolves a path within the commands directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the commands directory.
     */
    commandsPath(_path?: string): string;
    /**
     * Resolves a path within the config directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the config directory.
     */
    configPath(_path?: string): string;
    /**
     * Resolves a path within the app/controllers directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the controllers directory.
     */
    controllersPath(_path?: string): string;
    /**
     * Resolves a path within the database directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the database directory.
     */
    databasePath(_path?: string): string;
    /**
     * Resolves a path within the app/jobs directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the jobs directory.
     */
    jobsPath(_path?: string): string;
    /**
     * Resolves a path within the app/middlewares directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the middlewares directory.
     */
    middlewaresPath(_path?: string): string;
    /**
     * Resolves a path within the app/models directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the models directory.
     */
    modelsPath(_path?: string): string;
    /**
     * Resolves a path within the public directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the public directory.
     */
    publicPath(_path?: string): string;
    /**
     * Resolves a path within the resources directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the resources directory.
     */
    resourcesPath(_path?: string): string;
    /**
     * Resolves a path within the routes directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the routes directory.
     */
    routesPath(_path?: string): string;
    /**
     * Resolves a path at the project root.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path at the project root.
     */
    rootPath(_path?: string): string;
    /**
     * Resolves a path within the storage directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the storage directory.
     */
    storagePath(_path?: string): string;
    /**
     * Resolves a path within the tests directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the tests directory.
     */
    testsPath(_path?: string): string;
    /**
     * Resolves a path within the app/validators directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the validators directory.
     */
    validatorsPath(_path?: string): string;
    /**
     * Resolves a path within the app/websockets directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the websockets directory.
     */
    websocketsPath(_path?: string): string;
}
