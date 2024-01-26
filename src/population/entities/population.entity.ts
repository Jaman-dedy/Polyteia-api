import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PopulationData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric' })
  numericData: number;
}
