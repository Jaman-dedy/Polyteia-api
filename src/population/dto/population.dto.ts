export class CreatePopulationDataDto {
  readonly regionId: number;
  readonly ageId: number;
  readonly year: number;
  readonly malePopulation: number;
  readonly femalePopulation: number;
  readonly otherPopulation: number;
}

export class UpdatePopulationDataDto {
  readonly regionId?: number;
  readonly ageId?: number;
  readonly year?: number;
  readonly malePopulation?: number;
  readonly femalePopulation?: number;
  readonly otherPopulation?: number;
}
