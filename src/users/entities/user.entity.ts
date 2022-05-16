import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  publicAddress: string;

  @Column({ default: getRandomInt(10000) })
  nonce: number;

  @Column({ default: true })
  isActive: boolean;
}
