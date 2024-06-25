// medical-history.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Patient } from './patient.entity';

@Entity()
export class MedicalHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  medicalCondition: string;

  @ManyToOne(() => Patient, { nullable: false })
  @JoinColumn({ name: 'patientCard', referencedColumnName: 'card' })
  patient: Patient;  

}
