import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './create-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async findAll(): Promise<Patient[]> {
    return await this.patientRepository.find();
  }

  async findOne(id: number): Promise<Patient> {
    return await this.patientRepository.findOneBy({ id });
  }

  async create(patientData: CreatePatientDto): Promise<Patient> {
    const patient = this.patientRepository.create(patientData);
    return await this.patientRepository.save(patient);
  }

  async update(id: number, patientData: CreatePatientDto): Promise<Patient> {
    await this.patientRepository.update(id, patientData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.patientRepository.delete(id);
  }
}
