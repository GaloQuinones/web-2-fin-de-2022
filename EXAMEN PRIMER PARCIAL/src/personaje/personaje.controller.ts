import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PersonajeService } from './personaje.service';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';
import { ApiTags } from '@nestjs/swagger/dist/decorators';

@ApiTags('Personaje')
@Controller('personaje')
export class PersonajeController {
  constructor(private readonly personajeService: PersonajeService) {}

  @Post()
  create(@Body() createPersonajeDto: CreatePersonajeDto) {
    return this.personajeService.create(createPersonajeDto);
  }

  @Get()
  findAll() {
    return this.personajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.personajeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePersonajeDto: UpdatePersonajeDto,
  ) {
    return this.personajeService.update(+id, updatePersonajeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.personajeService.remove(+id);
  }
}
