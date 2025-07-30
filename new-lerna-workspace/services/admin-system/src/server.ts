import dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger/logger';
import dbConfig from './config/db-config';
dotenv.config();
const port = process.env.PORT || 3000;
app.listen(port, async () => {
    await dbConfig();
    logger.info(`Server is running on port ${port}`);
});
process.on('SIGINT', async () => {
 
    process.exit(0);
});