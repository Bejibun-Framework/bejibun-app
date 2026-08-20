import PathBuilder from "../builders/PathBuilder";
const config = {
    maintenance: {
        file: new PathBuilder().storagePath("framework/maintenance.down.json")
    }
};
export default config;
