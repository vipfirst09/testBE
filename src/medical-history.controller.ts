// medical-history.controller.ts
import { Controller, Get, Post, Body, Param, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';
import { MedicalHistory } from './medical-history.entity';
import { CreateMedicalHistoryDto } from './create-medical-history.dto';

@Controller('medical-history')
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryService: MedicalHistoryService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() historyData: CreateMedicalHistoryDto): Promise<MedicalHistory> {
    return this.medicalHistoryService.create(historyData);
  }

  @Get(':patientCard')
  async findAllByPatientCard(@Param('patientCard') patientCard: string): Promise<MedicalHistory[]> {
    return this.medicalHistoryService.findAllByPatientCard(patientCard);
  }
}
