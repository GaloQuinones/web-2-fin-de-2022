import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonajeService } from 'src/personaje/personaje.service';
import { SerieService } from 'src/serie/serie.service';
import { Repository } from 'typeorm';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { Asignacion } from './entities/asignacion.entity';

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private asignacionRepository: Repository<Asignacion>,
    private seriesService: SerieService,
    private personajesService: PersonajeService,
  ) {}

  //TODO: Crear una Asignacion
  async create(createAsignacionDto: CreateAsignacionDto) {
    const serieEncontrada = await this.seriesService.findOne(
      createAsignacionDto.serieId,
    );
    const personajeEncontrado = await this.personajesService.findOne(
      createAsignacionDto.personajeId,
    );

    console.log(serieEncontrada);
    console.log(personajeEncontrado);
    console.log(serieEncontrada.hasOwnProperty('id'));
    if (!serieEncontrada.hasOwnProperty('id'))
      return new HttpException('No existe la Serie', HttpStatus.NOT_FOUND);

    if (!personajeEncontrado.hasOwnProperty('id'))
      return new HttpException('No existe el Personaje', HttpStatus.NOT_FOUND);

    const nuevaAsigancion =
      this.asignacionRepository.create(createAsignacionDto);
    return this.asignacionRepository.save(nuevaAsigancion);
  }

  //TODO: Listar Asignaciones
  findAll() {
    return this.asignacionRepository.find({
      relations: ['serie', 'personaje'],
    });
  }

  //TODO: Buscar una Asignacion
  async findOne(id: number) {
    const asignacionEncontrada = await this.asignacionRepository.findOne({
      where: { id },
      relations: ['serie', 'personaje'],
    });

    if (!asignacionEncontrada) {
      return new HttpException(
        'No se encuentra la asignacion',
        HttpStatus.NOT_FOUND,
      );
    }

    return asignacionEncontrada;
  }

  //TODO: Actualizar una Asignacion
  async update(id: number, updateAsignacionDto: UpdateAsignacionDto) {
    const asignacionEncontrada = await this.asignacionRepository.findOne({
      where: { id },
    });

    if (!asignacionEncontrada) {
      return new HttpException(
        'Asignacion no encontrada',
        HttpStatus.NOT_FOUND,
      );
    }

    const uodateAsignacion = Object.assign(
      asignacionEncontrada,
      updateAsignacionDto,
    );
    return this.asignacionRepository.save(uodateAsignacion);
  }

  //TODO: Eliminar una Asignacion
  async remove(id: number) {
    const resultado = await this.asignacionRepository.delete({ id });

    if (resultado.affected === 0) {
      return new HttpException(
        'Asignacion no encontrada',
        HttpStatus.NOT_FOUND,
      );
    }

    return resultado;
  }
}
