import { ProxyState } from "../AppState.js";
import { pokemonsApiService } from "../Services/PokemonsApiService.js";


//Private
function _draw() {
  let template = ""
  ProxyState.apiPokemon.forEach(p => {
    template += `<li class="action hover-action" onclick="app.pokemonsApiController.getPokemons('${p.index}')">${p.name}</li>`
  })
  document.getElementById('pokemons').innerHTML = template
}

function _drawActive() {
  document.getElementById('active-spell').innerHTML = ProxyState.activeSpell ? ProxyState.activeSpell.Template : "<p> no active spell</p>"
}

//Public
export default class PokemonsApiController {
  constructor() {
    ProxyState.on("pokemon", _draw);
    ProxyState.on("activePokemon", _drawActive);


    // NOTE Call to get all spells at start of app
    this.getAllApi()
  }

  async getAllApi() {
    try {
      await pokemonsApiService.getAllPokemons()
    } catch (error) {
      console.error(error)
    }
  }

  async getPokemons(id) {
    try {
      await pokemonsApiService.getPokemons(id)
    } catch (error) {
      console.error(error)
    }
  }


}