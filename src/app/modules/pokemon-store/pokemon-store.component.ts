import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-store',
  templateUrl: './pokemon-store.component.html',
  styleUrls: ['./pokemon-store.component.scss']
})
export class PokemonStoreComponent implements OnInit {
  money: number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

}