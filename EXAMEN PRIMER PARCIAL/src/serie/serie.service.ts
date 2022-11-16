import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Serie } from './entities/serie.entity';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(Serie) private serieRepository: Repository<Serie>,
  ) {}

  //TODO: Crear Serie
  async create(createSerieDto: CreateSerieDto) {
    const serieEncontrada = await this.serieRepository.findOne({
      where: {
        nombre_serie: createSerieDto.nombre_serie,
      },
    });

    if (serieEncontrada) {
      return new HttpException(
        'El nombre de la serie ya existe',
        HttpStatus.CONFLICT,
      );
    }

    const nuevaSerie = this.serieRepository.create(createSerieDto);
    return this.serieRepository.save(nuevaSerie);
  }

  //TODO: Listar todas las Series
  findAll() {
    return this.serieRepository.find({
      relations: ['asignacion'],
    });
  }

  //TODO: Buscar una Serie
  async findOne(id: number) {
    const serieEncontrada = await this.serieRepository.findOne({
      where: { id },
      relations: ['asignacion'],
    });

    if (!serieEncontrada) {
      return new HttpException(
        'No se encuentra la serie',
        HttpStatus.NOT_FOUND,
      );
    }

    return serieEncontrada;
  }

  //TODO: Actualizar una serie
  async update(id: number, updateSerieDto: UpdateSerieDto) {
    const serieEncontrada = await this.serieRepository.findOne({
      where: { id },
    });

    if (!serieEncontrada) {
      return new HttpException('Serie no encontrada', HttpStatus.NOT_FOUND);
    }

    const uodateSerie = Object.assign(serieEncontrada, updateSerieDto);
    return this.serieRepository.save(uodateSerie);
  }

  //TODO: Eliminar una serie
  async remove(id: number) {
    const resultado = await this.serieRepository.delete({ id });

    if (resultado.affected === 0) {
      return new HttpException('Serie no encontrada', HttpStatus.NOT_FOUND);
    }

    return resultado;
  }
}
