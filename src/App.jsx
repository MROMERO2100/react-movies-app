import { useState } from 'react'
import { MyRoutes } from "./routers/routes";
import './App.css'

function App() {
  return (
    <div>
      <header>
        <h1 className='title'>🎬 Movies APP</h1>
      </header>
      <MyRoutes/>
    </div>
  )
}

export default App
