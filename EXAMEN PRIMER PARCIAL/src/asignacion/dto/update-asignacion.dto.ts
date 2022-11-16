import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAsignacionDto } from './create-asignacion.dto';

export class UpdateAsignacionDto extends PartialType(CreateAsignacionDto) {
  @ApiProperty({
    description: 'Ingresar el papel que interpreta',
  })
  papel?: string;

  @ApiProperty({
    description: 'Ingresar el tipo de papel que interpreta',
  })
  tipo_papel?: string;

  @ApiProperty({
    description: 'Ingresar la fecha de inicio: dd/mm/aaaa',
  })
  fecha_inicio?: Date;

  @ApiProperty({
    description: 'Ingresar la fecha de terminado: dd/mm/aaaa',
  })
  fecha_fin?: Date;

  @ApiProperty({
    type: Number,
    description: 'Ingresar el numero de temporadas',
  })
  temporadas?: number;
}
