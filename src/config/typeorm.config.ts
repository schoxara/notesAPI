import { ConfigModule, ConfigService } from "@nestjs/config";
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from "@nestjs/typeorm";

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService
  ): Promise<TypeOrmModuleOptions> => {
    return {
      type: "postgres",
      host: configService.get("DATABASE_URL"),
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      entities: [__dirname + "/../**/*.entity.{js,ts}"],
      migrations: [__dirname + "/../database/migrations/*{.ts,.js}"],
      keepConnectionAlive: true,
      cli: {
        migrationsDir: __dirname + "/../database/migrations",
      },
      extra: {
        charset: "utf8mb4_unicode_ci",
      },
      synchronize: false,
      url: configService.get("DATABASE_URL"),
      ssl: configService.get("DATABASE_URL")
        ? {
            rejectUnauthorized: false,
          }
        : null,
      logging: true,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  migrations: [__dirname + "/../database/migrations/*{.ts,.js}"],
  cli: {
    migrationsDir: __dirname + "/../database/migrations",
  },
  extra: {
    charset: "utf8mb4_unicode_ci",
  },
  synchronize: false,
  url: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL
    ? {
        rejectUnauthorized: false,
      }
    : null,
  logging: true,
};
