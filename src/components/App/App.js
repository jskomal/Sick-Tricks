import { Component } from 'react'
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
    return (
      <div className='App'>
        <h1>Sick Trick Wish List</h1>
      </div>
    )
  }
}

export default App
