import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-game',
  templateUrl: './pokemon-game.component.html',
  styleUrls: ['./pokemon-game.component.scss']
})
export class PokemonGameComponent implements OnInit {
  environments: String[] = ['You are in a cave', 'You are in a city',
    'You are in tall grass', 'You are on a beach'];
  tracker: number = 0;
  envMessage: String = 'You are in a forest';
  constructor() { }

  ngOnInit(): void {
  }

  move(){
    this.envMessage = this.environments[this.tracker];
    this.tracker = (this.tracker + 1) % 4;
  }
}
