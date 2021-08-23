import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-store',
  templateUrl: './pokemon-store.component.html',
  styleUrls: ['./pokemon-store.component.scss']
})
export class PokemonStoreComponent implements OnInit {
  money: number = 0;
  standardItemIds: number[] = [3, 4, 17, 18, 19, 20, 21, 22, 26];
  // 3=great-ball, 4=pokeball, 17=potion, 18=antidote, 19=burn-heal, 
  // 20-ice-heal, 21=sleep-heal, 22=paralyze-heal, 26=super-potion
  standardItems: string[] = ['', '', '', '', '', '', '', '', ''];
  constructor() { }

  ngOnInit(): void {

  }

}
