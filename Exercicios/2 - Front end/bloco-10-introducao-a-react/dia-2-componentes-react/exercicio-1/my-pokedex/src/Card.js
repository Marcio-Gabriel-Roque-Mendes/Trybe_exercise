import React, { Component } from "react";
import PropTypes from 'prop-types'

class Card extends Component{
  render(){
    
    const {cardInfo} = this.props
    const {value, measurementUnit} = cardInfo.averageWeight
    const {name, type, image} = cardInfo

    return(

      <article>
        <img src={image} />
        <h3>{name}</h3>
        <h3>{type}</h3>
        <h2>{value}{measurementUnit}</h2>
      </article>

    )
  }
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string
}

export default Card;

// nome, tipo, peso e unidade de medida usada, imagem