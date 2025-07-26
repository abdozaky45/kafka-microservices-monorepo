import dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger/logger';
import dbConfig from './config/db-config';
import { connectProducer, disconnectProducer } from './kafka/producer';
import { connectConsumer, disconnectConsumer } from './kafka/consumer';
dotenv.config();
const port = process.env.PORT || 3000;
app.listen(port, async () => {
    await dbConfig();
    await connectProducer();
    await connectConsumer();
    logger.info(`Server is running on port ${port}`);
});
process.on('SIGINT', async () => {
    await disconnectProducer();
    await disconnectConsumer();
    process.exit(0);
});