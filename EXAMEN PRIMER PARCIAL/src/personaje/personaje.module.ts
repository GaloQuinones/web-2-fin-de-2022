import { Module } from '@nestjs/common';
import { PersonajeService } from './personaje.service';
import { PersonajeController } from './personaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personaje } from './entities/personaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Personaje])],
  controllers: [PersonajeController],
  providers: [PersonajeService],
  exports: [PersonajeService],
})
export class PersonajeModule {}
