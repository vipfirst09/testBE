// create-medical-history.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicalHistoryDto {
  @ApiProperty({ description: 'Medical condition description', example: 'High blood pressure' })
  @IsString()
  @IsNotEmpty()
  medicalCondition: string;

  @ApiProperty({ description: 'Patient card number', example: '1234567890' })
  @IsString()
  @IsNotEmpty()
  patientCard: string; 
}
