import React, { Component } from 'react'
import { Link} from 'react-router'
import datocmsClient from './DatoCmsClient'

class Articoli extends Component {
  
  state = {
    articoli: []
  }

  componentWillMount () {
    datocmsClient.getArticoli()
      .then((articoli) => this.setState({ articoli }))
  }

  render() {
    
    const {articoli} = this.state
    console.log('Articoli.js ->', articoli)
    const ArticoliList = articoli.map(({articoloId, titolo, contenutoIntroduttivo}) =>
      <li className='Articoli-item' key={articoloId}>
        <Link to={`/articoli/${articoloId}`}>{titolo}</Link>
        <p>{contenutoIntroduttivo}</p>
      </li>
    )
    console.log('Articoli.js ->', ArticoliList)
    return (
      <ul className="Articoli">
        {ArticoliList}
      </ul>
    );

  }

}

export default Articoli;
