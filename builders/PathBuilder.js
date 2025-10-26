import { defineValue } from "@bejibun/utils";
import path from "path";
export default class PathBuilder {
    cwd;
    constructor() {
        this.cwd = process.cwd();
    }
    appPath(_path) {
        return path.resolve(this.cwd, `app/${defineValue(_path, "")}`);
    }
    basePath(_path) {
        return path.resolve(this.cwd, defineValue(_path, ""));
    }
    commandsPath(_path) {
        return path.resolve(this.cwd, `commands/${defineValue(_path, "")}`);
    }
    configPath(_path) {
        return path.resolve(this.cwd, `config/${defineValue(_path, "")}`);
    }
    controllersPath(_path) {
        return path.resolve(this.cwd, `app/controllers/${defineValue(_path, "")}`);
    }
    databasePath(_path) {
        return path.resolve(this.cwd, `database/${defineValue(_path, "")}`);
    }
    middlewaresPath(_path) {
        return path.resolve(this.cwd, `app/middlewares/${defineValue(_path, "")}`);
    }
    modelsPath(_path) {
        return path.resolve(this.cwd, `app/models/${defineValue(_path, "")}`);
    }
    publicPath(_path) {
        return path.resolve(this.cwd, `public/${defineValue(_path, "")}`);
    }
    resourcesPath(_path) {
        return path.resolve(this.cwd, `resources/${defineValue(_path, "")}`);
    }
    routesPath(_path) {
        return path.resolve(this.cwd, `routes/${defineValue(_path, "")}`);
    }
    rootPath(_path) {
        return path.resolve(this.cwd, defineValue(_path, ""));
    }
    storagePath(_path) {
        return path.resolve(this.cwd, `storage/${defineValue(_path, "")}`);
    }
    validatorsPath(_path) {
        return path.resolve(this.cwd, `app/validators/${defineValue(_path, "")}`);
    }
}
