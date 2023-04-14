import React from 'react' //it meant react come from in node_modules.
import ReactDOM from 'react-dom/client'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)
