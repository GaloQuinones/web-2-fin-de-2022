import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSerieDto {
  @ApiProperty({
    description: 'Ingresar Nombre de la serie',
  })
  @IsNotEmpty()
  @Length(1, 30)
  nombre_serie: string;

  @ApiProperty({
    description: 'Ingresar claificacion de la serie Ej: 2.4',
  })
  @IsNotEmpty()
  @Length(1, 10)
  clasificacion: string;
}
