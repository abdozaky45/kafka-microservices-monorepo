import mongoose from 'mongoose';
import dotenv from "dotenv";
import logger from '../utils/logger/logger';
dotenv.config();
const dbConfig = async ():Promise<void> => {
    await mongoose.connect(process.env.MONGO_URI, {}).then(() => {
        logger.info('✅ Database Connected Successfully');
    }).catch((error) => {
        logger.error("❌ Database Connection Failed:", error);
    });
}
export default dbConfig;