export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 3000
})


export const pokemonsApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 3000
})