import { Module } from '@nestjs/common';
import { AirQualityService } from './air-quality.service';
import { AirQualityController } from './air-quality.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pollution, PollutionSchema } from '../common/schemas/pollution.schema';
import { ConfigModule } from '@nestjs/config';
import { AirQualityRepository } from './air-quality.repository';
import { ProvidersModule } from '../common/providers/providers.module';
import { AirQualityCron } from './air-quality.cron';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pollution.name, schema: PollutionSchema },
    ]),
    ConfigModule.forRoot(),
    ProvidersModule,
  ],
  providers: [AirQualityService, AirQualityRepository, AirQualityCron],
  controllers: [AirQualityController],
})
export class AirQualityModule {}
