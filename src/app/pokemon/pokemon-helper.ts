import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Pokemon } from "../utils/types";
import { pokemonColorMap } from "./pokemonColorHash";

export function getPokemonIdFromUrl(url: string): string {
  const parseUrl = url.split('/'),
  id = parseUrl[parseUrl.length - 2];
  return id;
}

export function getPokemonColor(pokemon: Pokemon): string {
  return pokemonColorMap[getPokemonIdFromUrl(pokemon.url)];
}

export function getRightTextColor(pokemon?: Pokemon): string {
  if (!pokemon) {
    return '';
  }
  const pokemonColor = getPokemonColor(pokemon);
  
  switch (pokemonColor) {
    case '#fbf6f6':
    case '#f0f060e6':
      return 'black';
    default:
      return 'white';
  }
}

export function getPokemonImageUri(id: string | number): string {
  const imageId = ('00' + id).slice(-3); // para 1 => 001
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;
}

export function forbiddenNameValidator(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regex.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}}: null;
  }
}