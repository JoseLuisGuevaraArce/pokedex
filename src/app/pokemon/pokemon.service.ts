import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Chain, Generation, Pokemon, PokemonDetail, PokemonSpecies } from '../utils/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id: string) {
    const URL = `pokemon/${id}`;
    return this.http.get(`${environment.apiUrl}/${URL}`) as Observable<PokemonDetail>;
  }
  getPokemonSpecies(id: string | number): Observable<PokemonSpecies> {
    const URL = `pokemon-species/${id}`;
    return this.http.get<PokemonSpecies>(`${environment.apiUrl}/${URL}`);
  }

  getPokemonList(offset: number = 0, limit: number = 25): Observable<Array<Pokemon>> {
    const URL = `pokemon/?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(`${environment.apiUrl}/${URL}`)
      .pipe(map(item => item.results));
  }

  getGenerationList(): Observable<Array<Generation>> {
    return this.http.get<any>(`${environment.apiUrl}/generation`)
      .pipe(map(item => item.results));
  }

  getGeneration(generation: string): Observable<Array<Pokemon>> {
    return this.http.get<any>(`${environment.apiUrl}/generation/${generation}`)
      .pipe(map(item => item.pokemon_species));
  }

  getPokemonEvolution(id: string) {
    return this.http.get<any>(`${environment.apiUrl}/evolution-chain/${id}`)
      .pipe(map(item => item.chain)) as Observable<Chain>;
  }
};