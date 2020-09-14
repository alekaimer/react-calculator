import React, { Component } from 'react'
import './Button.css'

export default props =>
  <button 
  
  //defines classes
  className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
  `}

  // action of button
  onClick={_ => props.click && props.click(props.label)}
  >
    {props.label}
  </button>