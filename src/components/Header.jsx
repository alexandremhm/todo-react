import React, { Component } from 'react'
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <img data-testid="img-header" id="header-img" src="https://img.icons8.com/doodle/96/000000/checked-checkbox.png" alt="header-img"/>
        <h1 id="header-title">To do List</h1>
      </div>
    )
  }
}
