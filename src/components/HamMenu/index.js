import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import LogoM from '../../assets/images/logo-m.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const HamMenu = () => {
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass('menu visible')
    } else {
      setMenuClass('menu hidden')
    }

    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div className="hamburger-nav-bar">
      <Link className="logo" to="/">
        <img src={LogoM} alt="logo" />
      </Link>
      <nav>
        <span onClick={updateMenu}>
          <FontAwesomeIcon icon={faBars} color="#4d4d4d" />
        </span>
      </nav>
      <div className={menu_class}>
        <ul>
          <li>
            <NavLink exact="true" activeclassname="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" activeclassname="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" activeclassname="active" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" activeclassname="active" to="/projects">
              Projects
            </NavLink>
          </li>
        </ul>
        <div className="hamburger-nav-bar__bottom">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/michele-libralato-7ab470115/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MLibralato91"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default HamMenu
