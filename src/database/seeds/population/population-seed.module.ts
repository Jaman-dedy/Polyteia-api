import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PopulationData } from '../../../population/entities/population.entity';
import { PopulationSeederService } from './population-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([PopulationData])],
  providers: [PopulationSeederService],
  exports: [PopulationSeederService],
})
export class PopulationSeedModule {}
