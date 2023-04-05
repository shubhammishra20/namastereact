# Let's create script inside package.json file for starting our project
- ```Dev mode``` "start" : "parcel index.html"
- ```production mode``` "build" : "parcel build index.html"</br>
How do we run these npm script?
- ```Dev mode``` npm start
- ```production mode``` npm run build
# jsx
Developer life is not easy using core of react(```React.createElement('h1',{id: "heading"},"namaste react using core of react")```) That's why facebook develpoer realised this and created JSX. </br>
That's why now, We will never be using ```React.createElement```(core of react) ever again.
jsx is not react, jsx is the convention where we kind of merge the HTML and JS together.</br>
How can I create 'h1' tag using jsx? </br>
```const jsxHeading = <h1>namaste react using jsx</h1>``` //jsx is not HTML inside javaScript But jsx is HTML-Like or XML-Like syntax.</br>
JSX is not a valid pure javaScript because JS engine not able to read this code --->> ```<h1>namaste react using jsx</h1>```</br>
If javaScript engine not able to read this code then how is this code working? Why? </br>
Beacuse ```parcel``` (using ```Babel```, parcel is already installed that package, parcel is working like managers for the Babel) is doing the job behind the scenes even before whole code goes to the browser, It is transpiled before it goes to the JS engine and then JS is receives the code that browser can understand.</br>
```bable``` is transpiling our code (converting code) that react will understand </br>
bable is not created by facebook,  bable basically job to convert or transpile JSX to React code</br>
```JSX(bable transpiles it to) --->> React.CreateElement() --->> js object ------>> render(object)--->> then render convert in to HTML Element and pass inside the DOM element (inside div) Whatever I have given Id(root).``` and this element will show on the UI.</br>
bable have a lot of job, bable is transpiler, bable is js compiler,and suppose some older version of browser, they do not understand new version of code (for Ex- ES6) then bable transpile that ES6 code to older version that's code older browser undestand.</br>
If we have to give attributes to jsx then we have to use camel case.Suppose If we have to write in this -->> (```<h1>React using in JSX namaste</h1>```) multiple line inside jsx then we have to wrap our code inside round bracket () because bable needs to understand Where is JSX starting Where is JSX ending.
# React components
Everything is component in React.</br>
If we will create component then,A Button is a component, A footer is a component, A header is a component, A card is a component, A heading is a component, A title is a component, A input is a component and A searchbar is a component ---etc it means Everything is component.
- Two ways creating react component
      - Class based component
      - Functional component
                           So now a functional component  is a normal JS function which returns piece of JSX code or react element.
```js
// React Functional components --(1st letter is capital of component)
const HeadingComponent = () => <h1>React js using Functional component</h1>
  // H is capital letter
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( <HeadingComponent/> )
```
- if I put component inside another component it's called ```component composition```
- If I want to pass javaScript code inside component or (inside JSX), We will use ```{}``` and all code write the inside.
- Suppose some data come from api ==>> const data = api.getData()
If this API send some ```malicious data``` , </br>
What kind of malicious data? means if some attacker send some code and Which will executed inside component like this
```js
const data = api.getData()
const HeadingComponent = () => {
  return (
    <div id = "container">
      {data}
      <h1 id='haeding'>React js using Functional component g</h1>
    </div>
  )
}
```
Suppose attcaker get an access and to run some javaScript in our browser --> This type of attack is known as cross side scripting. But ``` JSX is So amazing that it takes care of these injection attack```. Suppose even if this API passes some malicious data in our code ?then JSX will escape it.</br>
Whenever any data is wrapped inside ```{ }``` like this ```{data}```,</br>
The browser was blindly run it or JSX was blindly run it? ```No```, It will sanitize our data whatever is coming from the API and then pass in.

# We can call Component inside another component using by 3 methode
```js
const Title = () => (
  <h1 className='heading'>
    React using in JSX namaste G
    </h1>
    )
// React Functional components --(1st letter is capital of component)
//Suppose data come from API
//const data = api.getData()
const HeadingComponent = () => {
  //In this Function We used Title component is a Three way ==> all are same
  //We can use any methode whatever we wand all are valid
  // {Title()} --> It is valid because In JSX we are write all things inside { } that's why I can write component also and call it. 
  // because end of the day everything will be javaScript and function also.
  return (
    <div id = "container">
      {Title()}
      <Title/>
      <Title></Title>
      <h1 id='haeding'>React js using Functional component g</h1>
    </div>
  )
}
```
# Supppse if we have to multiple 'div'
```js
// Supppse if we have to multiple 'div' inside component then,
// We can use <React.Fragment> we can pass multiple div </React.Fragment>
// And We can Use another simplest way using empty triangle bracket <> div </>

const HeadingComponent = () => (
  <>
    <div id='container'>
      <Title />
      <h1 id='haeding'>React js using Functional component g</h1>
    </div>
    <div id='container1'>
      <h2>I am adding more than one div inside component</h2>
    </div>
  </>
)
```
# Can I have 'React.Fragment'inside 'React.Fragment>'?
# Can I have muiltiple root.render() inside App ?