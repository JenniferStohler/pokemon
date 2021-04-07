export default class Pokemons {
    constructor({ id, species, name, type, weight, abilities, sprite}) {
      this.id = id
      this.name = name
      // NOTE if you have to drill down or use a method on one of the statements, make it second
      this.species = species
      this.type = type 
      this.weight = weight
      this.abilities= abilities || abilities.join('\n\n')
      this.sprite = sprite
    }
  
    get Template() {
      return `
      <div class="card ml-3 mt-3 p-3" style="height: 20rem; width: 25rem">
        <h1>${this.name}</h1>
        <hr>
        <h4>SPECIES: ${this.species} | TYPE: ${this.type} | WEIGHT: ${this.weight}</h4>
        <h4>ABILITIES: ${this.abilities.join(', ')}</h4>
        <p>${this.sprite}</p>
      </div>
      ${this.Button}
      `
    }
  
    get Button() {
      if (this.id) {
        return '<button class="btn btn-success" onclick="app.sandboxController.add>Catch</button>'
      }
    }
  }