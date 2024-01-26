import { Controller, Get } from '@nestjs/common';
import { PopulationDataService } from './population-data.service';

@Controller('data')
export class PopulationDataController {
  constructor(private readonly populationDataService: PopulationDataService) {}

  @Get('pre-populated')
  async getNumericData(): Promise<number[]> {
    return this.populationDataService.getNumericData();
  }

  @Get('random')
  generateRandomNumericData(): number {
    return this.populationDataService.generateRandomNumericData();
  }
}
