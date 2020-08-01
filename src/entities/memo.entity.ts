import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Memo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}