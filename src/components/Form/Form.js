import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = { title: '', stance: 'regular', obstacle: 'Flatground' }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTrick = {
      name: this.state.title,
      stance: this.state.stance,
      obstacle: this.state.obstacle,
      tutorial: 'www.learn2skate.com',
      id: Date.now()
    }
    this.clearInputs()
    this.props.addTrick(newTrick)
  }

  clearInputs = () => {
    this.setState({ title: '', stance: 'regular', obstacle: 'Flatground' })
  }

  render() {
    return (
      <form>
        <input
          onChange={this.handleChange}
          type='text'
          name='title'
          placeholder='trick title'
          value={this.state.title}
        />
        <select onChange={this.handleChange} name='stance' value={this.state.stance}>
          <option value='regular'>regular</option>
          <option value='switch'>switch</option>
        </select>
        <select onChange={this.handleChange} name='obstacle' value={this.state.obstacle}>
          <option value='Flatground'>Flatground</option>
          <option value='Ledge'>Ledge</option>
          <option value='Rail'>Rail</option>
          <option value='Stairs'>Stairs</option>
          <option value='Pool'>Pool</option>
        </select>
        <button className='send-it-button' onClick={this.handleSubmit}>
          send it
        </button>
      </form>
    )
  }
}

export default Form
