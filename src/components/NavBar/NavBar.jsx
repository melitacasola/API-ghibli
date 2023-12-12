import './index.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/totoro.png'
const NavBar = () => {
    return (
        <div className='Navbar'>
            <div className='Navbar__title'>
                <h5>STUDIO GHIBLI FILMS</h5>
            </div>
            <Link to="/">
                <picture className='Navbar__image'> <img src={logo} /></picture>
            </Link>
        </div>
    )

}

export { NavBar }

