import { Injectable, OnModuleInit } from "@nestjs/common";
import { MqttClient } from "@nestjs/microservices/external/mqtt-client.interface";
import { connect } from "mqtt";
import { SendNotifiationDTO } from "./dto/sendNotification.dto";

@Injectable()
export class MqttService implements OnModuleInit {
  private mqttClient: MqttClient;
  topic = "notes";

  onModuleInit() {
    const host = process.env.MQTT_HOST;
    const port = process.env.MQTT_PORT;

    const connectUrl = `mqtt://${host}:${port}`;

    this.mqttClient = connect(connectUrl, {
      clean: true,
      connectTimeout: 4000,
      reconnectPeriod: 1000,
    });

    this.mqttClient.on("connect", function () {
      console.log("Connected to MQTT");
    });

    this.mqttClient.on("error", function () {
      console.log("Error in connecting to MQTT");
    });

    this.mqttClient.subscribe(["notes"], (data: any) => {
      console.log(`Subscribe to topic '${"notes"}'`);
    });

    this.mqttClient.on("message", (topic, payload) => {
      console.log("Received Message:", topic, payload.toString());
    });
  }

  sendMessageToTopic(data: SendNotifiationDTO) {
    return this.mqttClient.publish(this.topic, data.message, {
      qos: 0,
      retain: true,
    });
  }
}
