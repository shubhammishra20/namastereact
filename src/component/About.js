import UserClass from './UserClass'
import { Component } from 'react'

class About extends Component {
  constructor () {
    super()
    console.log('Parent Constructor')
  }
  componentDidMount () {
   console.log('Parent Component Did Mount')
  }

  render () {
   console.log('Parent Render')
    return (
      <div>
        <h1>About page !!</h1>
        <UserClass name={'First (class())'} location={'bangalore'} />
      </div>
    )
  }
}

export default About
