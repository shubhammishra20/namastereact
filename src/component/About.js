import UserClass from './UserClass'
import UserContext from '../utils/UserContext'
console.log(UserContext)
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
        <div>
        <UserContext.Consumer>
        {({logedInUser}) => <h1>{logedInUser}</h1> }
        </UserContext.Consumer>
        </div>
        <UserClass name={'First (class())'} location={'bangalore'} />
      </div>
    )
  }
}

export default About
