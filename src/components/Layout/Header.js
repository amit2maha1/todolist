import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {

  state = {
    flag:true,
  }
  


  render() {
    return (
    <React.Fragment>
      <header style={headerStyle}>
        <h1> TodoList</h1>
        <Link style={linkStyle} to='/'>Home</Link> |
      <Link style={linkStyle} to='/about'> About</Link> 
  

      </header>
      </React.Fragment>
    )
    
  }
}

const headerStyle={
  background : '#333',
  color: '#fff',
  textAlign: 'center',
  padding:'10px'
}
const linkStyle={

color:'#fff',
}
export default Header
