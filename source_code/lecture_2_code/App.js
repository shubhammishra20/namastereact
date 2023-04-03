import React from 'react' //it meant react come from in node_modules.
import ReactDOM  from 'react-dom/client'

const parent = React.createElement(
  'div',
  { id: 'parent' },
  [
    React.createElement('div', { id: 'child' },[
      React.createElement('h1', {}, 'I am h1 Shubham'),
      React.createElement('h2', {}, 'I am h2 tag')
    ]),
    React.createElement('div', { id: 'child2' },[
      React.createElement('h1', {}, 'I am h1 tag'),
      React.createElement('h2', {}, 'I am h2 tag')
    ])
  ]) //wrapped inside array (Basically we have to create array of childrens)
  
//If we have even more complex structure, think about the code it will become later on its very complicated 
console.log(parent) // This is an object and this object is react element

const root = ReactDOM.createRoot(document.getElementById('root'))

//This render methode will basically be responsible to take this object and put it up
//converted into html (heading (h1) tag )and put it up on the DOM(In the <div></div>)

root.render(parent)
