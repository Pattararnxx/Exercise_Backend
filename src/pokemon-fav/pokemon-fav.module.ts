import { Module } from '@nestjs/common';
import { PokemonFavService } from './pokemon-fav.service';
import { PokemonFavController } from './pokemon-fav.controller';
import { DatabaseModule } from '../database/database.module';
import { pokemonFavProviders } from './pokemon.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PokemonFavController],
  providers: [PokemonFavService, ...pokemonFavProviders],
  exports: [PokemonFavService],
})
export class PokemonFavModule {}
