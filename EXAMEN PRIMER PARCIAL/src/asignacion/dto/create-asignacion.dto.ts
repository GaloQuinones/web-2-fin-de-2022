import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAsignacionDto {
  @ApiProperty({
    description: 'Ingresar el papel que interpreta',
  })
  @IsNotEmpty()
  @Length(1, 50)
  papel: string;

  @ApiProperty({
    description: 'Ingresar el tipo de papel que interpreta',
  })
  @IsNotEmpty()
  @Length(1, 100)
  tipo_papel: string;

  @ApiProperty({
    description: 'Ingresar la fecha de inicio: dd/mm/aaaa',
  })
  @IsNotEmpty()
  fecha_inicio: Date;

  @ApiProperty({
    description: 'Ingresar la fecha de terminado: dd/mm/aaaa',
  })
  @IsNotEmpty()
  fecha_fin: Date;

  @ApiProperty({
    type: Number,
    description: 'Ingresar el numero de temporadas',
  })
  @IsNotEmpty()
  temporadas: number;

  @ApiProperty({
    type: Number,
    description: 'Ingresar el ID de la serie que esta relacionada',
  })
  @IsNotEmpty()
  serieId: number;

  @ApiProperty({
    type: Number,
    description: 'Ingresar el ID del personaje que esta relacionada',
  })
  @IsNotEmpty()
  personajeId: number;
}
