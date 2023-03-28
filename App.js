//When we did create element, Its basically create an object
//how do I create nested element?
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', {}, 'I am hi tag')
  )
)

console.log(parent) // This is an object and this object is react element

const root = ReactDOM.createRoot(document.getElementById('root'))

//This render methode will basically be responsible to take this object and put it up
//converted into html (heading (h1) tag )and put it up on the DOM(In the <div></div>)

root.render(parent)
