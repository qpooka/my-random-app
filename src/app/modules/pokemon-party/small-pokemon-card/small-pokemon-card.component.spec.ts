import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPokemonCardComponent } from './small-pokemon-card.component';

describe('SmallPokemonCardComponent', () => {
  let component: SmallPokemonCardComponent;
  let fixture: ComponentFixture<SmallPokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallPokemonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallPokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
