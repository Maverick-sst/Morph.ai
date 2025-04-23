import React from 'react'
import LandingPage from './Pages/LandingPage'
import Onboarding from './Pages/Onboarding'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import CraftingScreen from './components/OnBoarding/CraftingScreen'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/onboarding' element={<Onboarding/>}/>
          <Route path='/crafting' element={<CraftingScreen/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App