import {resolve} from "path";

/** Cached working directory. */
const cwd = process.cwd();

/**
 * Builds absolute filesystem paths relative to the current working directory.
 */
export default class PathBuilder {
    /** The current working directory used as the root for all resolved paths. */
    protected cwd: string;

    /**
     * Initializes the builder with the cached working directory.
     */
    public constructor() {
        this.cwd = cwd;
    }

    /**
     * Resolves a path within the app directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the app directory.
     */
    public appPath(_path?: string): string {
        return this.basePath(`app/${_path ?? ""}`);
    }

    /**
     * Resolves a path at the project root.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path at the project root.
     */
    public basePath(_path?: string): string {
        return resolve(this.cwd, _path ?? "");
    }

    /**
     * Resolves a path within the commands directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the commands directory.
     */
    public commandsPath(_path?: string): string {
        return this.basePath(`commands/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the config directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the config directory.
     */
    public configPath(_path?: string): string {
        return this.basePath(`config/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the app/controllers directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the controllers directory.
     */
    public controllersPath(_path?: string): string {
        return this.basePath(`app/controllers/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the database directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the database directory.
     */
    public databasePath(_path?: string): string {
        return this.basePath(`database/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the app/jobs directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the jobs directory.
     */
    public jobsPath(_path?: string): string {
        return this.basePath(`app/jobs/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the app/middlewares directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the middlewares directory.
     */
    public middlewaresPath(_path?: string): string {
        return this.basePath(`app/middlewares/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the app/models directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the models directory.
     */
    public modelsPath(_path?: string): string {
        return this.basePath(`app/models/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the public directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the public directory.
     */
    public publicPath(_path?: string): string {
        return this.basePath(`public/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the resources directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the resources directory.
     */
    public resourcesPath(_path?: string): string {
        return this.basePath(`resources/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the routes directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the routes directory.
     */
    public routesPath(_path?: string): string {
        return this.basePath(`routes/${_path ?? ""}`);
    }

    /**
     * Resolves a path at the project root.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path at the project root.
     */
    public rootPath(_path?: string): string {
        return this.basePath(_path ?? "");
    }

    /**
     * Resolves a path within the storage directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the storage directory.
     */
    public storagePath(_path?: string): string {
        return this.basePath(`storage/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the tests directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the tests directory.
     */
    public testsPath(_path?: string): string {
        return this.basePath(`tests/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the app/validators directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the validators directory.
     */
    public validatorsPath(_path?: string): string {
        return this.basePath(`app/validators/${_path ?? ""}`);
    }

    /**
     * Resolves a path within the app/websockets directory.
     *
     * @param {string} _path - optional sub-path to append.
     * @returns {string} Absolute path to the websockets directory.
     */
    public websocketsPath(_path?: string): string {
        return this.basePath(`app/websockets/${_path ?? ""}`);
    }
}
