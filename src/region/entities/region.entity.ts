import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Population } from '../../population/entities/population.entity';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  populationDensity: number;

  @OneToMany(() => Population, (population) => population.region)
  population: Population[];
}
