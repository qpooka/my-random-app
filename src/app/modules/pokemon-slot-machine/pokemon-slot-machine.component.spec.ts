import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon-model';
import { PokemonService } from 'src/app/services/pokemon.service';

import { PokemonSlotMachineComponent } from './pokemon-slot-machine.component';

let mockPokemon: Pokemon;

class MockPokemonService{
  getOnePokemon(): any{}
}

describe('PokemonSlotMachineComponent', () => {
  let component: PokemonSlotMachineComponent;
  let fixture: ComponentFixture<PokemonSlotMachineComponent>;
  let mockPokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSlotMachineComponent ],
      providers: [{provide: PokemonService, useClass: MockPokemonService}],
    })
    .compileComponents();
    mockPokemonService = TestBed.inject(PokemonService);
    fixture = TestBed.createComponent(PokemonSlotMachineComponent);
    
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    mockPokemon = new Pokemon();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exchange money for coins when called', () => {

      component.moneyForCoins(25);

      expect(component.money).toEqual(900);
  });

  it('should not exchange money for coins when unsuccessfully called', () => {
    component.money = 0;

    component.moneyForCoins(25);

    expect(component.money).toEqual(0);
  });

  it('should not change the number of coins when unsuccessfully called', () => {
    component.coins = 0;

    component.roll();

    expect(component.coins).toEqual(0);
  });

  it('should change the number of coins when successfully called', () => {
    component.coins = 2;
    spyOn(mockPokemonService, 'getOnePokemon').and.returnValue(of(mockPokemon));
    
    component.roll();

    expect(component.coins).toEqual(0);
  });

  it('should return a random number according to preset selection', () => {
    const res: number = component.randomPokemonSelection();

    expect(res).toBeGreaterThan(244);
  });

});
