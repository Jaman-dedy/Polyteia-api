import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PopulationData } from './entities/population.entity';

@Injectable()
export class PopulationDataService {
  constructor(
    @InjectRepository(PopulationData)
    private populationDataRepository: Repository<PopulationData>,
  ) {}

  async getNumericData(): Promise<number[]> {
    const data = await this.populationDataRepository.find();
    return data.map((item) => item.numericData);
  }

  generateRandomNumericData(): number {
    return Math.random();
  }
}
