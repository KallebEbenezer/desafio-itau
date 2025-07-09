import { MainDataSource } from "./data-source";

export async function connectDatabase() {
    try{
        await MainDataSource.initialize()
        .then((response) => {
            return console.log(`Connection database initialized: ${response.isInitialized}`);
        })
    }
    catch(err) {
        if(err instanceof Error) {
            return console.log(`Error: ${err.message}`)
        }
    }
}