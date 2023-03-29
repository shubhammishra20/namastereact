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
//When we do roo.render It will just replace everything inside root with whatever I am passing in from react, So kind of react has taken control over this div(<div id='root'> </div>) now.
//Suppose If inside <div> <h1> Hello world!</h1> </div> already existed element (h1) when I am rendering 'heading' inside 'div' then what will happen?
Ans -
//It is replace with 'heading' (Whatever passing inside render methode) element whatever already existed inside 'root'--->>
<div id = 'root'> <h1 id='heading' xyz = 'xyz'>Hello world! from react</h1> </div>
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
If we have to create two or more element as the sibling inside DOM?
```js
/*<div id='root'>
  <div id='parent'>
    <div id='child'>
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
  React.createElement('div', { id: 'child' },[
      React.createElement('h1', {}, 'I am h1 tag'),
      React.createElement('h2', {}, 'I am h2 tag')
    ] //wrapped inside array (Basically we have to create array of childrens)
  )
)

console.log(parent) // This is an object and this object is react element

const root = ReactDOM.createRoot(document.getElementById('root'))

//This render methode will basically be responsible to take this object and put it up
//converted into html (heading (h1) tag )and put it up on the DOM(In the <div></div>)

root.render(parent)
```
Suppose if I have to create structure somthing like this---
```js
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
//This is why there is somthing known as JSX that exit
//React is only written using JSX

/*This is last time we are using React.createElement,we will no longer using React.createElement,but I wanted to show you to the core of React this is how we create h1 element, div or ... inside react.
When we do modern react development then we have to need understand of react core thing,
But right now,We are going to use JSX.*/
```
When we push script tag (<script src="App.js"> </script>) inside head or before <div id = "root"> </div> then come error, why?
Ans- The reason for this is that HTML loads from top to bottom. The head loads first, then the body, and then everything inside the body. If we put our JavaScript in the head section, the entire JavaScript will load before loading any of the HTML
It means that javaScript code didn't find the HTML root because javaScript code loaded before HTML code ---> (Top to Bottom)
```js
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>namasteReact</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="App.js"></script>
</head>
<body>
    <div id="root"></div>
</body>
```
