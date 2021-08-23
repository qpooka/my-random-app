import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Pokemon } from 'src/app/models/pokemon-model';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { Item } from 'src/app/models/item-model';

let mockPokemon: Pokemon;
let mockItem: Item;

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
    mockPokemon = new Pokemon();
    mockPokemon.name = 'bulbasaur';
    mockItem = new Item();
    mockItem.id = 1;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a specific dummy pokemon when endpoint is called', (done: DoneFn) => {
    service.getOnePokemon(1).subscribe((pokemon) => {
      expect(pokemon).toEqual(mockPokemon);
      done();
    });

    const req = httpMock.expectOne(`${environment.pokemonUrl}/pokemon/1`);
    req.flush(mockPokemon);
  });

  // it('should return a random dummy pokemon when endpoint is called', (done: DoneFn) => {
  //   service.getRandomPokemon().subscribe((pokemon) => {

  //   });

  //   const req = httpMock.expectOne(`${environment.pokemonUrl}/pokemon/`);
  //   req.flush(mockPokemon);
  // });

  it('should return a specific dummy item when endpoint is called', (done: DoneFn) => {
    service.getOneItem(1).subscribe((item) => {
      expect(item).toEqual(mockItem);
      done();
    });

    const req = httpMock.expectOne(`${environment.pokemonUrl}/item/1`);
    req.flush(mockItem);
  });

});
