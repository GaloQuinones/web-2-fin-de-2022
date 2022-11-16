import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';
import { CreateSerieDto } from './create-serie.dto';

export class UpdateSerieDto extends PartialType(CreateSerieDto) {
  @ApiProperty({
    description: 'Ingresar Nombre de la serie',
  })
  nombre_serie?: string;
  @ApiProperty({
    description: 'Ingresar Nombre de la serie',
  })
  clasificacion?: string;
}
