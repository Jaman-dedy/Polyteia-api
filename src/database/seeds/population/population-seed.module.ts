import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PopulationData } from '../../../population/entities/population.entity';
import { PopulationSeedService } from './population-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([PopulationData])],
  providers: [PopulationSeedService],
  exports: [PopulationSeedService],
})
export class PopulationSeedModule {}
