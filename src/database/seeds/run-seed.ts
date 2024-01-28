import { NestFactory } from '@nestjs/core';
import { PopulationSeederService } from './population/population-seed.service';
import { SeedModule } from './seed.module';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  await app.get(PopulationSeederService).run();

  await app.close();
};

void runSeed();
