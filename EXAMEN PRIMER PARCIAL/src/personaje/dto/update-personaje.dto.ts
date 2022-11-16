import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePersonajeDto } from './create-personaje.dto';

export class UpdatePersonajeDto extends PartialType(CreatePersonajeDto) {
  @ApiProperty({
    description: 'Ingresar Nombre del personaje',
  })
  nombre_personaje?: string;
  @ApiProperty({
    type: Number,
    description: 'Ingresara los años de experiencia',
  })
  anio_experiencia?: number;
}
