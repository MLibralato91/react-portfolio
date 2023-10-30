import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (

  <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt='logo'/>
        <img className='sub-logo' src={LogoSubtitle} alt='slobodan'/>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color='#4d4d4d' activeclassname="active" to="/"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faUser} color='#4d4d4d' activeclassname="active" className='about-link' to="/about"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4d' activeclassname="active" className='about-contact' to="/contact" />
        </NavLink>
      </nav>
  </div>  
  ) 

  


export default Sidebar