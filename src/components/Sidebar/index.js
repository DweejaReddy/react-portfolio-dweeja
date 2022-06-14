import './index.scss'
import LogoS from '../../assets/images/Logo5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className="nav-bar d-none d-lg-block">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="experience-link" to="/experience">
          <FontAwesomeIcon icon={faLaptop} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/dweeja-reddy-devi-b12508204/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{color:"#f68f4a",fontSize:"20px"}}/>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DweejaReddy"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{color:"#f68f4a",fontSize:"20px"}} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dwee_512/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{color:"#f68f4a",fontSize:"20px"}}/>
          </a>
        </li>
        
      </ul>
    </div>


    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-block d-lg-none">
  <div className="container-fluid">
    <img className="navbar-brand" href="/" src={LogoS} style={{width:"60px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-auto"style={{fontSize:"15px"}}>
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <hr style={{color:"#f68f4a"}}/>
        <li className="nav-item mx-auto" style={{fontSize:"15px"}}>
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <hr style={{color:"#f68f4a"}}/>
        <li className="nav-item mx-auto"style={{fontSize:"15px"}}>
          <Link className="nav-link" to='/contact'>Contact</Link>
        </li>
        <hr style={{color:"#f68f4a"}}/>
        <li className="nav-item mx-auto"style={{fontSize:"15px"}}>
          <Link className="nav-link" to='/experience'>Experience</Link>
        </li>
        <hr style={{color:"#f68f4a"}}/>
        <div className='d-flex justify-content-evenly'>
        <li>
          <a
            href="https://www.linkedin.com/in/dweeja-reddy-devi-b12508204/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{color:"#f68f4a",fontSize:"20px"}} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DweejaReddy"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{color:"#f68f4a",fontSize:"20px"}} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dwee_512/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{color:"#f68f4a",fontSize:"20px"}} />
          </a>
        </li>
        </div>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Sidebar
