// //rafce
import { Component } from "react"
import Busca from "./components/Busca"
import env from 'react-dotenv'
// import { createClient } from 'pexels'
import ListaImagens from "./components/ListaImagens"
import PexelsLogo from "./components/PexelsLogo"
import pexelsClient from "./utils/pexelsClient"
class App extends Component {

  pexelsClient = null
  state = {
    photos: []
  }

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({
  //     query: termo,
  //     per_page: 5,
  //   }).then(result => this.setState({photos: result.photos}))
  // }

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {
        query: termo,
        per_page: 15,
      }
    }).then(result => this.setState({photos: result.data.photos}))
  }

  componentDidMount = () => {
    // this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  render(){
    return (
      <div
        className="grid justify-content-center">
          <div className="col-12">
            <PexelsLogo/>
          </div>
          <div className="col-12">
            <h1 className="text-center">Exibir uma lista de...</h1>
          </div>
          <div className="col-12">
            <Busca 
              dica="Buscar imagens de..."
              onBuscaRealizada={this.onBuscaRealizada}/>            
          </div>
          <div className="col-12">
            <div className="grid">
            <ListaImagens imgStyle={"col-12 md:col-6 lg:col-4 xl:col-3"} photos={this.state.photos} />
          </div>
        </div>
      </div>
    )
  }
}
  export default App