import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './create-patient.dto';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  async findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Patient> {
    return this.patientService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() patientData: CreatePatientDto): Promise<Patient> {
    return this.patientService.create(patientData);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id', ParseIntPipe) id: number, @Body() patientData: CreatePatientDto): Promise<Patient> {
    return this.patientService.update(id, patientData);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.patientService.remove(id);
  }
}
