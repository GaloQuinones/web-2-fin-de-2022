import { Module } from '@nestjs/common';
import { AsignacionService } from './asignacion.service';
import { AsignacionController } from './asignacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacion } from './entities/asignacion.entity';
import { SerieModule } from 'src/serie/serie.module';
import { PersonajeModule } from 'src/personaje/personaje.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Asignacion]),
    SerieModule,
    PersonajeModule,
  ],
  controllers: [AsignacionController],
  providers: [AsignacionService],
})
export class AsignacionModule {}
