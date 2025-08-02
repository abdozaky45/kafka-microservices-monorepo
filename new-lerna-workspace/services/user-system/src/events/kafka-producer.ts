import { KafkaClient } from "../../../shared/kafka/src/kafka-client";
const kafka = new KafkaClient("user-system");

export const sendUserCreatedEvent = async () => { 
    await kafka.connectProducer();
    await kafka.sendMessage("user-created", [
        {
            // key: data.user._id,
            // value: data.user,
             key: "123",
            value: JSON.stringify({
                id: "123",
                email: "user@example.com",
                name: "John Doe"
            }),
        }
    ]);
    console.log("User created event sent successfully=======================");
}