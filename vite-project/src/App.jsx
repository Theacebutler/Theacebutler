import { useState } from 'react'
import './App.css'
import MainPage from './copmonents/MainPage'
import Footer from './copmonents/Footer'

function App() {

  return (
    <>
      <div className='min-h-screen bg-gradient-to-t from-gray-900 to-gray-950'>
        <div className="min-h-screen m-auto shadow-2xl md:w-2/3">
          <MainPage />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
