import './css/App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Favorites from './pages/Favorites'
import { MovieProvider } from './context/MovieContext'
import MovieReview from './components/MovieReview'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/movie/review/:id/:title' element={<MovieReview />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
