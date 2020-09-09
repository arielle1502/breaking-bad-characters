import React from 'react';
import spinner from '../../img/spinner.gif'

const Spinner = () => {
  return (
    <img src={spinner} style={myStyle} alt="loading"/>
  )
}

export default Spinner

const myStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block'

}
