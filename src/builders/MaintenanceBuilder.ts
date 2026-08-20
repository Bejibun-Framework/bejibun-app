import AppConfig from "@/config/app";

export default class MaintenanceBuilder {
    protected config: Record<string, any>;

    public constructor() {
        this.config = AppConfig.maintenance;
    }

    public async isMaintenanceMode(): Promise<boolean> {
        return await Bun.file(this.config.file).exists();
    }

    public async getData(): Promise<any> {
        return await Bun.file(this.config.file).json();
    }
}
