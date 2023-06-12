import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full max-h-full bg-[#f8f9fd]'>
    <header>
      <NavBar/>
    </header>
    

    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default Home