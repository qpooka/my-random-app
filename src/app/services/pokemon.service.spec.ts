import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Pokemon } from '../models/pokemon-model';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

let mockPokemon: Pokemon;

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

});
