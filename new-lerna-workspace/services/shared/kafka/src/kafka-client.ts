import { Kafka, Producer, Consumer, EachMessagePayload, Message } from "kafkajs";
export class KafkaClient {
    private kafka: Kafka;
    private producer: Producer | null = null;
    private consumer: Consumer | null = null;
    constructor(private clientId: string, private brokers: string[] = [process.env.KAFKA_BROKERS || 'localhost:9092']) {
        this.kafka = new Kafka({
            clientId: this.clientId,
            brokers: this.brokers
        });
    }
    async connectProducer(): Promise<void> {
        if (!this.producer) {
            this.producer = this.kafka.producer();
            await this.producer.connect();
            console.log("Producer connected");
        }
    }
    async sendMessage(topic: string, messages: Message[]): Promise<void> {
        await this.connectProducer();
        await this.producer?.send({
            topic,
            messages
        })
    }
    async startConsumer(topic: string, groupId: string, onMessage: (payload: EachMessagePayload) => Promise<void>) {
        if (!this.consumer) {
            this.consumer = this.kafka.consumer({ groupId });
            await this.consumer.connect();
            await this.consumer.subscribe({ topic, fromBeginning: true });
            console.log("Consumer connected");
        }
        await this.consumer.run({
            eachMessage: async (payload: EachMessagePayload) => {
                try {
                    await onMessage(payload);
                } catch (error) {
                    console.error("Error processing message:", error);
                }
            }
        })
    }
    async disconnect(): Promise<void> {
        if (this.producer) {
            await this.producer.disconnect();
            console.log("Producer disconnected");
        }
        if (this.consumer) {
            await this.consumer.disconnect();
            console.log("Consumer disconnected");
        }
    }
}