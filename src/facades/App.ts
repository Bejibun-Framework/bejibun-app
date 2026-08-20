import MaintenanceBuilder from "@/builders/MaintenanceBuilder";
import PathBuilder from "@/builders/PathBuilder";

export default class App {
    public static get Path(): PathBuilder {
        return new PathBuilder();
    }

    public static get Maintenance(): MaintenanceBuilder {
        return new MaintenanceBuilder();
    }
}
