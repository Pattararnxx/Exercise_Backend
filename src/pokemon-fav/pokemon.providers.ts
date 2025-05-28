import { PokemonFav } from './entities/pokemonFav.entity';
import { DataSource } from 'typeorm';

export const pokemonFavProviders = [
  {
    provide: 'POKEMON_FAV_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PokemonFav),
    inject: ['DATA_SOURCE'],
  },
];
