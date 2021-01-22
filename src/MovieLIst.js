import logo from './logo.svg';
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
import context from './context';


class MovieList extends Component {
  static contextType = context;
  render(){
    return (
      <div>
      {this.context.content.map((m)=>
        <div style={{marginLeft:'50rem'}}>
        <h3>{m.name}</h3>
        <h3>{m.price}</h3>
        </div>
      )}
      </div>
    );
  }
}

export default MovieList;
