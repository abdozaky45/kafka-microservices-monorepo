import { Kafka } from "kafkajs";    
export const kafka = new Kafka({
    clientId: "admin-system",
    brokers:["localhost:9092"],
});