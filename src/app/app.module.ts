import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules/nav/nav.component';
import { PokemonSlotMachineComponent } from './modules/pokemon-slot-machine/pokemon-slot-machine.component';
import { PokemonGameComponent } from './modules/pokemon-game/pokemon-game.component';
import { PokemonPartyComponent } from './modules/pokemon-party/pokemon-party-page.component';
import { PokemonStoreComponent } from './modules/pokemon-store/pokemon-store.component';
import { SmallPokemonCardComponent } from './modules/pokemon-party/small-pokemon-card/small-pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PokemonSlotMachineComponent,
    PokemonGameComponent,
    PokemonPartyComponent,
    PokemonStoreComponent,
    SmallPokemonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
