import { Kafka } from "kafkajs";    
export const kafka = new Kafka({
    clientId: "user-system",
    brokers:["localhost:9092"],
});