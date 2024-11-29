import React from 'react'
import Navbar  from './navbar'
import User from './User'
import Footer from './footer'



const App = () => {
  return (
    <>
     <div className="h-screen flex flex-col">
       <Navbar/>
       <User/>
       <Footer/>
    </div>
    </>
  )
}

export default App