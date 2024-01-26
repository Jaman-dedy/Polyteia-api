export class CreateRegionDto {
  readonly name: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly populationDensity: number;
}

export class UpdateRegionDto {
  readonly name?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly populationDensity?: number;
}
