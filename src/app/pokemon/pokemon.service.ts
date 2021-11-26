import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon } from '../utils/types';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(offset: number, limit: number): Observable<Array<Pokemon>> {
    const URL = `pokemon/?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(`${environment.apiUrl}/${URL}`)
      .pipe(map(item => item.results));
  }

  getPokemonImageUri(id: number): string {
    const imageId = ('00' + id).slice(-3); // para 1 => 001
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
  }
}
