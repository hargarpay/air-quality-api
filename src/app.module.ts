import { Module } from '@nestjs/common';
import { AirQualityModule } from './air-quality/air-quality.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    AirQualityModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_HOST'),
      }),
    }),
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
