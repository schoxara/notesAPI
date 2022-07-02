import { Controller, Inject, Post } from "@nestjs/common";
import {
  ClientProxy,
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from "@nestjs/microservices";
import { SendNotifiationDTO } from "./dto/sendNotification.dto";
import { MqttService } from "./mqtt.service";

@Controller("mqtt")
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @MessagePattern("notes")
  getNotifications(@Payload() data): string {
    return `I Got message: ${JSON.stringify(data)}`;
  }

  @Post("notifications")
  sendNotification(@Payload() data: SendNotifiationDTO) {
    this.mqttService.sendMessageToTopic(data);
  }
}
