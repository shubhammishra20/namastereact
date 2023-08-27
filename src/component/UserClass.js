import React from 'react'
class UserClass extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
        info: {
            name: "Dummy",
            location: "Default"
        }
    }
   // console.log(this.props.name +'Child Constructor');
  }

 async componentDidMount() {
    //console.log(this.props.name +'Child Component Did Mount');
  // API Call

   const data  = await fetch('https://api.github.com/users/shubhammishra20')
   const json = await data.json()
   this.setState({
    info: json
   })
   //console.log(json)
}

componentDidUpdate() {
  this.aka = setInterval(() => {
        console.log('Class setInterval')
    }, 1000)
    console.log('Component Did Update');
}

componentWillUnmount() {
 // console.log('Component Will Unmount');
  clearInterval(this.aka)
}
  render () {
    //console.log(this.props.name +'Child Render');
    const { name, location, avatar_url } = this.state.info
    return (
      <div className='user-card'>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shubhaMishra89</h4>
      </div>
    )
  }
}

export default UserClass
