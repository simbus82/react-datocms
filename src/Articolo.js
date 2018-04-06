import React, { Component } from 'react'
import datocmsClient from './DatoCmsClient'

class Articolo extends Component {
  state = {
    articolo: {}
  }

  componentWillMount () {
    datocmsClient.getArticolo(this.props.params.articoloId)
      .then((articolo) => this.setState({ articolo }))
  }

  render () {
    const { titolo, contenutoIntroduttivo, contenutoPrincipale } = this.state.articolo

    return (
      <div className='Articolo'>
        <h1>{titolo}</h1>
        <h2>Questo è il contenuto introduttivo</h2>
        <p>{contenutoIntroduttivo}</p>
        <br/>
        <h2>Questo è il contenuto principale</h2>
        <p>{contenutoPrincipale}</p>
        <br/>
      </div>
    )
  }
}

export default Articolo
