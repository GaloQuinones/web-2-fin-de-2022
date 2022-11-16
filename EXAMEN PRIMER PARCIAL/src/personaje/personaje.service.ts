import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personaje } from './entities/personaje.entity';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';

@Injectable()
export class PersonajeService {
  constructor(
    @InjectRepository(Personaje)
    private personajeRepository: Repository<Personaje>,
  ) {}

  //TODO: Crear Personaje
  async create(createPersonajeDto: CreatePersonajeDto) {
    const personajeEncontrado = await this.personajeRepository.findOne({
      where: {
        nombre_personaje: createPersonajeDto.nombre_personaje,
      },
    });

    if (personajeEncontrado) {
      return new HttpException(
        'El nombre del personaje ya existe',
        HttpStatus.CONFLICT,
      );
    }

    const nuevoPersonaje = this.personajeRepository.create(createPersonajeDto);
    return this.personajeRepository.save(nuevoPersonaje);
  }

  //TODO: Listar todos los Personajes
  findAll() {
    return this.personajeRepository.find({
      relations: ['asignacion'],
    });
  }

  //TODO: Buscar un Personaje
  async findOne(id: number) {
    const personajeEncontrado = await this.personajeRepository.findOne({
      where: { id },
      relations: ['asignacion'],
    });

    if (!personajeEncontrado) {
      return new HttpException(
        'No se encuentra el personaje',
        HttpStatus.NOT_FOUND,
      );
    }

    return personajeEncontrado;
  }

  //TODO: Actualizar un Personaje
  async update(id: number, updatePersonajeDto: UpdatePersonajeDto) {
    const personajeEncontrado = await this.personajeRepository.findOne({
      where: { id },
    });

    if (!personajeEncontrado) {
      return new HttpException('Personaje no encontrado', HttpStatus.NOT_FOUND);
    }

    const uodatePersonaje = Object.assign(
      personajeEncontrado,
      updatePersonajeDto,
    );
    return this.personajeRepository.save(uodatePersonaje);
  }

  //TODO: Eliminar un Personaje
  async remove(id: number) {
    const resultado = await this.personajeRepository.delete({ id });

    if (resultado.affected === 0) {
      return new HttpException('Personaje no encontrado', HttpStatus.NOT_FOUND);
    }

    return resultado;
  }
}
