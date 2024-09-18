import { apiCommand } from './apiConfig'
import { Pokemon } from '../models/pokemon';

const getPokemon = (id: string) => {
    return apiCommand<Pokemon>('GET')("/api", `/${id}`);
}

export { getPokemon }