import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import LogoM from '../../assets/images/logo-m.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const DropMenu = () => {
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

  const closeMenu = () => {
    setMenuClass('menu hidden')
    setIsMenuClicked(false)
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
            <NavLink
              exact="true"
              activeclassname="active"
              to="/"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              to="/projects"
              onClick={closeMenu}
            >
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
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MLibralato91"
                onClick={closeMenu}
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
export default DropMenu
