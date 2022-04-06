import { Component } from 'react'
import Form from '../Form/Form'
import TrickCard from '../TrickCard/TrickCard'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = { tricks: [], errorMsg: '' }
  }

  fetchTricksGet = () => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then((res) => {
        if (!res.ok) {
          this.setState({ errorMsg: 'Something went wrong please try again later' })
        } else {
          return res.json()
        }
      })
      .then((data) => {
        this.setState({ tricks: data })
      })
  }

  componentDidMount() {
    this.fetchTricksGet()
  }

  addTrick = (newTrick) => {
    fetch('http://localhost:3001/api/v1/tricks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        stance: newTrick.stance,
        name: newTrick.name,
        obstacle: newTrick.obstacle,
        tutorial: newTrick.tutorial
      })
    })
      .then((res) => {
        if (!res.ok) {
          this.setState({ errorMsg: 'Something went wrong please try again later' })
        } else {
          return res.json()
        }
      })
      .then(() => {
        this.fetchTricksGet()
      })
  }

  deleteTrick = (id) => {
    fetch(`http://localhost:3001/api/v1/tricks/${id}`, { method: 'DELETE' }).then(() => {
      this.fetchTricksGet()
    })
  }

  addAttempt = (id) => {}

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
            deleteTrick={this.deleteTrick}
          />
        )
      })
    }

    return (
      <div className='App'>
        <h1>Sick Trick Wish List</h1>
        {this.state.errorMsg && <h1>{this.state.errorMsg}</h1>}
        <Form addTrick={this.addTrick} />
        {this.state.tricks[0] ? (
          <section className='trick-view'>{trickCards}</section>
        ) : (
          <h1>No Tricks here --- Add one</h1>
        )}
      </div>
    )
  }
}

export default App
