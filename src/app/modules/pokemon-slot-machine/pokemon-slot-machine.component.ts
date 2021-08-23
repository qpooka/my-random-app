import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon-model';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';

@Component({
  selector: 'app-pokemon-slot-machine',
  templateUrl: './pokemon-slot-machine.component.html',
  styleUrls: ['./pokemon-slot-machine.component.scss']
})
export class PokemonSlotMachineComponent implements OnInit {

  money: number = 1000;
  coins: number = 0;
  pokemonSelection: number[] = [722, 445, 245, 566, 399];
  pokemon: String[] = ['a', 'b', 'c'];
  pokemonId: number[] = [0, 0, 0];
  result: String = '';

  // 722 > 445 > 245 > 566 > 399
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
      let temp: string | null =  sessionStorage.getItem('localMoney');
      if(temp != null){
        this.money = parseInt(temp);
      }
      temp = sessionStorage.getItem('localCoins');
      if(temp != null){
        this.coins = parseInt(temp);
      }
  }

  moneyForCoins(numberOfCoins: number){
    if(this.money >= numberOfCoins*4){
      this.money -= numberOfCoins*4;
      sessionStorage.setItem('localMoney', this.money.toString());
      this.coins += numberOfCoins;
      sessionStorage.setItem('localCoins', this.coins.toString());
    }

  }

  roll(){
    if(this.coins > 1){
      this.coins -= 2;
      sessionStorage.setItem('localCoins', this.coins.toString());
      
      for(let i: number = 0; i < 3; i++){
        let pokeId: number = this.randomPokemonSelection();
        this.pokemonService.getOnePokemon(pokeId).subscribe((pokemon: any) => {
          this.pokemon[i] = pokemon.sprites.front_default;
          this.pokemonId[i] = pokemon.id;
          if(i == 2){
            this.checkRoll();
          }
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

  checkRoll(){
    if((this.pokemonId[0] == this.pokemonId[1]) && (this.pokemon[0] == this.pokemon[2])){
      if(this.pokemonId[0] == 722){
        this.money += 1000;
        this.result = '+1000';
      }
      else if(this.pokemonId[1] == 445){
        this.money += 500;
        this.result = '+500';
      }
      else if(this.pokemonId[0] == 245){
        this.money += 200;
        this.result = '+200';
      }
      else if(this.pokemonId[0] == 566){
        this.money += 2;
        this.result = '+2';
      }
      else{
        this.result = 'too bad!';
      }
    }
    else{
      this.result = 'try again!'
    }
    sessionStorage.setItem('localMoney', this.money.toString());
  }

}
