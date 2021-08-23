import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonGameComponent } from './modules/pokemon-game/pokemon-game.component';
import { PokemonPartyComponent } from './modules/pokemon-party/pokemon-party.component';
import { PokemonSlotMachineComponent } from './modules/pokemon-slot-machine/pokemon-slot-machine.component';
import { PokemonStoreComponent } from './modules/pokemon-store/pokemon-store.component';
import { PokemonService } from './services/pokemon-service/pokemon.service';

const routes: Routes = [
  {path: '', component: PokemonPartyComponent},
  {path: 'pokemon-slot-machine', component: PokemonSlotMachineComponent},
  {path: 'pokemon-game', component: PokemonGameComponent},
  {path: 'pokemon-store', component: PokemonStoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
