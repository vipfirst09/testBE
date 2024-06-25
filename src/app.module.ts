import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { Logger } from '@nestjs/common';
import { MedicalHistory } from './medical-history.entity';
import { MedicalHistoryService } from './medical-history.service';
import { MedicalHistoryController } from './medical-history.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'db_user',
      entities: [Patient,MedicalHistory],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Patient,MedicalHistory])
  ],
  providers: [PatientService, Logger,MedicalHistoryService],
  controllers: [PatientController,MedicalHistoryController],
})
export class AppModule {}
