import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PopulationData } from './entities/population.entity';
import { PopulationDataService } from './population-data.service';
import { PopulationDataController } from './population-data.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PopulationData])],
  providers: [PopulationDataService],
  controllers: [PopulationDataController],
})
export class PopulationModule {}
