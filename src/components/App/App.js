import { Component } from 'react'
import TrickCard from '../TrickCard/TrickCard'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = { tricks: null, errorMsg: '' }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
      .then((res) => {
        if (!res.ok) {
          this.setState({ errorMsg: 'Something went wrong please try again later' })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        this.setState({ tricks: data }, () => {
          console.log(this.state.tricks)
        })
      })
  }

  render() {
    let trickCards

    if (this.state.tricks) {
      trickCards = this.state.tricks.map((trick) => {
        return (
          <TrickCard
            stance={trick.stance}
            name={trick.name}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            id={trick.id}
            key={trick.id}
          />
        )
      })
    }

    return (
      <div className='App'>
        <h1>Sick Trick Wish List</h1>
        {this.state.tricks && <section className='trick-view'>{trickCards}</section>}
      </div>
    )
  }
}

export default App
