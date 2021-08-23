import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon-model';
import { PokemonService } from 'src/app/services/pokemon-service/pokemon.service';

import { PokemonPartyComponent } from './pokemon-party.component';

let mockPokemon: Pokemon;

class mockPokemonService{
  getOnePokemon(): any{};
}

describe('PokemonPartyComponent', () => {
  let component: PokemonPartyComponent;
  let fixture: ComponentFixture<PokemonPartyComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonPartyComponent ],
      providers: [{provide: PokemonService, useClass: mockPokemonService}],
    })
    .compileComponents();
    fixture = TestBed.createComponent(PokemonPartyComponent);
    pokemonService = TestBed.inject(PokemonService);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    
    // fixture.detectChanges();
    mockPokemon = new Pokemon();
    //mockPokemon.sprites.other['official-artwork'].front_default = 'aa';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should choose a pokemon when called', () => {
    spyOn(pokemonService, 'getOnePokemon').and.returnValue(of(mockPokemon));
    component.chooseStarter();
    
    expect(component.pokemonPics[0]).not.toEqual('');
  });

});
