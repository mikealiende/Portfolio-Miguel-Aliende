import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    M<span className="accent">.</span>Aliende
                </Link>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
