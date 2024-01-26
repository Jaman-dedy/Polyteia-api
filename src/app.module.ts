import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionModule } from './region/region.module';
import { AgeModule } from './age/age.module';
import { PopulationModule } from './population/population.module';
import dbConfig from './database/config/db-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
    }),
    RegionModule,
    AgeModule,
    PopulationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
