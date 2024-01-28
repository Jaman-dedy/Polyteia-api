import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PopulationData } from './entities/population.entity';
import { RandomDataType } from '../types/index';

@Injectable()
export class PopulationDataService {
  constructor(
    @InjectRepository(PopulationData)
    private populationDataRepository: Repository<PopulationData>,
  ) {}

  async getNumericData(): Promise<{
    status: string;
    data: number[];
    message?: string;
  }> {
    try {
      const data = await this.populationDataRepository.find();
      const numericData = data.map((item) => item.numericData);
      return { status: 'success', data: numericData };
    } catch (error) {
      return { status: 'error', data: [], message: error.message };
    }
  }

  generateRandomNumericData(): RandomDataType {
    const randomData = [];
    const NUM_ENTRIES = 100;
    for (let i = 0; i < NUM_ENTRIES; i++) {
      const data = faker.number.int({ min: 1, max: 1000 });
      randomData.push(data);
    }
    return { status: 'success', data: randomData };
  }
}
