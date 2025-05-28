import { Test, TestingModule } from '@nestjs/testing';
import { PokemonFavController } from './pokemon-fav.controller';
import { PokemonFavService } from './pokemon-fav.service';

describe('PokemonFavController', () => {
  let controller: PokemonFavController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonFavController],
      providers: [PokemonFavService],
    }).compile();

    controller = module.get<PokemonFavController>(PokemonFavController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
