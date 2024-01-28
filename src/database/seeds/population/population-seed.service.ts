import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { PopulationData } from '../../../population/entities/population.entity';

@Injectable()
export class PopulationSeederService {
  constructor(
    @InjectRepository(PopulationData)
    private readonly populationDataRepository: Repository<PopulationData>,
  ) {}

  async run() {
    try {
      const populationData = [];
      const NUM_ENTRIES = 100;

      for (let i = 0; i < NUM_ENTRIES; i++) {
        const data = new PopulationData();
        data.numericData = faker.number.int({ min: 1, max: 1000 });
        populationData.push(data);
      }

      await this.populationDataRepository.save(populationData);
      console.log('Population data seeded successfully.');
    } catch (error) {
      console.error('Error seeding population data:', error);
    }
  }
}
