import React from 'react'
import Homepage from './Homepage'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>  
        <Route path="/" exact element={ <Homepage /> } />
      </Routes>
    </div>
  )
}
export default App;
