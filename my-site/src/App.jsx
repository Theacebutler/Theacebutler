import { useState } from 'react'
import './App.css'

import Card from './components/Card'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Card name={'Word Of The Day'} url={'https://word-game-7byh.onrender.com/'} />
        <Card name={'Todo App'} url={'https://react-todo-app-u9nn.onrender.com/'} />
        <Card name={'Image Of The Day'} url={'https://nasa-image-of-te-day.onrender.com/'} />
        <Footer />
      </div>
    </>
  )
}

export default App
