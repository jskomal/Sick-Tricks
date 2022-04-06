import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = { title: '', stance: '', obstacle: '' }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form>
        <input type='text' name='title' placeholder='trick title' />
        <select name='stance'>
          <option value='regular'>regular</option>
          <option value='switch'>switch</option>
        </select>
        <select name='obstacle'>
          <option value='Flatground'>Flatground</option>
          <option value='Ledge'>Ledge</option>
          <option value='Rail'>Rail</option>
          <option value='Stairs'>Stairs</option>
          <option value='Pool'>Pool</option>
        </select>
        <button>send it</button>
      </form>
    )
  }
}

export default Form
