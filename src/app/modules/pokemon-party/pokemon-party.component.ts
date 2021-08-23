import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-pokemon-party',
  templateUrl: './pokemon-party.component.html',
  styleUrls: ['./pokemon-party.component.scss']
})
export class PokemonPartyComponent implements OnInit {
  pokemonPics: String[] = ['', '', '', '', '', ''];

  constructor(private pokemonService: PokemonService) { }
  // for now: use sessionstorage for money and  set up pokemon store

  // another thought:
  // can optimize slot machine and not have it call pokemonService 3
  // times every roll
  // when page is loaded, call 5 times (for each pokemon) and store
  // their image strings (not in sessionStorage)

  ngOnInit(): void {
  }

  chooseStarter(){
    this.pokemonService.getOnePokemon(722).subscribe((pokemon) => {
      this.pokemonPics[0] = pokemon.sprites.other['official-artwork'].front_default;
    });
  }
}
