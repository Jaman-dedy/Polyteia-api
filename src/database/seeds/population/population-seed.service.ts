import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PopulationData } from '../../../population/entities/population.entity';

@Injectable()
export class PopulationSeedService {
  constructor(
    @InjectRepository(PopulationData)
    private readonly populationRepository: Repository<PopulationData>,
  ) {}

  async seedPopulationData(): Promise<void> {
    // Assuming seedData is an array of Population entity objects
    const seedData: PopulationData[] = [
      { id: 1, numericData: 1000 },
      { id: 2, numericData: 1500 },
      { id: 3, numericData: 2000 },
    ];

    await this.populationRepository.save(seedData);
  }
}
