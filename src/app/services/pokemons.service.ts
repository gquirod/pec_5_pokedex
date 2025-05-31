import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonResponse } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

    getAllPokemon(): Observable<PokemonResponse> {
      return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/?limit=150');
    }

    getPokemonById(id: string): Observable<PokemonDetail> {
      return this.http.get<PokemonDetail>('https://pokeapi.co/api/v2/pokemon/' + id);
    }
}
