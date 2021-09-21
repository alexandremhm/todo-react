import React, { Component } from 'react'
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1 id="header-title">To do List</h1>
      </div>
    )
  }
}
