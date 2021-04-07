  
import { ProxyState } from "../AppState.js"
import Pokemons from "../Models/Pokemons.js"
import { pokemonsApi } from "./AxiosService.js"

class PokemonsApiService {
  async getPokemons(id) {
    let res = await pokemonsApi.get(id)
    ProxyState.activePokemons = new Pokemons(res.data)
  }
  async getAllPokemons() {
    let res = await pokemonsApi.get()
    ProxyState.apiPokemons = res.data.results
  }


}

export const pokemonsApiService = new PokemonsApiService()