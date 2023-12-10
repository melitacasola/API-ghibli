import './index.css';
import logo from '../../assets/totoro.png'
const NavBar = () => {
    return (
        <div className='Navbar'>
            <div className='Navbar__title'>
                <h5>STUDIO GHIBLI FILMS</h5>
            </div>
            <picture className='Navbar__image'> <img src={logo} /></picture>
        </div>
    )

}

export { NavBar }

