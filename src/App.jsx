import './css/App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='navbar'>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
