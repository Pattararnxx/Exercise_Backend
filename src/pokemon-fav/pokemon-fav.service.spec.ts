import { Test, TestingModule } from '@nestjs/testing';
import { PokemonFavService } from './pokemon-fav.service';

describe('PokemonFavService', () => {
  let service: PokemonFavService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonFavService],
    }).compile();

    service = module.get<PokemonFavService>(PokemonFavService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
