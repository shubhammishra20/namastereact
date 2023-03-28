# namastereact
It is my first react project using react CDN link.
# React using CDN :
```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js">
</script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>
```
Why are there two files?
First file is the react.development.js. This is the core file of react or core react framework algorithm which is written inside it.

The second one is react dom .This is the react library which is useful for dom operations or this is react dom which we need to modify the dom.
That’s why we have injected two file

React doesn't work on only browser.react also work on mobile phone (React native)
There are different type of react different type of places where  react is use
So there are different functions, methods which are being used inside react native or browsers different places That’s why there are two file

The main file react.development.js is the core react thing and the other one is kind of like bridge between these react and browsers, So its like react dom which is like a bridge to connect to the dom

Now, we as a developers have to use this super power and build these large scale application
```js
<body>
<div id="root"></div>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script>
       //it is just creating an h1 element with "hello world..." inside react, That is a core react thing
       //This h1 inside created react, So we will use react
 
    const heading = React.createElement("h1", {}, "Hello world from react")
    
       
       //but now When we have to put this h1 into a dom onto are browsers
       // So that we will use the RectDom libraries createRoot method
       //this will create root first of all
       // the root is place where all the react code will run
      
    const root = ReactDOM.createRoot(document.getElementById("root"))
     
      //Everything that we will render, We will render inside this root
    
   root.render(heading)
</script>
</body>
```
Created App file for javaScript code 
```js
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
```
how do I create nested element?
```js
//This type of structure
/* <div id='root'>
  <div id='parent'>
    <div id='child'>
      <h1>I am hi tag</h1>
    </div>
  </div>
</div> */
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
```
