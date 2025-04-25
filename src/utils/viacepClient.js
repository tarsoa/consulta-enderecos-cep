import axios from 'axios';  

const viacepClient = axios.create({
  baseURL: 'https://viacep.com.br/ws/',     
})

export default viacepClient