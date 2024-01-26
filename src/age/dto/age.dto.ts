export class CreateAgeDto {
  readonly name: string;
  readonly minAge: number;
  readonly maxAge: number;
}

export class UpdateAgeDto {
  readonly name?: string;
  readonly minAge?: number;
  readonly maxAge?: number;
}
