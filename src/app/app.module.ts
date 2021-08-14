import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules/nav/nav.component';
import { PokemonSlotMachineComponent } from './modules/pokemon-slot-machine/pokemon-slot-machine.component';
import { PokemonGameComponent } from './modules/pokemon-game/pokemon-game.component';
import { PokemonPartyComponent } from './modules/pokemon-party/pokemon-party.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PokemonSlotMachineComponent,
    PokemonGameComponent,
    PokemonPartyComponent
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
