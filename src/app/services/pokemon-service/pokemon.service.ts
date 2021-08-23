import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  //method for particular pokemon
  getOnePokemon(id: number): Observable<any>{
    return this.httpClient.get<any>(`${environment.pokemonUrl}/pokemon/${id}`);
  }

  //method for random pokemon should i put th random logic else where?

  //thinking of a way to limit pokemon pool range to choose from

  getOneItem(id: number): Observable<any>{
    return this.httpClient.get<any>(`${environment.pokemonUrl}/item/${id}`);
  }
}
