import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PokemonFav } from './entities/pokemonFav.entity';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class PokemonFavService {
  constructor(
    @Inject('POKEMON_FAV_REPOSITORY')
    private favRepository: Repository<PokemonFav>,
  ) {}

  async toggleFavorite(
    email: string,
    dto: CreateFavoriteDto,
  ): Promise<{ isFavorite: boolean }> {
    const found = await this.favRepository.findOne({
      where: { email, pokemon_id: dto.pokemon_id },
    });
    if (found) {
      await this.favRepository.delete({ email, pokemon_id: dto.pokemon_id });
      return { isFavorite: false };
    } else {
      const fav = this.favRepository.create({
        email,
        pokemon_id: dto.pokemon_id,
      });
      await this.favRepository.save(fav);
      return { isFavorite: true };
    }
  }
  async findAll(email: string): Promise<PokemonFav[]> {
    return this.favRepository.find({
      where: { email },
    });
  }
}
