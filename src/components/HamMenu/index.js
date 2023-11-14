import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import LogoM from '../../assets/images/logo-m.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
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
      <div className={menu_class}></div>
    </div>
  )
}
export default HamMenu
