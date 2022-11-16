import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class CreatePersonajeDto {
  @ApiProperty({
    description: 'Ingresar Nombre del personaje',
  })
  @IsNotEmpty()
  @Length(1, 30)
  nombre_personaje: string;

  @ApiProperty({
    type: Number,
    description: 'Ingresara los años de experiencia',
  })
  @IsNumber()
  anio_experiencia: number;
}
