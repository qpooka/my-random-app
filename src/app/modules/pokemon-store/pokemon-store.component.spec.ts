import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStoreComponent } from './pokemon-store.component';

describe('PokemonStoreComponent', () => {
  let component: PokemonStoreComponent;
  let fixture: ComponentFixture<PokemonStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
