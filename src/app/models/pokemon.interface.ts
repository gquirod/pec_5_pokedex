export interface PokemonResponse {
    count: number;
    next: string;
    results: Pokemon[];
}

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetail {
    id: number;
    name: string;
    sprites: Sprites;
    height: number;
    weight: number;
    types: Types[];
}

export interface Sprites {
    front_default: string;
}

export interface Types {
    slot: number;
    type: Type;
}

export interface Type {
    name: string;
}