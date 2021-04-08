import { ProxyState } from "../AppState.js";
import { sandboxPokemonService } from "../Services/SandboxPokemonService.js";


//Private
function _draw() {
  let template = ""
  ProxyState.myPokemons.forEach(p => {
    template += `<li class="action hover-action" onclick="app.sandboxController.setActive('${p.id}')">${p.name}</li>`
  })
  document.getElementById('myPokemons').innerHTML = template
}

//Public
export default class SandboxController {
  constructor() {
    ProxyState.on("mypokemons", _draw);

    // NOTE Call to get all spells at start of app
    this.getAllPokemons()
  }
  async getAllPokemons() {
    try {
      await sandboxPokemonService.getAll()
    } catch (error) {
      console.error(error)
    }
  }

  async add() {
    try {
      await sandboxPokemonService.add()
    } catch (error) {
      console.error(error)
    }
  }

  async remove() {
    try {
      await sandboxPokemonService.remove()
    } catch (error) {
      console.error(error)
    }
  }

  setActive(id) {
    sandboxPokemonService.setActive(id)
  }


}
