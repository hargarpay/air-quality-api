import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { IqAirProvider } from './iqair.provider';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  providers: [IqAirProvider],
  exports: [IqAirProvider],
})
export class ProvidersModule {}
