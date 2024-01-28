import { Controller, Get } from '@nestjs/common';
import { PopulationDataService } from './population-data.service';
import { RandomDataType } from 'src/types';

@Controller('data')
export class PopulationDataController {
  constructor(private readonly populationDataService: PopulationDataService) {}

  @Get('pre-populated')
  async getNumericData(): Promise<{ status: string; data: number[] }> {
    const response = await this.populationDataService.getNumericData();
    return response;
  }

  @Get('random')
  generateRandomNumericData(): RandomDataType {
    return this.populationDataService.generateRandomNumericData();
  }
}
