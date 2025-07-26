import { kafka } from "./client";
export const producer = kafka.producer();
export const connectProducer  = async () => {
    await producer.connect();
    console.log("✅ kafka producer connected...");
}
export const disconnectProducer = async () => {
    await producer.disconnect();
    console.log("❌ kafka producer disconnected...");
}
export const sendMessage = async (topic:string  , messages:{value:string}[]) => {
    await producer.send({topic,messages});
    console.log(`📤 Sent message:"${messages.length}" message(s) to topic "${topic}`);
}
