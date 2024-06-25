// medical-history.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicalHistory } from './medical-history.entity';
import { CreateMedicalHistoryDto } from './create-medical-history.dto';
import { Patient } from './patient.entity';

@Injectable()
export class MedicalHistoryService {
  constructor(
    @InjectRepository(MedicalHistory)
    private readonly medicalHistoryRepository: Repository<MedicalHistory>,
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async create(historyData: CreateMedicalHistoryDto): Promise<MedicalHistory> {
    const { patientCard, ...rest } = historyData;
    const patient = await this.patientRepository.findOne({ where: { card: patientCard } });
    if (!patient) {
      throw new NotFoundException(`Patient with card ${patientCard} not found.`);
    }

    const medicalHistory = this.medicalHistoryRepository.create({
      ...rest,
      patient,
    });

    return await this.medicalHistoryRepository.save(medicalHistory);
  }

  async findAllByPatientCard(patientCard: string): Promise<any[]> {
    const medicalHistories = await this.medicalHistoryRepository
      .createQueryBuilder('mh')
      .innerJoinAndSelect('mh.patient', 'p')
      .where('p.card = :card', { card: patientCard })
      .getMany();

    if (!medicalHistories) {
      throw new NotFoundException(`Medical histories not found for patient with card: ${patientCard}`);
    }

    return medicalHistories.map(history => ({
      id: history.id,
      medicalCondition: history.medicalCondition,
      firstName: history.patient.firstName,
      lastName: history.patient.lastName,
      phone: history.patient.phone,
    }));
  }
}