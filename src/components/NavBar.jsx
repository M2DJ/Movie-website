import { Link } from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <Link className='nav-links' to='/'>Home</Link>
    </div>
  )
}

export default NavBar