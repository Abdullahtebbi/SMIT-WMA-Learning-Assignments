import React, { Children } from 'react'
import './button.css'


const Button = (props) => {

      const {children, style} = props;

  return (
    <button>{children}</button>
  )
}

export default Button