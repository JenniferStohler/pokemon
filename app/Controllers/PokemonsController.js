import { ProxyState } from "../AppState.js";
import { pokemonsApiService } from "../Services/PokemonsApiService.js";


//Private
function _draw() {
  let template = ""
  ProxyState.apiPokemons.forEach(p => {
    template += `<li class="action hover-action" onclick="app.pokemonsApiController.getPokemons('${p.id}')">${p.name}</li>`
  })
  document.getElementById('pokemons').innerHTML = template
}

function _drawActive() {
  document.getElementById('activePokemons').innerHTML = ProxyState.activepokemons ? ProxyState.activePokemons.Template : "<p> no active pokemon</p>"
}

//Public
export default class PokemonsApiController {
  constructor() {
    ProxyState.on("apiPokemons", _draw);
    ProxyState.on("activePokemons", _drawActive);


    // NOTE Call to get all spells at start of app
    this.getAllApi()
  }

  async getAllApi() {
    try {
      await pokemonsApiService.getAllPokemons()
    } catch (error) {
      console.error()
    }
  }

  async getPokemons(id) {
    try {
      await pokemonsApiService.getPokemons(id)
    } catch (error) {
      console.error()
    }
  }


}