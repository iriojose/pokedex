import { apiCommand } from './apiConfig'
import { Pokemon } from '../models/pokemon';

const getPokemon = (id: string) => {
    return apiCommand<Pokemon>('GET')("https://poke-api-p5qg.vercel.app/api/pokemon", `/${id}`);
}

export { getPokemon }