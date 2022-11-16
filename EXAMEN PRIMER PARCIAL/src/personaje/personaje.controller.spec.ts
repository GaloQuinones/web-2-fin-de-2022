import { Test, TestingModule } from '@nestjs/testing';
import { PersonajeController } from './personaje.controller';
import { PersonajeService } from './personaje.service';

describe('PersonajeController', () => {
  let controller: PersonajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonajeController],
      providers: [PersonajeService],
    }).compile();

    controller = module.get<PersonajeController>(PersonajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
