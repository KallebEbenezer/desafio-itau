import { MainDataSource } from "./data-source";

export const connectDatabase = async () => {
    try {
        await MainDataSource.initialize()
        console.log("Database connection established successfully.");
    }
    catch (error) {
        console.log("Error during Data Source initialization:", error);
    }
}