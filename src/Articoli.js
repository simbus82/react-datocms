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
    console.log(articoli)
    const ArticoliList = articoli.map(({articolo_id, titolo, contenuto_introduttivo}) =>
      <li className='Articoli-item' key={articolo_id}>
        <Link to={`/articoli/${articolo_id}`}>{titolo}</Link>
        <p>{contenuto_introduttivo}</p>
      </li>
    )

    return (
      <ul className="Articoli">
        {ArticoliList}
      </ul>
    );
  }
}

export default Articoli;
