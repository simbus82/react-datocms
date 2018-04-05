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
    const ArticoliList = articoli.map(({id, titolo, contenuto_introduttivo}) =>
      <li className='Articoli-item' key={id}>
        <Link to={`/articoli/${id}`}>{titolo}</Link>
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
