import AppConfig from "../config/app";
export default class MaintenanceBuilder {
    config;
    constructor() {
        this.config = AppConfig.maintenance;
    }
    async isMaintenanceMode() {
        return await Bun.file(this.config.file).exists();
    }
    async getData() {
        return await Bun.file(this.config.file).json();
    }
}
