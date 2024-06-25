import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ type: 'date', nullable: false })
  dob: Date;

  @Column({ unique: true })
  card: string;

  @Column({ nullable: false })
  phone: string;

  // Add more columns as needed
}
