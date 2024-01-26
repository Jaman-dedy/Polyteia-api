import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Region } from '../../region/entities/region.entity';
import { Age } from '../../age/entities/age.entity';

@Entity()
export class Population {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Region, (region) => region.population)
  region: Region;

  @ManyToOne(() => Age, (age) => age.population)
  age: Age;

  @Column()
  year: number;

  @Column({ type: 'int', name: 'male_population' })
  malePopulation: number;

  @Column({ type: 'int', name: 'female_population' })
  femalePopulation: number;

  @Column({ type: 'int', name: 'other_population' })
  otherPopulation: number;

  @Column()
  population: number;
}
