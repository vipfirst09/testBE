import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatientDto {
  @ApiProperty({ example: 'ฺBob' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Stave' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: '2000-01-01' })
  @IsDateString()
  @IsNotEmpty()
  dob: string;

  @ApiProperty({ example: '1234567891234' })
  @IsString()
  @IsNotEmpty()
  card: string;

  @ApiProperty({ example: '0123456789' })
  @IsString()
  @IsNotEmpty()
  phone: string;
}
