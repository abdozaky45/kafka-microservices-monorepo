import { Kafka } from "kafkajs";    
export const kafka = new Kafka({
    clientId: "notification-system",
    brokers:["localhost:9092"],
});