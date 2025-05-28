import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PokemonFavService } from './pokemon-fav.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('pokemon-fav')
@UseGuards(JwtAuthGuard)
export class PokemonFavController {
  constructor(private readonly pokemonFavService: PokemonFavService) {}

  @Post()
  async toggle(
    @Req() req: Request & { user: { email: string } },
    @Body() body: CreateFavoriteDto,
  ) {
    const email = req.user.email;
    return this.pokemonFavService.toggleFavorite(email, body);
  }
  @Get()
  async favs(@Req() req: Request & { user: { email: string } }) {
    const email = req.user.email;
    return this.pokemonFavService.findAll(email);
  }
}
