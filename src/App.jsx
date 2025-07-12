import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
