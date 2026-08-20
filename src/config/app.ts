import PathBuilder from "@/builders/PathBuilder";

const config: Record<string, any> = {
    maintenance: {
        file: new PathBuilder().storagePath("framework/maintenance.down.json")
    }
};

export default config;
