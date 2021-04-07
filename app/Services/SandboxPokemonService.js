import { ProxyState } from "../AppState.js"
import Pokemons from "../Models/Pokemons.js"
import { sandboxApi } from "./AxiosService.js"

class SandboxSpellService {
  async remove() {
    // NOTE by convention all deletes require the id of the thing to delete
    await sandboxApi.delete(ProxyState.activePokemons.id)

    ProxyState.myPokemonss = ProxyState.myPokemons.filter(p => p.id !== ProxyState.activePokemons.id)

    ProxyState.activePokemons= null
  }
  setActive(id) {
    let pokemons = ProxyState.myPokemons.find(p => p.id === id)
    ProxyState.activePokemons = pokemons
  }
  async getAll() {
    let res = await sandboxApi.get('')
    ProxyState.myPokemons = res.data.map(p => new Pokemons(p))
  }
  async add() {
    // POSTS and PUTs require a body to be sent and therefore the first argument must be provided
    let res = await sandboxApi.post('', ProxyState.activePokemons)
    ProxyState.myPokemons = [...ProxyState.myPokemons, new Pokemons(res.data)]
  }

}

export const sandboxSpellService = new SandboxSpellService()