import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/utilities/layout'
import Homepage from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App