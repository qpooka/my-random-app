import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-party',
  templateUrl: './pokemon-party.component.html',
  styleUrls: ['./pokemon-party.component.scss']
})
export class PokemonPartyComponent implements OnInit {
  pokemonPics: String[] = ['', '', '', '', '', ''];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  chooseStarter(){
    this.pokemonService.getOnePokemon(722).subscribe((pokemon) => {
      this.pokemonPics[0] = pokemon.sprites.other['official-artwork'].front_default;
    });
  }
}
