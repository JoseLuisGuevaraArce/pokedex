export type Generic = {
  name: string,
  url: string
}

export type Pokemon = {
  name: string,
  url: string
}

export type Generation = {
  code: string,
  text: string
}

export type Game = {
  flavor_text: string,
  language: Generic
  version: Generic
}

export type PokemonDetail = {
  abilities: Abilities[],
  base_experience: number,
  forms: Pokemon[],
  height: number,
  weight: number,
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  name: string,
  order: number,
  species: Generic,
  types: {
    type: {
      name: string,
      url: string
    }
  }[],
  stats: Array<Stats>
}

export type PokemonSpecies = {
  names: Language[],
  evolution_chain: EvolutionChain,
  flavor_text_entries: Game[]
}

export type Stats = {
  base_stat: number,
  stat: Stat
}

export type Stat = {
  name: string
}

export type Chain = {
  evolves_to: Chain[],
  species: {
      name: string,
      url: string
  }
}
export type EvolutionChain = {
  url: string;
}

export type Language = {
  language: Generic,
  name: string
}

export type Abilities = {
  ability: Generic;
}

export type Option = {
  label: string;
  value: string
}