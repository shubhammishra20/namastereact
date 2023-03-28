//When we did create element, Its basically create an object
//how do I create nested element?
//If we have to create two or more element as the sibling inside DOM?
//Suppse if I have to create structure somthing like this---
/*<div id='root'>
  <div id='parent'>
    <div id='child'>
      <h1>I am h1 tag</h1>
      <h2>I am h2 tag</h2>  // If we have to make one more sibling over here
    </div>
   <div id='child2'>
      <h1>I am h1 tag</h1>
      <h2>I am h2 tag</h2>  // If we have to make one more sibling over here
    </div>
  </div>
</div>*/

//We can either pass one children to it or if we have to give more than one children
//We have to convert this to in array, This can be either single child or an array of different children
//So basically if I have to give two tag h1 and h2, then i will pass both tag inside array or wrapped inside array
const parent = React.createElement(
  'div',
  { id: 'parent' },
  [
    React.createElement('div', { id: 'child' },[
      React.createElement('h1', {}, 'I am h1 tag'),
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
