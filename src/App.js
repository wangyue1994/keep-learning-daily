import React, { Component } from 'react'
import './App.css'
import FlexPractice from './components/flexPractice'

class App extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date().toString(),
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  }

  render() {
    return (
      <div className="App">
        <FlexPractice/>
      </div>
    )
  }
}

export default App;
