import React from 'react' //it meant react come from in node_modules.
import ReactDOM from 'react-dom/client'

//JSX(transpiled before it reaches the js engine) using parcel--->then parcel uses bable

//JSX-->> React.createElement-->>JS object-->> render(object)--it is convert in HTML Element and push inside the DOM Element(<div id="root"></div>)
const elem = <span>Thais is react</span>

// const Parent = (
// <h1 className='heading'>
//   {elem}
//   React using in JSX namaste hj sgjsg sahjsa
//   </h1>
//   )

const Title = () => (
  <h1 className='heading'>
    {elem}
    React using in JSX namaste using triangle
  </h1>
)
// React Functional components --(1st letter is capital of component)
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

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent />)
