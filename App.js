//When we did create element, Its basically create an object
const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'xyz' },
  'Hello world! from react'
)
console.log(heading) // This is an object

const root = ReactDOM.createRoot(document.getElementById('root'))

//This render methode will basically be responsible to take this object and put it up
//converted into heading (h1) tag and put it up on the DOM(In the <div></div>)

root.render(heading)
