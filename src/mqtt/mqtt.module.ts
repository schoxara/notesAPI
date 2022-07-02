import { Module } from "@nestjs/common";
import { MqttService } from "./mqtt.service";
import { MqttController } from "./mqtt.controller";

@Module({
  providers: [MqttService],
  controllers: [MqttController],
})
export class MqttModule {}
