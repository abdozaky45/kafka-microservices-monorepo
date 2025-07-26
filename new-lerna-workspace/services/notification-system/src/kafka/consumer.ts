import { kafka } from "./client";
export const consumer = kafka.consumer({ groupId: "test-group" });
export const connectConsumer = async () => {
    try {
        await consumer.connect();
        await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                    topic,
                    partition,
                    value: message.value?.toString(),
                    key: message.key?.toString(),
                });
            },
        });
        console.log('✅ Kafka Consumer connected and listening...');
    } catch (error) {
        console.error('❌ Error connecting Kafka Consumer:', error);
    }
}
export const disconnectConsumer = async () => {
    try {
        await consumer.disconnect();
        console.log('❌ Kafka Consumer disconnected...');
    } catch (error) {
        console.error('❌ Error disconnecting Kafka Consumer:', error);
    }
}
