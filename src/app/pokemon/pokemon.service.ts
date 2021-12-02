import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Generation, Pokemon, PokemonDetail } from '../utils/types';
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

  getPokemonList(offset: number, limit: number): Observable<Array<Pokemon>> {
    const URL = `pokemon/?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(`${environment.apiUrl}/${URL}`)
      .pipe(map(item => item.results));
  }

  getPokemonImageUri(id: string): string {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }

  getGenerationList(): Observable<Array<Generation>> {
    return this.http.get<any>(`${environment.apiUrl}/generation`)
      .pipe(map(item => item.results));
  }

  getGeneration(generation: number): Observable<Array<Pokemon>> {
    return this.http.get<any>(`${environment.apiUrl}/generation/${generation}`)
      .pipe(map(item => item.pokemon_species));
  }
}
