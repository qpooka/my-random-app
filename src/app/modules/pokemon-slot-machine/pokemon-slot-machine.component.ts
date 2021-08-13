import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon-model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-slot-machine',
  templateUrl: './pokemon-slot-machine.component.html',
  styleUrls: ['./pokemon-slot-machine.component.scss']
})
export class PokemonSlotMachineComponent implements OnInit {

  money: number = 1000;
  coins: number = 0;
  pokemonSelection: number[] = [722, 445, 245, 566, 399];
  pokemon: String[] = ['', '', ''];

  // 722 > 445 > 245 > 566 > 399
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  moneyForCoins(numberOfCoins: number){
    if(this.money >= numberOfCoins*4){
      this.money -= numberOfCoins*4;
      this.coins += numberOfCoins;
    }

  }

  roll(){
    if(this.coins > 1){
      this.coins -= 2;
      
      for(let i: number = 0; i < 3; i++){
        let pokeId: number = this.randomPokemonSelection();
        this.pokemonService.getOnePokemon(pokeId).subscribe((pokemon: any) => {
          this.pokemon[i] = pokemon.sprites.front_default;
        });
      }
    }

  }//10 15 20 25 30

  randomPokemonSelection(): number{
    const randomNumber: number = Math.floor(Math.random() * 100);
    let pokeId: number = 0;
    if(randomNumber <= 10-1){
      pokeId = 722;
    }
    else if(randomNumber <= 25-1){
      pokeId = 445;
    }
    else if(randomNumber <= 45-1){
      pokeId = 245;
    }
    else if(randomNumber <= 70-1){
      pokeId = 566;
    }
    else{
      pokeId = 399;
    }
    return pokeId;
  }

}
