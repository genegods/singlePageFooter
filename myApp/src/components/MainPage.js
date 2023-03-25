import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import Privacy from '../pages/Privacy'
import Services from '../pages/Services'
import Footer from './Footer'

const MainPage = () => {
  return (
   
  <React.Fragment>
  <main>
    <div className='md:w-6/12 md:mx-auto'>
        <Home/>
        <About/>
        <Services/>
        <Privacy/>
      <Footer/>
    </div>
  </main>
</React.Fragment>
  )
}

export default MainPage