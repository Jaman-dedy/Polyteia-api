import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Population } from '../../population/entities/population.entity';

@Entity()
export class Age {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'smallint' })
  minAge: number;

  @Column({ type: 'smallint' })
  maxAge: number;

  @OneToMany(() => Population, (population) => population.age)
  population: Population[];
}
