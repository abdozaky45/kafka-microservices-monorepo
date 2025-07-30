"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKafkaClient = void 0;
const kafkajs_1 = require("kafkajs");
const createKafkaClient = (clientId) => {
    return new kafkajs_1.Kafka({
        clientId,
        brokers: [process.env.KAFKA_BROKER_URL || "localhost:9092"],
    });
};
exports.createKafkaClient = createKafkaClient;
