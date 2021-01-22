import React, {useState,useEffect} from 'react'
import './Button.css';


function Button(props) {
	const {variant = 'primary',children, ...rest} = props
  return (
    <div className="App">
        <button className={`button ${variant}`} {...rest}>{children}</button>
    </div>
  );
}

export default Button;
